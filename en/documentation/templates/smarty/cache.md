---
layout: home
title: Cache
sidebar: templates
lang: en
subnav: templates_smarty_cache
---

# Block Cache

<div class="alert alert-warning">
<p>This functionality is only available since version 2.4</p>
</div>

The cache block uses the `thelia.cache` service.

You can add this block on static parts (menu, footer, ...) of your site to improve the generation time of your web pages

### Arguments

- key : (mandatory) a unique key
- ttl : (mandatory) a time to live in seconds
- lang : specific cache by lang, (default: current lang id)
- currency : specific cache by currency, (default: current currency id)

You can add as many arguments as you need. These arguments will be used to generate a unique key.

### Example:

Simple example:

```smarty
{cache key="my-cache" ttl=600}
    ... HTML or Smarty code ...
{/cache}
```

Example for a specific cache by customer:

```smarty
{cache key="my-cache" ttl=600 customer_id=$CUSTOMER_ID}
    ... HTML or Smarty code ...
{/cache}
```

Example for disable cache by currency:

```smarty
{cache key="my-cache" ttl=600 currency="no"}
    ... HTML or Smarty code ...
{/cache}
```

Example for a specific cache by admin:

```smarty
{cache key="my-cache" ttl=600 admin_id_=$ADMIN_ID}
    ... HTML or Smarty code ...
{/cache}
```

You can disable the caching of a block without delete it. For this, you must specify a ttl to 0.

```smarty
{$ttl = 600}
{if $myCondition}
    {$ttl = 0}
{/if}

{cache key="my-cache" ttl=$ttl}
    ... HTML or Smarty code ...
{/cache}
```


<div class="alert alert-info">
<p>In development mode, the caching is disabled.</p>
</div>

### For Thelia < 2.4

A module can reproduce this behavior.
[Smarty Cache for Thelia < 2.4](https://github.com/thelia-modules/SmartyCache)