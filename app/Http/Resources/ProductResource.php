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
    $hasTransaction = $this->has_transaction_count;

    $data = [
      'slug' => $this->url,
      'tenant_id' => $this->tenant_id,
      'tenant_name' => $tenant?->name,
      'tenant_slug' => $tenant?->url,
      'product_name' => $this->name,
      'description' => $this->description,
      'minimum_qty' => $this->minimum_qty,
      'minimum_unit' => $this->minimum_unit,
      'tkdn_value' => $this->tkdn_value,
      'price' => $this->price,
      'condition' => $this->condition,
      'ecatalogue' => $this->ecatalogue,
      'images' => [],
      'landing_url' => sprintf('%st/%s/p/%s', config('app.url'), $tenant?->url, $this->url),
      'has_transaction' => $hasTransaction && $hasTransaction > 0,
    ];

    if ($categories = $this->categories) {
      $data['categories'] = CategoryResources::collection($categories);
    }

    foreach ($this->media as $media) {
      $data['images'][] = route('backend.inline.download', ['media' => $media]);
    }

    return $data;
  }
}
