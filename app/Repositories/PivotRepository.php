<?php

namespace App\Repositories;

use App\Models\Event;
use App\Models\Pivot;
use App\Repositories\Contracts\PivotRepositoryInterface;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request};

class PivotRepository implements PivotRepositoryInterface
{
  protected $pivot;
  protected $event;

  public function __construct(Pivot $pivot, Event $event) {
    $this->pivot = $pivot;
    $this->event = $event;
  }

  public function list(Request $request): array
  {
    $error = null;
    $response = null;

    $findId = $this->event->byUrl($request->id)->first();

    try {
      $perPage = $request->limit ?? $this->pivot->getPerPage();
      $event = Event::find($findId->id);
      $query = $event->tenants;

      $response = $request->fetch_first
        ? $query->first()
        : $query->paginate($perPage);
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master Pivot. Silakan hubungi Admin untuk lebih lanjut.';
      Log::error($error, [
        'payload' => $request->toArray(),
        'error' => [
          'message' => $th->getMessage()
        ]
      ]);
    }

    return [$response, $error];
  }

  public function findById($id): Model|null
  {
    return $this->pivot->where('id', $id)->first();
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model
  {
    return $this->pivot->make($attributes);
  }

  /**
   * Create or update a pivot of model and persist them to the database
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
        throw new \Exception("Error saat {$mode} pivot", -99);

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
}
