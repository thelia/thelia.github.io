---
layout: loop
title: Title Loop
description: Title loop lists titles.
sidebar: loop
subnav: loop_title
uses_global_argument: true
returns_global_outputs: true
type: title
arguments :
    - {name: "id", description: "A single or a list of title ids.", example: "id=\"2\", id=\"1,4,7\""}

outputs :
    - {name: "#ID", description: "the title id"}
    - {name: "#SHORT", description: "the short title"}
    - {name: "#LONG", description: "the full title"}
    - {name: "#DEFAULT", description: "return if the title is by default title"}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}