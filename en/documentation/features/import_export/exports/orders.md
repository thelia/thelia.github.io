---
layout: export
title: Orders export
description: Export your orders
sidebar: features
lang: en
subnav: thelia_orders_export

outputs:
    - {"name":"ref", "description":"The order's ref"}
    - {"name":"date", "description":"The order's date"}
    - {"name":"customer_ref", "description":"The customer's ref"}
    - {"name":"discount", "description":"The order's discount"}
    - {"name":"coupons", "description":"The order's coupon names"}
    - {"name":"postage", "description":"The order's postage amount"}
    - {"name":"total_including_taxes", "description":"The order's total taxed price, without discount nor postage"}
    - {"name":"total_with_discount", "description":"The order's total taxed price, with discount"}
    - {"name":"total_discount_and_postage", "description":"The order's total taxed price, with discount and postage"}
    - {"name":"delivery_module", "description":"The chosen delivery module"}
    - {"name":"delivery_ref", "description":"The delivery ref, usually used for tracking numbers"}
    - {"name":"payment_module", "description":"The used payment module"}
    - {"name":"invoice_ref", "description":"The invoice ref, usually used for transaction numbers"}
    - {"name":"status", "description":"The order status (Not Paid, Paid, Processing, Sent, Canceled)"}
    - {"name":"delivery_title", "description":"The delivery address' title (Mr, Miss, ...)"}
    - {"name":"delivery_company", "description":"The delivery address' company"}
    - {"name":"delivery_first_name", "description":"The delivery address' first name"}
    - {"name":"delivery_last_name", "description":"The delivery address' last name"}
    - {"name":"delivery_address1", "description":""}
    - {"name":"delivery_address2", "description":""}
    - {"name":"delivery_address3", "description":""}
    - {"name":"delivery_zip_code", "description":""}
    - {"name":"delivery_city", "description":""}
    - {"name":"delivery_country", "description":""}
    - {"name":"delivery_phone", "description":""}
    - {"name":"invoice_title", "description":"The invoice address' title (Mr, Miss, ...)"}
    - {"name":"invoice_company", "description":"The invoice address' company"}
    - {"name":"invoice_first_name", "description":"The invoice address' first name"}
    - {"name":"invoice_last_name", "description":"The invoice address' last name"}
    - {"name":"invoice_address1", "description":""}
    - {"name":"invoice_address2", "description":""}
    - {"name":"invoice_address3", "description":""}
    - {"name":"invoice_zip_code", "description":""}
    - {"name":"invoice_city", "description":""}
    - {"name":"invoice_country", "description":""}
    - {"name":"invoice_phone", "description":""}
    - {"name":"product_title", "description":"The products' names"}
    - {"name":"price", "description":"The products' prices without taxes"}
    - {"name":"taxed_price", "description":"The products' taxed prices"}
    - {"name":"currency", "description":"The order's currency (EUR, USD, ...)"}
    - {"name":"was_in_promo", "description":"1 if the product was is promo, 0 otherwise"}
    - {"name":"quantity", "description":"The ordered quantity of the product"}
    - {"name":"tax_amount", "description":"The product's tax amount"}
    - {"name":"tax_title", "description":"The product's tax rule name"}
---
