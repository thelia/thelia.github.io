---
layout: home
title: Render
sidebar: templates
lang: en
subnav: templates_smarty_render
---

# Render

The render function takes a mandatory argument ```action```, that is the method of the action. It supports ```a:b:c``` notation. 
Example:

```smarty
{render action="Module:Foo:bar"}
```

Will executes ```Module\Controller\FooController::barAction``` and print the result.

__You can specify the request method__:

```smarty
{render action="Module:Foo:bar" method="PUT"}
```

__You can specify the query parameters__:

```smarty
{render action="Module:Foo:bar" query="foo=bar&baz=thelia"}
{render action="Module:Foo:bar" query=$anArray}
```

__Same for request__ _(if the method isn't specified, it will automaticly set it to POST)_:

```smarty
{render action="Module:Foo:bar" request="foo=bar&baz=thelia"}
{render action="Module:Foo:bar" request=$anArray}
```

All the other parameters will be used as the method parameters.
You can execute the following controller:

```php
<?php

namespace Module\Controller\FooController;

use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Response;

class TestController extends BaseFrontController
{
    public function barAction($paramA, $paramB)
    {
        return new Response($paramA . $paramB);
    }
}
```

with the method:

```smarty
{render action="Module:Foo:bar" paramA="foo" paramB="bar"}
```
