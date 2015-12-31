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
    - {name: "visible", description: "A boolean value to return visible or not visible countries (possible values : yes, no or *).", example: "visible=\"no\"", default: "yes", from_version: "2.3"}
    - {name: "has_states", description: "A boolean value to return countries that have states or not (possible values : yes, no or *).", example: "has_states=\"no\"", default: "*", from_version: "2.3"}
    - {
        name: "order", description: "A list of values for sort order", example: "order=\"alpha_reverse\"", default: "id",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "id",            description: "order by ascending id"},
            {name: "id_reverse",    description: "order by descending id"},
            {name: "visible",            description: "order by ascending visibility"},
            {name: "visible_reverse",    description: "order by descending visibility"},
            {name: "random",            description: "return countries in pseudo-random order"}
        ]
    }
outputs :
    - {name: "$ID", description: "the country id"}
    - {name: "$VISIBLE", description: "true if the country is visible. False otherwise"}
    - {name: "$IS_TRANSLATED", description: "check if the country is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$AREA", description: "the area the country belongs", until_version: "2.2"}
    - {name: "$TITLE", description: "the country title"}
    - {name: "$CHAPO", description: "the country chapo"}
    - {name: "$DESCRIPTION", description: "the country description"}
    - {name: "$POSTSCRIPTUM", description: "the country postscriptum"}
    - {name: "$ISOCODE", description: "the ISO numeric country code"}
    - {name: "$ISOALPHA2", description: "the ISO 2 characters country code"}
    - {name: "$ISOALPHA3", description: "the ISO 3 characters country code"}
    - {name: "$IS_DEFAULT", description: "1 if the country is the default one, 0 otherwise"}
    - {name: "$IS_SHOP_COUNTRY", description: "1 if the country is the shop country, 0 otherwise"}
    - {name: "$HAS_STATES", description: "1 if the country has states, 0 otherwise", from_version: "2.3"}
    - {name: "$NEED_ZIP_CODE", description: "1 if the country needs a zip code for address, 0 otherwise", from_version: "2.3"}
    - {name: "$ZIP_CODE_FORMAT", description: "The format of the zip code for this country where N is a digit, L a letter and C a state ISO code.", from_version: "2.3"}
---
