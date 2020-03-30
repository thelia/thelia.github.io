---
layout: substitution
title: Cart Substitution
description: Cart Substitution provides current cart in session.
sidebar: substitution
lang: en
subnav: substitution_cart
prefix: cart
attributes :
    - {name: "product_count (or count_product)", description: "The number of distinct products in the cart. A cart with 2 x product X and 3 x product Y have 2 distinct products"}
    - {name: "item_count (or count_item)", description: "The number of items in the cart. A cart with 2 x product X and 3 x product Y have 5 items"}
    - {name: "total_price_with_discount (or total_price)", description: "Total cart amount in the current currency, without taxes, including discount, if any"}
    - {name: "total_price_without_discount", description: "Total cart amount in the current currency, without taxes, excluding discount, if any"}
    - {name: "total_taxed_price_with_discount (or total_taxed_price)", description: "Total cart amount in the current currency with taxes, and including the discount, if any."}
    - {name: "total_taxed_price_without_discount", description: "Total price with discount without taxes"}
    - {name: "weight", description: "The cart total weight, in kg"}
    - {name: "contains_virtual_product (or is_virtual)", description: "True if the cart contains at least one virtual product, false otherwise"}
    - {name: "total_tax_amount (or total_vat)", description: "Total cart tax amount"}
    - {name: "total_tax_amount_withount_discount", description: "Total cart tax amount, excluding disount tax"}
    - {name: "discount_tax_amount", description: "The cart disount tax amount"}
---

