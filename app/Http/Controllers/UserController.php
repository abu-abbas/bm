<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\{JsonResponse, Request};
use App\Repositories\Contracts\UserRepositoryInterface;

class UserController extends Controller
{
  protected $user;

  public function __construct(UserRepositoryInterface $user)
  {
    $this->user = $user;
  }

  public function list(Request $request)
  {
    [$response, $error] = $this->user->list($request);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    if (!$response) {
      return response()->json([
        'status' => 'error',
        'message' => 'User tidak ditemukan'
      ], JsonResponse::HTTP_NOT_FOUND);
    }

    return $request->fetch_first
      ? response()->json(['status' => 'success', 'data' => new UserResource($response)])
      : UserResource::collection($response)->additional(['status' => 'success']);
  }

  public function store(UserRequest $request)
  {
    $request->validated();
    $user = $this->user->make([
      'username' => $request->username,
      'name' => $request->name,
      'password' => $request->password,
      'is_etpp' => 0,
      'email_verified_at' => now(),
      'created_by' => auth()->user()->username,
      'created_at' => now(),
    ]);

    [$response, $error] = $this->user->updateOrCreateAdmin($user);

    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil ditambahkan',
      'data' => new UserResource($response)
    ]);
  }

  public function drop(UserRequest $request)
  {
    $request->validated();

    $user = $this->user->findByusername($request->username);
    if (!$user) {
      return response()->json([
        'status' => 'error',
        'message' => 'Tenant tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    [, $error] = $this->user->drop($user);
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    return response()->json([
      'status' => 'success',
      'message' => 'Data berhasil dihapus',
    ]);
  }

  public function edit(UserRequest $request)
  {
    $request->validated();

    $found = $this->user->findByUsername($request->username);
    if (!$found) {
      return response()->json([
        'status' => 'error',
        'message' => 'Pengguna tidak ditemukan.'
      ], JsonResponse::HTTP_EXPECTATION_FAILED);
    }

    $user = $this->user->fill($found, [
      'username' => $request->username,
      'name' => $request->name,
      'password' => $request->password,
      'updated_by' => auth()->user()->username,
      'updated_at' => now(),
    ]);

    [$response, $error] = $this->user->updateOrCreateAdmin($user, 'edit');
    if (!is_null($error)) {
      return response()->json([
        'status' => 'error',
        'message' => $error
      ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }


    $message = $request->_method == 'put' ? 'diubah' : 'ditambahkan';
    return response()->json([
      'status' => 'success',
      'message' => "Data berhasil {$message}",
      'data' => new UserResource($response)
    ]);
  }
}
