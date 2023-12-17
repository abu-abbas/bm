<?php

namespace App\Repositories;

use App\Models\Budget;
use App\Repositories\Contracts\BudgetRepositoryInterface;

class BudgetRepository implements BudgetRepositoryInterface
{
  protected $budget;

  public function __construct(Budget $budget)
  {
    $this->budget = $budget;
  }

  /**
   * Get list of budgeting based on key and segment
   *
   * @param string $value
   * @param string $key
   * @param string $addons
   * @return mixed
   */
  public function list($value = null, $key = 'kegiatan', $addons = null): mixed
  {
    return $this->budget
      ->when(
        $key == 'kegiatan',
        fn ($q) => $q->select(['c_giat', 'n_giat']))
      ->when(
        $key == 'rsk',
        fn ($q) => $q->select(['i_rsk_no', 'n_rsk'])->where('c_giat', $value)
      )
      ->when(
        $key == 'akun',
        fn ($q) => $q->select(['c_akun', 'n_akun', 'i_idrskbas', 'v_dpa_rsk'])->where('c_giat', $value)->where('i_rsk_no', $addons)
      )
      ->where('c_angg_tahun', now()->format('Y'))
      ->where('c_opd', session('user.sipkd'))
      ->orderByRaw('1, 2')
      ->distinct()
      ->get();
  }
}
