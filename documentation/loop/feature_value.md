---
layout: loop
title: Feature value Loop
description: Feature value loop lists feature availabilities.
sidebar: loop
subnav: loop_feature_value
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: feature_value
arguments :
    - {name: "feature", description: "A single feature id.", example: "feature=\"2\"", mandatory: "true"}
    - {name: "product", description: "A single product id.", example: "product=\"9\"", mandatory: "true"}
    - {name: "feature_availability", description: "A single or a list of feature availability ids.", example: "feature_availability=\"2,5\""}
    - {name: "exclude_feature_availability", description: "A boolean value to return only features with feature availability (no personal value).", example: "feature_availability=\"2,5\""}
    - {name: "exclude_personal_values", description: "A boolean value to return only features with personal value (no feature availability).", example: "exclude_personal_values=\"3,8\""}
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
    - {name: "#ID", description: "the feature value id"}
    - {name: "#PERSONAL_VALUE", description: "the feature personal text value (in cas no feature availability exists for the feature)"}
    - {name: "#TITLE", description: "the feature availability title"}
    - {name: "#CHAPO", description: "the feature availability chapo"}
    - {name: "#DESCRIPTION", description: "the feature availability description"}
    - {name: "#POSTSCRIPTUM", description: "the feature availability postscriptum"}
---