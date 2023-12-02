<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return auth()->check();
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {

    if (request('_method') == 'delete') {
      return ['username' => 'required'];
    }

    $rules = [
      'username' => ['required', 'min:3', 'max:250'],
      'name' => ['required', 'min:3', 'max:250'],
    ];

    if (request('_method') == 'post') {
      $rules['password'] = ['required', 'min:6'];
      return $rules;
    }

    return $rules;
  }

  /**
   * Get custom messages for validator errors.
   *
   * @return array
   */
  public function messages()
  {
    return [
      'username.required' => 'Username user diperlukan',
      'username.min' => 'Username username minimal mengandung :min karakter',
      'username.max' => 'Username username maksimal mengandung :max karakter',
      'name.required' => 'Nama user diperlukan',
      'name.min' => 'Nama user minimal mengandung :min karakter',
      'name.max' => 'Nama user maksimal mengandung :max karakter',
      
      'password.required' => 'Password user diperlukan',
      'password.min' => 'Password user minimal mengandung :min karakter',
    ];
  }

}
