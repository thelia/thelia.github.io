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
    - {name: "country", description: "A country id.", example: "country=\"2\""}
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
    - {name: "$TITLE", description: "the delivery module title"}
    - {name: "$CHAPO", description: "the delivery module short description"}
    - {name: "$DESCRIPTION", description: "the delivery module description"}
    - {name: "$POSTSCRIPTUM", description: "the delivery module postscriptum"}
    - {name: "$POSTAGE", description: ""}
---