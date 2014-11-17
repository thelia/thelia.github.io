---
layout: api
title: API - Product sale elements
sidebar: api
lang: en
subnav: api_c_product_sale_elements

description:
    - Manage the customer titles

methods:
    - { name: GET, route: /api/pse, return_code: 200, return: "Results of the 'product-sale-elements' loop" }
    - { name: GET, route: "/api/pse/{entityId}", parameters: "entityId: The product sale element id", return_code: 200, return: "Results of the 'product-sale-elements' loop for entityId" }
    - { name: POST, route: /api/pse, return_code: 201, return: "Results of the 'product-sale-elements' loop for the created product sale elements"}
    - { name: PUT, route: /api/pse, return_code: 201, return: "Results of the 'product-sale-elements' loop for the updated product sale elements" }
    - { name: DELETE, route: "/api/pse/{entityId}", parameters: "entityId: The product sale element id", return_code: 204, return: Nothing }
---
---

## Creation

If you want to create product sale elements, you have to send the following fields with the POST method.

- pse : a collection of product sale element
    - product\_id : The [product](product.html) id
    - tax\_rule\_id : The [tax rule](tax_rule.html) id
    - currency_id : The [currency](currency.html) id
    - price : The product sale element price (optional)
    - price\_with\_tax : The product sale element taxed price. If you give this one and ```price```, the taxed price will be taken (optional)
    - sale\_price : The product sale element price during sale periods (optional)
    - sale\_price\_with\_tax : The product sale element taxed price  during sale periods. If you give this one and ```sale_price```, the taxed price will be taken (optional)
    - ean\_code : The product sale element EAN Code (optional)
    - attribute\_av : A collection of [attribute](attribute.html) id (optional)
    - onsale : if true, the product sale element will be marked "on sale" (optional)
    - isnew : if true, the product sale element will be marked as "new" (optional)
    - isdefault : if true, the product sale element will be marked as "default" (optional)
    - use\_exchange\_rate : if true, the prices will be computed in other currencies (optional)
    - weight : The product sale element weight (optional)
    - quantity : The stock of this product sale element (optional)
    
### Example
```json
{
    "pse" : [
        {
            "product_id": 1,
            "tax_rule_id": 42,
            "currency_id": 1,
            "price": "3.12",
            "reference": "foo",
            "quantity": 1,
            "attribute_av": [1,2],
            "onsale": 1,
            "isnew": 1
        },
        {
            "product_id": 1,
            "tax_rule_id": 42,
            "currency_id": 1,
            "price": "3.33",
            "reference": "bar",
            "quantity": 10,
            "attribute_av": [1],
            "onsale": 1,
            "isnew": 1
        },
        {
            "product_id": 2,
            "tax_rule_id": 42,
            "currency_id": 1,
            "price": "12.09",
            "reference": "baz",
            "quantity": 100,
            "attribute_av": [2],
            "onsale": 1
        }
    ]
}
```

## Update

To update a customer title, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

You don't have to send the ```product_id```, but you have to add the field ```id``` with the product sale element's id

### Example
```json
{
    "pse" : [
        {
            "pid": 1,
            "onsale": 0,
            "isnew": 0
        },
        {
            "id": 2,
            "price": "4.20",
            "onsale": 0,
            "isnew": 0
        }
    ]
}
```