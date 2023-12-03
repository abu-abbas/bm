<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{
  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function landing()
  {
    return view('layouts.app.landing');
  }

  public function product()
  {
    return view('layouts.app.landing.products.dekstop');
  }
}
