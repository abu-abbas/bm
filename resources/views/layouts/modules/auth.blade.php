@extends('layouts.app.auth')

@section('title')
  {{ Str::title('Bussiness Matching | Login') }}
@endsection

@section('content')
  <login-form />
@endsection
