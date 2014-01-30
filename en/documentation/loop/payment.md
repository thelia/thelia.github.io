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

outputs :
    - {name: "$ID", description: "the payment module id"}
    - {name: "$TITLE", description: "the payment module title"}
    - {name: "$CHAPO", description: "the payment module short description"}
    - {name: "$DESCRIPTION", description: "the payment module description"}
    - {name: "$POSTSCRIPTUM", description: "the payment module postscriptum"}
---