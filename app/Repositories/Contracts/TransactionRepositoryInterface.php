<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Model;

interface TransactionRepositoryInterface
{
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
   * @return array [response, error]
   */
  public function addVoi(Model $model) : array;
}
