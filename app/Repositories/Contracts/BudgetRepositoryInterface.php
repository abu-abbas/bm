<?php

namespace App\Repositories\Contracts;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

interface BudgetRepositoryInterface
{
  /**
   * Get list of budgeting based on key and segment
   *
   * @param string $value
   * @param string $key
   * @param string $addons
   * @return mixed
   */
  public function list($value = null, $key = 'kegiatan', $addons = null): mixed;

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes, $model = 'budget'): Model;

  /**
   * Add value of interest
   *
   * @param \Illuminate\Http\Request $request
   * @return array [response, error]
   */
  public function addVoi(Request $request) : array;
}
