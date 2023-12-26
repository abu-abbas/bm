<?php

use App\Http\Controllers\TransactionController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'transaction',
    'as' => 'transaction.',
    'middleware' => ['auth'],
  ], function () {
    Route::post('/', [TransactionController::class, 'addVoi'])->name('store');
    Route::get('list', [TransactionController::class, 'list'])->name('list');
  });
});
