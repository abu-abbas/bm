<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Hash;

class CheckUserEtpp implements ValidationRule
{
  protected $error;
  protected $userEtpp;

  /**
   * Create a new rule instance.
   *
   * @return void
   */
  public function __construct($userEtpp = null, $error = null)
  {
    $this->error = $error;
    $this->userEtpp = $userEtpp;
  }

  /**
   * Run the validation rule.
   *
   * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
   */
  public function validate(string $attribute, mixed $value, Closure $fail): void
  {
    if (!is_null($this->error)) $fail($this->error);

    $check = Hash::check($value, $this->userEtpp->v_userpass);
    if (!$check) $fail('Password yang Anda masukkan tidak sesuai');
  }
}
