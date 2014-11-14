---
layout: api
title: Languages
sidebar: api
lang: en
subnav: api_c_languages

description:
    - Read the languages

methods:
    - { name: GET, route: /api/languages, return_code: 200, return: "Results of the 'lang' loop" }
    - { name: GET, route: "/api/languages/{entityId}", parameters: "entityId: The lang id", return_code: 200, return: "Results of the 'lang' loop for entityId" }
---
---