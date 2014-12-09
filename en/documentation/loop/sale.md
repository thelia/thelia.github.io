---
layout: loop
title: Sale Loop
description: Sale loop provides an access to sale operations defined on your shop.
sidebar: loop
lang: en
subnav: loop_sale
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: sale
arguments :
    - {name: "id", description: "A single or a list of sale ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude", description: "A single or a list of sale ids to excluded from results.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "active", description: "A boolean value, to get only active (1) or inactive sales (0) or both (*)", example: "active=\"1\"", default: "1"}
    - {name: "product", description: "A single or a list of product IDs. If specified, the loop will return the sales in which these products are selected", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "currency", description: "A currency id, to get the price offset defined for this currency", example: "currency=\"1\"", default: "The current shop currency"}
    - {
        name: "order",
        description: "A list of values", example: "order=\"random\"",
        default: "manual",
        expected_values: [
            {name: "id",                 description: "ID order"},
            {name: "id-reverse",         description: "reverse ID order"},
            {name: "alpha",              description: "alphabetical order on title"},
            {name: "alpha-reverse",      description: "reverse alphabetical order on title"},
            {name: "label",              description: "alphabetical order on sale label"},
            {name: "label-reverse",      description: "reverse alphabetical order on sale label"},
            {name: "active",             description: "return active sales first"},
            {name: "active-reverse",     description: "return inactive sales first"},
            {name: "start-date",         description: "ascending order on sale start date"},
            {name: "start-date-reverse", description: "descending order sale end date"},
            {name: "end-date",           description: "ascending order on sale end date"},
            {name: "end-date-reverse",   description: "descending order sale start date"},
            {name: "created",            description: "ascending order on date of sale creation"},
            {name: "created-reverse",    description: "descending order on date of sale creation"},
            {name: "updated",            description: "ascending order on date of sale update"},
            {name: "updated-reverse",    description: "descending order on date of sale update"}
        ]
      }
outputs :
    - {name: "$ID", description: "the content id"}
    - {name: "$IS_TRANSLATED", description: "check if the content is translated"}
    - {name: "$LOCALE", description: "the locale (e.g. fr_FR) of the returned data"}
    - {name: "$TITLE", description: "the sale title"}
    - {name: "$SALE_LABEL", description: "the sale advertising label"}
    - {name: "$CHAPO", description: "the sale chapo"}
    - {name: "$DESCRIPTION", description: "the sale description"}
    - {name: "$POSTSCTIPTUM", description: "the sale postscriptum"}
    - {name: "$ACTIVE", description: "true if the sale is active, false otherwise"}
    - {name: "$DISPLAY_INITIAL_PRICE", description: "true if the products initial price should be displayed, false otherwise"}
    - {name: "$START_DATE", description: "the sale start date"}
    - {name: "$HAS_START_DATE", description: "true if the sale has a start date, false otherwise"}
    - {name: "$END_DATE", description: "the sale end date"}
    - {name: "$HAS_END_DATE", description: "true if the sale has a end date, false otherwise"}
    - {name: "$PRICE_OFFSET_TYPE", description: "the price offset type, P for a percentage, A for an amount"}
    - {name: "$PRICE_OFFSET_SYMBOL", description: "the offset unit symbol, % for a percentage, the currency symbol for an amount"}
    - {name: "$PRICE_OFFSET_VALUE", description: "the price offset value, as a percentage (0-100) or a constant amount."}
  ---