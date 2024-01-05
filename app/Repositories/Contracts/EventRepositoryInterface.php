<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request, UploadedFile};


interface EventRepositoryInterface
{
  /**
   * Get list data a complaint of model and persist them to the database
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function list(Request $request): array;

  /**
   * Find Event By ID
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
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
}
