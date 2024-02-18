<?php

namespace App\Services;

class BaseService
{
  protected $apiUsername;
  protected $apiPassword;
  protected $apiEndpoint;
  protected $apiXgateway;

  public function setConfig($key, $value)
  {
    $this->{$key} = $value;
  }

  public function getOptions()
  {
    $options['verify'] = config('app.http_request.options.service_verify');

    if (config('app.http_request.options.use_proxy')) {
      $options['proxy']['http'] = config('app.http_request.options.http_proxy');
      $options['proxy']['https'] = config('app.http_request.options.http_proxy');
    }

    return $options;
  }

  public function credentialCheck()
  {
    if (!$this->apiUsername)
      throw new \Exception('Username service dibutuhkan', -99);

    if (!$this->apiPassword)
      throw new \Exception('Password service dibutuhkan', -99);

    if (!$this->apiXgateway)
      throw new \Exception('API Gateway Key service dibutuhkan', -99);

    if (!$this->apiEndpoint)
      throw new \Exception('Endpoint service dibutuhkan', -99);
  }
}
