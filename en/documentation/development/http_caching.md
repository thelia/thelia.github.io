---
layout: home
title: Development - Http Caching
sidebar: development
lang: en
subnav: development_http
---

<div class="page-header">
    <h1>Development : <small>Http Caching</small></h1>
</div>

Thelia implements the symfony 2 reverse proxy. To activate it, just edit the ```web/index.php```and uncomment all references to HttpCache : 

```
use Thelia\Core\HttpKernel\HttpCache\HttpCache;
use Thelia\Core\Thelia;
use Thelia\Core\HttpFoundation\Request;

$env = 'prod';
require __DIR__ . '/../core/bootstrap.php';

$request = Request::createFromGlobals();

$thelia = new Thelia("prod", false);
$thelia = new HttpCache($thelia);
$response = $thelia->handle($request)->prepare($request)->send();

$thelia->terminate($request, $response);
```

A module can be use to easily add an expiration time on each route or disable the caching process : [HttpCaching module](https://github.com/thelia-modules/HttpCaching)

## ESI tag

Symfony 2 reverse proxy supports esi tag, just as varnish supports it. Using this feature it's easy to replace the symfony 2 reverse proxy by varnish.

ESI tags are html tags interpreted by some reverse proxy, they are usefull for creating some fragments in your templates that can have a different cache expiration or simply no cache like the mini cart. 

By using the ```render_esi``` function in your template, Thelia render the esi tag when you are in production mode or the html fragment if you are in development mode.

### Syntax

``` {render_esi path="http://domain.tld/esi_resource"} ```

<div class="alert alert-warning">
The path must be an absolute url, you can use some helpers like <a href="/en/documentation/templates/urls-and-paths.html">url</a> function
</div>


You can learn more about http cache process reading the [symfony](http://symfony.com/doc/current/book/http_cache.html) documentation
