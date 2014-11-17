---
layout: home
title: API - Create your own controller
sidebar: api
lang: en
subnav: api_controller
---

#{{ page.title }}

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

## Create an abstract crud API controller

Thelia handles the need for an API controller that manages a full CRUD for an entity.

Like the class ```Thelia\Controller\Admin\AbstractCrudController```, there's an class for the API, that is
```Thelia\Controller\Api\AbstractCrudApiController```

To use this class, just create a subclass and implement to following methods:

```php
<?php

namespace MyModule\Controller;

use Thelia\Controller\Api\AbstractCrudApiController;

class MyCRUDController extends AbstractCrudApiController
{
    public function __construct()
    {
        parent::__construct(
            "my entity name", // The entity name, used for error messages.
            "entity.resource", // The resource name of your entity for ACL
            "action.entity.create", // The events called on your entity creation. It can be a string or an array
            "action.entity.update", // Same for update ...
            "action.entity.delete", // Same for deletion ...
            "MyModule", // Your module code for ACL
            null, // The default loop arguments. Tt should be null or an array. If null, it's defined to ["limit"=>10, "offset"=>0]
            "id" // The "id" parameter name for your loop. It is used to find an unique entity.
        );
    }

    /**
     * There are the methods you have implement
     */
    
    /**
     * @return \Thelia\Core\Template\Element\BaseLoop
     *
     * Get the entity loop instance
     */
    protected function getLoop() 
    {
        return new MyEntityLoopInstance($this->container);
    }
 
    /**
     * @param array $data
     * @return \Thelia\Form\BaseForm
     *
     * Gives the form used for entities creation.
     */
    protected function getCreationForm(array $data = array())
    {
        return $this->createForm("my form name", "my form type", $data, [
            "my options"
        ]);
    }
    
    /**
     * @param array $data
     * @return \Thelia\Form\BaseForm
     *
     * Gives the form used for entities update
     */
    protected function getUpdateForm(array $data = array())
    {
        return $this->createForm("my form name", "my form type", $data, [
            "method" => "PUT",
            "other" => "options"
        ]);
    }
    
    /**
     * @param Event $event
     * @return null|mixed
     *
     * Get the object from the event
     *
     * if return null or false, the action will throw a 404
     */
    protected function extractObjectFromEvent(Event $event)
    {
        return $event->getMyCreatedOrUpdatedObject();
    }
    
    /**
     * @param array $data
     * @return \Symfony\Component\EventDispatcher\Event
     *
     * Hydrates an event object to dispatch on creation.
     */
    protected function getCreationEvent(array &$data)
    {
        $event = new MyCreationEvent();
           
        // Build the event
        
        return $event;
    }
    
    /**
     * @param array $data
     * @return \Symfony\Component\EventDispatcher\Event
     *
     * Hydrates an event object to dispatch on update.
     */
    protected function getUpdateEvent(array &$data)
    {
        $event = new MyUpdateEvent();
                   
        // Build the event
        
        return $event;
    }
    
    /**
     * @param mixed $entityId
     * @return \Symfony\Component\EventDispatcher\Event
     *
     * Hydrates an event object to dispatch on entity deletion.
     */
    protected function getDeleteEvent($entityId)
    {
        $event = new MyDeletionEvent();
                       
        // Build the event
        
        return $event;
    }
}

```

<div class="alert alert-info">
    You only have to build ```__construct``` and ```getLoop``` to have a reading service (get and list).
    You can leave the other methods blank
</div>

Here's a generic route binding for List, Get, Post, Put and Delete.
Just replace:

- ```%module%``` by your lowercase module name
- ```%entity%``` by your lowercase entity name
- ```%Module%``` By your camelcased module code
- ```%Controller%``` By your camelcased controller name, without the "Controller" suffix

```xml
<!-- %entity% route -->
    <route id="%module%.api.%entity%.list" path="/api/module/%module%/%entity%" methods="get">
        <default key="_controller">%Module%:%Controller%:list</default>
    </route>

    <route id="%module%.api.%entity%.create" path="/api/module/%module%/%entity%" methods="post">
        <default key="_controller">%Module%:%Controller%:create</default>
    </route>

    <route id="%module%.api.%entity%.update" path="/api/module/%module%/%entity%" methods="put">
        <default key="_controller">%Module%:%Controller%:update</default>
    </route>

    <route id="%module%.api.%entity%.get" path="/api/module/%module%/%entity%/{entityId}" methods="get">
        <default key="_controller">%Module%:%Controller%:get</default>
        <requirement key="entityId">\d+</requirement>
    </route>

    <route id="%module%.api.%entity%.delete" path="/api/module/%module%/%entity%/{entityId}" methods="delete">
        <default key="_controller">%Module%:%Controller%:delete</default>
        <requirement key="entityId">\d+</requirement>
    </route>
    <!-- end %entity% route -->
```