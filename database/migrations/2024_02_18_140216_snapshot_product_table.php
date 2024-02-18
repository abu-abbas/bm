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
    Schema::create('snapshots', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('transaction_id')->comment('transaction_id from transactions table');
      $table->unsignedBigInteger('tenant_id')->comment('tenant_id from tenants table');
      $table->string('name', 250)->comment('product title');
      $table->string('url', 250)->comment('product url');
      $table->string('description', 2000)->comment('product description');
      $table->string('minimum_qty', 100)->default(1);
      $table->string('minimum_unit', 100)->comment('product minimum unit');
      $table->unsignedFloat('tkdn_value')->default(0)->comment('tkdn value of product');
      $table->unsignedFloat('price', 17, 2)->default(0)->comment('price product');
      $table->unsignedTinyInteger('condition')->default(1)->comment('product condition [1: baru, 2: bekas, 3: pre-order]');
      $table->unsignedTinyInteger('order_no')->default(0)->comment('product order');
      $table->string('ecatalogue', 255)->nullable();

      // log
      $table->string('created_by', 100)->nullable();
      $table->timestamp('created_at')->nullable();
      $table->string('updated_by', 100)->nullable();
      $table->timestamp('updated_at')->nullable();
      $table->string('deleted_by', 100)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('snapshots');
  }
};
