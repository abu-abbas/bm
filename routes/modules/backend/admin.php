<?php

Route::group(
  [
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => ['auth', 'admin.only'],
  ],
  function () {
    Route::get('/{vue_capture?}', [App\Http\Controllers\HomeController::class, 'index'])
      ->where('vue_capture', '[\/\w\.-]*')
      ->name('home');
  });


