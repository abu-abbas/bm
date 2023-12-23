<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\{Request, UploadedFile};


interface EventRepositoryInterface
{
  /**
   * Create or update a complaint of model and persist them to the database
   *
   * @param \Illuminate\Http\Request $eloquentModel
   * @return array <response, error>
   */
  public function list(Request $request): array;
}
