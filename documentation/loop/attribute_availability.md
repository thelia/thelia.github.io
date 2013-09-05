---
layout: loop
title: Attribute availability Loop
description: Attribute availability loop lists attribute availabilities.
sidebar: loop
subnav: loop_attribute_availability
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: attribute_availability
arguments :
    - {name: "id", description: "A single or a list of attribute availability ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "attribute", description: "A single or a list of attribute ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude", description: "A single or a list of attribute availability ids to exclude.", example: "exclude=\"456,123\""}
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
    - {name: "#ID", description: "the attribute availability id"}
    - {name: "#TITLE", description: "the attribute availability title"}
    - {name: "#CHAPO", description: "the attribute availability chapo"}
    - {name: "#DESCRIPTION", description: "the attribute availability description"}
    - {name: "#POSTSCRIPTUM", description: "the attribute availability postscriptum"}
---

