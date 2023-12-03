<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\{HasMedia, InteractsWithMedia};

class Product extends Model implements HasMedia
{
  use HasFactory, SoftDeletes, InteractsWithMedia;

  /**
   * The attributes that aren't mass assignable.
   *
   * @var array
   */
  protected $guarded = [];

  /**
   * Get specifications for the product.
   */
  public function specifications() : HasMany
  {
    return $this->hasMany(Specification::class);
  }

  public function tenant() : HasOne
  {
    return $this->hasOne(Tenant::class);
  }

  public function singleMedia()
  {
    return $this->media()->one()->ofMany('id', 'max');
  }


}
