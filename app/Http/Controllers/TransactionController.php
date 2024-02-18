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
    $snapshot = $this->makeSnapshot($product);

    [,$error] = $this->transaction->addVoi($transaction, $snapshot);
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
      'c_giat' => $request->anggaran['kode_kegiatan'],
      'n_giat' => $request->anggaran['nama_kegiatan'],
      'c_subgiat' => $request->anggaran['kode_subkegiatan'],
      'n_subgiat' => $request->anggaran['nama_subkegiatan'],
      'i_rsk_no' => $request->anggaran['no_rsk'],
      'n_rsk' => $request->anggaran['nama_rsk'],
      'i_idrskbas' => decrypt_params($request->anggaran['slug']),
      'c_akun' => $request->anggaran['kode_akun'],
      'n_akun' => $request->anggaran['nama_akun'],
      'v_dpa_rsk' => $request->anggaran['dpa_rsk'],
      'v_tapd_rsk' => $request->anggaran['tapd_rsk'],
      'n_sumberdana' => $request->anggaran['sumber_dana'],
      'product_qty' => $request->qty,
      'product_total' => $request->qty * $product->price,
      'tenant_id' => $product->tenant_id,
      'created_by' => $username,
      'created_at' => now(),
    ]);
  }

  protected function makeSnapshot($product)
  {
    $snapshot = $this->transaction->make([
      'tenant_id' => $product->tenant_id,
      'name' => $product->name,
      'description' => $product->description,
      'minimum_qty' => $product->minimum_qty,
      'minimum_unit' => $product->minimum_unit,
      'tkdn_value' => $product->tkdn_value,
      'price' => $product->price,
      'condition' => $product->condition,
      'ecatalogue' => $product->ecatalogue,
      'created_by' => $product->created_by,
      'created_at' => $product->created_at,
      'updated_by' => $product->updated_by,
      'updated_at' => $product->updated_at,
      'url' => $product->url,
    ], 'snapshot');

    return $snapshot;
  }
}
