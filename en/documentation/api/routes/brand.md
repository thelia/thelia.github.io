---
layout: api
title: API - Brands
sidebar: api
lang: en
subnav: api_c_brands

description:
    - Read the brands

methods:
    - { name: GET, route: /api/brands, return_code: 200, return: "Results of the 'brand' loop" }
    - { name: GET, route: "/api/brands/{entityId}", parameters: "entityId: The brand id", return_code: 200, return: "Results of the 'brand' loop for entityId" }
---
---