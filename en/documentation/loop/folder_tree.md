---
layout: loop
title: Folder tree Loop
description: Folder tree loop, to get a folder tree from a given folder to a given depth.
sidebar: loop
lang: en
subnav: loop_folder_tree
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: folder-tree
arguments :
    - {name: "folder", description: "A single folder id.", example: "folder=\"2\"", mandatory: "true"}
    - {name: "depth", description: "The max depth", example: "depth=\"5\""}
    - {name: "visible", description: "Whatever we consider hidden folder or not.", example: "visible=\"false\"", default: "true"}
    - {name: "exclude", description: "A single or a list of folder ids to exclude for result.", example: "exclude=\"5,72\""}
outputs :
    - {name: "$ID", description: "the folder id"}
    - {name: "$TITLE", description: "the folder title"}
    - {name: "$PARENT", description: "the parent folder"}
    - {name: "$URL", description: "the folder URL"}
    - {name: "$VISIBLE", description: "whatever the folder is visible or not"}
    - {name: "$LEVEL", description: ""}
    - {name: "$CHILD_COUNT", description: ""}

---
