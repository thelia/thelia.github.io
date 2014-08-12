---
layout: export
title: Products taxed prices export
description: Export your product taxed prices
sidebar: features
lang: en
subnav: thelia_taxed_prices_export

outputs:
    - {"name":"product_id", "description":"The product's ID"}
    - {"name":"ref", "description":"The product sale elements ref"}
    - {"name":"title", "description":"The product's title"}
    - {"name":"attributes", "description":"The product sale element's related attributes, separated by commas"}
    - {"name":"ean", "description":"The product sale element's EAN code"}
    - {"name":"price", "description":"The product sale element's taxed price"}
    - {"name":"promo_price", "description":"The product sale element's taxed promo price"}
    - {"name":"currency", "description":"The currency used for prices"}
    - {"name":"promo", "description":"1 if the product sale element is in promo, 0 otherwise"}
    - {"name":"product_tax_title", "description":"The product's tax rule title"}
    - {"name":"tax_id", "description":"The product's tax rule ID"}
---
