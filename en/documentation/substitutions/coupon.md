---
layout: substitution
title: Coupon Substitution
description: Return informations on the coupons defined during the purchase process
sidebar: substitution
lang: en
subnav: substitution_coupon
prefix: coupon
from_version: "2.3.4"
attributes :
    - {name: "has_coupons", description: "True is some coupons are currently in use, false otherwise", from_version: "2.3.4"}
    - {name: "coupon_count", description: "Number of coupons currently in use", from_version: "2.3.4"}
    - {name: "coupon_list", description: "An array containing the code of coupons currently in use.", from_version: "2.3.4"}
    - {name: "is_delivery_free", description: "True if at least one of the coupons currently in use gives free delivery, false otherwise", from_version: "2.3.4"}
---
