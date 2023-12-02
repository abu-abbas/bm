<?php

use App\Http\Controllers\UserController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'user',
    'as' => 'user.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [UserController::class, 'list'])->name('get');
    Route::post('/', [UserController::class, 'store'])->name('store');
    Route::put('/', [UserController::class, 'edit'])->name('edit');
    Route::delete('/', [UserController::class, 'drop'])->name('drop');
  });
});
