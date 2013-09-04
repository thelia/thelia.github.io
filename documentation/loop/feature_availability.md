---
layout: loop
title: Feature availability Loop
description: Feature availability loop lists feature availabilities.
sidebar: loop
subnav: loop_feature_availability
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: feature_availability
arguments :
    - {name: "id", description: "A single or a list of feature availability ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "feature", description: "A single or a list of feature ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude", description: "A single or a list of feature availability ids to exclude.", example: "exclude=\"456,123\""}
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
    - {name: "#ID", description: "the feature availability id"}
    - {name: "#TITLE", description: "the feature availability title"}
    - {name: "#CHAPO", description: "the feature availability chapo"}
    - {name: "#DESCRIPTION", description: "the feature availability description"}
    - {name: "#POSTSCRIPTUM", description: "the feature availability postscriptum"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}