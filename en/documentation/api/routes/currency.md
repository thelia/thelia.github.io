---
layout: api
title: API - Currencies
sidebar: api
lang: en
subnav: api_c_currencies

description:
    - Read the currencies

methods:
    - { name: GET, route: /api/currencies, return_code: 200, return: "Results of the 'currency' loop" }
    - { name: GET, route: "/api/currencies/{entityId}", parameters: "entityId: The currency id", return_code: 200, return: "Results of the 'currency' loop for entityId" }
---
---