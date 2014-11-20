---
layout: loop
title: Brand Loop
description: Brand loop lists brands defined in your shop.
sidebar: loop
lang: en
subnav: loop_brand
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: brand
arguments :
    - {name: "id", description: "A single or a list of brand ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "current", description: "A boolean value which allows either to exclude current brand from results either to match only this content", example: "current=\"yes\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "title", description: "A title string", example: "title=\"foo\""}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "id",                description: "ID order"},
            {name: "id-reverse",        description: "reverse ID order"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "`content` argument must be set"},
            {name: "manual-reverse",    description: "`content` argument must be set"},
            {name: "random",            description: ""},
            {name: "created",           description: "ascending order on date of brand creation"},
            {name: "created-reverse",   description: "descending order on date of brand creation"},
            {name: "updated",           description: "ascending order on date of brand update"},
            {name: "updated-reverse",   description: "descending order on date of brand update"},
        ]
      }
outputs :
    - {name: "$ID", description: "the content id"}
    - {name: "$IS_TRANSLATED", description: "check if the content is translated"}
    - {name: "$VISIBLE", description: "true if the product is visible or not, false otherwise"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "the content title"}
    - {name: "$CHAPO", description: "the content chapo"}
    - {name: "$DESCRIPTION", description: "the content description"}
    - {name: "$POSTSCRIPTUM", description: "the content postscriptum"}
    - {name: "$META_TITLE", description: "the content meta title"}
    - {name: "$META_DESCRIPTION", description: "the content meta description"}
    - {name: "$META_KEYWORDS", description: "the content meta keywords"}
    - {name: "$URL", description: "the content URL"}
    - {name: "$LOGO_IMAGE_ID", description: "ID of the brand logo image, among the brand images"}
    - {name: "$POSITION", description: "the content position"}
---
