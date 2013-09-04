---
layout: loop
title: Address Loop
description: Address loop lists address addresses.
sidebar: loop
subnav: loop_address
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: address
arguments :
    - {name: "id", description: "A single or a list of address ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "customer", description: "Either a customer id or the keyword `current` which search for current customer addresses.", example: "customer=\"current\", customer=\"11\"", default: "current"}
    - {name: "default", description: "A boolean value to return either customer default address either all the others.", example: "default=\"true\""}
    - {name: "exclude", description: "A single or a list of address ids to exclude.", example: "exclude=\"456,123\""}

outputs :
    - {name: "#ID", description: "the address id"}
    - {name: "#NAME", description: "the address name"}
    - {name: "#CUSTOMER", description: "the customer the address is link to which might be use in <a href=\"/documentation/loop/customer.html\">customer loop</a>"}
    - {name: "#TITLE", description: "the address title which might be use in <a href=\"/documentation/loop/title.html\">title loop</a>"}
    - {name: "#COMPANY", description: "the address company"}
    - {name: "#FIRSTNAME", description: "the address firstname"}
    - {name: "#LASTNAME", description: "the address lastname"}
    - {name: "#ADDRESS1", description: "the first address line"}
    - {name: "#ADDRESS2", description: "the second address line"}
    - {name: "#ADDRESS3", description: "the third address line"}
    - {name: "#ZIPCODE", description: "the address zipcode"}
    - {name: "#CITY", description: "the address city"}
    - {name: "#COUNTRY", description: "the address country which might be use in <a href=\"/documentation/loop/country.html\">country loop</a>"}
    - {name: "#PHONE", description: "the address phone"}
    - {name: "#CELLPHONE", description: "the address cellphone"}
    - {name: "#DEFAULT", description: "return if address title is by default address"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}