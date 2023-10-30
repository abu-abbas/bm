<?php

use App\Http\Controllers\ProductController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'product',
    'as' => 'product.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [ProductController::class, 'list'])->name('get');
    Route::post('/', [ProductController::class, 'store'])->name('store');
    Route::put('/', [ProductController::class, 'edit'])->name('edit');
    Route::delete('/', [ProductController::class, 'drop'])->name('drop');

    Route::get('generate-qrcode/{slug}', [ProductController::class, 'qrcode'])->name('qrcode');
  });
});
