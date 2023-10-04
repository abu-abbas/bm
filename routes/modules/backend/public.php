<?php

Route::group(['prefix' => 'backend', 'as' => 'backend.'], function () {
  Route::get('/captcha', [App\Http\Controllers\CaptchaController::class, 'index'])->name('captcha.generate');
});
