<?php

namespace App\Repositories;

use App\Models\{Budget, Transaction};
use App\Repositories\Contracts\BudgetRepositoryInterface;
use Illuminate\Support\Facades\DB;

class BudgetRepository implements BudgetRepositoryInterface
{
  protected $budget;
  protected $transaction;

  public function __construct(
    Budget $budget,
    Transaction $transaction,
  ) {
    $this->budget = $budget;
    $this->transaction = $transaction;
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
        fn ($q) => $q
          ->select(['c_akun', 'n_akun', 'i_idrskbas', 'v_dpa_rsk', 'v_tapd_rsk', 'n_sumberdana'])
          ->where('c_giat', $value)
          ->where('i_rsk_no', $addons)
      )
      ->where('c_angg_tahun', now()->format('Y'))
      ->where('c_opd', session('user.sipkd'))
      ->orderByRaw('1, 2')
      ->distinct()
      ->get();
  }

  /**
   * Get all data from budgeting by given search keyword
   *
   * @param string $search
   * @return mixed
   */
  public function all($search = null): mixed
  {
    $fieldSearchable = [
      'c_program', 'n_program', 'c_giat', 'n_giat', 'c_subgiat', 'n_subgiat',
      'n_rsk', 'c_akun', 'n_akun',
    ];

    $allBudget = $this->budget
      ->with('transaction')
      ->where('c_angg_tahun', now()->format('Y'))
      ->where('c_opd', session('user.sipkd'))
      ->when(
        $search,
        fn ($s) =>
          $s->where(
            function($q) use ($search, $fieldSearchable) {
              foreach ($fieldSearchable as $idx => $field) {
                $clause = $idx == 0 ? 'where' : 'orWhere';
                $q->{$clause}(DB::raw("lower($field)"), 'like', "%{$search}%");
              }
            }
          )
      )
      ->select([
        'c_angg_tahun', 'c_opd', 'n_opd',
        'c_program', 'n_program', 'c_giat','n_giat', 'c_subgiat', 'n_subgiat',
        'i_idrsk','i_rsk_no', 'n_rsk', 'i_idrskbas', 'i_idbas',
        'c_akun', 'n_akun', 'v_dpa_rsk', 'v_tapd_rsk','n_sumberdana',
      ])
      ->distinct()
      ->orderByRaw('c_akun, i_rsk_no fetch first 100 rows only')
      ->get();

    return $allBudget;
  }
}
