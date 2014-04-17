---
layout: home
title: Image management
sidebar: image management
lang: en
---

# Image management in Thelia 2

Basically, images are stored outside the web space (by default in local/media/images), and cached in the web space (by default in web/local/images) to be served to your customers. Cached versions of images are automatically generated, mostly through the image loop.

In the images caches directory, a subdirectory for images categories (eg. product, category, folder, etc.) is automatically created, and the cached image is created here. Plugins may use their own subdirectory as required.

The cached image name contains a hash of the processing options, and the original (normalized) name of the image, so thant each cached image has a unique name.

A copy (or symbolic link, by default) of the original image is always created in the cache, so that the full resolution image is always available in the cache.

## Image processing

Various image processing options are available (see the Image loop)

- resizing, with border, crop, or by keeping image aspect ratio
- rotation, in degrees, positive or negative
- background color, applyed to empty background when creating borders or rotating
- effects. The effects are applied in the specified order. The following effects are available:
    - gamma:value : change the image Gamma to the specified value. Example: `gamma:0.7`
    - grayscale or greyscale: switch image to grayscale
    - colorize:color : apply a color mask to the image. Example: `colorize:#ff2244`
    - negative : transform the image in its negative equivalent
    - vflip or vertical_flip : vertical flip
    - hflip or horizontal_flip : horizontal flip

## Console command

A console command is available to clear the whole image cache, or just one of its sub-directories :

```
php Thelia image-cache:clear [subdir]
```

Example, to clear the cached product images :

```
console> php Thelia image-cache:clear product
Product image cache successfully cleared.
```
To clear all cache subdirectories (keeping directories) :
```
console> php Thelia image-cache:clear
Entire image cache successfully cleared.
```

## Actions involved

The Image action is triggered by dispatching the following Thelia events:

- TheliaEvents::IMAGE_PROCESS (action.processImage)
- TheliaEvents::IMAGE_CLEAR_CACHE (action.clearImageCache)

The ImageEvent event defines all processing parameters.