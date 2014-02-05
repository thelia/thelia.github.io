---
layout: loop
title: Category path Loop
description: Category path loop provides the path through the catalog to a given category. For example if we have an "alpha" category standing in an "alpha_father" category which itseflf belong to "root" category. Category path loop for category "alpha" will return "root" then "alpha_father" then "alpha".
sidebar: loop
lang: en
subnav: loop_category_path
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: category
arguments :
    - {name: "category", description: "A single category id.", example: "category=\"2\"", mandatory: "true"}
    - {name: "depth", description: "The max depth", example: "depth=\"5\""}
    - {name: "visible", description: "Whatever we consider hidden category or not.", example: "visible=\"false\"", default: "true"}
    - {name: "exclude", description: "A single or a list of category ids to exclude for result.", example: "exclude=\"5,72\""}
outputs :
    - {name: "$ID", description: "the category id"}
    - {name: "$TITLE", description: "the category title"}
    - {name: "$PARENT", description: "the parent category"}
    - {name: "$URL", description: "the category URL"}
    - {name: "$VISIBLE", description: "whatever the category is visible or not"}
    - {name: "$LEVEL", description: ""}
    - {name: "$CHILD_COUNT", description: ""}
    - {name: "$PREV_LEVEL", description: ""}

---
