<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class TenantRequest extends FormRequest
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
    $allowedMimes = [
      'image/gif',
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/tiff',
      'image/webp',
    ];

    if (request('_method') == 'delete') {
      return ['slug' => 'required'];
    }

    $rules = [
      'name' => ['required', 'min:3', 'max:250'],
      'logo' => ['required', File::types($allowedMimes)->max(5000)],
      'short_location' => ['max:50'],
      'description' => ['max:2000'],
    ];

    if (request('_method') == 'put') {
      $rules['slug'] = ['required'];
      array_shift($rules['logo']) ;
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
      'slug.required' => 'slug diperlukan',

      'name.required' => 'Nama tenant diperlukan',
      'name.min' => 'Nama tenant minimal mengandung :min karakter',
      'name.max' => 'Nama tenant maksimal mengandung :max karakter',

      'logo.required' => 'Logo diperlukan',
      'logo.max' => 'Logo harus lebih kecil dari :max KB',
      'logo.mimes' => 'Format logo harus :mimes',

      'short_location.max' => 'Lokasi singkat maksimal mengandung :max karakter',
      'description.max' => 'Deskripsi maksimal mengandung :max karakter',
    ];
  }

}
