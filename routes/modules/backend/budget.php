<?php

use App\Http\Controllers\BudgetController;

Route::group([
  'prefix' => 'backend',
  'as' => 'backend.',
], function () {
  Route::group([
    'prefix' => 'budget',
    'as' => 'budget.',
    'middleware' => ['auth'],
  ], function () {
    Route::get('/', [BudgetController::class, 'search'])->name('get');
    Route::get('all', [BudgetController::class, 'all'])->name('all');
  });
});
