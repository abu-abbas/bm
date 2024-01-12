<?php

namespace App\Repositories;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\{DB, Log};
use Illuminate\Http\{Request, UploadedFile};
use App\Repositories\Contracts\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
  protected $product;
  protected $mappedColumn = [];

  public function __construct(Product $product) {
    $this->product = $product;
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
    return $this->product->byUrl($url)->first();
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model
  {
    return $this->product->make($attributes);
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
      $perPage = $request->limit ?? $this->product->getPerPage();
      $selectedColumns = explode(',', $request->columns);
      $filtered = collect($this->mappedColumn)->reject(fn ($v, $k) => !in_array($k, $selectedColumns))->values();

      $query = $this->product
        ->with([
          'tenant',
          'media' => fn($q) => $q->where('collection_name', 'product.logo')
        ])
        ->when($request->search, function ($q, $searchText) use ($filtered) {
          return $q->searchByColumn($searchText, $filtered);
        });

      $response = $request->fetch_first
        ? $query->first()
        : $query->paginate($perPage);
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master product. Silakan hubungi Admin untuk lebih lanjut.';
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
   * Create or update a product of model and persist them to the database
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
        throw new \Exception("Error saat {$mode} product", -99);

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
   * Upload logo for product request
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
      $mediaCollectionName = 'product.logo';

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
   * Drop product and persist to database
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
        throw new \Exception("Error saat menghapus product", -99);

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
   * Get product by tenant
   *
   * @param Request $request
   * @return array [response, error]
   */

  public function singelProduct($tenant, $product): array
  {
    $error = null;
    $response = null;

    try {
      $with = [
        'tenant',
        'media' => fn ($q) => $q->where('collection_name', 'product.logo'),
      ];

      $response = $this->product
        ->with($with)
        ->where('url', $product)
        ->whereHas('tenant', fn($q) => $q->where('url', $tenant))
        ->when(
          auth()->check(),
          fn($s) => $s->withCount([
            'hasTransaction' => fn ($s) => $s->where('username', auth()->user()->username)
          ]))
        ->first();

    } catch (\Throwable $th) {
      $error = 'Terjadi kesalah saat mengambil data master product. Silakan hubungi Admin untuk lebih lanjut.';
      Log::error($error, [
        'payload' => [$product,$tenant],
        'error' => [
          'message' => $th->getMessage()
        ]
      ]);
    }

    return [$response, $error];
  }
}
