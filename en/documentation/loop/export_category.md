---
layout: loop
title: Export Category Loop
description: Export category loop lists all defined export categories.
sidebar: loop
lang: en
subnav: loop_export_category
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: export-category
arguments :
    - {name: "id", description: "A single or a list of export category ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of export category references.", example: "ref=\"thelia.export.customer\", id=\"thelia.export.customer,thelia.export.products\"", from_version: "2.4"}
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
    - {name: "$ID", description: "the export category id"}
    - {name: "$REF", description: "The export category reference, as defined in a config.xml file", from_version: "2.4"}
    - {name: "$TITLE", description: "the export category title"}
    - {name: "$POSITION", description: "the export category position"}
---
