<?php

use App\Http\Controllers\CategoryController;
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
  Route::group([
    'prefix' => 'category',
    'as' => 'category.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [CategoryController::class, 'list'])->name('get');
    Route::post('/', [CategoryController::class, 'store'])->name('store');
    Route::put('/', [CategoryController::class, 'edit'])->name('edit');
    Route::delete('/', [CategoryController::class, 'drop'])->name('drop');
  });
});
