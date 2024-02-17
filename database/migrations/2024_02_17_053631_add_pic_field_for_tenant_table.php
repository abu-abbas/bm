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
    Schema::table('tenants', function (Blueprint $table) {
      $table->string('pic_nama')->nullable();
      $table->string('pic_jabatan')->nullable();
      $table->string('pic_kontak')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('tenants', function (Blueprint $table) {
      $table->removeColumn('pic_nama');
      $table->removeColumn('pic_jabatan');
      $table->removeColumn('pic_kontak');
    });
  }
};
