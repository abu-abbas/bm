<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResources;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\ProductRepositoryInterface;
use App\Repositories\Contracts\TransactionRepositoryInterface;

class TransactionController extends Controller
{
  protected $product;
  protected $transaction;

  public function __construct(
    ProductRepositoryInterface $product,
    TransactionRepositoryInterface $transaction
  ) {
    $this->product = $product;
    $this->transaction = $transaction;
  }

  public function list()
  {
    $transactions = $this->transaction->list();
    if (!$transactions) {
      return response()->json([
        'status' => 'error',
        'message' => 'Ketertarikan tidak ditemukan',
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Ketertarikan berhasil ditemukan',
      'data' => TransactionResources::collection($transactions)
    ]);
  }

  public function addVoi(Request $request)
  {
    $product = $this->product->findBySlug($request->product);
    if (!$product) {
      return response()->json([
        'status' => 'error',
        'message' => 'Produk tidak ditemukan',
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $transaction = $this->makeTransaction($request, $product);

    [, $error] = $this->transaction->addVoi($transaction);
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error,
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Ketertarikan berhasil ditambahkan',
    ]);
  }

  protected function makeTransaction(Request $request, Model $product)
  {
    $username = auth()->user()->username;

    return $this->transaction->make([
      'trx_date' => now(),
      'event_id' => $request->eventId,
      'product_id' => $product->id,
      'username' => $username,
      'value_of_interest' => $request->voi,
      'nama' => session('user.name'),
      'nip' => session('user.nip'),
      'kojab' => session('user.kojab'),
      'jabatan' => session('user.jabatan'),
      'kolok' => session('user.kolok'),
      'lokasi_kerja' => session('user.lokasi_kerja'),
      'spmu' => session('user.spmu'),
      'kode_pd' => session('user.kode_pd'),
      'perangkat_daerah' => session('user.perangkat_daerah'),
      'email' => session('user.email'),
      'sipkd' => session('user.sipkd'),
      'c_giat' => $request->kegiatan['kode_kegiatan'],
      'n_giat' => $request->kegiatan['nama_kegiatan'],
      'i_rsk_no' => decrypt_params($request->rsk['kode_rsk']),
      'n_rsk' => $request->rsk['nama_rsk'],
      'i_idrskbas' => decrypt_params($request->akun['id_rskbas']),
      'c_akun' => $request->akun['kode_akun'],
      'n_akun' => $request->akun['nama_akun'],
      'v_dpa_rsk' => $request->akun['dpa_rsk'],
      'v_tapd_rsk' => $request->akun['tapd_rsk'],
      'n_sumberdana' => $request->akun['sumber_dana'],
      'created_by' => $username,
      'created_at' => now(),
    ]);
  }
}
