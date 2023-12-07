<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use PharIo\Manifest\Url;

class ProductResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $tenant = $this->tenant;
    $data = [
      'slug' => $this->url,
      'tenant_name' => $tenant?->name,
      'product_name' => $this->name,
      'description' => $this->description,
      'minimum_qty' => $this->minimum_qty,
      'minimum_unit' => $this->minimum_unit,
      'tkdn_value' => $this->tkdn_value,
      'price' => $this->price,
      'condition' => $this->condition,
      'images' => [],
      'landing_url' => sprintf('%s%s/%s', config('app.url'), $tenant?->url, $this->url)
    ];

    foreach ($this->media as $media) {
      $data['images'][] = route('backend.inline.download', ['media' => $media]);
    }

    return $data;
  }
}
