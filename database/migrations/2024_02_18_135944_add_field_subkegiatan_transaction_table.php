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
    Schema::table('transactions', function (Blueprint $table) {
      $table->string('c_subgiat')->nullable();
      $table->string('n_subgiat', 2000)->nullable();
      $table->unsignedInteger('product_qty')->default(1);
      $table->unsignedFloat('product_total', 20)->default(0);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('transactions', function (Blueprint $table) {
      $table->removeColumn('c_subgiat');
      $table->removeColumn('n_subgiat');
      $table->removeColumn('product_qty');
      $table->removeColumn('product_total');
    });
  }
};
