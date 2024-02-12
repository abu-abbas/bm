<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Support\Str;
use App\Http\Requests\TenantRequest;
use App\Http\Resources\TenantResource;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\TenantRepositoryInterface;

class TenantController extends Controller
{
  protected $tenant;

  public function __construct(TenantRepositoryInterface $tenant)
  {
    $this->tenant = $tenant;
  }

  public function list(Request $request)
  {
    [$response, $error] = $this->tenant->list($request);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if (!$response) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan'
      ], JsonResponse::HTTP_NOT_FOUND);
    }

    return $request->fetch_first
      ? response()->json(['status' => 'success', 'data' => new TenantResource($response)])
      : TenantResource::collection($response)->additional(['status' => 'success']);
  }

  public function store(TenantRequest $request)
  {
    $request->validated();

    $tenant = $this->tenant->make([
      'name' => $request->name,
      'url' => Str::slug($request->name),
      'short_location' => $request->short_location,
      'description' => $request->description,
      'created_by' => auth()->user()->username,
    ]);

    [$response, $error] = $this->tenant->saveOrEdit($tenant);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    // upload logo
    [$response, $error] = $this->tenant->uploadFile($response, $request->file('logo'));
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan',
      'data' => new TenantResource($response)
    ]);
  }

  public function drop(TenantRequest $request)
  {
    $request->validated();

    $tenant = $this->tenant->findBySlug($request->slug);
    if (!$tenant) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    [, $error] = $this->tenant->drop($tenant);
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

  public function edit(TenantRequest $request)
  {
    $request->validated();

    $found = $this->tenant->findBySlug($request->slug);
    if (!$found) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $tenant = $this->tenant->fill($found, [
      'name' => $request->name,
      'short_location' => $request->short_location,
      'description' => $request->description,
      'updated_by' => auth()->user()->username,
    ]);

    [$response, $error] = $this->tenant->saveOrEdit($tenant, 'edit');
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if ($request->has('logo')) {
      // upload logo
      [$response, $error] = $this->tenant->uploadFile($response, $request->file('logo'));
      if (!is_null($error)) {
        return response()->json([
          'status' => 'error',
          'message' => $error
        ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
      }
    }

    $message = $request->_method == 'put' ? 'diubah' : 'ditambahkan';
    return response()->json([
      'status' => 'success',
      'message' => "Data berhasil {$message}",
      'data' => new TenantResource($response)
    ]);
  }

  public function qrcode($slug)
  {
    $tenant = $this->tenant->findBySlug($slug);

    // set document information
    PDF::SetCreator('Bussiness Matching Apps');
    PDF::SetAuthor('Bussiness Matching Apps');
    PDF::SetTitle($tenant->name);
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
    PDF::MultiCell(0, 0, $tenant->name, 0, 'C');

    PDF::SetFont('Helvetica', 'B', 14);
    PDF::SetTextColor(170, 173, 177);
    PDF::SetXY(10, 73);
    PDF::Cell(0, 0, $tenant->short_location, 0, 0, 'C', 0, '', 1, false, 'C', 'C');

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
    // $url = config('app.url') . 'vendor-page?id=' . encrypt_params($tenant->id);
    $url = config('app.url') . 't/' . $tenant->url;
    PDF::Write2DBarcode($url , 'QRCODE,L', $left, $top, $size, $size, $style, 'N');

    // set footer text
    PDF::SetFontSize(8);
    PDF::SetTextColor(255, 255, 255);

    $user = encrypt_params(auth()->user()->id);
    PDF::Text(10, (PDF::getPageHeight() - 15), "Dicetak oleh: {$user}");
    PDF::Text(10, (PDF::getPageHeight() - 12), "Versi Cetak 1.0.00");

    PDF::Output("{$slug}-bmqrcode.pdf", 'I');
  }
}
