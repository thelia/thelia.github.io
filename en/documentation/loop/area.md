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
    - {name: "with_zone", description: "A module ID. Returns shipping zones which are assigned to this module ID"}
    - {name: "without_zone", description: "A module ID. Returns shipping zones which are not assigned to this module ID"}
    - {name: "unassigned", description: "If true, returns shipping zones not assigned to any delivery module."}

outputs :
    - {name: "$ID", description: "the shipping zone id"}
    - {name: "$NAME", description: "the shipping zone name"}
    - {name: "$POSTAGE", description: "This parameter is always zero in 2.0.0"}
---