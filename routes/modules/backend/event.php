<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\PivotController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'event',
    'as' => 'event.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [EventController::class, 'list'])->name('get');
    Route::post('/', [EventController::class, 'store'])->name('store');
    Route::put('/', [EventController::class, 'edit'])->name('edit');
    Route::delete('/', [EventController::class, 'drop'])->name('drop');
  });
  Route::group([
    'prefix' => 'pivot',
    'as' => 'pivot.',
    'middleware' => ['auth', 'admin.only'],
  ], function () {
    Route::get('/', [PivotController::class, 'list'])->name('get');
    Route::post('/', [PivotController::class, 'store'])->name('store');
    Route::put('/', [PivotController::class, 'edit'])->name('edit');
    Route::delete('/', [PivotController::class, 'drop'])->name('drop');
  });
});
