<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BudgetResources;
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

  public function all(Request $request)
  {
    $request->merge(['all_in_one' => true]);
    $search = strtolower($request->search);
    $budget = $this->budget->all($search);

    return BudgetResources::collection($budget)
      ->additional(['success' => true]);
  }
}
