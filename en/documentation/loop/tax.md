---
layout: loop
title: Tax Loop
description: loop displaying taxes available.
sidebar: loop
lang: en
subnav: loop_tax
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: tax
arguments :
    - {name: "id", description: "A single or list of tax ids.", example: "id=\"2\", id=\"1,4\""}
    - {name: "exclude", description: "A single or list of tax ids to exclude", example: "exclude=\"2\", exclude=\"1,4\""}
    - {name: "tax_rule", description: "A single or list of tax_rule ids", example: "tax_rule=\"2\", tax_rule=\"1,4\""}
    - {name: "exclude_tax_rule", description: "A single or list of tax_rule ids to exclude", example: "exclude_tax_rule=\"2\", exclude_tax_rule=\"1,4\""}
    - {name: "country", description: "a country id", example: "country=\"64\""}
outputs :
    - {name: "$ID", description: "the tax id"}
    - {name: "$TYPE", description: "The tax type"}
    - {name: "$ESCAPED_TYPE", description: "Provides a form-and-javascript-safe version of the type, which is a fully qualified classname, with \\"}
    - {name: "$REQUIREMENTS", description: "All requirements for this tax"}
    - {name: "$IS_TRANSLATED", description: "check if the tax is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "Tax title"}
    - {name: "$DESCRIPTION", description: "Tax description"}

---