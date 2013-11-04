---
layout: home
title: Routing - Modules
sidebar: plugin
subnav: plugin_routing
---

# Routing

You can define your own routing rules for your Module.
Routing definition uses XML files

## How to declare my own routes

All you have to do is to create a file named routing.xml in your Config directory.

## routes syntax

The routing.xml file contains something like this :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<routes xmlns="http://symfony.com/schema/routing"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">

    <route id="MyModule.home" path="/mymodule/" >
        <default key="_controller">Thelia\Controller\Front\DefaultController::noAction</default>
        <default key="_view">index</default>
    </route>

    <route id="MyModule.create.something" path="/mymodule/something/create">
        <default key="_controller">MyModule\Controller\Something::createAction</default>
    </route>

</routes>
```

## How to create a controller

A controller is basically a class. This class must extends a class, this class can differ according to its context.

If you are in FrontOffice context you must extend the [`Thelia\Controller\Front\BaseFrontController`](/api/master/Thelia/Controller/Front/BaseFrontController.html) class. On the contrary in Admin context
you must extend the [`Thelia\Controller\Admin\BaseAdminController`](/api/master/Thelia/Controller/Admin/BaseAdminController.html)

Example :

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class Something extends BaseFrontController
{
    public function createAction()
    {
        //my code here, you can access to many helpers here, see the api
    }
}
```