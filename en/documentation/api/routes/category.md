---
layout: api
title: API - Category
sidebar: api
lang: en
subnav: api_c_category

description:
    - Manage the categories

methods:
    - { name: GET, route: /api/categories, return_code: 200, return: "Results of the 'category' loop" }
    - { name: GET, route: "/api/categories/{categoryId}", parameters: "categoryId: The category id", return_code: 200, return: "Results of the 'category' loop for category id" }
    - { name: POST, route: /api/categories, return_code: 201, return: "Results of the 'category' loop for the created category"}
    - { name: PUT, route: "/api/categories/{categoryId}", return_code: 204, return: Nothing }
    - { name: DELETE, route: "/api/categories/{categoryId}", parameters: "categoryId: The category id", return_code: 204, return: Nothing }
---
---

## Creation

If you want to create a category, you have to send the following fields with the POST method.

### General information

- parent: The parent category id
- visible: If **1**, the category will be visible (optional)

### Descriptive

- locale: The lang locale
- title: The category title

### Example

```json
{
    "visible": 1,
    "parent": 2,
    "locale": "en_US",
    "title": "Category create from api"
}
```

## Update

To update a category, you have to send data (only updated ones) with the PUT method.

### General information

- parent: The parent category id
- visible: If **1**, the category will be visible (optional)
- default_template_id: the default template id

### Descriptive

- locale: The lang locale
- title: The category title
- chapo: The category short description (optional)
- description: The category description (optional)
- postscriptum: The category conclusion (optional)

### Example

```json
{
    "visible": 1,
    "parent": 2,
    "default_template_id": 3,
    "locale": "en_US",
    "title": "Category create from api",
    "description": "Category description updated from api",
    "chapo": "Category chapo updated from api",
    "postscriptum": "Category postscriptum"
}
```
