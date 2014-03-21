---
layout: loop
title: Order coupon Loop
description: Order coupon loop displays Order coupons information.
sidebar: loop
lang: en
subnav: loop_order_coupon
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_coupon
arguments :
    - {name: "order", description: "A single order id.", example: "order=\"2\"", mandatory: "true"}
outputs :
    - {name: "$ID", description: "the order coupon id"}
    - {name: "$CODE", description: "the order coupon code"}
    - {name: "$TITLE", description: "the order coupon title"}
    - {name: "$SHORT_DESCRIPTION", description: "the order coupon short description"}
    - {name: "$DESCRIPTION", description: "the order coupon description"}
    - {name: "$EXPIRATION_DATE", description: "the order coupon expiration date"}
    - {name: "$IS_CUMULATIVE", description: "whatever the order coupon is cumulative or not"}
    - {name: "$IS_REMOVING_POSTAGE", description: "whatever the order coupon is removing postage or not"}
    - {name: "$IS_AVAILABLE_ON_SPECIAL_OFFERS", description: "whatever the order coupon is available on special offers or not"}
    - {name: "$DAY_LEFT_BEFORE_EXPIRATION", description: "the order coupon days leaving before expiration"}
---