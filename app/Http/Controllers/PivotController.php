<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Http\Requests\PivotRequest;
use App\Http\Requests\TenantInEventRequest;
use App\Http\Resources\PivotResource;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\PivotRepositoryInterface;

class PivotController extends Controller
{
  protected $pivot;

  public function __construct(PivotRepositoryInterface $pivot)
  {
    $this->pivot = $pivot;
  }

  public function list(Request $request)
  {
    [$response, $error] = $this->pivot->list($request);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if (!$response) {
      return response()->json([
        'status' => 'error',
        'message' => 'Pivot tidak ditemukan'
      ], JsonResponse::HTTP_NOT_FOUND);
    }

    return $request->fetch_first
      ? response()->json(['status' => 'success', 'data' => new PivotResource($response)])
      : PivotResource::collection($response)->additional(['status' => 'success']);
  }

  public function store(TenantInEventRequest $request)
  {
    $request->validated();

    foreach ($request['tenant'] as $pivotItem) {
      $pivot = $this->pivot->make([
        'key_1' => $request['id'],
        'key_2' => $pivotItem['value'],
        'type_of_pivot' => 'tenant_event',
      ]);

      [$response, $error] = $this->pivot->saveOrEdit($pivot);
    }

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan'
    ]);
  }

}
