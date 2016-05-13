---
layout: loop
title: Brand Loop
description: Brand loop lists brands defined in your shop.
sidebar: loop
lang: en
subnav: loop_brand
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
text_search_fields: title, chapo, description, postscriptum
type: brand
arguments :
    - {name: "id", description: "A single or a list of brand ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "current", description: "A boolean value which allows either to exclude current brand from results, or match only this brand", example: "current=\"yes\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "product", description: "A single product id.", example: "product=\"2\""}
    - {name: "title", description: "A title string", example: "title=\"foo\""}
    - {name: "return_url", description: "A boolean value which allows the urls generation.", example: "return_url=\"no\"", default: "yes", from_version: "2.3"}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false", from_version: "2.3"}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "id",                description: "ID order"},
            {name: "id-reverse",        description: "reverse ID order"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "ascending order position"},
            {name: "manual-reverse",    description: "descending order position"},
            {name: "random",            description: "randomized order"},
            {name: "created",           description: "ascending order on date of brand creation"},
            {name: "created-reverse",   description: "descending order on date of brand creation"},
            {name: "updated",           description: "ascending order on date of brand update"},
            {name: "updated-reverse",   description: "descending order on date of brand update"},
        ]
      }
outputs :
    - {name: "$ID", description: "the brand id"}
    - {name: "$IS_TRANSLATED", description: "check if the brand is translated"}
    - {name: "$VISIBLE", description: "true if the product is visible or not, false otherwise"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "the brand title"}
    - {name: "$CHAPO", description: "the brand chapo"}
    - {name: "$DESCRIPTION", description: "the brand description"}
    - {name: "$POSTSCRIPTUM", description: "the brand postscriptum"}
    - {name: "$META_TITLE", description: "the brand meta title"}
    - {name: "$META_DESCRIPTION", description: "the brand meta description"}
    - {name: "$META_KEYWORDS", description: "the brand meta keywords"}
    - {name: "$URL", description: "the brand URL"}
    - {name: "$LOGO_IMAGE_ID", description: "ID of the brand logo image, among the brand images"}
    - {name: "$POSITION", description: "the brand position"}
    - {name: "$HAS_PREVIOUS", description: "true if a brand exists before this one following brands positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$HAS_NEXT", description: "true if a brand exists after this one, following brands positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$PREVIOUS", description: "The ID of brand before this one, following brands positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}
    - {name: "$NEXT", description: "The ID of brand after this one, following brands positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.3"}

---
