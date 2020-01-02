---
layout: loop
title: Import Loop
description: Import loop lists all defined imports.
sidebar: loop
lang: en
subnav: loop_import
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: import
arguments :
    - {name: "id", description: "A single or a list of import ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of import references.", example: "ref=\"thelia.import.price\", id=\"thelia.import.price,thelia.import.stock\"", from_version: "2.4"}
    - {name: "category", description: "A single or a list of import category ids.", example: "category=\"2\", category=\"1,4\""}
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
    - {name: "$ID", description: "the import id"}
    - {name: "$HANDLE_CLASS", description: "The fully qualified name of the class which implements this import"}
    - {name: "$REF", description: "The import reference, as defined in a config.xml file", from_version: "2.4"}
    - {name: "$TITLE", description: "The import title"}
    - {name: "$DESCRIPTION", description: "the import description"}
    - {name: "$URL", description: "the URL to start this import in the admin import page"}
    - {name: "$POSITION", description: "the import position in the containing category"}
    - {name: "$CATEGORY_ID", description: "the import category id"}
---
