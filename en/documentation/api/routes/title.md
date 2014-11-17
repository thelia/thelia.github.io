---
layout: api
title: API - Customer titles
sidebar: api
lang: en
subnav: api_c_titles

description:
    - Manage the customer titles

methods:
    - { name: GET, route: /api/title, return_code: 200, return: "Results of the 'title' loop" }
    - { name: GET, route: "/api/title/{entityId}", parameters: "entityId: The customer title id", return_code: 200, return: "Results of the 'title' loop for entityId" }
    - { name: POST, route: /api/title, return_code: 201, return: "Results of the 'title' loop for the created title"}
    - { name: PUT, route: /api/title, return_code: 201, return: "Results of the 'title' loop for the updated title" }
    - { name: DELETE, route: "/api/title/{entityId}", parameters: "entityId: The customer title id", return_code: 204, return: Nothing }
---
---

## Creation

If you want to create a title, you have to send the following fields with the POST method.

- i18n  : a collection of the following fields:
    - locale: The lang locale. Example: en\_US 
    - short: The title short (optional). Example: Mr 
    - long: The title long (optional). Example: Mister 
- default : if true, toggle the title to be the default one (optional)

### Example
```json
{
    "default": 1,
    "i18n": [
        {
            "locale": "en_US",
            "short": "Mr",
            "long": "Mister"
        },
        {
            "locale": "fr_FR",
            "short": "Mo",
            "long": "Monsieur"
        }
    ]
}
```

## Update

To update a customer title, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

Moreover, you have to add the "title\_id" field.

### Example
```json
{
    "title_id": 42,
    "i18n": [
        {
            "locale": "fr_FR",
            "short": "M"
        }
    ]
}
```