---
layout: loop
title: Attribute combination Loop
description: Attribute combination loop lists attribute combinations.
sidebar: loop
subnav: loop_attribute_combination
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: attribute_combination
arguments :
    - {name: "product_sale_elements", description: "A single product sale elements id.", example: "product=\"2\"", mandatory: "true"}
    - {
            name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "manual",
            expected_values: [
                {name: "alpha",             description: "alphabetical order on attribute title"},
                {name: "alpha_reverse",     description: "reverse alphabetical order on attribute title"}
            ]
          }

outputs :
    - {name: "#ATTRIBUTE_TITLE", description: "the attribute title"}
    - {name: "#ATTRIBUTE_CHAPO", description: "the attribute chapo"}
    - {name: "#ATTRIBUTE_DESCRIPTION", description: "the attribute description"}
    - {name: "#ATTRIBUTE_POSTSCRIPTUM", description: "the attribute postscriptum"}
    - {name: "#ATTRIBUTE_AVAILABILITY_TITLE", description: "the attribute availability title"}
    - {name: "#ATTRIBUTE_AVAILABILITY_CHAPO", description: "the attribute availability chapo"}
    - {name: "#ATTRIBUTE_AVAILABILITY_DESCRIPTION", description: "the attribute availability description"}
    - {name: "#ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM", description: "the attribute availability postscriptum"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}