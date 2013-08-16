---
layout: loop
title: Customer Loop
description: Customer loop displays customers information.
sidebar: loop
subnav: loop_customer
uses_global_argument: true
returns_global_outputs: true
type: customer
arguments :
    - {name: "current", description: "A boolean value which must be set to false if you need to display not authenticated customers information, typically if `sponsor` parameter is set.", example: "current=\"false\"", default: "yes"}
    - {name: "id", description: "A single or a list of customer ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of customer references.", example: "ref=\"1231231241\", ref=\"123123,789789\""}
    - {name: "reseller", description: "A boolean value.", example: "reseller=\"yes\""}
    - {name: "sponsor", description: "The sponsor ID which you want the list of affiliated customers", example: "sponsor=\"1\""}

outputs :
    - {name: "#ID", description: "the customer id"}
    - {name: "#REF", description: "the customer reference"}
    - {name: "#TITLE", description: "the customer title which might be use in <a href=\"/documentation/loop/title.html\">title loop</a>"}
    - {name: "#FIRSTNAME", description: "the customer firstname"}
    - {name: "#LASTNAME", description: "the customer lastname"}
    - {name: "#EMAIL", description: "the customer email"}
    - {name: "#RESELLER", description: "return if the customer is a reseller"}
    - {name: "#SPONSOR", description: "the customer sponsor which might be use in another <a href=\"/documentation/loop/customer.html\">customer loop</a>"}
    - {name: "#DISCOUNT", description: "the customer discount"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}