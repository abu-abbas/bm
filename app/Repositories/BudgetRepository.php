<?php

namespace App\Repositories;

use App\Models\Budget;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\BudgetRepositoryInterface;

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
   * Add value of interest
   *
   * @param \Illuminate\Http\Request $request
   * @return array [response, error]
   */
  public function addVoi(Request $request): array
  {
    $error = null;
    $response = null;

    try {
      //
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalahan saat proses tambah ketertarikan. Silakan hubungi Admin untuk info lebih lanjut';
      Log::error($error, [
        'payload' => [
          'request' => $request->toArray(),
          'error' => [
            'message' => $th->getMessage(),
          ]
        ]
      ]);
    }

    return [$response, $error];
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes, $model = 'budget'): Model
  {
    return $this->{$model}->make($attributes);
  }
}
