---
layout: loop
title: Order Loop
description: Order loop displays orders information.
sidebar: loop
lang: en
subnav: loop_order
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
text_search_fields: ref, invoice_ref, customer_ref, customer_firstname, customer_lastname, customer_email
type: order
arguments :
    - {name: "id", description: "A single or a list of order ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "customer", description: "A single customer id or `current` keyword to get logged in user or `*` keyword to match all users.", example: "customer=\"2\", customer=\"current\"", default: "current"}
    - {name: "status", description: "A single or a list of order status ID or `*` keyword to match all", example: "status=\"*\", status=\"1,4,7\""}
    - {name: "exclude_status (2.2+)", description: "A single or a list of order status ID which are to be excluded from the results", example: "status=\"*\", exclude_status=\"1,4,7\""}
    - {name: "status_code (2.2+)", description: "A single or a list of order status codes or `*` keyword to match all. The valid status codes are not_paid, paid, processing, sent, canceled, or any custom status that may be defined", example: "status=\"*\", status=\"not_paid,canceled\""}
    - {name: "exclude_status_code (2.2+)", description: "A single or a list of order status codes which are to be excluded from the results. The valid status codes are not_paid, paid, processing, sent, canceled, or any custom status that may be defined", example: "exclude_status_code=\"paid,processing\""}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false", from_version: "2.3"}
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
    - {name: "$VIRTUAL", description: "the order has at least one product which is a virtual product"}
    - {name: "$POSTAGE", description: "the order postage"}
    - {name: "$POSTAGE_TAX", description: "the order postage tax (2.2+)"}
    - {name: "$POSTAGE_UNTAXED", description: "the order postage amount without tax (2.2+)"}
    - {name: "$POSTAGE_TAX_RULE_TITLE", description: "the tax rule used to get the postage tax amount (2.2+)"}
    - {name: "$PAYMENT_MODULE", description: "the order payment module id ; you can use it in a <a href=\"/en/documentation/loop/module.html\">module loop</a>"}
    - {name: "$DELIVERY_MODULE", description: "the order delivery module id ; you can use it in a <a href=\"/en/documentation/loop/module.html\">module loop</a>"}
    - {name: "$STATUS", description: "the order status ; you can use it in a <a href=\"/en/documentation/loop/order_status.html\">order status loop</a>"}
    - {name: "$STATUS_CODE", description: "the order status code (2.2)"}
    - {name: "$LANG", description: "the order language id"}
    - {name: "$DISCOUNT", description: "the order discount"}
    - {name: "$TOTAL_TAX", description: "the order taxes amount"}
    - {name: "$TOTAL_AMOUNT", description: "the order amount without taxes"}
    - {name: "$TOTAL_TAXED_AMOUNT", description: "the order amount including taxes"}
    - {name: "$WEIGHT", description: "The total weight of the order (2.2+)"}
    - {name: "$HAS_PAID_STATUS", description: "True is the order has the 'paid' status, false otherwise"}
    - {name: "$IS_PAID", description: "True is the order has been paid (whatever current status is), false otherwise"}
    - {name: "$IS_CANCELED", description: "True is the order has the 'canceled' status, false otherwise"}
    - {name: "$IS_NOT_PAID", description: "True is the order has the 'not paid' status, false otherwise"}
    - {name: "$IS_SENT", description: "True is the order has the 'sent' status, false otherwise"}
    - {name: "$IS_PROCESSING", description: "True is the order has the 'processing' status, false otherwise"}
    - {name: "$HAS_PREVIOUS", description: "true if a order exists before this one following orders id. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$HAS_NEXT", description: "true if a order exists after this one, following orders id. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$PREVIOUS", description: "The ID of order before this one, following orders id, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$NEXT", description: "The ID of order after this one, following orders id, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}

---
