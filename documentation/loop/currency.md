---
layout: loop
title: Currency Loop
description: Currency loop lists currencies.
sidebar: loop
subnav: loop_currency
uses_global_argument: true
returns_global_outputs: true
type: currency
arguments :
    - {name: "id", description: "A single or a list of currency ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "default_only", description: "A boolean value to display only the default currency.", example: "default_only=\"true\""}
    - {name: "exclude", description: "A single or a list of currency ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
outputs :
    - {name: "#ID", description: "the currency id"}
    - {name: "#NAME", description: "the currency name"}
    - {name: "#ISOCODE", description: "the ISO numeric currency code"}
    - {name: "#RATE", description: "the currency rate"}
    - {name: "#IS_DEFAULT", description: "returns if the currency is the default currency"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}