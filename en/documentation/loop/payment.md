---
layout: loop
title: Payment Loop
description: payment loop displays payment modules information.
sidebar: loop
lang: en
subnav: loop_payment
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: payment
arguments :
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
    - {name: "$ID", description: "the payment module id"}
    - {name: "$TITLE", description: "the payment module title"}
    - {name: "$CHAPO", description: "the payment module short description"}
    - {name: "$DESCRIPTION", description: "the payment module description"}
    - {name: "$POSTSCRIPTUM", description: "the payment module postscriptum"}
---