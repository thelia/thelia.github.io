---
layout: api
title: API - Images
sidebar: api
lang: en
subnav: api_c_product_images

description:
    - Manage the tax rules

methods:
    - { name: GET, route: "/api/products/{entityId}/images", parameters: "entityId: The product id", return_code: 200, return: "Results of the 'image' loop" }
    - { name: GET, route: "/api/products/{entityId}/images/{imageId}", parameters: "entityId: The product id<br>imageId: The product image id", return_code: 200, return: "Results of the 'image' loop for entityId" }
    - { name: POST, route: "/api/products/{entityId}/images", parameters: "entityId: The product id", return_code: 201, return: "Results of the 'image' loop for for entityId"}
    - { name: PUT, route: "/api/products/{entityId}/images/{imageId}", parameters: "entityId: The product id<br>imageId: The product image id", return_code: 201, return: "Results of the 'image' loop for for entityId" }
    - { name: DELETE, route: "/api/products/{entityId}/images/{imageId}", parameters: "entityId: The product id<br>imageId: The product image id", return_code: 204, return: Nothing }
---
---

## Creation

When you post data to ```/api/products/{entityId}/images```, only files are treated.

Images only are supported.

## Update

When you put data to ```/api/products/{entityId}/images/{imageId}```, there must be 0 or 1 file.
Sending more than 1 file will result in an error.

You can update image's data by sending those fields:

- i18n : a collection of descriptive fields:
    - locale : The lang locale. Example: en_US
    - title : The image title
    - chapo : The image short description
    - description : The image description
    - postscriptum : The image conclusion

### Example
```json
{
    "i18n": [
        {
            "locale": "en_US",
            "title": "My image title"
        },
        {
            "locale": "fr_FR",
            "title": "Ma super image" 
        }
    ]
}
```