<?php

namespace App\Services;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\{Http, Log};

class PegawaiService extends BaseService
{
  public function __construct()
  {
    $config = config('app.http_request.api.pegdppkukm');
    foreach ($config as $key => $value) {
      $paddingKey = sprintf('api%s', Str::ucfirst($key));
      $this->setConfig($paddingKey, $value);
    }
  }

  protected function callService($nrk)
  {
    return Http::withBasicAuth($this->apiUsername, $this->apiPassword)
      ->withHeader('x-Gateway-APIKey', $this->apiXgateway)
      ->withOptions($this->getOptions())
      ->withQueryParameters(['nrk' => $nrk])
      ->get($this->apiEndpoint);
  }

  public function findByNrk($nrk)
  {
    $error = null;
    $response = null;

    try {
      $this->credentialCheck();

      $service = $this->callService($nrk);
      if (!$service->successful())
        throw new \Exception($service->body(), $service->status());

      $response = $service->json('results.0');
      $service->close();
    } catch (\Throwable $th) {
      $error = $th->getCode() == -99 ? $th->getMessage() : 'Terjadi kesalahan saat invoke service pegdppkukm';
      Log::error('Error saat invoke service pegdppkukm', [
        'payload' => ['nrk' => $nrk],
        'error' => [
          'code' => $th->getCode(),
          'message' => $th->getMessage(),
        ]
      ]);
    }

    return [$response, $error];
  }
}
