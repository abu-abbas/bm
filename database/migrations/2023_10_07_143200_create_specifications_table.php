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
    Schema::create('specifications', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('product_id')->comment('product_id from products table');
      $table->string('label', 250)->comment('specification label');
      $table->string('value', 2000)->comment('specification value');
      $table->unsignedTinyInteger('order_no')->default(0)->comment('note order');

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
    Schema::dropIfExists('specifications');
  }
};
