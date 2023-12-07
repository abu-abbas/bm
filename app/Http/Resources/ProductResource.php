<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
      'tenant_id' => $this->tenant_id,
      'product_name' => $this->name,
      'tenant_name' => $this->nama_tenant,
      'description' => $this->description,
      'minimum_qty' => $this->minimum_qty,
      'minimum_unit' => $this->minimum_unit,
      'tkdn_value' => $this->tkdn_value,
      'price' => $this->price,
      'condition' => $this->condition,
      'images' => [],
    ];

    foreach ($this->media as $media) {
      $data['images'][] = route('backend.inline.download', ['media' => $media]);
    }

    return $data;
  }
}
