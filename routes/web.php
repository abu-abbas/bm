<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//   return view('welcome');
// });

// Auth::routes();

include_route_files(__DIR__ . '/modules/');

Route::get('/', [App\Http\Controllers\GuestController::class, 'landing'])
  // ->where('vue_capture', '[\/\w\.-]*')
  ->name('home');
Route::get('/product', [App\Http\Controllers\GuestController::class, 'product'])
  ->name('product');
