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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('event_name', 255)->nullable();
            $table->string('event_header', 255)->nullable();
            $table->string('event_subheader', 255)->nullable();
            $table->dateTime('start_at');
            $table->dateTime('finish_at');
            $table->string('location', 255)->nullable();
            $table->integer('publish')->default(0); // Ensure only one default value

            // Additional fields
            $table->string('created_by', 100)->nullable();
            $table->timestamp('created_at')->nullable();
            $table->string('updated_by', 100)->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('deleted_by', 100)->nullable();
            $table->softDeletes();

            $table->timestamps(); // Laravel's default 'created_at' and 'updated_at' fields

            // Add unique constraint to ensure only one published event
            $table->unique('publish');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
