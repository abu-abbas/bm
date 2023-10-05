<?php

return [
  // Disabling the route() helper
  'skip-route-function' => true,

  //  exclude routes named
  'except' => [
    '_debugbar.*',
    'horizon.*',
    'ignition.*',
    'sanctum.*'
  ],

  'groups' => [
    'auth' => ['auth.*', 'backend.captcha.*'],
    'landing' => ['backend.*','frontend.*'],
    'admin' => ['backend.*', 'admin.*'],
  ]
];
