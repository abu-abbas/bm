<?php

namespace App\Models;


use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class UserEtpp extends Model
{
  // /**
  //  * The connection name for the model.
  //  *
  //  * @var string|null
  //  */
  // protected $connection = 'oracle';

  /**
   * The primary key for the model.
   *
   * @var string
   */
  protected $primaryKey = 'v_userid';

  /**
   * Indicates if the IDs are auto-incrementing.
   *
   * @var bool
   */
  public $incrementing = false;

  /**
   * The "type" of the primary key ID.
   *
   * @var string
   */
  protected $keyType = 'string';

  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);

    $this->setTable(DB::raw('tm_users@etpp'));
  }
}
