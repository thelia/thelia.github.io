---
layout: loop
title: Image Loop
description: The image loop process, cache and display products, categories, contents and folders images.
sidebar: loop
subnav: loop_image
uses_global_argument: true
returns_global_outputs: true
type: image
arguments :
    - {name: "id", description: "A single or a list of image ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "category", description: "a category identifier. The loop will return this category's images", example: "category=\"2\""}
    - {name: "product", description: "a product identifier. The loop will return this product's images", example: "product=\"2\""}
    - {name: "folder", description: "a folder identifier. The loop will return this folder's images", example: "folder=\"2\""}
    - {name: "content", description: "a content identifier. The loop will return this content's images", example: "content=\"2\""}
    - {name: "source", description: "As an alternative to product=\"...\" style one's can specify the object using the source parameter, along with the source_id parameter, which becomes mandatory. Valid values are product, category, folder or content.", example: "source=\"product\" source_id=\"12\" will return images from the product with ID 12."}
    - {name: "source_id", description: "The identifier of the object provided in the \"source\" parameter. Only considered if the \"source\" argument is present", example: "source_id=\"2\""}
    - {name: "exclude", description: "A single or a comma-separated list of image IDs to exclude from the list.", example: "exclude=\"456,123\""}
    - {name: "width", description: "A width in pixels, for resizing image. If only the width is provided, the image ratio is preserved.", example: "width=\"200\""}
    - {name: "height", description: "A height in pixels, for resizing image. If only the height is provided, the image ratio is preserved.", example: "height=\"200\""}
    - {name: "resize_mode", description: "If 'crop', the image will have the exact specified width and height, and will be cropped if required. If 'borders', the image will have the exact specified width and height, and some borders may be added. The border color is the one specified by 'background_color'. If 'none' or missing, the image ratio is preserved, and depending od this ratio, may not have the exact width and height required.", example: "resize_mode=\"crop\""}
    - {name: "rotation", description: "The rotation angle in degrees (positive or negative) applied to the image. The background color of the empty areas is the one specified by 'background_color'", example: "rotation=\"90\""}
    - {name: "background_color", description: "The color applied to empty image parts during processing. Use #rgb or #rrggbb color format", example: "background_color=\"#cc8000\""}
    - {name: "quality", description: "The generated image quality, from 0(!) to 100%. The default value is 75% (you can hange this in the Administration panel)", example: "quality=\"70\""}
    - {name: "effects", description: "One or more comma separated effects definitions, that will be applied to the image in the specified order. Please see below a detailed description of available effects", example: "effects=\"greyscale,gamma:0.7,vflip\""}
    - {name: "lang", description: "A language identifier, to specify the language in which the image information will be returned"}
 
outputs :
    - {name: "#ID", description: "the image ID"}
    - {name: "#IMAGE_URL", description: "The absolute URL to the generated image"}
    - {name: "#ORIGINAL_IMAGE_URL", description: "The absolute URL to the original image"}
    - {name: "#IMAGE_PATH", description: "The absolute path to the generated image file"}
    - {name: "#ORIGINAL_IMAGE_PATH", description: "The absolute path to the original image file"}
    - {name: "#TITLE", description: "the image title"}
    - {name: "#CHAPO", description: "the image chapo"}
    - {name: "#DESCRIPTION", description: "the image description"}
    - {name: "#POSTSCRIPTUM", description: "the image postscriptum"}
    - {name: "#POSITION", description: "the position of this image in the object's image list"}
    - {name: "#OBJECT_TYPE", description: "The object type (e.g., produc, category, etc. see 'source' parameter for possible values)"}
    - {name: "#OBJECT_ID", description: "The object ID"}
 
examples :
    - {description: "Resize category images the 200x100, adding (white) borders if required.", code: ""}
---

## Available effects

Currently, the image loop supports the following effects:

- gamma:value : change the image Gamma to the specified value. Example: gamma:0.7
- grayscale or greyscale: switch image to grayscale.
- colorize:color : apply a color mask to the image. The color format is #rgb or #rrggbb. Exemple: colorize:#ff2244
- negative : transform the image in its negative equivalent.
- vflip or vertical_flip : flip the image vertically.
- hflip or horizontal_flip : flip the image horizontally.

## Exemple 1

Resize category images the 200x100, adding (white) borders if required.

```smarty
{loop type="image" name="image_test" category="#ID" width="200" height="100" resize_mode="borders"}
    <img src="#IMAGE_URL" alt="#TITLE" />
{/loop}
```

Same behaviour, using the "source" style parameters

```smarty
{loop type="image" name="image_test" source="category" source_id="#ID" width="200" height="100" resize_mode="borders"}
    <img src="#IMAGE_URL" alt="#TITLE" />
{/loop}
```

## Exemple 2

Resize 1 category images the 200x100, cropping id necessary, and transforming the image in grayscale, with a gamma razised to 1.1

```smarty
{loop type="image" name="image_test" category="#ID" width="200" height="100" resize_mode="crop" effects="grayscale,gamma:1.1" limit="1"}
    <a href="#ORIGINAL_IMAGE_URL"><img src="#IMAGE_URL" alt="#TITLE" /></a>
{/loop}
```

{% include loop/body.md %}