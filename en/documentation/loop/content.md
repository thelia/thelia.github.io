---
layout: loop
title: Content Loop
description: Content loop lists contents from your shop.
sidebar: loop
lang: en
subnav: loop_content
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
text_search_fields: title, chapo, description, postscriptum
type: content
arguments :
    - {name: "id", description: "A single or a list of content ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "folder", description: "A single or a list of folder ids.", example: "folder=\"3\", folder=\"2,5,8\""}
    - {name: "folder_default", description: "A single or a list of default folder ids allowing to retrieve all content having this parameter as default folder.", example: "folder_default=\"2\", folder_default=\"1,4,7\""}
    - {name: "current", description: "A boolean value which allows either to exclude current content from results either to match only this content", example: "current=\"yes\""}
    - {name: "current_folder", description: "A boolean value which allows either to exclude current folder contents from results either to match only current folder contents. If a content is in multiple folders whose one is current it will not be excluded if current_folder=\"false\" but will be included if current_folder=\"yes\"", example: "current_folder=\"yes\""}
    - {name: "depth", description: "A positive integer value which precise how many subfolder levels will be browse. Will not be consider if folder parameter is not set.", example: "depth=\"2\"", default: "1"}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "exclude", description: "A single or a list of content ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "exclude_folder", description: "A single or a list of folder ids. If a content is in multiple folders which are not all excluded it will not be excluded.", example: "exclude_folder=\"2\", exclude_folder=\"1,4,7\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "title", description: "A title string", example: "title=\"foo\""}
    - {name: "return_url", description: "A boolean value which allows the urls generation.", example: "return_url=\"no\"", default: "yes", from_version: "2.3"}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false"}
    - {
        name: "order", description: "A list of values", example: "order=\"random\"", default: "alpha",
        expected_values: [ 
            {name: "id",                description: "order by ascending ID"},
            {name: "id_reverse",        description: "order by descending ID"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "order by ascending position, considering a given folder. `folder` argument must be set"},
            {name: "manual_reverse",    description: "order by descending position, considering a given folder. `folder` argument must be set"},
            {name: "visible",           description: "online items firts"},
            {name: "visible_reverse",   description: "offline items first"},                        
            {name: "random",            description: "return contents in random order"},
            {name: "given_id",          description: "return the same order received in `id` argument which therefore must be set"},
            {name: "created",           description: "ascending order on date of content creation"},
            {name: "created_reverse",   description: "descending order on date of content creation"},
            {name: "updated",           description: "ascending order on date of content update"},
            {name: "updated_reverse",   description: "descending order on date of content update"},
            {name: "position",          description: "order by ascending position, without considering a parent folder"},
            {name: "position_reverse",  description: "order by descending position, without considering a parent folder"},
        ]
      }
outputs :
    - {name: "$ID", description: "the content id"}
    - {name: "$IS_TRANSLATED", description: "check if the content is translated"}
    - {name: "$LOCALE", description: "The locale used for this research"}
    - {name: "$TITLE", description: "the content title"}
    - {name: "$CHAPO", description: "the content chapo"}
    - {name: "$DESCRIPTION", description: "the content description"}
    - {name: "$POSTSCRIPTUM", description: "the content postscriptum"}
    - {name: "$META_TITLE", description: "the content meta title"}
    - {name: "$META_DESCRIPTION", description: "the content meta description"}
    - {name: "$META_KEYWORDS", description: "the content meta keywords"}
    - {name: "$URL", description: "the content URL"}
    - {name: "$DEFAULT_FOLDER", description: "the default folder id for the current content"}
    - {name: "$POSITION", description: "the content position"}
    - {name: "$HAS_PREVIOUS", description: "true if a content exists before this one in the current folder, following contents positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$HAS_NEXT", description: "true if a content exists after this one in the current folder, following contents positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$PREVIOUS", description: "The ID of content before this one in the current folder, following contents positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$NEXT", description: "The ID of content after this one in the current folder, following contents positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
---
