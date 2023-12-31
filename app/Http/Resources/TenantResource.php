<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TenantResource extends JsonResource
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
      'id' => $this->id,
      'name' => $this->name,
      'short_location' => $this->short_location,
      'description' => $this->description,
      // 'join_date' => $this->join_date,
      // 'reputation' => $this->reputation,
      // 'is_online' => $this->is_online,
      'logo' => [
        'thumb' => null,
        'original' => null,
      ],
      'products' => ProductResource::collection($this->products),
    ];

    if (Str::contains($request->url(), 'admin', true)) {
      $data['id'] = $this->id;
    }

    if ($this->singleMedia) {
      $data['logo']['thumb'] = route('backend.inline.download', ['media' => $this->singleMedia, 'thumb']);
      $data['logo']['original'] = route('backend.inline.download', ['media' => $this->singleMedia]);
    }

    return $data;
  }
}
