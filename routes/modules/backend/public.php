<?php

use App\Http\Controllers\DownloadController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TenantController;
use App\Http\Controllers\ProductController;

Route::group(['prefix' => 'backend', 'as' => 'backend.'], function () {
  Route::get('/captcha', [App\Http\Controllers\CaptchaController::class, 'index'])->name('captcha.generate');

  Route::group(['prefix' => 'landing', 'as' => 'landing.'], function () {
    Route::group(['prefix' => 'tenant', 'as' => 'tenant.'], function() {
      Route::get('/', [TenantController::class, 'list'])->name('get');
    });
  });
  
  Route::group(['prefix' => 'landing', 'as' => 'landing.'], function () {
    Route::group(['prefix' => 'product', 'as' => 'product.'], function() {
      Route::get('/{tenant}/{product}', [ProductController::class, 'getProduct'])->name('getsingelproduct');
    });
  });
  
  Route::group(['prefix' => 'landing', 'as' => 'landing.'], function () {
    Route::group(['prefix' => 'event', 'as' => 'event.'], function() {
      Route::get('/', [EventController::class, 'list'])->name('get');
    });
  });

  Route::get(
    'preview/{media:uuid}/{conversion?}/{name?}',
    [DownloadController::class, 'inlineDownload']
  )->name('inline.download');
});
