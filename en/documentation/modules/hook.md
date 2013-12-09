---
layout: home
title: Admin hooks - Modules
sidebar: plugin
lang: en
subnav: plugin_hook
---

<div class="page-header">
    <h1>Modules : <small>Admin Hooks</small></h1>
</div>

using hooks you can insert block of code in many part of the back-office.

Doing this is very simple. You just have to create a html file (file name is important and depends on the hook) in your AdminIncludes folder
and it will be parsed and include in the Back-office

Your file must have the same name as the hook you want to be display in. For example, the hook name is ```product-edit```, my file name must be ```product-edit.html```

You can discover all available hooks if you put SHOW_INCLUDE=1 in your query string. This only work in debug mode.