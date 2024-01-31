<?php

namespace App\Http\Controllers;

use App\Http\Requests\TenantInEventRequest;
use App\Http\Resources\PivotResource;
use App\Models\Event;
use App\Models\Tenant;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\PivotRepositoryInterface;

class PivotController extends Controller
{
  protected $pivot;
  protected $event;

  public function __construct(PivotRepositoryInterface $pivot, Event $event)
  {
    $this->pivot = $pivot;
    $this->event = $event;
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

    $event = Event::find($request['id']);

    $tenantId = [];
    foreach ($request['tenant'] as $pivotItem) {
      $tenantId[$pivotItem['value']] = ['type_of_pivot' => 'tenant_event'];
    }

    $response = $event->tenants()->sync($tenantId);

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan',
      'data' => new PivotResource($response)
    ]);
  }

  public function drop(TenantInEventRequest $request)
  {
    $request->validated();

    $event = Event::find($request->id);

    if (!$event) {
      return response()->json([
        'status' => 'error',
        'message' => 'Event tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    if (!$event->tenants()) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan untuk event ini.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    [, $error] = $event->tenants()->detach($request->tenant_id);

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
