<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;

interface UserRepositoryInterface
{
  /**
   * Retrieve etpp data by given nrk
   *
   * @param string $nrk
   * @return array <response, error>
   */
  public function retrieveByCredentials($nrk) : array;

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes): Model;

  /**
   * Fill the model with an array of attributes.
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function fill(Model $eloquentModel, array $attributes): Model;

  /**
   * Create or update a user of model and persist them to the database
   *
   * @param \Illuminate\Database\Eloquent\Model $eloquentModel
   * @return array <response, error>
   */
  public function updateOrCreate(Model $eloquentModel): array;

  /**
   * Create login history for user
   *
   * @param \Illuminate\Http\Request $request
   * @param \Illuminate\Contracts\Auth\Authenticatable $user
   * @return void
   */
  public function loginHistory(Request $request, Authenticatable $user);

   /**
   * Create or update a complaint of model and persist them to the database
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function list(Request $request): array;

   /**
   * Create or update a complaint of model and persist them to the database for user by admin
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */

  public function updateOrCreateAdmin(Model $eloquentModel): array;

  /**
   * Find User By Username
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return Model $eloquestModel
   */
  public function findByUsername($username): Model|null;

    /**
   * Drop User and persist to database
   *
   * @param Model $eloquestModel
   * @return array [response, error]
   */
  public function drop(Model $eloquestModel) : array;


  public function permissions() : mixed;

  /**
   * Get pegawai data via services
   *
   * @param string $nrk
   * @return array [response, error]
   */
  public function pegawaiDataViaService($nrk);
}
