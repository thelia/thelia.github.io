---
layout: api
title: API - Taxes
sidebar: api
lang: en
subnav: api_c_taxes

description:
    - Read the taxes

methods:
    - { name: GET, route: /api/taxes, return_code: 200, return: "Results of the 'tax' loop" }
    - { name: GET, route: "/api/taxes/{entityId}", parameters: "entityId: The tax id", return_code: 200, return: "Results of the 'tax' loop for entityId" }
---
---