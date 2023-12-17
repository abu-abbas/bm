<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\{User, UserEtpp};
use \Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\{DB, Log};
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
    $dataPegawai = null;
    if ($user->is_etpp) {
      $dataPegawai = $this->getPegawaiData($user->username);
    }

    session([
      'user' => [
        'username' => $user->username,
        'name' => Str::title($user->name),
        'nip' => $dataPegawai?->nip ?? null,
        'kojab' => $dataPegawai?->kojab ?? null,
        'jabatan' => $dataPegawai?->jabatan ?? null,
        'kolok' => $dataPegawai?->kolok ?? null,
        'lokasi_kerja' => $dataPegawai?->lokasi_kerja ?? null,
        'spmu' => $dataPegawai?->spmu ?? null,
        'kode_pd' => $dataPegawai?->kode_pd ?? null,
        'perangkat_daerah' => $dataPegawai?->perangkat_daerah ?? null,
        'email' => $dataPegawai?->email ?? null,
        'sipkd' => $dataPegawai?->kode_unit_sipkd ?? null,
        'permissions' => []
      ]
    ]);
  }

  protected function getPegawaiData($nrk)
  {
    $query = DB::connection('etpp')
      ->query()
      ->fromSub(
        fn ($q1) =>
          $q1
            ->from(DB::raw('pers_pegawai1@simpeg p'))
            ->joinSub(
              fn ($t1) =>
                $t1->from(DB::raw('vw_jabatan_all@simpeg tab'))
                  ->select([
                    'tab.*',
                    DB::raw('row_number () over (partition by tab.nrk order by tab.tmt desc) as rown')
                  ])
                ,
              't',
              fn ($js) =>$js->on('t.nrk', '=', 'p.nrk')->on('t.rown', 1)
            )
            ->leftJoin(
              DB::raw('pers_peran_tbl@simpeg per'),
              fn($lj) => $lj->on('t.kolok', '=', 'per.kolok')->on('t.koper', '=', 'per.koper')
            )
            ->select([
              't.nrk',
              'p.nama',
              'p.nip18 as nip',
              't.nalok as lokasi_kerja',
              DB::raw('case when t.koper is not null then per.koper else t.kojab end kojab'),
              DB::raw('case when t.koper is not null then per.napers else t.najab end jabatan'),
              DB::raw('case when t.koper is not null then per.kolok else t.kolok end kolok'),
              DB::raw("case when t.spmu = 'c031' then 'c030' when t.spmu = 'c041' then 'c040' else t.spmu end spmu")
            ])
          ,
          'q1'
      )
      ->join(DB::raw('pers_tabel_spmu@simpeg s'), 'q1.spmu', '=', 's.kode_spm')
      ->leftJoin(DB::raw('pers_pegawai2@simpeg p2'), 'q1.nrk', '=', 'p2.nrk')
      ->leftJoin(DB::raw('pers_klogad3@simpeg p3'), 'q1.kolok', '=', 'p3.kolok')
      ->select([
        'q1.nrk',
        'q1.nama',
        'q1.nip',
        'q1.kojab',
        'q1.jabatan',
        'q1.kolok',
        'q1.lokasi_kerja',
        'q1.spmu',
        's.klogad_induk as kode_pd',
        's.nama as perangkat_daerah',
        'p2.email',
        'p3.kode_unit_sipkd',
      ])
      ->where('q1.nrk', $nrk)
      ->first();

    return $query;
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
