---
layout: loop
title: Currency Loop
description: Currency loop lists currencies.
sidebar: loop
lang: en
subnav: loop_currency
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: currency
arguments :
    - {name: "id", description: "A single or a list of currency ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "default_only", description: "A boolean value to display only the default currency.", example: "default_only=\"true\""}
    - {name: "exclude", description: "A single or a list of currency ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
        name: "order", description: "A list of values", example: "order=\"id_reverse\"", default: "manual",
        expected_values: [
            {name: "id",                description: "order by id"},
            {name: "id_reverse",        description: "order by id DESC"},
            {name: "name",              description: "order by currency name"},
            {name: "name_reverse",      description: "reverse order by currency name"},
            {name: "code",              description: "order by currency code"},
            {name: "code_reverse",      description: "reverse order by currency code"},

        ]
      }
outputs :
    - {name: "$ID", description: "the currency id"}
    - {name: "$IS_TRANSLATED", description: "check if the currency is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$NAME", description: "the currency name"}
    - {name: "$ISOCODE", description: "the ISO numeric currency code"}
    - {name: "$SYMBOL", description: "the ISO numeric currency symbol"}
    - {name: "$RATE", description: "the currency rate"}
    - {name: "$IS_DEFAULT", description: "returns if the currency is the default currency"}
    - {name: "$POSITION", description: "the currency position"}
---