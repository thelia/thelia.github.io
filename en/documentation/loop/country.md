---
layout: loop
title: Country Loop
description: Country loop lists countries.
sidebar: loop
lang: en
subnav: loop_country
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: country
arguments :
    - {name: "id", description: "A single or a list of country ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "area", description: "A single or a list of area ids.", example: "area=\"10,9\", area: \"500\""}
    - {name: "with_area", description: "A boolean value to return either countries whose area is defined either all the others.", example: "with_area=\"true\""}
    - {name: "exclude", description: "A single or a list of country ids to exclude from the results.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "exclude_area", description: "A single or list of area IDs. Countries which belongs to these areas are excluded from the results", example: "exclude_area=\"7\", exclude_area=\"3,102,14\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
outputs :
    - {name: "$ID", description: "the country id"}
    - {name: "$IS_TRANSLATED", description: "check if the country is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$AREA", description: "the area the country belongs"}
    - {name: "$TITLE", description: "the country title"}
    - {name: "$CHAPO", description: "the country chapo"}
    - {name: "$DESCRIPTION", description: "the country description"}
    - {name: "$POSTSCRIPTUM", description: "the country postscriptum"}
    - {name: "$ISOCODE", description: "the ISO numeric country code"}
    - {name: "$ISOALPHA2", description: "the ISO 2 characters country code"}
    - {name: "$ISOALPHA3", description: "the ISO 3 characters country code"}
    - {name: "$IS_DEFAULT", description: "1 if the country is the default one, 0 otherwise"}
    - {name: "$IS_SHOP_COUNTRY", description: "1 if the country is the shop country, 0 otherwise"}
---