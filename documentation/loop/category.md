---
layout: loop
title: Category Loop
sidebar: loop
subnav: loop_category
uses_global_argument: true
returns_global_outputs: true
arguments :
    - {name: "id", description: "A single or a list of category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "parent", description: "A single or a list of category ids.", example: "category=\"3\", category=\"2,5,8\""}
    - {name: "current", description: "A boolean value which allows either to exclude current category from results either to match only this category", example: "current=\"yes\""}
    - {name: "not_empty", description: "A boolean value.", example: "not_empty=\"yes\"", default: "no"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "link", description: "A string value.", example: "link=\"foo\""}
    - {name: "exclude", description: "A single or a list of category ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
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
    - {name: "#LINK", description: "the category link"}
    - {name: "#PARENT", description: "the parent category"}
    - {name: "#URL", description: "the category URL"}
    - {name: "#PRODUCT_COUNT", description: "the number of visible products for this category"}
examples :
    - {description: "I want to .."}
---

#{{ page.title }}

Category loop lists categories from your shop.