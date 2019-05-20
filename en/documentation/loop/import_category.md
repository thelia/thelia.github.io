---
layout: loop
title: Import Category Loop
description: Import category loop lists all defined import categories.
sidebar: loop
lang: en
subnav: loop_import_category
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: import-category
arguments :
    - {name: "id", description: "A single or a list of import category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of import category references.", example: "ref=\"thelia.import.products\", id=\"thelia.import.products,thelia.import.modules\"", from_version: "2.4"}
    - {
        name: "order", description: "A list of values", example: "order=\"alpha\"", default: "manual",
        expected_values: [
            {name: "id",                description: "ID order"},
            {name: "id_reverse",        description: "reverse ID order"},
            {name: "ref",               description: "Réference order"},
            {name: "ref_reverse",       description: "reverse reference order"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "ascending order position"},
            {name: "manual_reverse",    description: "descending order position"}
        ]
      }
outputs :
    - {name: "$ID", description: "the import category id"}
    - {name: "$REF", description: "The import category reference, as defined in a config.xml file", from_version: "2.4"}
    - {name: "$TITLE", description: "the import category title"}
    - {name: "$POSITION", description: "the import category position"}
---
