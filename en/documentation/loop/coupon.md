---
layout: loop
title: Coupon Loop
description: Return coupons information
sidebar: loop
lang: en
subnav: loop_coupon
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
type: order_coupon
arguments :
    - {name: "id", description: "A single or a list of coupons ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "code", description: "A single or a list of coupons code.", example: "code=\"THECODE\", code=\"ACODE,ANOTHERCODE,COCODE\""}
    - {name: "in_use", description: "If true, only coupons currently in use in the checkout process are returned. If false, only coupons not in use in the checkout process are returned.", example: "in_use=\"true\""}
    - {name: "is_enabled", description: "If true, only enabled are returned. If false, only disabled coupons are returned.", example: "is_enabled=\"true\""}
    - {name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "manual",
        expected_values: [
            {name: "id",             description: "ascending coupon id"},
            {name: "id-reverse",     description: "descending coupon id"},
            {name: "code",           description: "alphabetical order on coupon code"},
            {name: "code-reverse",   description: "reverse alphabetical order on coupon code"},
            {name: "title",          description: "alphabetical order on coupon title"},
            {name: "title-reverse",  description: "reverse alphabetical order on coupon title"},
            {name: "enabled",         description: "return enabled coupons first"},
            {name: "enabled-reverse", description: "return disabled coupons first"},
            {name: "expiration-date",         description: "ascending coupon expiration date"},
            {name: "expiration-date-reverse", description: "descending coupon expiration date"},
            {name: "days-left",         description: "ascending coupon days of validity left"},
            {name: "days-left-reverse", description: "descending coupon days of validity left"},
            {name: "usages-left",         description: "ascending coupon usage count left"},
            {name: "usages-left-reverse", description: "descending coupon usage count left"},
        ]
    }
outputs :
    - {name: "ID", description: "the coupon id"}
    - {name: "$IS_TRANSLATED", description: "check if the coupon is translated or not"}
    - {name: "LOCALE", description: "the coupon locale"}
    - {name: "CODE", description: "the coupon code"}
    - {name: "TITLE", description: "the coupon title"}
    - {name: "SHORT_DESCRIPTION", description: "the coupon short description"}
    - {name: "DESCRIPTION", description: "the coupon description"}
    - {name: "EXPIRATION_DATE", description: "the coupon expiration date"}
    - {name: "USAGE_LEFT", description: "number of usages left"}
    - {name: "PER_CUSTOMER_USAGE_COUNT", description: "true if the coupon maximum usage count is per customer"}
    - {name: "IS_CUMULATIVE", description: "true if the coupon is cumulative with other coupons"}
    - {name: "IS_REMOVING_POSTAGE", description: "true if the coupon removes shipping costs"}
    - {name: "IS_AVAILABLE_ON_SPECIAL_OFFERS", description: "true if the coupon effect applies to products currently on sale"}
    - {name: "IS_ENABLED", description: "true if the coupon is enabled"}
    - {name: "AMOUNT", description: "the coupon amount. Could be a percentage, or an absolute amount"}
    - {name: "APPLICATION_CONDITIONS", description: "an array of usage conditions descriptions"}
    - {name: "TOOLTIP", description: "The coupon short description"}
    - {name: "DAY_LEFT_BEFORE_EXPIRATION", description: "days left before coupon expiration"}
    - {name: "SERVICE_ID", description: "the coupon service id"}
    - {name: "FREE_SHIPPING_FOR_COUNTRIES_LIST", description: "list of country IDs for which the shipping is free"}
    - {name: "FREE_SHIPPING_FOR_MODULES_LIST", description: "list of module IDs for which the shipping is free"}
    - {name: "DISCOUNT_AMOUNT", description: "Amount subtracted from the cart, only if the coupon is currentrly in use"}
---