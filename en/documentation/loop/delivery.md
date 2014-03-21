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

outputs :
    - {name: "$ID", description: "the delivery module id"}
    - {name: "$TITLE", description: "the delivery module title"}
    - {name: "$CHAPO", description: "the delivery module short description"}
    - {name: "$DESCRIPTION", description: "the delivery module description"}
    - {name: "$POSTSCRIPTUM", description: "the delivery module postscriptum"}
    - {name: "$POSTAGE", description: ""}
---