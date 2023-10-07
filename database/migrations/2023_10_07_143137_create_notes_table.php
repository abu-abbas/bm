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
    Schema::create('notes', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('tenant_id')->comment('tenant_id from tenants table');
      $table->string('title', 250)->comment('note title');
      $table->string('description', 2000)->comment('note description');
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
    Schema::dropIfExists('notes');
  }
};
