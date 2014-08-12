---
layout: import
title: Products untaxed prices import
description: Import your product untaxed prices
sidebar: features
lang: en
subnav: thelia_product_prices_import

inputs:
    - {"name":"ref", "description":"The product sale element's ref"}
    - {"name":"price", "description":"The product sale element's untaxed price"}
opt_inputs:
    - {"name":"promo_price", "description":"The product sale element's untaxed promo price"}
    - {"name":"promo", "description":"1 if you want the product sale element to be in promo, 0 or empty if not"}
    - {"name":"currency", "description":"The currency code for the prices ( EUR, USD, ... )"}
---
