---
layout: loop
title: Feed Loop
description: Get data from an Atom or RSS feed.
sidebar: loop
lang: en
subnav: loop_feed
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: feed
arguments :
    - {name: "url", mandatory: true, description: "An Atom or RSS feed URL.", example: "url='http://thelia.net/feeds/?lang=en'"}
    - {name: "timeout", description: "Delay in seconds after which the loop closes the connection with the remote server", example: "timeout=10"}
outputs :
    - {name: "$URL", description: "the feed item URL"}
    - {name: "$TITLE", description: "The feed item title"}
    - {name: "$AUTHOR", description: "The feed item author"}
    - {name: "$DESCRIPTION", description: "The feed item description"}
    - {name: "$DATE", description: "the feed item date, as a Unix timestamp"}
---
