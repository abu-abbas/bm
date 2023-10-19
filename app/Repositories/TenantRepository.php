<?php

namespace App\Repositories;

use App\Models\Tenant;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request, UploadedFile};
use App\Repositories\Contracts\TenantRepositoryInterface;

class TenantRepository implements TenantRepositoryInterface
{
  protected $tenant;
  protected $mappedColumn = [];

  public function __construct(Tenant $tenant) {
    $this->tenant = $tenant;
    $this->mappedColumn = [
      'name' => 'name',
      'url' => 'url',
      'short_location' => 'short_location',
      'description' => 'description',
    ];
  }

  /**
   * Find a model by its url.
   *
   * @param mixed $url
   * @return Model|null
   */
  public function findBySlug($url): Model|null
  {
    return $this->tenant->byUrl($url)->first();
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model
  {
    return $this->tenant->make($attributes);
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
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function list(Request $request): array
  {
    $error = null;
    $response = null;

    try {
      $perPage = $request->limit ?? $this->tenant->getPerPage();
      $selectedColumns = explode(',', $request->columns);
      $filtered = collect($this->mappedColumn)->reject(fn ($v, $k) => !in_array($k, $selectedColumns))->values();

      $query = $this->tenant
        ->with('singleMedia')
        ->when($request->search, fn ($q, $searchText) => $q->searchByColumn($searchText, $filtered));

      $response = $request->fetch_first
        ? $query->first()
        : $query->paginate($perPage);
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master tenant. Silakan hubungi Admin untuk lebih lanjut.';
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
   * Create or update a tenant of model and persist them to the database
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
        throw new \Exception("Error saat {$mode} tenant", -99);

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

  /**
   * Upload logo for tenant request
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param \Illuminate\Http\UploadedFile $file
   * @param boolean $deleteIfExist
   * @return array [response, error]
   */
  public function uploadFile(Model $eloquentModel, UploadedFile $file, $deleteIfExist = true): array
  {
    $error = null;
    $response = null;

    try {
      $filename = $file->hashName();
      $ext = strtolower(".{$file->getClientOriginalExtension()}");
      $mediaCollectionName = 'tenant.logo';

      $asSlug = Str::slug($file->getClientOriginalName());
      $safeName = Str::substr($asSlug, 0, (strlen($asSlug) - strlen($file->getClientOriginalExtension())));

      if ($deleteIfExist) {
        $hasFile = $eloquentModel->getMedia($mediaCollectionName, fn ($media) => $media->name == $safeName)->first();
        if ($hasFile && $file) $hasFile->forceDelete();
      }

      $eloquentModel
        ->addMedia($file)
        ->usingName($safeName)
        ->usingFileName($filename . $ext)
        ->toMediaCollection($mediaCollectionName);

      $response = $eloquentModel;
    } catch (\Throwable $th) {
      $token = encrypt_params(strtotime(now()));
      $error = "Terjadi kesalahan saat unggah logo. Silakan hubungi Admin dan tunjukkan token error berikut ini: {$token}";
      $payload = [
        'token_error' => $token,
        'complaint_req'  => $eloquentModel->toArray(),
      ];

      if ($file) {
        $payload['file'] = [
          'name' => $file->getClientOriginalName(),
          'ext' => $file->getClientOriginalExtension(),
          'mime_type' => $file->getClientMimeType(),
          'path_name' => $file->getPathname(),
          'size' => $file->getSize(),
        ];
      }

      Log::error('Error saat upload logo', [
        'payload' => $payload,
        'error' => ['message' => $th->getMessage()]
      ]);
    }

    return [$response, $error];
  }

  /**
   * Drop tenant and persist to database
   *
   * @param Model $eloquestModel
   * @return array [response, error]
   */
  public function drop(Model $eloquestModel): array
  {
    $error = null;
    $response = null;

    try {
      if (!$eloquestModel->delete())
        throw new \Exception("Error saat menghapus tenant", -99);

      $response = true;
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
