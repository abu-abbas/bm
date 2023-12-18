<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Builder, Model, SoftDeletes};

class Transaction extends Model
{
  use HasFactory, SoftDeletes;

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

  /**
   * Scope a query by given url
   *
   * @param \Illuminate\Database\Eloquent\Builder $query
   * @param string $username
   * @return void
   */
  public function scopeByUsername(Builder $query, $username): void
  {
    $query->where('username', $username);
  }
}
