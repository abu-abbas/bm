<?php

Route::group(
  [
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => ['auth', 'admin.only'],
  ],
  function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
  });


