---
layout: loop
title: Accessory Loop
description: Accessory loop lists accessories of a product. It behaves like a product loop therefore you might use all <a href="/documentation/loop/product.html">product loop</a> arguments and outputs.
sidebar: loop
subnav: loop_accessory
uses_global_argument: false
returns_global_outputs: false
type: accessory
arguments :
    - {name: "product", description: "A single product id.", example: "product=\"2\"", mandatory: "true"}
    - {
            name: "order", description: "A list of values", example: "order=\"accessory,max_price\"", default: "accessory",
            expected_values: [
                {name: "accessory",                                                                 description: "manual accessory order"},
                {name: "accessory_reverse",                                                         description: "reverse manual accessory order"},
                {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> orders",  description: ""}
            ]
          }
    - {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> arguments", example: "order=\"min_price\", max_price=\"100\""}
outputs :
    - {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> outputs"}
examples :
    - {description: "I want to display all accessories which are in category 1, order by ascending price, for all products in category 2"}
---

{% include loop/body.md %}