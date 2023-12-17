<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
  use HasFactory;

  /**
   * The connection name for the model.
   *
   * @var string|null
   */
  protected $connection = 'sipkd';

  /**
   * The primary key for the model.
   *
   * @var string
   */
  // protected $primaryKey = 'v_userid';

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

    $this->setTable('newsipkd.vw_dparskbas');
  }
}
