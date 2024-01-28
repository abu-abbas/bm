<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TenantInEventRequest extends FormRequest
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
      return ['id' => 'required'];
    }

    if (request('_method') == 'post') {
      $rules = [
        'tenant' => ['required'],
      ];
      return $rules;
    }
    if (request('_method') == 'put') {
      $rules['slug'] = ['required'];
      return $rules;
    }
  }

  /**
   * Get custom messages for validator errors.
   *
   * @return array
   */
  public function messages()
  {
    return [
      'tenant.required' => 'Tenant diperlukan!',
    ];
  }

}
