<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = [
      'id' => $this->id,
      'slug' => $this->url,
      'event_name' => $this->event_name,
      'event_header' => $this->event_header,
      'event_subheader' => $this->event_subheader,
      'start_at' => $this->start_at,
      'finish_at' => $this->finish_at,
      'location' => $this->location,
      'publish' => $this->publish,
      'flag' => $this?->flag,
    ];

    return $data;
  }
}
