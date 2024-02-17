<?php

namespace App\Models;

use App\Models\Scopes\FlagingScope;
use Illuminate\Database\Eloquent\{Model, SoftDeletes};
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
  use HasFactory, SoftDeletes;

  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'role_and_permission';

  /**
   * The primary key for the model.
   *
   * @var string
   */
  protected $primaryKey = 'id';

  /**
   * The "type" of the primary key ID.
   *
   * @var string
   */
  protected $keyType = 'string';

  /**
   * Indicates if the IDs are auto-incrementing.
   *
   * @var bool
   */
  public $incrementing = false;

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
     * Handle the selected flag.
     */
    static::addGlobalScope(new FlagingScope);
  }

  public function permissions() : BelongsToMany
  {
    return $this->belongsToMany(Permission::class, 'pivots', 'key_2', 'key_1')
      ->wherePivot('pivots.type_of_pivot', 'permission_role');
  }
}
