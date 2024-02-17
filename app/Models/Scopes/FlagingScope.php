<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class FlagingScope implements Scope
{
  /**
   * Apply the scope to a given Eloquent query builder.
   */
  public function apply(Builder $builder, Model $model): void
  {
    $flag = $model instanceof \App\Models\Role ? 'role' : 'permission';
    $builder->where('role_and_permission.flag', $flag);
  }
}
