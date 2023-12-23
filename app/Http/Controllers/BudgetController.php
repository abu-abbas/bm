<?php

namespace App\Http\Controllers;

use App\Http\Resources\BudgetResources;
use Illuminate\Http\Request;
use App\Repositories\Contracts\BudgetRepositoryInterface;

class BudgetController extends Controller
{
  protected $budget;

  public function __construct(BudgetRepositoryInterface $budget)
  {
    $this->budget = $budget;
  }

  public function search(Request $request)
  {
    $value = $request->value;
    $key = $request->type ?? 'kegiatan';
    $addons = decrypt_params($request->addons ?? '');
    $request->merge(['type' => $key]);

    $budget = $this->budget->list($value, $key, $addons);

    return BudgetResources::collection($budget)
      ->additional(['success' => true]);
  }

  public function voi(Request $request)
  {
    dd($request->toArray());
  }
}
