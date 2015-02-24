---
layout: loop
title: Area Loop
description: Area loop returns shipping zones information.
sidebar: loop
lang: en
subnav: loop_area
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: area
arguments :
    - {name: "id", description: "A single or a list of shipping zones ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "country", description: "A list of country IDs. Only zones including these countries will be returned"}
    - {name: "with_zone", description: "A module ID. Returns shipping zones which are assigned to this module ID"}
    - {name: "without_zone", description: "A module ID. Returns shipping zones which are not assigned to this module ID"}
    - {name: "unassigned", description: "If true, returns shipping zones not assigned to any delivery module."}
    - {name: "module_id", description: "A comma separated list of module IDs. If not empty, only zones for the specified modules are returned."}
    - {
        name: "order",
        description: "A list of values", example: "order=\"alpha\"",
        default: "manual",
        expected_values: [
            {name: "id",                 description: "ID order"},
            {name: "id-reverse",         description: "reverse ID order"},
            {name: "alpha",              description: "alphabetical order on title"},
            {name: "alpha-reverse",      description: "reverse alphabetical order on title"}         
        ]
    }
outputs :
    - {name: "$ID", description: "the shipping zone id"}
    - {name: "$NAME", description: "the shipping zone name"}
    - {name: "$POSTAGE", description: "This parameter is always zero in 2.0.0"}
---