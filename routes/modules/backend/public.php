<?php

use App\Http\Controllers\DownloadController;
use App\Http\Controllers\TenantController;

Route::group(['prefix' => 'backend', 'as' => 'backend.'], function () {
  Route::get('/captcha', [App\Http\Controllers\CaptchaController::class, 'index'])->name('captcha.generate');

  Route::group(['prefix' => 'landing', 'as' => 'landing.'], function () {
    Route::group(['prefix' => 'tenant', 'as' => 'tenant.'], function() {
      Route::get('/', [TenantController::class, 'list'])->name('get');
    });
  });

  Route::get(
    'preview/{media:uuid}/{conversion?}/{name?}',
    [DownloadController::class, 'inlineDownload']
  )->name('inline.download');
});
