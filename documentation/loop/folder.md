---
layout: loop
title: Folder Loop
description: Folder loop lists folders from your shop.
sidebar: loop
subnav: loop_folder
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
type: folder
arguments :
    - {name: "id", description: "A single or a list of folder ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "parent", description: "A single or a list of folder ids.", example: "folder=\"3\", folder=\"2,5,8\""}
    - {name: "current", description: "A boolean value which allows either to exclude current folder from results either to match only this folder", example: "current=\"yes\""}
    - {name: "not_empty", description: "A boolean value.", example: "not_empty=\"yes\"", default: "no"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of folder ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "`folder` argument must be set"},
            {name: "manual_reverse",    description: "`folder` argument must be set"},
            {name: "random",            description: ""}
        ]
      }
outputs :
    - {name: "$ID", description: "the folder id"}
    - {name: "$TITLE", description: "the folder title"}
    - {name: "$CHAPO", description: "the folder chapo"}
    - {name: "$DESCRIPTION", description: "the folder description"}
    - {name: "$POSTSCTIPTUM", description: "the folder postscriptum"}
    - {name: "$URL", description: "the folder URL"}
    - {name: "$PARENT", description: "the parent folder"}
    - {name: "$CONTENT_COUNT", description: "the number of visible contents for this folder"}
    - {name: "$VISIBLE", description: "the folder visibility"}
    - {name: "$POSITION", description: "the folder position"}
    - {name: "$CREATE_DATE", description: "the folder create date"}
    - {name: "$UPDATE_DATE", description: "the folder update date"}
    - {name: "$VERSION", description: "the folder version"}
    - {name: "$VERSION_DATE", description: "the folder version date"}
    - {name: "$VERSION_AUTHOR", description: "the folder version author"}
---