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
     * Handle the Event "deleted" event.
     */
    static::deleted(function (Event $event) {
      $event->deleted_by = auth()->user()->username;
      $event->save();
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
  
  public function tenants()
  {
    return $this->belongsToMany(Tenant::class, 'pivots', 'key_1', 'key_2')->where('pivots.type_of_pivot', 'tenant_event');
  }
}
