<?php

use App\Http\Controllers\TenantController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'tenant',
    'as' => 'tenant.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [TenantController::class, 'list'])->name('get');
    Route::post('/', [TenantController::class, 'store'])->name('store');
    Route::put('/', [TenantController::class, 'edit'])->name('edit');
    Route::delete('/', [TenantController::class, 'drop'])->name('drop');

    Route::get('generate-qrcode/{slug}', [TenantController::class, 'qrcode'])->name('qrcode');
  });
});
