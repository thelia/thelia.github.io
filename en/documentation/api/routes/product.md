---
layout: api
title: Products
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

<h2>Creation</h2>

If you want to create a product, you have to send the following fields with the POST method.

<h5> General information </h5>

<ul>
    <li>ref : The product reference</li>
    <li>default_category  : The product default <a href="category.html">category</a> id</li>
    <li>price  : The product default price</li>
    <li>currency  : The product price <a href="currency.html">currency</a> id</li>
    <li>tax_rule  : The product tax_rule <a href="tax_rule.html">tax rule</a> id</li>
    <li>password  : The product password</li>
    <li>lang : The product <a href="lang.html">lang</a> id</li>
    <li>weight  : The product weight (optional)</li>
    <li>visible  : If true, the product will be visible (optional)</li>
</ul>

<h5> Descriptive </h5>

<ul>
    <li>locale: The lang locale</li>
    <li>title: The product title</li>
    <li>chapo: The product short description (optional)</li>
    <li>description: The product description (optional)</li>
    <li>postscriptum: The product conclusion (optional)</li>
</ul>

<h4> Example </h4>
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

<h2>Update</h2>

To update a product, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

Moreover, you have to add the "id" field.

<h4> Example </h4>
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