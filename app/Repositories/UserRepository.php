<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\{User, UserEtpp};
use Illuminate\Support\Facades\Log;
use \Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use App\Repositories\Contracts\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
  protected $user;
  protected $etpp;
  protected $mappedColumn = [];

  public function __construct(
    User $user,
    UserEtpp $etpp
  ) {
    $this->user = $user;
    $this->etpp = $etpp;
    $this->mappedColumn = [
      'username' => 'username',
      'name' => 'name',
    ];
  }

  /**
   * Retrieve etpp data by given nrk
   *
   * @param string $nrk
   * @return array <response, error>
   */
  public function retrieveByCredentials($nrk): array
  {
    $error = null;
    $response = null;

    try {
      $response = $this->etpp
        ->where('v_userid', $nrk)
        ->where('e_user_enable', true)
        ->first();

      if (!$response)
        throw new \Exception('User e-TPP tidak ditemukan. Silakan periksa kembali NRK yang diinput', -99);
    } catch (\Throwable $th) {
      $error = $th->getCode() == -99 ? $th->getMessage() : 'Kesalahan saat login. Silakan hubungi Admin.';
      Log::error('Error saat retrieve user etpp', [
        'payload' => ['nrk' => $nrk],
        'error_message' => $th->getMessage()
      ]);
    }

    return [$response, $error];
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model
  {
    return $this->user->make($attributes);
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
   * Create or update a complaint of model and persist them to the database
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @return array <response, error>
   */
  public function updateOrCreate(Model $eloquentModel): array
  {
    $error = null;
    $response = null;

    try {
      $response = $this->user->updateOrCreate(
        ['username' => $eloquentModel->v_userid],
        [
          'name' => $eloquentModel->v_username,
          'password' => bcrypt(request('password')) ?? $eloquentModel->v_userpass,
          'email_verified_at' => now(),
          'is_etpp' => 1,
        ]
      );
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalahan pada server';
      Log::error('Error saat update or create user etpp', [
        'payload' => $eloquentModel,
        'error_message' => $th->getMessage()
      ]);
    }

    return [$response, $error];
  }
  public function updateOrCreateAdmin(Model $eloquentModel): array
  {
    $error = null;
    $response = null;

    try {
      $response = $this->user->updateOrCreate(
        ['username' => $eloquentModel->username],
        [
          'name' => $eloquentModel->name,
          'password' => request('password') ? bcrypt(request('password')) : $eloquentModel->getOriginal('password'),
          'email_verified_at' => $eloquentModel->email_verified_at ?: now(),
          'is_etpp' => 0,
        ]
      );
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalahan pada server';
      Log::error('Error saat update or create user etpp', [
        'payload' => $eloquentModel,
        'error_message' => $th->getMessage()
      ]);
    }

    return [$response, $error];
  }

  /**
   * Create login history for user
   *
   * @param \Illuminate\Http\Request $request
   * @param \Illuminate\Contracts\Auth\Authenticatable $user
   * @return void
   */
  public function loginHistory(Request $request, Authenticatable $user)
  {
    session([
      'user' => [
        'username' => $user->username,
        'name' => Str::title($user->name),
        'sipkd' => $user->is_etpp ? '' : '21101000', //sementara masih dihardcode dulu
        'permissions' => []
      ]
    ]);
  }

  public function list(Request $request): array
  {
    $error = null;
    $response = null;

    try {
      $perPage = $request->limit ?? $this->user->getPerPage();
      $selectedColumns = explode(',', $request->columns);
      $filtered = collect($this->mappedColumn)->reject(fn ($v, $k) => !in_array($k, $selectedColumns))->values();

      $query = $this->user
        ->where('username', '<>', 'admin')
        ->when($request->search, fn ($q, $searchText) => $q->searchByColumn($searchText, $filtered));

      $response = $request->fetch_first
        ? $query->first()
        : $query->paginate($perPage);
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master user. Silakan hubungi Admin untuk lebih lanjut.';
      Log::error($error, [
        'payload' => $request->toArray(),
        'error' => [
          'message' => $th->getMessage()
        ]
      ]);
    }

    return [$response, $error];
  }

  public function findByUsername($username): Model|null
  {
    return $this->user->where('username',$username)->first();
  }

  public function drop(Model $eloquestModel): array
  {
    $error = null;
    $response = null;

    try {
      if (!$eloquestModel->delete())
        throw new \Exception("Error saat menghapus pengguna", -99);

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
}
