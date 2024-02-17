<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request, UploadedFile};

interface EventRepositoryInterface
{
  /**
   * Get active or last event
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function activeOrLastEvent(Request $request);

  /**
   * Get list data a complaint of model and persist them to the database
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function list(Request $request): array;

  /**
   * Find a model by its primary key.
   *
   * @param mixed $url
   * @return Model|null
   */
  public function findBySlug($url): Model|null;

  /**
   * Find Event By ID
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return Model|null
   */
  public function findById($id): Model|null;

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model;

  /**
   * Create or update a event of model and persist them to the database
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param string $mode
   * @return array <response, error>
   */
  public function saveOrEdit(Model $eloquentModel, $mode = 'insert'): array;

  /**
   * Drop Event and persist to database
   *
   * @param Model $eloquestModel
   * @return array [response, error]
   */
  public function drop(Model $eloquestModel): array;

  /**
   * Fill the model with an array of attributes.
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function fill(Model $eloquentModel, array $attributes): Model;

  /**
   * Upload illustration for event
   *
   * @param string $media
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param \Illuminate\Http\UploadedFile $file
   * @param boolean $deleteIfExist
   * @return array [response, error]
   */
  public function uploadFile($media, Model $eloquentModel, UploadedFile $file, $deleteIfExist = true): array;
}
