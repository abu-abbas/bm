<?php

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;

Str::macro('getCurrentDate', function ($format = null) {
  return is_null($format)
  ? Carbon::now()
  : Carbon::now()->translatedFormat($format);
});

Str::macro('now', fn ($fmt = null) =>  is_null($fmt) ? Carbon::now() : Carbon::now()->translatedFormat($fmt));
Str::macro('title', fn ($page = null) =>  is_null($page) ? config('app.name') : $page . " | " . config('app.name'));
Str::macro('encodeBase64', fn ($str, $gztype = ZLIB_ENCODING_RAW) => base64_encode(zlib_encode($str, $gztype, 9)));
Str::macro('decodeBase64', fn ($str) => @zlib_decode(base64_decode($str)));
Str::macro('upl_role', fn () => upl_role());

EloquentBuilder::macro('searchByColumn', function($searchText, $columns) {
  $this->where(function($query) use ($searchText, $columns) {
    foreach ($columns as $key => $column) {
      if (mb_strpos($column, '->') !== false) {
        # mapping as relation
        $clause = $key == 0 ? 'whereHas' : 'orWhereHas';
        [$relation, $field] = explode('->', $column);
        $query->$clause(
          $relation,
          fn ($sql) => $sql->where(\DB::raw("lower({$field})"), 'like', '%' . strtolower($searchText) . '%')
        );
      } else {
        # mapping as field
        $clause = $key == 0 ? 'where' : 'orWhere';
        $query->{$clause}(DB::raw("lower({$column})"), 'like', '%' . strtolower($searchText) . '%');
      }
    }
  });
});
