<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = [
      'slug' => $this->url,
      'username' => $this->username,
      'name' => $this->name,
      'email_verified_at' => $this->email_verified_at,
    ];

    return $data;
  }
}
