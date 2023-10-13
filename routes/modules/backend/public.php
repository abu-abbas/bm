<?php

use App\Http\Controllers\DownloadController;

Route::group(['prefix' => 'backend', 'as' => 'backend.'], function () {
  Route::get('/captcha', [App\Http\Controllers\CaptchaController::class, 'index'])->name('captcha.generate');

  Route::get(
    'preview/{media:uuid}/{conversion?}/{name?}',
    [DownloadController::class, 'inlineDownload']
  )->name('inline.download');
});
