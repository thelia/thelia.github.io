---
layout: loop
title: Delivery Loop
description: delivery loop displays delivery modules information.
sidebar: loop
lang: en
subnav: loop_delivery
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: delivery
arguments :
    - {name: "id", description: "A module id.", example: "module=4"}
    - {name: "code", description: "A module code.", example: "code='Atos'"}
    - {name: "country", description: "A country id.", example: "country=2"}
    - {name: "address", description: "An address id.", example: "address=21"}
    - {name: "state", description: "A state id.", example: "state=12", from_version: "2.3"}
    - {name: "exclude", description: "A list of module IDs to exclude from the results", example: "exclude=\"12, 21\""}
    - {
        name: "order", description: "A single value in the list below", example: "order=\"id_reverse\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "same position as defined in back-office"},
            {name: "manual_reverse",    description: "reverse position as defined in back-office"},
            {name: "id",                description: "sort by id"},
            {name: "id_reverse",        description: "sort by id reverse"}
        ]
      }

outputs :
    - {name: "$ID", description: "the delivery module id"}
    - {name: "$CODE", description: "the module code"}
    - {name: "$TITLE", description: "the delivery module title"}
    - {name: "$CHAPO", description: "the delivery module short description"}
    - {name: "$DESCRIPTION", description: "the delivery module description"}
    - {name: "$POSTSCRIPTUM", description: "the delivery module postscriptum"}
    - {name: "$POSTAGE", description: "the delivery price with taxes, expressed in the current currency"}
    - {name: "$POSTAGE_TAX", description: "The delivery price tax amount, expressed in the current currency"}
    - {name: "$POSTAGE_UNTAXED", description: "the delivery price without taxes, expressed in the current currency"}
    - {name: "$POSTAGE_TAX_RULE_TITLE", description: "The tax rule title used to get delivery price tax"}
    - {name: "$DELIVERY_DATE", description: "the expected delivery date. This output could be empty."}
---