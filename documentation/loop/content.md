---
layout: loop
title: Content Loop
description: Content loop lists contents from your shop.
sidebar: loop
subnav: loop_content
uses_global_argument: true
returns_global_outputs: true
type: content
arguments :
    - {name: "id", description: "A single or a list of content ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "folder", description: "A single or a list of folder ids.", example: "folder=\"3\", folder=\"2,5,8\""}
    - {name: "current", description: "A boolean value which allows either to exclude current content from results either to match only this content", example: "current=\"yes\""}
    - {name: "current_folder", description: "A boolean value which allows either to exclude current folder contents from results either to match only current folder contents. If a content is in multiple folders whose one is current it will not be excluded if current_folder=\"false\" but will be included if current_folder=\"yes\"", example: "current_folder=\"yes\""}
    - {name: "depth", description: "A positive integer value which precise how many subfolder levels will be browse. Will not be consider if folder parameter is not set.", example: "depth=\"2\"", default: "1"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of content ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "exclude_folder", description: "A single or a list of folder ids. If a content is in multiple folders which are not all excluded it will not be excluded.", example: "exclude_folder=\"2\", exclude_folder=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "`content` argument must be set"},
            {name: "manual_reverse",    description: "`content` argument must be set"},
            {name: "random",            description: ""},
            {name: "given_id",          description: "return the same order received in `id` argument which therefore must be set"}
        ]
      }
outputs :
    - {name: "#ID", description: "the content id"}
    - {name: "#TITLE", description: "the content title"}
    - {name: "#CHAPO", description: "the content chapo"}
    - {name: "#DESCRIPTION", description: "the content description"}
    - {name: "#POSTSCTIPTUM", description: "the content postscriptum"}
    - {name: "#POSITION", description: "the content position"}
examples :
    - {description: "I want to .."}
---

{% include loop/body.md %}