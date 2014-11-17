---
layout: api
title: API - Products
sidebar: api
lang: en
subnav: api_c_products

description:
    - Manage the products

methods:
    - { name: GET, route: /api/products, return_code: 200, return: "Results of the 'product' loop" }
    - { name: GET, route: "/api/products/{productId}", parameters: "productId: The product id", return_code: 200, return: "Results of the 'product' loop for productId" }
    - { name: POST, route: /api/products, return_code: 201, return: "Results of the 'product' loop for the created product"}
    - { name: PUT, route: "/api/products/{productId}", return_code: 204, return: Nothing }
    - { name: DELETE, route: "/api/products/{productId}", parameters: "productId: The product id", return_code: 204, return: Nothing }
---
---

## Creation

If you want to create a product, you have to send the following fields with the POST method.

##### General information 

- ref : The product reference
- default\_category  : The product default [category](category.html) id
- price  : The product default price
- currency  : The product price [currency](currency.html) id
- tax\_rule  : The product tax\_rule [tax rule](tax_rule.html)</a> id
- password  : The product password
- lang : The product [lang](lang.html) id
- weight  : The product weight (optional)
- visible  : If true, the product will be visible (optional)

##### Descriptive

- locale: The lang locale
- title: The product title
- chapo: The product short description (optional)
- description: The product description (optional)
- postscriptum: The product conclusion (optional)

### Example
```json
{
    "ref": "foo",
    "locale": "en_US",
    "title": "product create from api",
    "description": "product description from api",
    "default_category": 2,
    "visible": 1,
    "price": "10",
    "currency": 1,
    "tax_rule": 42,
    "weight": 10,
    "brand_id": 0
}
```

## Update

To update a product, you have to send the same data (only updated ones) as for a create, but with the PUT method.

### Example
```json
{
    "ref": "bar",
    "locale": "en_US",
    "title": "product updated from api",
    "default_category": 3,
    "visible": 1,
    "description": "product description updated from api",
    "chapo": "product chapo updated from api",
    "postscriptum": "product postscriptum",
    "brand_id": 0
}
```