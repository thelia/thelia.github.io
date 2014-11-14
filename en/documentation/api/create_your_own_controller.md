---
sidebar: api
title: Create your own API controller
layout: home
lang: en
subnav: api_controller
---
---

# Create your own API controller

<div class="alert alert-warning">You have to create a <a href="../modules/index.html">module</a> first</div>

<div class="alert alert-info">You can use symfony a:b:c notation since v2.1.0-alpha2</div>

## A simple API controller

First, you have to create a class that inherits from ```Thelia\Controller\Api\BaseApiController```

Then you can define your API actions, like other controllers.

### Example

```php
<?php

namespace MyModule\Controller;

use Thelia\Controller\Api\BaseApiController;

class BookController extends BaseApiController
{
    public function listBooksAction()
    {
        //the code here, you can access to many helpers here, see the api
    }

    public function getBookAction($bookId)
    {
        
    }
    
    public function registerBookAction()
    {
        
    }
}

```

Then you can register them into your ```routing.xml```. 

### Example

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<routes xmlns="http://symfony.com/schema/routing"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">

    <route id="mymodule.api.book.list" path="/api/mymodule/books" method="get">
        <default key="_controller">MyModule:Book:listBooks</default>
    </route>
    
    <route id="mymodule.api.book.get" path="/api/mymodule/books/{bookId}" method="get">
            <default key="_controller">MyModule:Book:getBook</default>
            <requirement key="bookId">\d+</requirement>
        </route>

    <route id="MyModule.create.something" path="/api/mymodule/books" method="post">
        <default key="_controller">MyModule:Book:registerBook</default>
    </route>

</routes>

```