<?php

namespace App\Http\Controllers;

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

    return TenantResource::collection($response)
      ->additional(['status' => 'success']);
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
}
