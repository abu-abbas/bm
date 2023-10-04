<?php

Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLogin'])->name('login');
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

Route::group(['prefix' => 'auth', 'as' => 'auth.'], function () {
  Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
});
