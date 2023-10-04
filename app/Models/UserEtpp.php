<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserEtpp extends Authenticatable
{
  /**
   * The connection name for the model.
   *
   * @var string|null
   */
  protected $connection = 'etpp';

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

    $this->setTable('tm_users');
  }

  /**
   * Get the password for the user.
   *
   * @return string
   */
  public function getAuthPassword()
  {
    return $this->v_userpass;
  }

  /**
   * Get the unique identifier for the user.
   *
   * @return mixed
   */
  public function getAuthIdentifier()
  {
    return $this->v_userid;
  }
}
