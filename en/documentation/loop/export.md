---
layout: loop
title: Export Loop
description: Export loop lists all defined exports.
sidebar: loop
lang: en
subnav: loop_export
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: export
arguments :
    - {name: "id", description: "A single or a list of export ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of export references.", example: "ref=\"thelia.export.customer\", id=\"thelia.export.customer,thelia.export.orders\"", from_version: "2.4"}
    - {name: "category", description: "A single or a list of export category ids.", example: "category=\"2\", category=\"1,4\""}
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
    - {name: "$ID", description: "the export id"}
    - {name: "$HANDLE_CLASS", description: "The fully qualified name of the class which implements this export"}
    - {name: "$REF", description: "The export reference, as defined in a config.xml file", from_version: "2.4"}
    - {name: "$TITLE", description: "The export title"}
    - {name: "$DESCRIPTION", description: "the export description"}
    - {name: "$URL", description: "the URL to start this export in the admin export page"}
    - {name: "$POSITION", description: "the export position in the containing category"}
    - {name: "$CATEGORY_ID", description: "the export category id"}
---
