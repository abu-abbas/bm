<?php

namespace App\Services;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\{Http, Log};

class EtppAuthService extends BaseService
{
  public function __construct()
  {
    $config = config('app.http_request.api.etpp_auth');
    foreach ($config as $key => $value) {
      $paddingKey = sprintf('api%s', Str::ucfirst($key));
      $this->setConfig($paddingKey, $value);
    }
  }

  protected function callService($nrk, $password)
  {
    return Http::withBasicAuth($this->apiUsername, $this->apiPassword)
      ->withHeader('x-Gateway-APIKey', $this->apiXgateway)
      ->withOptions($this->getOptions())
      ->withQueryParameters([
        'nrk' => $nrk,
        'password' => base64_encode($password)
      ])
      ->get($this->apiEndpoint);
  }

  public function validateToLogin($nrk, $password)
  {
    $error = null;
    $response = null;

    try {
      $this->credentialCheck();

      $service = $this->callService($nrk, $password);
      if (!$service->successful())
        throw new \Exception($service->body(), $service->status());

      $response = $service->json('hasil');
      $service->close();
    } catch (\Throwable $th) {
      $error = $th->getCode() == -99 ? $th->getMessage() : 'Terjadi kesalahan saat invoke service etpp_auth';
      Log::error('Error saat invoke service etpp_auth', [
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
