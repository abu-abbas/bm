<?php

namespace App\Repositories;

use App\Models\Event;
use App\Repositories\Contracts\EventRepositoryInterface;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request, UploadedFile};

class EventRepository implements EventRepositoryInterface
{
  protected $event;

  public function __construct(Event $event) {
    $this->event = $event;
  }

  public function list(Request $request): array
  {
    $error = null;
    $response = null;

    try {
      $perPage = $request->limit ?? $this->event->getPerPage();

      $query = $this->event;

      $response = $request->fetch_first
        ? $query->first()
        : $query->paginate($perPage);

    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master Event. Silakan hubungi Admin untuk lebih lanjut.';
      Log::error($error, [
        'payload' => $request->toArray(),
        'error' => [
          'message' => $th->getMessage()
        ]
      ]);
    }

    return [$response, $error];
  }
}
