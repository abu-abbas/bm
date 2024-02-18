<?php

namespace App\Repositories;

use App\Models\Snapshot;
use App\Models\Transaction;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\TransactionRepositoryInterface;
use Illuminate\Support\Facades\DB;

class TransactionRepository implements TransactionRepositoryInterface
{
  protected $snapshot;
  protected $transaction;

  public function __construct(
    Snapshot $snapshot,
    Transaction $transaction
  ) {
    $this->snapshot = $snapshot;
    $this->transaction = $transaction;
  }

  /**
   * Get list of transaction by given auth
   *
   * @return mixed
   */
  public function list() : mixed
  {
    return $this
      ->transaction
      ->with('product.tenant')
      ->where('kolok', session('user.kolok'))
      ->latest('trx_date')
      ->get();
  }

  /**
   * Create and return an un-saved model instance
   *
   * @param array $attributes
   * @param array $attributes
   * @return \Illuminate\Database\Eloquent\Model
   */
  public function make(array $attributes, $model = 'transaction'): Model
  {
    return $this->{$model}->make($attributes);
  }

  /**
   * Add value of interest
   *
   * @param \Illuminate\Database\Eloquent\Model $model
   * @param \Illuminate\Database\Eloquent\Model $snapshot
   * @return array [response, error]
   */
  public function addVoi(Model $model, Model $snapshot): array
  {
    $error = null;
    $response = null;

    DB::beginTransaction();
    try {
      if (!$model->save())
        throw new \Exception('Error saat insert value of interest', -99);

      $snapshot->transaction_id = $model->id;
      if (!$snapshot->save())
        throw new \Exception('Error saat insert snapshot', -99);

      $response = true;
      DB::commit();
    } catch (\Throwable $th) {
      DB::rollBack();
      $error = 'Terjadi kesalahan saat proses tambah ketertarikan. Silakan hubungi Admin untuk info lebih lanjut';
      Log::error($error, [
        'payload' => [
          'request' => [
            'transaction' => $model->toArray(),
            'product' => $snapshot->toArray()
          ],
          'error' => [
            'message' => $th->getMessage(),
          ]
        ]
      ]);
    }

    return [$response, $error];
  }
}
