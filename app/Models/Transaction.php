<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Builder, Model, SoftDeletes};

class Transaction extends Model
{
  use HasFactory, SoftDeletes;

  /**
   * The connection name for the model.
   *
   * @var string|null
   */
  protected $connection = 'oracle';

  /**
   * The attributes that should be cast.
   *
   * @var array
   */
  protected $casts = [
    'trx_date' => 'datetime',
  ];

  /**
   * The attributes that aren't mass assignable.
   *
   * @var array
   */
  protected $guarded = [];

  /**
   * The "booted" method of the model.
   */
  protected static function booted(): void
  {
    /**
     * Handle the Tenant "deleted" event.
     */
    static::deleted(function (Transaction $transaction) {
      $transaction->deleted_by = auth()->user()->username;
      $transaction->save();
    });
  }

  public function product() : HasOne
  {
    return $this->hasOne(Product::class, 'id', 'product_id');
  }

  // /**
  //  * Scope a query by given url
  //  *
  //  * @param \Illuminate\Database\Eloquent\Builder $query
  //  * @param string $username
  //  * @return void
  //  */
  // public function scopeByUsername(Builder $query, $username): void
  // {
  //   $query->where('username', $username);
  // }
}
