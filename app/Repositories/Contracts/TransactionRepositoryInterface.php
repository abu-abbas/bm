<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Model;

interface TransactionRepositoryInterface
{
  /**
   * Get list of transaction by given auth
   *
   * @return mixed
   */
  public function list() : mixed;

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @param string $model
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes, $model = 'transaction'): Model;

  /**
   * Add value of interest
   *
   * @param \Illuminate\Database\Eloquent\Model $model
   * @param \Illuminate\Database\Eloquent\Model $snapshot
   * @return array [response, error]
   */
  public function addVoi(Model $model, Model $snapshot) : array;
}
