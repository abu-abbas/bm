<?php

namespace App\Repositories;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Repositories\Contracts\EventRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
      $query = $this->event->orderBy('updated_at', 'desc');
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

  /**
   * Find a model by its url.
   *
   * @param mixed $url
   * @return Model|null
   */
  public function findBySlug($url): Model|null
  {
    return $this->event->byUrl($url)->first();
  }

  public function findById($id): Model|null
  {
    return $this->event->where('id', $id)->first();
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model
  {
    return $this->event->make($attributes);
  }

  /**
   * Create or update a event of model and persist them to the database
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param string $mode
   * @return array <response, error>
   */
  public function saveOrEdit(Model $eloquentModel, $mode = 'insert'): array
  {
    $error = null;
    $response = null;

    try {
      if (!$eloquentModel->save())
        throw new \Exception("Error saat {$mode} event", -99);

      $response = $eloquentModel;
    } catch (\Throwable $th) {
      $error = $th->getCode() == -99
        ? $th->getMessage()
        : 'Terjadi kesalahan pada server. Silakan hubungi Admin.';

      Log::error($error, [
        'payload' => $eloquentModel->toArray(),
        'error' => ['message' => $th->getMessage()]
      ]);
    }

    return [$response, $error];
  }

  public function drop(Model $eloquestModel): array
  {
    $error = null;
    $response = null;

    try {
      if (!$eloquestModel->delete())
        throw new \Exception("Error saat menghapus event", -99);

      $response = true;
    } catch (\Throwable $th) {
      $error = $th->getCode() == -99
        ? $th->getMessage()
        : 'Terjadi kesalahan pada server. Silakan hubungi Admin.';

      Log::error($error, [
        'payload' => $eloquestModel->toArray(),
        'error' => ['message' => $th->getMessage()]
      ]);
    }

    return [$response, $error];
  }

  /**
   * Fill the model with an array of attributes.
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function fill(Model $eloquentModel, array $attributes): Model
  {
    return $eloquentModel->fill($attributes);
  }

  /**
   * Get active or last event
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function activeOrLastEvent(Request $request)
  {
    $error = null;
    $response = null;

    try {
      $activeEvent = $this->event->isActive()->select(['events.*', DB::raw("'active' as flag")]);
      $lastEvent = $this->event->orderByDesc('finish_at')->select(['events.*', DB::raw("'last' as flag")])->limit(1);

      if ($activeEvent->count() > 0) {
        $response = $activeEvent->get();
      } else {
        $response =  $lastEvent->get();
      }
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalahan pada server. Silakan hubungi Admin';
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
