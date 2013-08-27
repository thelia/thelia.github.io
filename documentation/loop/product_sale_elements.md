---
layout: loop
title: Product sale elements Loop
description: Product sale elements loop lists product sale elements from your shop. You may need to use the <a href="/documentation/loop/attribute_combination.html">attribute combination loop</a> inside your product sale elements loop.
sidebar: loop
subnav: loop_product_sale_elements
uses_global_argument: true
returns_global_outputs: true
type: loop_product_sale_elements
arguments :
    - {name: "currency", description: "A currency id", example: "currency=\"1\""}
    - {name: "product", description: "A single product id.", example: "product=\"2\"", mandatory: "true"}
outputs :
    - {name: "#ID", description: "the product sale elements id"}
    - {name: "#PRICE", description: "the product sale elements price"}
    - {name: "#PROMO_PRICE", description: "the product sale elements promo price"}
    - {name: "#CURRENCY", description: "the product sale elements price currency"}
    - {name: "#IS_PROMO", description: "returns if the product sale element is in promo"}
    - {name: "#IS_NEW", description: "returns if the product sale element is in new"}
    - {name: "#WEIGHT", description: "the product sale elements weight"}
    - {name: "#QUANTITY", description: "the product sale elements stock quantity"}

examples :
    - {description: "I want to ..."}
---

{% include loop/body.md %}