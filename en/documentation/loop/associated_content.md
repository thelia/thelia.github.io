---
layout: loop
title: Associated content Loop
description: Associated content loop lists associated contents of a product or a category. It behaves like a content loop therefore you might use all <a href="/en/documentation/loop/content.html">content loop</a> arguments and outputs.
sidebar: loop
lang: en
subnav: loop_associated_content
uses_global_argument: false
returns_global_outputs: { countable : false, timestampable : false, versionable : false }
type: associated_content
arguments :
    - {name: "product", description: "A single product id.", example: "product=\"2\"", mandatory: "double"}
    - {name: "category", description: "A single category id.", example: "category=\"5\"", mandatory: "double"}
    - {name: "exclude_product", description: "A single or a list of product ids. If a content is in multiple products which are not all excluded it will not be excluded.", example: "exclude_product=\"5\""}
    - {name: "exclude_category", description: "A single or a list of category ids. If a content is in multiple categories which are not all excluded it will not be excluded.", example: "exclude_category=\"5\""}
    - {
        name: "order", description: "A list of values", example: "order=\"associated_content\"", default: "associated_content",
        expected_values: [
            {name: "associated_content",                                                        description: "manual associated content order"},
            {name: "associated_content_reverse",                                                description: "reverse manual associated content order"},
            {name: "all <a href=\"/en/documentation/loop/content.html\">content loop</a> orders",  description: ""}
        ]
      }
    - {name: "all <a href=\"content.html\">content loop</a> arguments", example: "exclude_folder=\"1,2,9\""}
outputs :
    - {name: "all <a href=\"content.html\">content loop</a> outputs, except for $ID, which is the ID of the relation."}
    - {name: "$CONTENT_ID", description: "the associated content id"}
---

