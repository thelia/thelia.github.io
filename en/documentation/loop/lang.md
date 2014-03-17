---
layout: loop
title: Lang Loop
description: Lang loop.
sidebar: loop
lang: en
subnav: loop_lang
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: lang
arguments :
    - {name: "id", description: "A single lang id.", example: "id=\"2\""}
    - {name: "exclude", description: "A single or list of lang ids.", example: "exclude=\"2\", exclude=\"1,3\""}
    - {name: "default_only", description: "search only default lang", default: "false", example: "default_only=\"true\""}
    - {
      name: "order", description: "A list of values", example: "order=\"reference-reverse\"", default: "create-date-reverse",
      expected_values: [
          {name: "id",           description: "id order"},
          {name: "id_reverse",           description: "reverse id order"},
          {name: "alpha",           description: "alpha order"},
          {name: "alpha_reverse",           description: "alpha order reverse"},

      ]
    }

outputs :
    - {name: "$ID", description: "the order id"}
    - {name: "$TITLE", description: "lang title"}
    - {name: "$CODE", description: "lang code, example : fr"}
    - {name: "$LOCALE", description: "lang locale, example : fr_FR"}
    - {name: "$URL", description: "lang url id one domain for each lang is used"}
    - {name: "$IS_DEFAULT", description: "check if the current is the default one"}
    - {name: "$POSITION", description: "lang position"}


---