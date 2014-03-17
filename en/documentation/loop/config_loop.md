---
layout: loop
title: Config Loop
description: Config loop, to access configuration variables
sidebar: loop
lang: en
subnav: loop_config
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: config
arguments :
    - {name: "id", description: "A single of config id.", example: "id=\"2\""}
    - {name: "exclude", description: "A single or a list of config ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "variable", description: "Name of a variable config", example: "variable=\"rewriting_enable\""}
    - {name: "hidden", description: "A boolean value.", example: "hidden=\"no\""}
    - {name: "secured", description: "A boolean value.", example: "secured=\"no\""}
    - {
        name: "order", description: "A list of values", example: "order=\"id_reverse\"", default: "manual",
        expected_values: [
            {name: "id",                description: "order by id"},
            {name: "id_reverse",        description: "order by id DESC"},
            {name: "name",              description: "order by variable name"},
            {name: "name_reverse",      description: "reverse order by variable name"},
            {name: "title",             description: "order by title"},
            {name: "title_reverse",     description: "order by title"},
            {name: "value",             description: "order by variable value"},
            {name: "value_reverse",     description: "reverse order by variable value"},

        ]
      }
outputs :
    - {name: "$ID", description: "the config variable id"}
    - {name: "$NAME", description: "the config variable name"}
    - {name: "$VALUE", description: "the config variable value"}
    - {name: "$IS_TRANSLATED", description: "check if the config is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "The config variable title"}
    - {name: "$CHAPO", description: "The config variable chapo"}
    - {name: "$DESCRIPTION", description: "The config variable description"}
    - {name: "$POSTSCRIPTUM", description: "The config variable postscriptum"}
    - {name: "$HIDDEN", description: "check if the config variable is hidden"}
    - {name: "$SECURED", description: "check if the config variable is secured"}

---