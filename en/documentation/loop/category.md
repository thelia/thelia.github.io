---
layout: loop
title: Category Loop
description: Category loop lists categories from your shop.
sidebar: loop
lang: en
subnav: loop_category
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
text_search_fields: title
type: category
arguments :
    - {name: "id", description: "A single or a list of category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "parent", description: "A single or a list of category ids.", example: "category=\"3\", category=\"2,5,8\""}
    - {name: "product", description: "A single product id.", example: "product=\"3\""}
    - {name: "exclude_parent", description: "A single or list of categories id to exclude.", example: "exclude_categories=\"12,22\"", from_version: "2.3"}
    - {name: "exclude_product", description: "A single product id to exclude.", example: "exclude_product=\"3\""}
    - {name: "current", description: "A boolean value which allows either to exclude current category from results either to match only this category", example: "current=\"yes\""}
    - {name: "not_empty", description: "(**not implemented yet**) A boolean value.", example: "not_empty=\"yes\"", default: "no"}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false"}
    - {name: "need_count_child", descripion: "A boolean. If set to true, count how many subcategories contains the current category", example: "need_count_child=\"yes\"", default: "false"}
    - {name: "need_product_count", description: "A boolean. If set to true, count how many products contains the current category", example: "need_product_count=\"yes\"", default: "false"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of category ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "return_url", description: "A boolean value which allows the urls generation.", example: "return_url=\"no\"", default: "yes", from_version: "2.3"}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "`category` argument must be set"},
            {name: "manual_reverse",    description: "`category` argument must be set"},
            {name: "random",            description: ""}
        ]
      }
outputs :
    - {name: "$ID", description: "the category id"}
    - {name: "$IS_TRANSLATED", description: "check if the category is translated or not"}
    - {name: "$LOCALE", description: "the locale used for this loop"}
    - {name: "$TITLE", description: "the category title"}
    - {name: "$CHAPO", description: "the category chapo"}
    - {name: "$DESCRIPTION", description: "the category description"}
    - {name: "$POSTSCRIPTUM", description: "the category postscriptum"}
    - {name: "$META_TITLE", description: "the category meta title"}
    - {name: "$META_DESCRIPTION", description: "the category meta description"}
    - {name: "$META_KEYWORD", description: "the category meta keyword"}
    - {name: "$PARENT", description: "the parent category"}
    - {name: "$URL", description: "the category URL"}
    - {name: "$PRODUCT_COUNT", description: "the number of visible products for this category"}
    - {name: "$CREATE_DATE", description: "the category create date"}
    - {name: "$UPDATE_DATE", description: "the category update date"}
    - {name: "$VERSION", description: "the category version"}
    - {name: "$VERSION_DATE", description: "the category version date"}
    - {name: "$VERSION_AUTHOR", description: "the category version author"}
    - {name: "$POSITION", description: "the category position"}
    - {name: "$VISIBLE", description: "Return if the category is visible or not"}
    - {name: "$PRODUCT_COUNT", description: "Number of product contained by the current category. Only available if <strong>need_product_count</strong> parameter is set to true"}
    - {name: "$CHILD_COUNT", description: "Number of subcategories contained by the current category. Only available if <strong>need_count_child</strong> parameter is set to true"}
    - {name: "$HAS_PREVIOUS", description: "true if a category exists before this one in the current parent category, following categories positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$HAS_NEXT", description: "true if a category exists after this one in the current parent category, following categories positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$PREVIOUS", description: "The ID of category before this one in the current parent category, following categories positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$NEXT", description: "The ID of category after this one in the current parent category, following categories positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$TEMPLATE", description: "the template id associated to this category", from_version: "2.2"}
---
