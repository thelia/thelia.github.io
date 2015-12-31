---
layout: loop
title: State Loop
description: State loop lists states.
sidebar: loop
lang: en
subnav: loop_state
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: state
from_version: 2.3
arguments :
    - {name: "id", description: "A single or a list of state ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "country", description: "A single or a list of country ids.", example: "country=\"10,9\", country: \"500\""}
    - {name: "exclude", description: "A single or a list of state ids to exclude from the results.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "visible", description: "A boolean value to return visible or not visible states (possible values : yes, no or *).", example: "visible=\"no\"", default: "yes"}
    - {
        name: "order", description: "A list of values for sort order", example: "order=\"alpha_reverse\"", default: "id",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "id",            description: "order by ascending id"},
            {name: "id_reverse",    description: "order by descending id"},
            {name: "visible",            description: "order by ascending visibility"},
            {name: "visible_reverse",    description: "order by descending visibility"},
            {name: "random",            description: "return states in pseudo-random order"}
        ]
    }
outputs :
    - {name: "$ID", description: "the state id"}
    - {name: "$COUNTRY", description: "the country the state belongs"}
    - {name: "$VISIBLE", description: "true if the state is visible. False otherwise"}
    - {name: "$IS_TRANSLATED", description: "check if the state is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "the state title"}
    - {name: "$ISOCODE", description: "the state ISO code"}
---
