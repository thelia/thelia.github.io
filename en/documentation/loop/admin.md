---
layout: loop
title: Admin Loop
description: Admin loop displays admins information.
sidebar: loop
lang: en
subnav: loop_admin
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: admin
arguments :
    - {name: "id", description: "A single or a list of admin ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "profile", description: "A single or a list of profile ids.", example: "profile=\"2\", profile=\"1,4,7\""}

outputs :
    - {name: "$ID", description: "the admin id"}
    - {name: "$PROFILE", description: "the admin profile id"}
    - {name: "$FIRSTNAME", description: "the admin firstname"}
    - {name: "$LASTNAME", description: "the admin lastname"}
    - {name: "$LOGIN", description: "the admin login"}
    - {name: "$LOCALE", description: "the admin locale"}
---