---
layout: api
title: Tax rules
sidebar: api
lang: en
subnav: api_c_tax_rules

description:
    - Manage the tax rules

methods:
    - { name: GET, route: /api/tax-rules, return_code: 200, return: "Results of the 'tax-rule' loop" }
    - { name: GET, route: "/api/tax-rules/{entityId}", parameters: "entityId: The tax rule id", return_code: 200, return: "Results of the 'tax-rule' loop for entityId" }
    - { name: POST, route: /api/tax-rules, return_code: 201, return: "Results of the 'tax-rule' loop for the created tax rule"}
    - { name: PUT, route: /api/tax-rules, return_code: 201, return: "Results of the 'tax-rule' loop for the updated tax rule" }
    - { name: DELETE, route: "/api/tax-rules/{entityId}", parameters: "entityId: The tax rule id", return_code: 204, return: Nothing }
---
---

## Creation

If you want to create a tax rule, you have to send the following fields with the POST method.

- country : a collection of [country](country.html) id
- tax : a collection of [tax](tax.html) id
- i18n  : a collection of the following fields:
    - locale: The lang locale. Example: en\_US 
    - title: The tax rule title. 
    - description: The tax rule description (optional). 
- default : if true, toggle the tax rule to be the default one (optional)

### Example 
```json
{
    "default": 1,
    "tax": [1, 2, 3],
    "country": [64],
    "i18n": [
        {
            "locale": "en_US",
            "title": "French 20 VAT"
        },
        {
            "locale": "fr_FR",
            "title": "TVA à 20%",
            "description": "Taxe à appliquer sur tous les produits du magasin"
        }
    ]
}
```

## Update

To update a tax rule, you have to send the same data (only updated ones) as for a create, but with the PUT method.

Moreover, you have to add the "id" field.

### Example
```json
{
    "id": 42,
    "i18n": [
        {
            "locale": "en_US",
            "description": "Apply this tax to all the store's products"
        }
    ]
}
```