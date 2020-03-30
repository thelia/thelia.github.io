---
layout: loop
title: Cart Loop
description: Cart loop displays cart information.
sidebar: loop
lang: en
subnav: loop_cart
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: cart
arguments :
    - {
      name: "order", description: "A list of values", example: "order=\"reverse\"", default: "reverse",
      expected_values: [
          {name: "reverse",           description: "reverse chronological item add order"}
      ]
    }

outputs :
    - {name: "$ITEM_ID", description: "the cart item id"}
    - {name: "$QUANTITY", description: "the cart item quantity"}
    - {name: "$TITLE", description: "the product title"}
    - {name: "$REF", description: "the product ref"}
    - {name: "$PRODUCT_ID", description: "the product id"}
    - {name: "$PRODUCT_URL", description: "the product url"}
    - {name: "$PRODUCT_SALE_ELEMENTS_ID", description: "the product sale elements id"}
    - {name: "$STOCK", description: "the product sale elements available stock"}
    - {name: "$PRICE", description: "the cart item price (unit price)"}
    - {name: "$PROMO_PRICE", description: "the cart item in promo price (unit price)"}
    - {name: "$TAXED_PRICE", description: "the cart item price including taxes (unit price)"}
    - {name: "$PROMO_TAXED_PRICE", description: "the cart item in promo price including taxes (unit price)"}
    - {name: "$TOTAL_PRICE", description: "the cart item price (total price)", from_version: "2.3"}
    - {name: "$TOTAL_PROMO_PRICE", description: "the cart item in promo price (total price)", from_version: "2.3"}
    - {name: "$TOTAL_TAXED_PRICE", description: "the cart item price including taxes (total price)", from_version: "2.3"}
    - {name: "$TOTAL_PROMO_TAXED_PRICE", description: "the cart item in promo price including taxes (total price)", from_version: "2.3"}
    - {name: "$IS_PROMO", description: "if the product sale elements is in promo or not"}
    - {name: "$REAL_PRICE", description: "the current cart item price excluding tax, either promo or normal, depending on IS_PROMO status", from_version: "2.4"}
    - {name: "$REAL_TAXED_PRICE", description: "the current cart item price including tax, either promo or normal, depending on IS_PROMO status", from_version: "2.4"}
    - {name: "$REAL_TOTAL_PRICE", description: "the current total cart line price excluding tax, either promo or normal, depending on IS_PROMO status", from_version: "2.4"}
    - {name: "$REAL_TOTAL_TAXED_PRICE", description: "the current total cart line price including tax, either promo or normal, depending on IS_PROMO status", from_version: "2.4"}
---
