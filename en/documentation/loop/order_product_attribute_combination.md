---
layout: loop
title: Order product attribute combination Loop
description: Order product attribute combination loop lists order product attribute combinations.
sidebar: loop
lang: en
subnav: loop_order_product_attribute_combination
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_product_attribute_combination
arguments :
    - {name: "order_product", description: "A single order product id.", example: "order_product=\"2\"", mandatory: "true"}
    - {
        name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "alpha",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on order product attribute title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on order product attribute title"}
        ]
      }

outputs :
    - {name: "$ID", description: "the order product attribute combination ID", from_version: "2.4"}
    - {name: "$ORDER_PRODUCT_ID", description: "the related order product ID", from_version: "2.4"}
    - {name: "$ATTRIBUTE_TITLE", description: "the order product attribute title"}
    - {name: "$ATTRIBUTE_CHAPO", description: "the order product attribute chapo"}
    - {name: "$ATTRIBUTE_DESCRIPTION", description: "the order product attribute description"}
    - {name: "$ATTRIBUTE_POSTSCRIPTUM", description: "the order product attribute postscriptum"}
    - {name: "$ATTRIBUTE_AVAILABILITY_TITLE", description: "the order product attribute availability title"}
    - {name: "$ATTRIBUTE_AVAILABILITY_CHAPO", description: "the order product attribute availability chapo"}
    - {name: "$ATTRIBUTE_AVAILABILITY_DESCRIPTION", description: "the order product attribute availability description"}
    - {name: "$ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM", description: "the order product attribute availability postscriptum"}
---