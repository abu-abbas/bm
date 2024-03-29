<?php

namespace App\Repositories\Contracts;

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
   * Get all data from budgeting by given search keyword
   *
   * @param string $search
   * @return mixed
   */
  public function all($search = null): mixed;
}
