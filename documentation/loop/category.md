---
layout: loop
title: Category Loop
description: Category loop lists categories from your shop.
sidebar: loop
subnav: loop_category
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
type: category
arguments :
    - {name: "id", description: "A single or a list of category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "parent", description: "A single or a list of category ids.", example: "category=\"3\", category=\"2,5,8\""}
    - {name: "current", description: "A boolean value which allows either to exclude current category from results either to match only this category", example: "current=\"yes\""}
    - {name: "not_empty", description: "A boolean value.", example: "not_empty=\"yes\"", default: "no"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of category ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
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
    - {name: "#ID", description: "the category id"}
    - {name: "#TITLE", description: "the category title"}
    - {name: "#CHAPO", description: "the category chapo"}
    - {name: "#DESCRIPTION", description: "the category description"}
    - {name: "#POSTSCTIPTUM", description: "the category postscriptum"}
    - {name: "#PARENT", description: "the parent category"}
    - {name: "#URL", description: "the category URL"}
    - {name: "#PRODUCT_COUNT", description: "the number of visible products for this category"}
    - {name: "#CREATE_DATE", description: "the category create date"}
    - {name: "#UPDATE_DATE", description: "the category update date"}
    - {name: "#VERSION", description: "the category version"}
    - {name: "#VERSION_DATE", description: "the category version date"}
    - {name: "#VERSION_AUTHOR", description: "the category version author"}
---
