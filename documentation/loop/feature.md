---
layout: loop
title: Feature Loop
description: Feature loop lists features.
sidebar: loop
subnav: loop_feature
uses_global_argument: true
returns_global_outputs: true
type: feature
arguments :
    - {name: "id", description: "A single or a list of feature ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "product", description: "A single or a list of product ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "category", description: "A single or a list of category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of feature ids to exclude.", example: "exclude=\"456,123\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
            name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "manual",
            expected_values: [
                {name: "alpha",             description: "alphabetical order on title"},
                {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
                {name: "manual",            description: ""},
                {name: "manual_reverse",    description: ""}
            ]
          }

outputs :
    - {name: "#ID", description: "the feature id"}
    - {name: "#TITLE", description: "the feature title"}
    - {name: "#CHAPO", description: "the feature chapo"}
    - {name: "#DESCRIPTION", description: "the feature description"}
    - {name: "#POSTSCRIPTUM", description: "the feature postscriptum"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}