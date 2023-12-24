<?php

namespace App\Repositories;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\TransactionRepositoryInterface;

class TransactionRepository implements TransactionRepositoryInterface
{
  protected $transaction;

  public function __construct(Transaction $transaction)
  {
    $this->transaction = $transaction;
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
   * @return array [response, error]
   */
  public function addVoi(Model $model): array
  {
    $error = null;
    $response = null;

    try {
      if (!$model->save())
        throw new \Exception('Error saat insert value of interest', -99);

      $response = true;
    } catch (\Throwable $th) {
      $error = 'Terjadi kesalahan saat proses tambah ketertarikan. Silakan hubungi Admin untuk info lebih lanjut';
      Log::error($error, [
        'payload' => [
          'request' => $model->toArray(),
          'error' => [
            'message' => $th->getMessage(),
          ]
        ]
      ]);
    }

    return [$response, $error];
  }
}
