---
layout: loop
title: Tax rule Loop
description: loop displaying taxes rules created.
sidebar: loop
lang: en
subnav: loop_tax_rule
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: tax-rule
arguments :
    - {name: "id", description: "A single or list of tax rule ids.", example: "id=\"2\", id=\"1,4\""}
    - {name: "exclude", description: "A single or list of tax rule ids to exclude", example: "exclude=\"2\", exclude=\"1,4\""}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "alpha",
        expected_values: [
            {name: "id",                description: "order on id"},
            {name: "id_reverse",        description: "order on id reverse"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"}

        ]
      }

outputs :
    - {name: "$ID", description: "the tax id"}
    - {name: "$IS_TRANSLATED", description: "check if the tax rule is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "Tax title"}
    - {name: "$DESCRIPTION", description: "Tax description"}
    - {name: "$IS_DEFAULT", description: "check if it's the default tax rule"}

---