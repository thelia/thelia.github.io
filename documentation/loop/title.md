---
layout: loop
title: Title Loop
sidebar: loop
subnav: loop_title
uses_global_argument: true
returns_global_outputs: true
arguments :
    - {name: "id", description: "A single or a list of title ids.", example: "id=\"2\", id=\"1,4,7\""}

outputs :
    - {name: "#ID", description: "the title id"}
    - {name: "#SHORT", description: "the short title"}
    - {name: "#LONG", description: "the full title"}
    - {name: "#DEFAULT", description: "return if the title is by default title"}
examples :
    - {description: "I want to .."}
---

#{{ page.title }}

Title loop lists titles.