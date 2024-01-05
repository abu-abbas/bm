<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
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
        'event_name' => ['required', 'min:3', 'max:250'],
        'event_header' => ['required', 'min:3', 'max:250'],
        'event_subheader' => ['required', 'min:3', 'max:250'],
        'finish_at' => ['required', 'min:3', 'max:250'],
        'start_at' => ['required', 'min:3', 'max:250'],
        'location' => ['required', 'min:3', 'max:250'],
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
      'event_name.required' => 'Nama event diperlukan',
      'event_name.min' => 'Nama event minimal mengandung :min karakter',
      'event_name.max' => 'Nama event maksimal mengandung :max karakter',
      'event_header.required' => 'Header event diperlukan',
      'event_header.min' => 'Header event minimal mengandung :min karakter',
      'event_header.max' => 'Header event maksimal mengandung :max karakter',
      'event_subheader.required' => 'Subheader event diperlukan',
      'event_subheader.min' => 'Subheader event minimal mengandung :min karakter',
      'event_subheader.max' => 'Subheader event maksimal mengandung :max karakter',
      'finish_at.required' => 'Tanggal selesai diperlukan',
      'finish_at.min' => 'Tanggal selesai minimal mengandung :min karakter',
      'finish_at.max' => 'Tanggal selesai maksimal mengandung :max karakter',
      'start_at.required' => 'Tanggal mulai diperlukan',
      'start_at.min' => 'Tanggal mulai minimal mengandung :min karakter',
      'start_at.max' => 'Tanggal mulai maksimal mengandung :max karakter',
      'location.required' => 'Lokasi diperlukan',
      'location.min' => 'Lokasi minimal mengandung :min karakter',
      'location.max' => 'Lokasi maksimal mengandung :max karakter',
    ];
  }

}
