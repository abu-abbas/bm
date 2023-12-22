<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Support\Str;
use App\Http\Resources\EventResource;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\EventRepositoryInterface;

class EventController extends Controller
{
  protected $event;

  public function __construct(EventRepositoryInterface $event)
  {
    $this->event = $event;
  }

  public function list(Request $request)
  {
    [$response, $error] = $this->event->list($request);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if (!$response) {
      return response()->json([
        'status' => 'error',
        'message' => 'Event tidak ditemukan'
      ], JsonResponse::HTTP_NOT_FOUND);
    }

    return $request->fetch_first
      ? response()->json(['status' => 'success', 'data' => new EventResource($response)])
      : EventResource::collection($response)->additional(['status' => 'success']);
  }
}
