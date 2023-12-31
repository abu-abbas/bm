<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui">

  <!-- Call App Mode on ios devices -->
  <meta name="apple-mobile-web-app-capable" content="yes" />

  <!-- Remove Tap Highlight on Windows Phone IE -->
  <meta name="msapplication-tap-highlight" content="no">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <!-- Page Title -->
  <title>@yield('title', config('app.name', 'Laravel'))</title>

  <!-- Scripts -->
  @vite([
    'resources/sass/app.scss',

    'resources/js/app/landing.js',
  ])
</head>
<body class="bg-white">
  <div id="app">
    @yield('content')
  </div>

  <form id="logout-form" action="{{ route('auth.logout') }}" method="POST" style="display: none;">
    @csrf
  </form>
  @routes('landing')

  <script>
    /**
     * this is a hack for error: global is not defined
     */
    var global = global || window
  </script>

  <script type="application/json" data-settings-selector="settings-json">
    {!! json_encode([
      'locale' => app()->getLocale(),
      'timezone' => config('app.timezone'),
      'appname' => config('app.name'),
      'is_local' => config('app.env') == 'production' ? false : true,
      'current_date' => Str::now('Y-m-d'),
      'home' => route('home'),
      'validateCaptcha' => config('app.env') === 'production',
      'user' => session('user')
    ]) !!}
  </script>
</body>
</html>
