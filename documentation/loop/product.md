---
layout: loop
title: Product Loop
description: Product loop lists products from your shop. You very probably will have to use the <a href=\"/documentation/loop/product_sale_elements.html\">product sale elements loop</a> inside your product loop.
sidebar: loop
subnav: loop_product
uses_global_argument: true
returns_global_outputs: true
type: product
arguments :
    - {name: "id", description: "A single or a list of product ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of product references.", example: "ref=\"ref0\", id=\"ref1,ref6\""}
    - {name: "category", description: "A single or a list of category ids.", example: "category=\"2\", category=\"1,4,7\""}
    - {name: "current_category", description: "A boolean value which allows either to exclude current category products from results either to match only current category products. If a product is in multiple categories whose one is current it will not be excluded if current_category=\"false\" but will be included if current_category=\"yes\"", example: "current_category=\"yes\""}
    - {name: "depth", description: "A positive integer value which precise how many subcategory levels will be browse. Will not be consider if category parameter is not set.", example: "depth=\"2\"", default: "1"}
    - {name: "new", description: "A boolean value.", example: "new=\"yes\""}
    - {name: "promo", description: "A boolean value.", example: "promo=\"yes\""}
    - {name: "min_price", description: "A float value. Equal value matches.", example: "min_price=\"12.3\""}
    - {name: "max_price", description: "A float value. Equal value matches.", example: "max_price=\"32.1\""}
    - {name: "min_weight", description: "A float value. Equal value matches.", example: "min_weight=\"32.1\""}
    - {name: "max_weight", description: "A float value. Equal value matches.", example: "max_weight=\"32.1\""}
    - {name: "current", description: "A boolean value which allows either to exclude current product from results either to match only this product", example: "current=\"yes\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of product ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "exclude_category", description: "A single or a list of category ids. If a product is in multiple categories which are not all excluded it will not be excluded.", example: "exclude_category=\"2\", exclude_category=\"1,4,7\""}
    - {name: "feature_available", description: "A list of mandatory features and the feature_available expected for these.", example: "feature_available=\"1: (1 | 2) , 2:*, 3: 10 | (11&12)\" : feature 1 must have feature_available 1 or 2 AND feature 2 must be set to any feature_available AND feature 3 must have feature_available 10 or both feature_available 11 and 12"}
    - {name: "feature_values", description: "A list of mandatory features and the string value expected for these.", example: "feature_available=\"1: (foo | bar) , 2:*, 3: foobar\" : feature 1 must have feature value \"foo\" or \"bar\" AND feature 2 must be set to any feature_available AND feature 3 must have feature value \"foobar\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
        name: "order", description: "A list of values", example: "order=\"category,min_price\"", default: "alpha",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "min_price",         description: "ascending price"},
            {name: "max_price",         description: "descending price"},
            {name: "manual",            description: "`category` argument must be set"},
            {name: "manual_reverse",    description: "`category` argument must be set"},
            {name: "ref",               description: "alphabetical order on reference"},
            {name: "promo",             description: "display promo products first or last"},
            {name: "new",               description: "display new products first or last"},
            {name: "random",            description: ""},
            {name: "given_id",          description: "return the same order received in `id` argument which therefore must be set"}
        ]
      }
outputs :
    - {name: "#ID", description: "the product id"}
    - {name: "#REF", description: "the product reference"}
    - {name: "#BEST_PRICE", description: "the product best price for the received arguments, depending on the attributes and promo status."}
    - {name: "#IS_PROMO", description: "returns if at least one of it's product sale element is in promo"}
    - {name: "#IS_NEW", description: "returns if at least one of it's product sale element is new"}
    - {name: "#TITLE", description: "the product title"}
    - {name: "#CHAPO", description: "the product chapo"}
    - {name: "#DESCRIPTION", description: "the product description"}
    - {name: "#POSTSCTIPTUM", description: "the product postscriptum"}
    - {name: "#POSITION", description: "the product position"}
examples :
    - {description: "I want to display all products from categories 1 and 2 whose feature `color` (ID : 1) is `blue` (ID : 13), order by ascending price"}
---

{% include loop/body.md %}