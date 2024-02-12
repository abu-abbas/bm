<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use Illuminate\Http\Request;
use App\Repositories\Contracts\EventRepositoryInterface;

class GuestController extends Controller
{
  protected $event;

  public function __construct(EventRepositoryInterface $event)
  {
    $this->event = $event;
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function landing(Request $request)
  {
    [$response, $error] = $this->event->activeOrLastEvent($request);
    if (!is_null($error)) $response = [];

    return view('layouts.app.landing')->with('events', EventResource::collection($response));
  }

  public function product()
  {
    return view('layouts.app.landing.products.dekstop');
  }
}
