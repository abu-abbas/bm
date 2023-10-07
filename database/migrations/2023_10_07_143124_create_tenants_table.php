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
    Schema::create('tenants', function (Blueprint $table) {
      $table->id();
      $table->string('name', 250)->comment('tenant name');
      $table->string('short_location', 50)->nullable()->comment('short location eg. jakarta pusat');
      $table->string('description', 2000)->nullable()->comment('tenant description');
      $table->timestamp('join_date')->nullable()->comment('tenant join date');
      $table->unsignedInteger('reputation')->default(0)->comment('tenant reputation');
      $table->unsignedTinyInteger('is_online')->default(1)->comment('tenant online status');

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
    Schema::dropIfExists('tenants');
  }
};
