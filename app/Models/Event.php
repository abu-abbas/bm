<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Builder, Model, SoftDeletes};

use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\{HasMedia, InteractsWithMedia};

class Event extends Model implements HasMedia
{
  use HasFactory, SoftDeletes, InteractsWithMedia;

  /**
   * The attributes that aren't mass assignable.
   *
   * @var array
   */
  protected $guarded = [];

  /**
   * The attributes that should be cast.
   *
   * @var array
   */
  protected $casts = [
    'join_date' => 'datetime',
    'is_online' => 'boolean',
  ];

  /**
   * The "booted" method of the model.
   */
  protected static function booted(): void
  {
    /**
     * Handle the Tenant "deleted" event.
     */
    static::deleted(function (Tenant $tenant) {
      $tenant->deleted_by = auth()->user()->username;
      $tenant->save();
    });
  }

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

  /**
   * Get notes for the tenant.
   */
  public function notes() : HasMany
  {
    return $this->hasMany(Note::class);
  }

  /**
   * Get products for the tenant.
   */
  public function products() : HasMany
  {
    return $this->hasMany(Product::class, 'tenant_id', 'id');
  }

  /**
   * To generate that thumbnail
   *
   */
  public function registerMediaConversions(Media $media = null) : void
  {
    $this
      ->addMediaConversion('thumb')
      ->fit(Manipulations::FIT_CROP, 100, 100);
  }

  /**
   * Get the user's max id logo.
   */
  public function singleMedia()
  {
    return $this->media()->one()->ofMany('id', 'max');
  }
}
