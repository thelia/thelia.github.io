---
layout: loop
title: Order coupon Loop
description: Retrieve order coupons information for a given order
sidebar: loop
lang: en
subnav: loop_order_coupon
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_coupon
arguments :
    - {name: "order", description: "A single order id.", example: "order=\"2\"", mandatory: "true"}
outputs :
    - {name: "$ID", description: "the coupon id"}
    - {name: "$CODE", description: "the coupon code"}
    - {name: "$TITLE", description: "the coupon title"}
    - {name: "$SHORT_DESCRIPTION", description: "the coupon short description"}
    - {name: "$DESCRIPTION", description: "the coupon description"}
    - {name: "$EXPIRATION_DATE", description: "the coupon expiration date"}
    - {name: "$IS_CUMULATIVE", description: "true if the coupon is cumulative"}
    - {name: "$IS_REMOVING_POSTAGE", description: "true if the coupon provides free shipping"}
    - {name: "$IS_AVAILABLE_ON_SPECIAL_OFFERS", description: "true if the coupon applies to discounted products"}
    - {name: "$DAY_LEFT_BEFORE_EXPIRATION", description: "days left before coupon expiration"}
    - {name: "$FREE_SHIPPING_FOR_COUNTRIES_LIST", description: "comma separated list of country IDs for which the free shipping applies"}
    - {name: "$FREE_SHIPPING_FOR_MODULES_LIST", description: "comma separated list of shipping module IDs for which the free shipping applies"}
    - {name: "$IS_USAGE_CANCELED", description: "true if the usage of this coupon was canceled (probably when the related order was canceled), false otherwise"}
---