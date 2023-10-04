<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

if (!function_exists('custom_captcha')) {
  /**
   * @param string $config
   * @return array|ImageManager|mixed
   * @throws Exception
   */
  function custom_captcha(string $config = 'default', $api = false)
  {
    return app('captcha')->createCaptcha($config, $api);
  }
}

if (!function_exists('check_captcha')) {
  /**
   * @param string $string
   * @return bool
   */
  function check_captcha(string $string)
  {
    return app('captcha')->checkCaptcha($string);
  }
}

if (!function_exists('include_route_files')) {
  /**
   * Loops through a folder and requires all PHP files
   * Searches sub-directories as well.
   *
   * @param $folder
   */
  function include_route_files($folder)
  {
    try {
      $rdi = new recursiveDirectoryIterator($folder);
      $it = new recursiveIteratorIterator($rdi);

      while ($it->valid()) {
        if (
          !$it->isDot()
          && $it->isFile()
          && $it->isReadable()
          && $it->current()->getExtension() === 'php'
        ) {
          require $it->key();
        }

        $it->next();
      }
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}

/**
 * Translate prepared statement to ready execute statement
 */
if (!function_exists('getQueries')) {
  /**
   * getQueries function
   *
   * @param [type] $builder
   * @param boolean $clear
   * @return void
   */
  function getQueries($builder, $clear = false)
  {
    $addSlashes = str_replace('?', "'?'", $builder->toSql());
    $temp = vsprintf(str_replace('?', '%s', $addSlashes), $builder->getBindings());
    return $clear ? clean_and_trim($temp) : $temp;
  }
}

/**
 * Clean and trim string
 */
if (!function_exists('clean_and_trim')) {
  /**
   * Clean and trim string
   *
   * @param String $sentence
   * @return String
   */
  function clean_and_trim($sentence)
  {
    if (strlen($sentence) == 0) return $sentence;
    return trim(preg_replace('/\s+/', ' ', str_replace("\n", '', $sentence)));
  }
}

if (!function_exists('encrypt_params')) {
  function encrypt_params($id, $length = 5)
  {
    $salt = base64_encode(config('app.name'));

    $hashIds = new \Hashids\Hashids($salt, $length);
    $temp = bin2hex($id);
    return $hashIds->encodeHex($temp);
  }
}

if (!function_exists('decrypt_params')) {
  function decrypt_params($id, $length = 5)
  {
    $salt = base64_encode(config('app.name'));

    $hashIds = new \Hashids\Hashids($salt, $length);
    $decoded = $hashIds->decodeHex($id);

    if (!isset($decoded)) {
      return null;
    }
    return hex2bin($decoded);
  }
}

if (!function_exists("getIp")) {
  /**
   * Get IP address.
   *
   */
  function getIp()
  {
    foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) {
      if (array_key_exists($key, $_SERVER) === true) {
        foreach (explode(',', $_SERVER[$key]) as $ip) {
          $ip = trim($ip); // just to be safe
          if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
            return $ip;
          }
        }
      }
    }

    return request()->ip(); // it will return server ip when no client ip found
  }
}

if (!function_exists('encode_slug')) {
  function encode_slug($slug, $id, $length = 5)
  {
    $pad = substr($slug, ($length * -1));
    $encryptedId = encrypt_params($id);

    return $slug . $encryptedId . strrev($pad);
  }
}

if (!function_exists('decode_slug')) {
  function decode_slug($encrypted, $length = 5)
  {
    $pad = strrev(substr($encrypted, ($length * -1)));
    $woPad = substr($encrypted, 0, strlen($encrypted) - strlen($pad));
    return decrypt_params(substr($woPad, ((strlen($woPad) - (mb_strpos($woPad, $pad) + $length)) * -1)));
  }
}

if (!function_exists('file_path')) {
  function file_path($date, $id)
  {
    $dateFormat = new Carbon($date);
    $file_path = 'public/';
    return Storage::path($file_path . $dateFormat->format('Y/m/d') . '/' . $id);
  }
}

if (!function_exists('str_is')) {
  /**
   * Determine if a given string matches a given pattern.
   *
   * @param  string|array  $pattern
   * @param  string  $value
   * @return bool
   */
  function str_is($pattern, $value)
  {
    return Str::is($pattern, $value);
  }
}
