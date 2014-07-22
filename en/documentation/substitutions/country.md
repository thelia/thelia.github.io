---
layout: substitution
title: Country Substitution
description: Country Substitution provides default country configured in the store.
sidebar: substitution
lang: en
subnav: substitution_country
prefix: country
arguments :
    - {name: "ask", description: "for the moment only \"default\" value is allowed (default country)"}
attributes :
    - {name: "id", description: ""}
    - {name: "isocode", description: "ISO 3166-1 numeric (3 digit)"}
    - {name: "isoalpha2", description: "The ISO 3166-1 alpha-2 (2 letter)"}
    - {name: "isoalpha3", description: "The ISO 3166-1 alpha-3 (3 letter)"}
    - {name: "title", description: ""}
    - {name: "chapo", description: ""}
    - {name: "description", description: ""}
    - {name: "postscriptum", description: ""}
    - {name: "createdAt", description: "", is_DateTime: true}
    - {name: "updatedAt", description: "", is_DateTime: true}
---