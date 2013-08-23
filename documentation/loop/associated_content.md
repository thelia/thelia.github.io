---
layout: loop
title: Associated content Loop
description: Associated content loop lists associated contents of a product or a category. It behaves like a content loop therefore you might use all <a href="/documentation/loop/content.html">content loop</a> arguments and outputs.
sidebar: loop
subnav: loop_associated_content
uses_global_argument: false
returns_global_outputs: false
type: associated_content
arguments :
    - {name: "product", description: "A single product id.", example: "product=\"2\"", mandatory: "double"}
    - {name: "category", description: "A single category id.", example: "category=\"5\"", mandatory: "double"}
    - {
        name: "order", description: "A list of values", example: "order=\"associated_content\"", default: "associated_content",
        expected_values: [
            {name: "associated_content",                                                        description: "manual associated content order"},
            {name: "associated_content_reverse",                                                description: "reverse manual associated content order"},
            {name: "all <a href=\"/documentation/loop/content.html\">content loop</a> orders",  description: ""}
        ]
      }
    - {name: "all <a href=\"/documentation/loop/content.html\">content loop</a> arguments", example: "exclude_folder=\"1,2,9\""}
outputs :
    - {name: "all <a href=\"/documentation/loop/content.html\">content loop</a> outputs"}
examples :
    - {description: "I want to display ..."}
---

{% include loop/body.md %}