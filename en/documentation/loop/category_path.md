---
layout: loop
title: Category path Loop
description: Category path loop provides the path through the catalog to a given category. For example if we have an "alpha" category standing in an "alpha_father" category which itseflf belong to "root" category. Category path loop for category "alpha" will return "root" then "alpha_father" then "alpha".
sidebar: loop
lang: en
subnav: loop_category_path
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : false, versionable : false }
type: category-path
arguments :
    - {name: "category", description: "A single category id.", example: "category=\"2\"", mandatory: "true"}
    - {name: "depth", description: "The max depth", example: "depth=\"5\""}
    - {name: "visible", description: "Whatever we consider hidden category or not.", example: "visible=\"false\"", default: "true"}
outputs :
    - {name: "$ID", description: "the category id"}
    - {name: "$TITLE", description: "the category title"}
    - {name: "$PARENT", description: "the parent category"}
    - {name: "$URL", description: "the category URL"}

---

<div class="description large-12">
    I want to display a breadcrumb with parent categories.
</div>

<div class="code large-12">

{% highlight smarty %}

<ul class="breadcrumb">
    {loop name="category_path" type="category-path" category="{category attr="id"}"}
    <li>
    {if $LOOP_COUNT == $LOOP_TOTAL}
        <span class="current">{$TITLE}</span>
    {else}
        <a href="{$URL}">{$TITLE}</a>
    {/if}
    </li>
    {/loop}
</ul>

{% endhighlight %}

</div>&nbsp;