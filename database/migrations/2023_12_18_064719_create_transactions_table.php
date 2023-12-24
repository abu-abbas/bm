<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('transactions', function (Blueprint $table) {
      $table->id();
      $table->timestamp('trx_date');
      $table->unsignedBigInteger('event_id')->nullable();
      $table->unsignedBigInteger('product_id');
      $table->string('username', 6);
      $table->unsignedFloat('value_of_interest', 20);
      $table->string('nama', 100);
      $table->string('nip', 18);
      $table->string('kojab', 6);
      $table->string('jabatan', 150);
      $table->string('kolok', 9);
      $table->string('lokasi_kerja', 100);
      $table->string('spmu', 4);
      $table->string('kode_pd', 9);
      $table->string('perangkat_daerah', 100);
      $table->string('email', 100);
      $table->string('sipkd', 10);
      $table->unsignedBigInteger('i_rsk_no');
      $table->unsignedBigInteger('i_idrskbas');
      $table->string('c_giat', 14);
      $table->string('n_giat', 1500);
      $table->string('n_rsk', 400);
      $table->string('c_akun', 25);
      $table->string('n_akun', 400);
      $table->unsignedFloat('v_dpa_rsk', 20);
      $table->unsignedFloat('v_tapd_rsk', 20);
      $table->string('n_sumberdana', 150);

      // log
      $table->string('created_by', 100)->nullable();
      $table->timestamp('created_at')->nullable();
      $table->string('updated_by', 100)->nullable();
      $table->timestamp('updated_at')->nullable();
      $table->string('deleted_by', 100)->nullable();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('transactions');
  }
};
