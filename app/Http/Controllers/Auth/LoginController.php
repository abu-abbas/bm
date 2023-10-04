<?php

namespace App\Http\Controllers\Auth;

use App\Rules\CheckCaptcha;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\{JsonResponse, Request};
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

  use AuthenticatesUsers;

  /**
   * Login username to be used by the controller.
   *
   * @var string
   */
  protected $username;

  /**
   * Where to redirect users after login.
   *
   * @var string
   */
  protected $redirectTo = RouteServiceProvider::HOME;

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->username = $this->findUsername();
    $this->middleware('guest')->except('logout');
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function findUsername()
  {
    $login = request('user_etpp') ? request('nrk') : request('email');
    $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
    request()->merge([$fieldType => $login]);
    return $fieldType;
  }

  /**
   * Get the needed authorization credentials from the request.
   *
   * @param \Illuminate\Http\Request $request
   *
   * @return array
   */
  protected function credentials(Request $request)
  {
    if ($request->user_etpp) {
      return [
        'v_userid' => $request->{$this->username},
        'password' => $request->password,
        'e_user_enable' => true
      ];
    }

    return [
      $this->username => $request->{$this->username},
      'password' => $request->password,
    ];
  }

  /**
   * Show the form login.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function showLogin()
  {
    return view('layouts.modules.auth');
  }

  /**
   * Handle a login request to the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function login(Request $request)
  {
    $this->validateLogin($request);

    // If the class is using the ThrottlesLogins trait, we can automatically throttle
    // the login attempts for this application. We'll key this by the username and
    // the IP address of the client making these requests into this application.
    if (
      method_exists($this, 'hasTooManyLoginAttempts') &&
      $this->hasTooManyLoginAttempts($request)
    ) {
      $this->fireLockoutEvent($request);

      return $this->sendLockoutResponse($request);
    }

    $attemp = $this->attemptLogin($request);
    if ($attemp) {
      if ($request->hasSession()) {
        $request->session()->put('auth.password_confirmed_at', time());
      }

      return $this->sendLoginResponse($request);
    }

    // If the login attempt was unsuccessful we will increment the number of attempts
    // to login and redirect the user back to the login form. Of course, when this
    // user surpasses their maximum number of attempts they will get locked out.
    $this->incrementLoginAttempts($request);

    return $this->sendFailedLoginResponse($request);
  }

  /**
   * Attempt to log the user into the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return bool
   */
  protected function attemptLogin(Request $request)
  {
    return $this->guard()->attempt(
      $this->credentials($request),
      $request->boolean('remember')
    );
  }

  /**
   * Send the response after the user was authenticated.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
   */
  protected function sendLoginResponse(Request $request)
  {
    $request->session()->regenerate();

    $this->clearLoginAttempts($request);

    if ($response = $this->authenticated($request, $this->guard()->user())) {
      return $response;
    }

    $data = [
      'redirect' => $request->user_etpp ? '/' : 'home'
    ];

    return $request->wantsJson()
      ? response()->json($data, JsonResponse::HTTP_ACCEPTED)
      : redirect()->intended($this->redirectPath());
  }

  /**
   * Validate the user login request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return void
   *
   * @throws \Illuminate\Validation\ValidationException
   */

  protected function validateLogin(Request $request)
  {
    $needValidate = [
      $this->username => ['required', 'string'],
      'password' => ['required', 'string'],
    ];

    if (app()->env == 'production') {
      $needValidate['captcha'] = ['required', new CheckCaptcha];
    }

    $request->validate($needValidate);
  }

  /**
   * Get the guard to be used during authentication.
   *
   * @return \Illuminate\Contracts\Auth\StatefulGuard
   */
  protected function guard()
  {
    $guard = request('user_etpp') ? 'etpp' : null;
    return Auth::guard($guard);
  }
}
