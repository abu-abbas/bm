<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Support\Str;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
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
      'condition' => 1, // $request->condition['value'],
      'ecatalogue' => $request->ecatalogue,
      'created_by' => auth()->user()->username,
      'url' => Str::slug($request->name),
    ]);

    [$response, $error] = $this->product->saveOrEdit($product);

    $productModel = $this->product->findBySlug(Str::slug($request->name));

    $productModel?->categories()->sync($categoryId);

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

    if (!$product->categories()) {
      return response()->json([
        'status' => 'error',
        'message' => 'Kategori tidak ditemukan untuk produk ini.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $product->categories()->detach();

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
      'ecatalogue' => $request->ecatalogue,
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
