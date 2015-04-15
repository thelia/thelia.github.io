---
layout: home
title: Development - Security
sidebar: development
lang: en
subnav: security
---


<div class="page-header">
    <h1>Development : <small>Security</small></h1>
</div>

Thelia provide tools to help you with your site security.

CSRF token
---

All Thelia forms provides a csrf token by default, using the symfony form component extension.

For some reason you may need to have a token on another action than a Thelia form.

You can use thelia token provider to ensure a csrf-vulnerable free action.

### Template

To use the token provider in your template, you can use the ```token_url``` function instead of ```url```
 
Example:

```smarty
{token_url path="/delete/something" id=42}
```

### Validation

You have to use the ```thelia.token_provider``` service, that is an instance of ```Thelia\Tools\TokenProvider```.

An example of check is defined in ```Thelia\Controller\Admin\AbstractCrudController::deleteAction```:

```php
<?php

$this->getTokenProvider()->checkToken(
    $this->getRequest()->query->get("_token")
);
```

or if you want to use it in a service using dependency injection:

```php
<?php

namespace MyModule\Foo;

use Thelia\Tools\TokenProvider;
use Thelia\Core\Security\Exception\TokenAuthenticationException;

class MyService
{
    protected $tokenProvider;
    
    public function __construct(TokenProvider $tokenProvider)
    {
        $this->tokenProvider = $tokenProvider;
    }
    
    public function myMethod($token)
    {
        try {
            $this->tokenProvider->checkToken($token);
        } catch (TokenAuthenticationException $e) {
            // The token is not valid
        }
    }
}
```