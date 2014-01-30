---
layout: loop
title: Area Loop
description: Area loop displays areas information.
sidebar: loop
lang: en
subnav: loop_area
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: area
arguments :
    - {name: "id", description: "A single or a list of area ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "with_zone", description: ""}
    - {name: "without_zone", description: ""}

outputs :
    - {name: "$ID", description: "the area id"}
    - {name: "$NAME", description: "the area name"}
    - {name: "$POSTAGE", description: "the area postage"}
---