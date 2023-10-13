<?php

namespace App\Utils;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\DefaultPathGenerator;

class MediaPathGenerator extends DefaultPathGenerator
{
  /**
   * Get a unique base path for the given media.
   *
   * @param \Spatie\MediaLibrary\MediaCollections\Models\Media $media
   * @return string
   */
  protected function getBasePath(Media $media): string
  {
    return $media->created_at->format('Y/m/d') . '/' . $media->getKey();
  }
}
