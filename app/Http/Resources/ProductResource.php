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
    // dd($this);
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
      // 'join_date' => $this->join_date,
      // 'reputation' => $this->reputation,
      // 'is_online' => $this->is_online,
      // 'logo' => [
      //   'thumb' => null,
      //   'original' => null,
      // ],
    ];

    // if ($this->singleMedia) {
    //   $data['logo']['thumb'] = route('backend.inline.download', ['media' => $this->singleMedia, 'thumb']);
    //   $data['logo']['original'] = route('backend.inline.download', ['media' => $this->singleMedia]);
    // }

    return $data;
  }
}
