<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DownloadController extends Controller
{
  public function inlineDownload(Media $media, $conversion = null, $name = null)
  {
    $headers = [
      'Content-Type' => $media->mime_type,
      'Content-Length' => $media->size,
      'Content-disposition' => 'inline; filename="' . $media->file_name . '"',
      'Cache-Control' => 'public, must-revalidate, max-age=0',
      'Pragma' => 'public',
      'Expires' => 'Sat, 26 Jul 1997 05:00:00 GMT',
      'Last-Modified' => now()->format('D, d M Y H:i:s') . ' GMT',
    ];

    $filename = $name ?? $media->name;
    $fileConversion = $conversion ?? '';

    return response()->download(
      $media->getPath($fileConversion),
      $filename,
      $headers,
      'inline'
    );
  }
}
