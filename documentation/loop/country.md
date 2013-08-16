---
layout: loop
title: Country Loop
description: Country loop lists countries.
sidebar: loop
subnav: loop_country
uses_global_argument: true
returns_global_outputs: true
type: country
arguments :
    - {name: "limit", description: "The maximum number of results to display", example: "limit=\"15\"", default: "500"}
    - {name: "id", description: "A single or a list of country ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "area", description: "A single or a list of area ids.", example: "area=\"10,9\"", area: "500"}
    - {name: "with_area", description: "A boolean value to return either countries whose area is defined either all the others.", example: "with_area=\"true\""}
    - {name: "exclude", description: "A single or a list of country ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
outputs :
    - {name: "#ID", description: "the country id"}
    - {name: "#AREA", description: "the area the country belongs"}
    - {name: "#TITLE", description: "the country title"}
    - {name: "#CHAPO", description: "the country chapo"}
    - {name: "#DESCRIPTION", description: "the country description"}
    - {name: "#POSTSCTIPTUM", description: "the country postscriptum"}
    - {name: "#ISOCODE", description: "the ISO numeric country code"}
    - {name: "#ISOALPHA2", description: "the ISO 2 characters country code"}
    - {name: "#ISOALPHA3", description: "the ISO 3 characters country code"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}