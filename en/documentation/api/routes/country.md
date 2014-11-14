---
layout: api
title: Countries
sidebar: api
lang: en
subnav: api_c_countries

description:
    - Read the countries

methods:
    - { name: GET, route: /api/countries, return_code: 200, return: "Results of the 'country' loop" }
    - { name: GET, route: "/api/countries/{entityId}", parameters: "entityId: The country id", return_code: 200, return: "Results of the 'country' loop for entityId" }
---
---