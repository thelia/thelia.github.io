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

<h2>Creation</h2>

If you want to create a tax rule, you have to send the following fields with the POST method.

<ul>
    <li>country : a collection of <a href="country.html">country</a> id</li>
    <li>tax : a collection of <a href="tax.html">tax</a> id</li>
    <li>
        i18n  : a collection of the following fields:
        <ul>
            <li>locale: The lang locale. Example: en_US </li>
            <li>title: The tax rule title. </li>
            <li>description: The tax rule description (optional). </li>
        </ul>
    </li>
    <li>default : if true, toggle the tax rule to be the default one (optional)</li>
</ul>

<h4> Example </h4>
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

<h2>Update</h2>

To update a tax rule, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

Moreover, you have to add the "id" field.

<h4> Example </h4>
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