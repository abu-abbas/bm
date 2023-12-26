<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResources extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = [];

    $data['trx_date'] = [
      'raw' => $this->trx_date,
      'fmt_long' => $this->trx_date->translatedFormat('l, j F Y'),
      'fmt_short' => $this->trx_date->translatedFormat('d M Y'),
    ];

    $data['nilai_ketertarikan'] = $this->value_of_interest;

    $data['akun'] = [
      'kode_akun' => $this->c_akun,
      'nama_akun' => $this->n_akun,
      'sumber_dana' => $this->n_sumberdana,
      'dpa_rsk' => $this->v_dpa_rsk,
      'tapd_rsk' => $this->v_tapd_rsk,
    ];

    $data['product'] = null;
    if ($product = $this->product) {
      $data['product'] = new ProductResource($product);
    }

    return $data;
  }
}
