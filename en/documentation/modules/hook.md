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

Using hooks, you can insert blocks of code in many parts of the Back-office.

Doing this is very simple. You just have to create a html file (file name is important and depends on the hook) in your AdminIncludes folder
and it will be parsed and included in the Back-office.

Your file must have the same name as the hook you want your markup to affect. For example, if the hook name is ```product-edit```, my file name must be ```product-edit.html```.

You can discover all available hooks if you put ```SHOW_HOOK=1``` in your query string. This only work in debug mode.
