---
layout: api
title: Taxes
sidebar: api
lang: en
subnav: api_c_attributes

description:
    - Read the attributes

methods:
    - { name: GET, route: /api/taxes, return_code: 200, return: "Results of the 'attribute-av loop" }
    - { name: GET, route: "/api/taxes/{entityId}", parameters: "entityId: The attribute-av id", return_code: 200, return: "Results of the 'attribute-av' loop for entityId" }
---
---