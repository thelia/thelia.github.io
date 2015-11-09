---
layout: loop
title: Folder Loop
description: Folder loop lists folders from your shop.
sidebar: loop
lang: en
subnav: loop_folder
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
type: folder
arguments :
    - {name: "id", description: "A single or a list of folder ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "parent", description: "A single folder id.", example: "folder=\"3\""}
    - {name: "current", description: "A boolean value which allows either to exclude current folder from results either to match only this folder", example: "current=\"yes\""}
    - {name: "content", description: "A single content id.", example: "content=\"3\""}
    - {name: "not_empty", description: "A boolean value.", example: "not_empty=\"yes\"", default: "no"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of folder ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false", from_version: "2.3"}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "`folder` argument must be set"},
            {name: "manual_reverse",    description: "`folder` argument must be set"},
            {name: "random",            description: ""},
            {name: "created",           description: "ascending order on date of content creation"},
            {name: "created_reverse",   description: "descending order on date of content creation"},
            {name: "updated",           description: "ascending order on date of content update"},
            {name: "updated_reverse",   description: "descending order on date of content update"}
        ]
      }
outputs :
    - {name: "$ID", description: "the folder id"}
    - {name: "$IS_TRANSLATED", description: "check if the folder is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "the folder title"}
    - {name: "$CHAPO", description: "the folder chapo"}
    - {name: "$DESCRIPTION", description: "the folder description"}
    - {name: "$POSTSCRIPTUM", description: "the folder postscriptum"}
    - {name: "$META_TITLE", description: "the folder meta title"}
    - {name: "$META_DESCRIPTION", description: "the folder meta description"}
    - {name: "$META_KEYWORDS", description: "the folder meta keywords"}
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
    - {name: "$HAS_PREVIOUS", description: "true if a folder exists before this one in the current parent folder, following folders positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true, or if <strong>backend_context</strong> is true", from_version: "2.3"}
    - {name: "$HAS_NEXT", description: "true if a folder exists after this one in the current parent folder, following folders positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true, or if <strong>backend_context</strong> is true", from_version: "2.3"}
    - {name: "$PREVIOUS", description: "The ID of folder before this one in the current parent folder, following folders positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true, or if <strong>backend_context</strong> is true", from_version: "2.3"}
    - {name: "$NEXT", description: "The ID of folder after this one in the current parent folder, following folders positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true, or if <strong>backend_context</strong> is true", from_version: "2.3"}   
---