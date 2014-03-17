---
layout: loop
title: Attribute Loop
description: Attribute loop lists attributes.
sidebar: loop
lang: en
subnav: loop_attribute
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: attribute
arguments :
    - {name: "id", description: "A single or a list of attribute ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "product", description: "A single or a list of product ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "template", description: "A single or a list of template ids. Only features attached to these templates will be returned.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude_template", description: "A single or a list of template ids. Only features NOT attached to these templates will be returned.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude", description: "A single or a list of attribute ids to exclude.", example: "exclude=\"456,123\""}
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
    - {name: "$ID", description: "the attribute id"}
    - {name: "$IS_TRANSLATED", description: "check if the product is translated or not"}
    - {name: "$TITLE", description: "the attribute title"}
    - {name: "$CHAPO", description: "the attribute chapo"}
    - {name: "$DESCRIPTION", description: "the attribute description"}
    - {name: "$POSTSCRIPTUM", description: "the attribute postscriptum"}
    - {name: "$POSITION", description: "If none of the product, template or exclude_template parameter is present, $POSITION contains the attribute position. Otherwise, it contains the attribute position in the product template context."}
---

