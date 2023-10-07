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
    Schema::create('references', function (Blueprint $table) {
      $table->id();
      $table->string('key', 250);
      $table->string('value', 2000);
      $table->string('type', 250);
      $table->string('reserve', 2000)->nullable();
      $table->unsignedInteger('order')->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('references');
  }
};
