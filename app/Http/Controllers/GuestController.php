<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\{EventResource, ProductResource};
use App\Repositories\Contracts\{EventRepositoryInterface, ProductRepositoryInterface};

class GuestController extends Controller
{
  protected $event;
  protected $product;

  public function __construct(
    EventRepositoryInterface $event,
    ProductRepositoryInterface $product
  ) {
    $this->event = $event;
    $this->product = $product;
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function landing(Request $request)
  {
    [$events, $error] = $this->event->activeOrLastEvent($request);
    if (!is_null($error)) $events = [];

    $response = [];
    if (count($events) > 0) {
      session()->put('eventId', $events[0]?->id);
      $limit = config('app.landing_product_limit');
      $event = $events[0]?->id;
      [$response, $error] = $this->product->newestByEventId($event, $limit);
      if (!is_null($error)) $response = [];
    }

    return view('layouts.app.landing')
      ->with('events', EventResource::collection($events))
      ->with('products', ProductResource::collection($response['products']))
      ->with('products_count', $response['product_count']);
  }

  public function product()
  {
    return view('layouts.app.landing.products.dekstop');
  }
}
