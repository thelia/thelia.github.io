---
layout: loop
title: Order status Loop
description: Order status loop displays order status information.
sidebar: loop
lang: en
subnav: loop_order_status
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_status
arguments :
    - {name: "id", description: "A single or a list of order status ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "ascending order position"},
            {name: "manual-reverse",    description: "descending order position"},
        ]
      }
outputs :
    - {name: "$ID", description: "the order status id"}
    - {name: "$IS_TRANSLATED", description: "whatever the order status is translated or not"}
    - {name: "$CODE", description: "the order status code"}
    - {name: "$COLOR", description: "the order status hexadecimal color code"}
    - {name: "$POSITION", description: "the order status position"}
    - {name: "$PROTECTED_STATUS", description: "1 if the order status is protected"}
    - {name: "$TITLE", description: "the order status title"}
    - {name: "$CHAPO", description: "the order status short description"}
    - {name: "$DESCRIPTION", description: "the order status description"}
    - {name: "$POSTSCRIPTUM", description: "the order status postscriptum"}
    - {name: "$LOCALE", description: "the order status locale"}
---