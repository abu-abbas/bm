<?php

namespace App\Models;

use Illuminate\Database\Eloquent\{Builder, Model, SoftDeletes};
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\{HasMedia, InteractsWithMedia};

class Category extends Model implements HasMedia
{
  use HasFactory, SoftDeletes, InteractsWithMedia;

  /**
   * The attributes that aren't mass assignable.
   *
   * @var array
   */
  protected $guarded = [];

  // /**
  //  * Get specifications for the product.
  //  */
  // public function specifications() : HasMany
  // {
  //   return $this->hasMany(Specification::class);
  // }

  // public function tenant() : BelongsTo
  // {
  //   return $this->belongsTo(Tenant::class);
  // }

  // public function singleMedia()
  // {
  //   return $this->media()->one()->ofMany('id', 'max');
  // }

  // public function hasTransaction() : HasOne
  // {
  //   return $this->hasOne(Transaction::class);
  // }

  /**
   * Scope a query by given url
   *
   * @param \Illuminate\Database\Eloquent\Builder $query
   * @param string $url
   * @return void
   */
  public function scopeByUrl(Builder $query, $url): void
  {
    $query->where('url', $url);
  }

  public function products()
  {
    // return $this->belongsToMany(Event::class, 'pivots', 'key_2', 'key_1')->where('pivots.type_of_pivot', $type);
    return $this->belongsToMany(Product::class, 'pivots', 'key_2', 'key_1')->where('pivots.type_of_pivot', 'tenant_event');
  }
}
