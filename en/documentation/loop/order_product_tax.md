---
layout: loop
title: Order product tax Loop
description: Order product tax loop displays taxes available.
sidebar: loop
lang: en
subnav: loop_order_product_tax
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_product_tax
arguments :
    - {name: "order_product", description: "A single order product id.", example: "order_product=\"2\"", mandatory: "true"}
outputs :
    - {name: "$ID", description: "Tax id"}
    - {name: "$TITLE", description: "Tax title"}
    - {name: "$DESCRIPTION", description: "Tax description"}
    - {name: "$AMOUNT", description: "Tax amount"}
    - {name: "$PROMO_AMOUNT", description: "Tax amount of the promo price"}
---