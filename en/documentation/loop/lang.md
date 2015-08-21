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
    - {name: "id", description: "A single or list of lang ids.", example: "id=\"2\""}
    - {name: "exclude", description: "A single or list of lang ids.", example: "exclude=\"2\", exclude=\"1,3\""}
    - {name: "code", description: "A single or list of lang code.", example: "code=\"fr\", code=\"fr,en\"", from_version: "2.2"}
    - {name: "locale", description: "A single or list of lang locale.", example: "code=\"fr_FR\", code=\"fr_FR,fr_CA\"", from_version: "2.2"}
    - {name: "default_only", description: "returns only the default language", default: "false", example: "default_only=\"true\"", from_version: "2.2"}
    - {name: "exclude_default", description: "exclude the default language from results", default: "false", example: "exclude_default=\"true\""}
    - {
      name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "position",
      expected_values: [
          {name: "id",           description: "sort results by ascending id order"},
          {name: "id_reverse",   description: "sort result by descending id order"},
          {name: "alpha",        description: "sort results by lang title ascending alphabetic order"},
          {name: "alpha_reverse", description: "sort results by lang title descending alphabetic order"},
          {name: "position",         description: "sort result by ascending position order"},
          {name: "position_reverse", description: "sort result by descending position order"}
      ]
    }

outputs :
    - {name: "$ID", description: "the order id"}
    - {name: "$TITLE", description: "lang title"}
    - {name: "$CODE", description: "lang code, example : fr"}
    - {name: "$LOCALE", description: "lang locale, example : fr_FR"}
    - {name: "$URL", description: "the lang URL, only if a specific URL is defined for each lang"}
    - {name: "$IS_DEFAULT", description: "check if the current result is the default one"}
    - {name: "$DATE_FORMAT", description: "the lang date format"}
    - {name: "$TIME_FORMAT", description: "the lang time format"}
    - {name: "$DECIMAL_SEPARATOR", description: "the lang decimal separator, such as , or .", from_version: "2.2"}
    - {name: "$THOUSANDS_SEPARATOR", description: "the lang thousangs separator", from_version: "2.2"}
    - {name: "$DECIMAL_COUNT", description: "the number of digits after the decimal separator", from_version: "2.2"}
    - {name: "$POSITION", description: "lang position"}


---
