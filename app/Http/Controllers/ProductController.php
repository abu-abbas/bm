<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Support\Str;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\ProductRepositoryInterface;

class ProductController extends Controller
{
  protected $product;
  protected $category;

  public function __construct(ProductRepositoryInterface $product, CategoryRepositoryInterface $category)
  {
    $this->product = $product;
    $this->category = $category;
  }

  public function list(Request $request)
  {
    [$response, $error] = $this->product->list($request);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if (!$response) {
      return response()->json([
        'status' => 'error',
        'message' => 'Product tidak ditemukan'
      ], JsonResponse::HTTP_NOT_FOUND);
    }

    return $request->fetch_first
      ? response()->json(['status' => 'success', 'data' => new ProductResource($response)])
      : ProductResource::collection($response)->additional(['status' => 'success']);
  }

  public function store(ProductRequest $request)
  {
    $request->validated();

    $categoryId = [];

    foreach ($request->category as $category) {
      $isNewCategory = $this->category->findBySlug(Str::slug($category));

      if ($isNewCategory == null) {
        $categoryData = [
          'name' => $category,
          'created_by' => auth()->user()->username,
          'url' => Str::slug($category),
        ];

        $category = $this->category->make($categoryData);
        $inserNewCategory = $this->category->saveOrEdit($category);
        $categoryId[$inserNewCategory[0]['id']] = ['type_of_pivot' => 'category_product'];
      } else {
        $getCategoryId = $this->category->findBySlug(Str::slug($category));
        $categoryId[$getCategoryId->id] = ['type_of_pivot' => 'category_product'];
      }
    }
    $product = $this->product->make([
      'tenant_id' => $request->tenant['value'],
      'name' => $request->name,
      'description' => $request->description,
      'minimum_qty' => $request->min_qty,
      'minimum_unit' => $request->min_unit,
      'tkdn_value' => $request->tkdn,
      'price' => $request->price,
      'condition' => $request->condition['value'],
      'created_by' => auth()->user()->username,
      'url' => Str::slug($request->name),
    ]);

    [$response, $error] = $this->product->saveOrEdit($product);

    $productModel = $this->product->findBySlug(Str::slug($request->name));
    
    $productModel->category()->sync($categoryId);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    // upload pict
    foreach ($request->file('pict') as $file) {
      [$response, $error] = $this->product->uploadFile($response, $file);
      if (!is_null($error)) {
        return response()->json([
          'status' => 'error',
          'message' => $error
        ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
      }
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan',
      'data' => new ProductResource($response)
    ]);
  }

  public function drop(ProductRequest $request)
  {
    $request->validated();

    $product = $this->product->findBySlug($request->slug);

    if (!$product) {
      return response()->json([
        'status' => 'error',
        'message' => 'Barang tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    if (!$product->category()) {
      return response()->json([
        'status' => 'error',
        'message' => 'Kategori tidak ditemukan untuk produk ini.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $product->category()->detach();

    [, $error] = $this->product->drop($product);
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil dihapus',
    ]);
  }

  public function edit(ProductRequest $request)
  {
    $request->validated();

    $found = $this->product->findBySlug($request->slug);
    if (!$found) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $product = $this->product->fill($found, [
      'name' => $request->name,
      'description' => $request->description,
      'minimum_qty' => $request->min_qty,
      'minimum_unit' => $request->min_unit,
      'tkdn_value' => $request->tkdn,
      'price' => $request->price,
    ]);

    [$response, $error] = $this->product->saveOrEdit($product, 'edit');
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    $message = $request->_method == 'put' ? 'diubah' : 'ditambahkan';
    return response()->json([
      'status' => 'success',
      'message' => "Data berhasil {$message}",
      'data' => new ProductResource($response)
    ]);
  }

  public function qrcode($slug)
  {
    $product = $this->product->findBySlug($slug);

    // set document information
    PDF::SetCreator('Bussiness Matching Apps');
    PDF::SetAuthor('Bussiness Matching Apps');
    PDF::SetTitle($product->name);
    PDF::SetSubject($slug);
    PDF::SetKeywords('bussiness matching, jakarta');

    // disable header and footer
    PDF::setPrintHeader(false);
    PDF::setPrintFooter(false);

    // set margins
    PDF::SetMargins(10, 0, 10, 0);

    // set auto page breaks
    PDF::SetAutoPageBreak(true, 0);

    // PDF::SetTitle($slug);
    PDF::AddPage('P', 'B5', true);

    // background footer
    PDF::Polygon(
      [
        0,
        PDF::getPageHeight() - 25,
        PDF::getPageWidth(),
        PDF::getPageHeight() - 25,
        PDF::getPageWidth(),
        PDF::getPageHeight(),
        0,
        PDF::getPageHeight(),
      ],
      'F',
      [],
      [183, 4, 4]
    );

    $img_file = storage_path('app/public/logo-dki-thumb.png');
    PDF::Image($img_file, 15, 15, 16, 18, '', '', '', false, 300, '', false, false, 0);

    $img_file = storage_path('app/public/jakpreneur.png');
    PDF::Image($img_file, (PDF::getPageWidth() - 45), 13, 35, 23, '', '', '', false, 300, '', false, false, 0);

    PDF::SetFont('Helvetica', 'B', 16);
    PDF::Text(35, 16, 'Bussines');
    PDF::Text(35, 22, 'Matching');

    PDF::SetFont('Helvetica', 'B', 20);
    PDF::SetXY(10, 60);
    PDF::MultiCell(0, 0, $product->name, 0, 'C');

    PDF::SetFont('Helvetica', 'B', 14);
    PDF::SetTextColor(170, 173, 177);
    PDF::SetXY(10, 73);
    PDF::Cell(0, 0, $product->short_location, 0, 0, 'C', 0, '', 1, false, 'C', 'C');

    // set qrcode
    $style = [
      'border' => 0,
      'padding' => 1,
      'fgcolor' => [0, 0, 0],
      'bgcolor' => [255, 255, 255],
      'module_width' => 1,
      'module_height' => 1,
    ];
    $size = 100;
    $top = ceil((PDF::getPageHeight() - $size) / 2) + 10;
    $left = ceil((PDF::getPageWidth() - $size) / 2);
    $url = config('app.url') . 'vendor-page?id=' . encrypt_params($product->id);
    PDF::Write2DBarcode($url , 'QRCODE,L', $left, $top, $size, $size, $style, 'N');

    // set footer text
    PDF::SetFontSize(8);
    PDF::SetTextColor(255, 255, 255);

    $user = encrypt_params(auth()->user()->id);
    PDF::Text(10, (PDF::getPageHeight() - 15), "Dicetak oleh: {$user}");
    PDF::Text(10, (PDF::getPageHeight() - 12), "Versi Cetak 1.0.00");

    PDF::Output("{$slug}-bmqrcode.pdf", 'I');
  }

  public function getProduct($tenant,$product){
    [$response, $hasError] = $this->product->singelProduct($tenant, $product);

    if (!is_null($hasError)) {
      return response()->json([
        'status' => 'error',
        'message' => $hasError
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'data' => new ProductResource($response)
    ]);
  }
}
