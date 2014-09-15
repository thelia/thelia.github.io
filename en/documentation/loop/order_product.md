---
layout: loop
title: Order product Loop
description: Order product loop displays Order products information.
sidebar: loop
lang: en
subnav: loop_order_product
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_product
arguments :
    - {name: "order", description: "A single order id.", example: "order=\"2\"", mandatory: "true"}
    - {name: "virtual", description: "A boolean value.", example: "new=\"yes\""}
outputs :
    - {name: "$ID", description: "the order product id"}
    - {name: "$REF", description: "the order product reference"}
    - {name: "$PRODUCT_SALE_ELEMENTS_REF", description: "the order product sale elements reference"}
    - {name: "$WAS_NEW", description: "whatever the order product sale elements was new or not"}
    - {name: "$WAS_IN_PROMO", description: "whatever the order product sale elements was in promo or not"}
    - {name: "$WEIGHT", description: "the order product sale elements weight"}
    - {name: "$TITLE", description: "the order product title"}
    - {name: "$CHAPO", description: "the order product short description"}
    - {name: "$DESCRIPTION", description: "the order product description"}
    - {name: "$POSTSCRIPTUM", description: "the order product postscriptum"}
    - {name: "$VIRTUAL", description: "whatever the order product is a virtual product or not"}
    - {name: "$VIRTUAL_DOCUMENT", description: "the name of the file if the product is virtual."}
    - {name: "$QUANTITY", description: "the order product ordered quantity"}
    - {name: "$PRICE", description: "the order product price"}
    - {name: "$PRICE_TAX", description: ""}
    - {name: "$TAXED_PRICE", description: ""}
    - {name: "$PROMO_PRICE", description: ""}
    - {name: "$PROMO_PRICE_TAX", description: ""}
    - {name: "$TAXED_PROMO_PRICE", description: ""}
    - {name: "$TAX_RULE_TITLE", description: ""}
    - {name: "$TAX_RULE_DESCRIPTION", description: ""}
    - {name: "$PARENT", description: ""}
    - {name: "$EAN_CODE", description: ""}
---