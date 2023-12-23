<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
      'tenant' => ['required'],
      'name' => ['required', 'min:3', 'max:250'],
      'description' => ['required', 'max:2000'],
      'min_qty' => ['required', 'min:1', 'max:11'],
      'min_unit' => ['required', 'min:1', 'max:11'],
      'tkdn' => ['required', 'numeric'],
      'price' => ['required', 'min:1', 'max:200'],
      'condition' => ['required'],
      'pict.*' => ['required', File::types($allowedMimes)->max(5000)],
    ];

    if (request('_method') == 'put') {
      $rules['slug'] = ['required'];
      array_shift($rules['pict.*']) ;
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

      'tenant.required' => 'Tenan diperlukan',

      'name.required' => 'Nama tenant diperlukan',
      'name.min' => 'Nama tenant minimal mengandung :min karakter',
      'name.max' => 'Nama tenant maksimal mengandung :max karakter',

      'description.required' => 'Deskripsi barang diperlukan',
      'description.max' => 'Deskripsi barang maksimal mengandung :max karakter',

      'min_qty.required' => 'Jumlah kuantiti diperlukan',
      'min_qty.min' => 'Jumlah kuantiti minimal mengandung :min karakter',
      'min_qty.max' => 'Jumlah kuantiti maksimal mengandung :max karakter',

      'min_unit.required' => 'Jumlah unit diperlukan',
      'min_unit.min' => 'Jumlah unit minimal mengandung :min karakter',
      'min_unit.max' => 'Jumlah unit maksimal mengandung :max karakter',

      'tkdn.required' => 'Nilai TKDN diperlukan',
      'tkdn.min' => 'Nilai TKDN minimal mengandung :min karakter',
      'tkdn.max' => 'Nilai TKDN maksimal mengandung :max karakter',

      'price.required' => 'Harga diperlukan',
      'price.min' => 'Harga minimal mengandung :min karakter',
      'price.max' => 'Harga maksimal mengandung :max karakter',

      'condition.required' => 'Kondisi diperlukan',

      'files.required' => 'files diperlukan',
      'files.max' => 'files harus lebih kecil dari :max KB',
      'files.mimes' => 'Format files harus :mimes',
    ];
  }

}
