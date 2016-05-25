---
layout: home
title: Actions - Modules
sidebar: plugin
lang: en
subnav: plugin_action
---

<div class="page-header">
    <h1>Modules : <small>Actions</small></h1>
</div>

As in Thelia 1 you can use an action in order to create a new account, add a product in you cart and many more.

Many Action are native and, of course, you can create your own using modules. But the new part in Thelia 2 is that you
can override all native actions and replace them with your own actions.

Actions use EventListener process and are declared in configuration files. They are executed at the start of the TheliaHTTPKernel::handle method.
An internal listener will catch kernel.request event and dispatch a new one if the action parameter is presents in the request. This new event name starts with
"action." follow by the action name. So if the action is createCustomer, the event name is action.createCustomer and you can now catch this event as you want.

All your method's action have for only argument a **Thelia\Core\Event\ActionEvent** object instance. This object
contains the current Request and a Dispatcher (for dispatching new Events if you want).

In order to declare actions in your module, you have to use your config.xml file and then to declare a new service,
for example you have the modules test with this structure :


```
Test
    Config
        config.xml
    Loop
        SuperLoop.php
        MegaLoop.php
    Filters
        ...
    Actions
        Customer.php
```

In your config.xml you have already declared your own loops, filters and other services. EventListeners have to use the special "tag" named "kernel.event_subscriber".

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">

        ....
        <services>
            <service id="module.action.customer" class="MyModule\Actions\Customer">
                <tag name="kernel.event_subscriber"/>
            </service>
        </services>

</config>
```

You Customer class must have to implement [Symfony\Component\EventDispatcher\EventSubscriberInterface](http://api.symfony.com/2.8/Symfony/Component/EventDispatcher/EventSubscriberInterface.html) and to implement the [getSubscribedEvents](http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents) method.

The action name for creating a new customer is **createCustomer** so the event name is **action.createCustomer** and you have to declare in the [getSubscribedEvents](http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents) that you want to listen this action.
Because this action is also a default thelia action, you can decide if your action has to be executed before the
default one, if you want it to stop the propagation after the execution of your action or if you want it to be executed after
the thelia default action.

If you want to execute your custom action before the default action, you have to declare a priority greater than 128. Also
if you want it to be declared after the default action you have to declare a priority lesser than 128 (if you don't declare priority is like you have declaring a priority
equal to 0).

If you read the API documentation you see that :

```php
    /**
     * Returns an array of event names this subscriber wants to listen to.
     *
     * The array keys are event names and the value can be:
     *
     *  * The method name to call (priority defaults to 0)
     *  * An array composed of the method name to call and the priority
     *  * An array of arrays composed of the method names to call and respective
     *    priorities, or 0 if unset
     *
     * For instance:
     *
     *  * array('eventName' => 'methodName')
     *  * array('eventName' => array('methodName', $priority))
     *  * array('eventName' => array(array('methodName1', $priority), array('methodName2'))
     *
     * @return array The event names to listen to
     *
     * @api
     */
```

Your method for this action is named *create*.

Example for the case if you want to replace the default action :

```php
<?php

    public static function getSubscribedEvents()
    {
        return array(
            "action.createCustomer" => array("create", 256),
        );
    }

```

Example if you don't want to replace the default action :


```php
<?php

    public static function getSubscribedEvents()
    {
        return array(
            "action.createCustomer" => array("create", 0),
        );
    }

```

This is a complete example of your Customer class :

```php
<?php

namespace Test\Actions;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Thelia\Core\Event\ActionEvent;


class Customer implements EventSubscriberInterface
{

    public function create(ActionEvent $event)
    {
        //your code here
    }

    public static function getSubscribedEvents()
    {
        return array(
            "action.createCustomer" => array("create", 256),
        );
    }
}

```
