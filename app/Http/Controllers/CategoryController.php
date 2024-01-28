<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResources;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use Illuminate\Http\{JsonResponse, Request};

class CategoryController extends Controller
{
    protected $category;

    public function __construct(CategoryRepositoryInterface $category)
    {
        $this->category = $category;
    }
    public function list(Request $request)
    {
        [$response, $error] = $this->category->list($request);

        if (!is_null($error)) {
            return response()->json([
                'status' => 'error',
                'message' => $error
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }

        if (!$response) {
            return response()->json([
                'status' => 'error',
                'message' => 'Pivot tidak ditemukan'
            ], JsonResponse::HTTP_NOT_FOUND);
        }

        return $request->fetch_first
            ? response()->json(['status' => 'success', 'data' => new CategoryResources($response)])
            : CategoryResources::collection($response)->additional(['status' => 'success']);
    }
}
