---
layout: loop
title: Module Loop
description: The module loop retrieve module informations
sidebar: loop
lang: en
subnav: loop_module
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: module
arguments :
    - {name: "id", description: "A single or a list of module ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "exclude", description: "A single or a list of module ids to exclude.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "profile", description: "A single or a list of profile ids.", example: "profile=\"2\", profile=\"1,4,7\""}
    - {name: "area", description: "A single or a list of area ids. Only modules assigned to this area will be returned.", example: "area=\"5\", profile=\"3,2,17\""}
    - {name: "code", description: "Module code", example: "code=\"Foo\""}
    - {name: "module_type", description: "Module type (classic, payment or delivery)", example: "module_type=\"1\"", expected_values: [
        {name: "1", description: "classic module"},
        {name: "2", description: "delivery module"},
        {name: "3", description: "payment module"},
      ]}
    - {name: "active", description: "A boolean value.", example: "active=\"no\""}
    - {
        name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "order by ascending position"},
            {name: "manual-reverse",    description: "order by descending position"}
        ]
    }
outputs :
    - {name: "$ID", description: "the module ID"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$IS_TRANSLATED", description: "return true if the module is translated"}
    - {name: "$CODE", description: "The module code"}
    - {name: "$TYPE", description: "The module type"}
    - {name: "$ACTIVE", description: "check if the module is activated or not"}
    - {name: "$CLASS", description: "The full namespace for the module class"}
    - {name: "$TITLE", description: "the module title"}
    - {name: "$CHAPO", description: "the module chapo"}
    - {name: "$DESCRIPTION", description: "the module description"}
    - {name: "$POSTSCRIPTUM", description: "the module postscriptum"}
    - {name: "$POSITION", description: "the position of this module"}
---

