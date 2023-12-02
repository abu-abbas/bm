<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BudgetResources extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = [];

    if ($request->type == 'kegiatan') {
      $data['kode_kegiatan'] = $this->c_giat;
      $data['nama_kegiatan'] = $this->n_giat;
      return $data;
    }

    if ($request->type == 'rsk') {
      $data['kode_rsk'] = encrypt_params($this->i_rsk_no);
      $data['nama_rsk'] = $this->n_rsk;
      return $data;
    }

    if ($request->type == 'akun') {
      $data['kode_akun'] = $this->c_akun;
      $data['nama_akun'] = $this->n_akun;
      $data['id_rskbas'] = encrypt_params($this->i_idrskbas);
      $data['dpa_rsk'] = $this->v_dpa_rsk;
      return $data;
    }

    // $data['kode_kegiatan'] = $this->c_giat;
    // $data['nama_kegiatan'] = $this->n_giat;
    // $data['idrskbas'] = encrypt_params($this->i_idrskbas);
    // $data['rsk_no'] = encrypt_params($this->i_rsk_no);
    // $data['rsk'] = $this->n_rsk;
    // $data['akun'] = $this->c_akun;
    // $data['akun'] = $this->n_akun;
    // $data['tapd_rsk'] = $this->v_tapd_rsk;
    // $data['rsk_pen'] = $this->c_rsk_pen;

    return $data;
  }
}
