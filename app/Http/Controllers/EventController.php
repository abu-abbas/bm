<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Http\Requests\EventRequest;
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

  public function store(EventRequest $request)
  {
    $request->validated();
    $event = $this->event->make([
      'url' => Str::slug($request->event_name),
      'event_name' => $request->event_name,
      'event_header' => $request->event_header,
      'event_subheader' => $request->event_subheader,
      'start_at' => date("Y-m-d", strtotime($request->start_at)),
      'finish_at' => date("Y-m-d", strtotime($request->finish_at)),
      'location' => $request->location,
      'publish' => 1,
      'created_by' => auth()->user()->username,
      'created_at' => now(),
    ]);

    [$response, $error] = $this->event->saveOrEdit($event);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan',
      'data' => new EventResource($response)
    ]);
  }

  public function edit(EventRequest $request)
  {
    $request->validated();

    $found = $this->event->findById($request->slug);
    if (!$found) {
      return response()->json([
        'status' => 'error',
        'message' => 'Pengguna tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $event = $this->event->fill($found, [
      'event_name' => $request->event_name,
      'event_header' => $request->event_header,
      'event_subheader' => $request->event_subheader,
      'location' => $request->location,
      'updated_by' => auth()->user()->username,
      'updated_at' => now(),
    ]);

    [$response, $error] = $this->event->saveOrEdit($event, 'edit');
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
      'data' => new EventResource($response)
    ]);
  }

  public function drop(EventRequest $request)
  {
    $request->validated();

    $event = $this->event->findById($request->id);
    if (!$event) {
      return response()->json([
        'status' => 'error',
        'message' => 'Event tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    [, $error] = $this->event->drop($event);
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

  public function illustrasi(EventRequest $request, $eventId)
  {
    $event = $this->event->findById($eventId);
    [, $error] = $this->event->uploadFile($request->media, $event, $request->file('image'));
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    $event = $event->load(['singleMedia' => fn ($q) => $q->where('collection_name', 'event.ilustrasi.' . $request->media)]);
    return response()->json([
      'status' => 'success',
      'message' => 'Ilustrasi berhasil disimpan',
      'data' => route('backend.inline.download', ['media' => $event->singleMedia]),
    ]);
  }
}
