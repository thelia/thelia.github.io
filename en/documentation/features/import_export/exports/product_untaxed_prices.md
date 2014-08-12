---
layout: export
title: Products prices wihtout taxes export
description: Export your product prices without taxes
sidebar: features
lang: en
subnav: thelia_prices_export

outputs:
    - {"name":"product_id", "description":"The product's ID"}
    - {"name":"ref", "description":"The product sale elements ref"}
    - {"name":"title", "description":"The product's title"}
    - {"name":"attributes", "description":"The product sale element's related attributes, separated by commas"}
    - {"name":"ean", "description":"The product sale element's EAN code"}
    - {"name":"price", "description":"The product sale element's price without any tax"}
    - {"name":"promo_price", "description":"The product sale element's promo price without any tax"}
    - {"name":"currency", "description":"The currency used for prices"}
    - {"name":"promo", "description":"1 if the product sale element is in promo, 0 otherwise"}
---
