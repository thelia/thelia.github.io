---
layout: loop
title: Folder path Loop
description: Folder path loop provides the path through the catalog to a given folder. For example if we have an "alpha" folder standing in an "alpha_father" folder which itseflf belong to "root" folder. Folder path loop for folder "alpha" will return "root" then "alpha_father" then "alpha".
sidebar: loop
lang: en
subnav: loop_folder_path
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: folder
arguments :
    - {name: "folder", description: "A single folder id.", example: "folder=\"2\"", mandatory: "true"}
    - {name: "depth", description: "The max depth", example: "depth=\"5\""}
    - {name: "visible", description: "Whatever we consider hidden folder or not.", example: "visible=\"false\"", default: "true"}
    - {name: "exclude", description: "A single or a list of folder ids to exclude for result.", example: "exclude=\"5,72\""}
outputs :
    - {name: "$ID", description: "the folder id"}
    - {name: "$TITLE", description: "the folder title"}
    - {name: "$LOCALE", description: "the locale"}
    - {name: "$URL", description: "the folder URL"}

---
