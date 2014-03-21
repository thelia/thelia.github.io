---
layout: loop
title: Order Loop
description: Order loop displays orders information.
sidebar: loop
lang: en
subnav: loop_order
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order
arguments :
    - {name: "id", description: "A single or a list of order ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "customer", description: "A single customer id or `current` keyword to get logged in user or `*` keyword to match all users.", example: "customer=\"2\", customer=\"current\"", default: "current"}
    - {name: "status", description: "A single or a list of order status or `*` keyword to match all", example: "status=\"*\", status=\"1,4,7\""}
    - {
      name: "order", description: "A list of values", example: "order=\"reference-reverse\"", default: "create-date-reverse",
      expected_values: [
          {name: "id",           description: "id order"},
          {name: "id-reverse",           description: "reverse id order"},
          {name: "reference",           description: "reference order"},
          {name: "reference-reverse",           description: "reverse reference order"},
          {name: "create-date",           description: "creation date order"},
          {name: "create-date-reverse",           description: "reverse creation date order"},
          {name: "company",           description: "company order"},
          {name: "company-reverse",           description: "reverse company order"},
          {name: "customer-name",           description: "customer name order"},
          {name: "customer-name-reverse",           description: "reverse customer name order"},
          {name: "status",           description: "status order"},
          {name: "status-reverse",           description: "reverse status order"}
      ]
    }

outputs :
    - {name: "$ID", description: "the order id"}
    - {name: "$REF", description: "the order reference"}
    - {name: "$CUSTOMER", description: "the order customer id ; you can use it in a <a href=\"/en/documentation/loop/customer.html\">customer loop</a>"}
    - {name: "$DELIVERY_ADDRESS", description: "the order delivery address id ; you can use it in a <a href=\"/en/documentation/loop/order_address.html\">order address loop</a>"}
    - {name: "$INVOICE_ADDRESS", description: "the order the order invoice address id ; you can use it in a <a href=\"/en/documentation/loop/order_address.html\">order address loop</a>"}
    - {name: "$CURRENCY", description: "the order currency id ; you can use it in a <a href=\"/en/documentation/loop/currency.html\">currency loop</a>"}
    - {name: "$CURRENCY_RATE", description: "the order currency rate"}
    - {name: "$TRANSACTION_REF", description: "the order transaction reference. It's usually the unique identifier shared between the e-shop and it's bank"}
    - {name: "$DELIVERY_REF", description: "the order delivery reference. It's usually use for tracking package"}
    - {name: "$INVOICE_REF", description: "the order invoice reference"}
    - {name: "$POSTAGE", description: "the order postage"}
    - {name: "$PAYMENT_MODULE", description: "the order payment module id ; you can use it in a <a href=\"/en/documentation/loop/module.html\">module loop</a>"}
    - {name: "$DELIVERY_MODULE", description: "the order delivery module id ; you can use it in a <a href=\"/en/documentation/loop/module.html\">module loop</a>"}
    - {name: "$STATUS", description: "the order status ; you can use it in a <a href=\"/en/documentation/loop/order_status.html\">order status loop</a>"}
    - {name: "$LANG", description: "the order language id"}
    - {name: "$DISCOUNT", description: "the order discount"}
    - {name: "$TOTAL_TAX", description: "the order taxes amount"}
    - {name: "$TOTAL_AMOUNT", description: "the order amount without taxes"}
    - {name: "$TOTAL_TAXED_AMOUNT", description: "the order amount including taxes"}
---