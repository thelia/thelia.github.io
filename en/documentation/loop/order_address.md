---
layout: loop
title: Order address Loop
description: Order address loop displays order addresses information.
sidebar: loop
lang: en
subnav: loop_order_address
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: order_address
arguments :
    - {name: "id", description: "A single order address id", example: "id=\"2\"", mandatory: "true"}

outputs :
    - {name: "$ID", description: "the order address id"}
    - {name: "$TITLE", description: "the order address title which might be use in <a href=\"/en/documentation/loop/title.html\">title loop</a>"}
    - {name: "$COMPANY", description: "the order address company"}
    - {name: "$FIRSTNAME", description: "the order address firstname"}
    - {name: "$LASTNAME", description: "the order address lastname"}
    - {name: "$ADDRESS1", description: "the first order address line"}
    - {name: "$ADDRESS2", description: "the second order address line"}
    - {name: "$ADDRESS3", description: "the third order address line"}
    - {name: "$ZIPCODE", description: "the order address zipcode"}
    - {name: "$CITY", description: "the order address city"}
    - {name: "$COUNTRY", description: "the order address country which might be use in <a href=\"/en/documentation/loop/country.html\">country loop</a>"}
    - {name: "$PHONE", description: "the order address phone"}
    - {name: "$CELLPHONE", description: "the order address cellphone"}
---
