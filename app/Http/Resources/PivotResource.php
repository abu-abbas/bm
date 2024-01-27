<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PivotResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = [
      "id" => $this->id ?? null,
      "name" => $this->name ?? null,
      "url" => $this->url ?? null,
      "pivot" =>$this->pivot ?? null,
      "key_1" =>$this->key_1 ?? null,
      "key_2" =>$this->key_2 ?? null,
    ];
    return $data;
  }
}
