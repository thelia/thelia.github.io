---
---
layout: home
title: Extend Loops
sidebar: loop
lang: en
subnav: loop_extend
---

# {{ page.title }}



Loops are the most convenient feature in Thelia for front developers,
but sometimes it's not enough.

So, we provide a way to extends various part of a loop :

- arguments definition : add/remove arguments of a loop
- arguments initialization : manipulate the value of arguments provided to a loop  
- build model criteria : manipulate the `Propel` query for `PropelSearchLoopInterface` loops
- build array : manipulate the array for `ArraySearchLoopInterface` loops
- parse results : manipulate the loop results

## How it works

The event dispatcher is used to extend loops.  
When a loop is performed, events are dispatched to extend the loop.

To extend a loop, you just have to listen events you want to interact with.  
So you have to create a service in your module and listen some events.  
Events are related to the part of the loop and the loop name you want to deal with.

Here is an example on how to extends loops in your module :

First, Add a service in the `config.xml` of your module :

```xml
    <services>
        <service id="loopevent.loop.extends" class="LoopEvent\EventListeners\Loop" scope="request">
            <!-- inject services you need -->
            <argument type="service" id="request"/>
            <!-- tag the service to use the Event Subscriber -->
            <tag name="kernel.event_subscriber" />
        </service>
    </services>
```

Next, implement the service (it has to implement the `EventSubscriberInterface`) :

```php
<?php

/**
 * Extends Lang and cart Loops
 *
 * Class Loop
 * @author Julien Chanséaume <julien@thelia.net>
 */
class Loop implements EventSubscriberInterface
{
    /** @var Request $request */
    protected $request = null;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @inheritdoc
     */
    public static function getSubscribedEvents()
    {
        return [
            // Lang
            TheliaEvents::getLoopExtendsEvent(TheliaEvents::LOOP_EXTENDS_ARG_DEFINITIONS, 'lang') => ['langArgDefinitions', 128],
            TheliaEvents::getLoopExtendsEvent(TheliaEvents::LOOP_EXTENDS_INITIALIZE_ARGS, 'lang') => ['langInitializeArgs', 128],
            TheliaEvents::getLoopExtendsEvent(TheliaEvents::LOOP_EXTENDS_BUILD_MODEL_CRITERIA, 'lang') => ['langBuildModelCriteria', 128],
            TheliaEvents::getLoopExtendsEvent(TheliaEvents::LOOP_EXTENDS_PARSE_RESULTS, 'lang') => ['langParseResults', 128],
            // Cart
            TheliaEvents::getLoopExtendsEvent(TheliaEvents::LOOP_EXTENDS_BUILD_ARRAY, 'cart') => ['cartBuildArray', 128],
        ];
    }

    /**
     * Add a new parameter for loop lang
     * you can now call the loop with this argument
     */
    public function langArgDefinitions(LoopExtendsArgDefinitionsEvent $event)
    {
        $argument = $event->getArgumentCollection();
        $argument->addArgument(Argument::createBooleanTypeArgument('uuid', false));
    }

    /**
     * Set the UUID parameters from the query string
     */
    public function langInitializeArgs(LoopExtendsInitializeArgsEvent $event)
    {
        $parameters = $event->getLoopParameters();
        if ($this->request->query->has('loop-uuid')) {
            $parameters['uuid'] = 1;
            $event->setLoopParameters($parameters);
        }
    }

    /**
     * Change the query search of the loop lang
     */
    public function langBuildModelCriteria(LoopExtendsBuildModelCriteriaEvent $event)
    {
        // not very useful but it's for the example
        $event->getModelCriteria()->orderBy('id', Criteria::DESC);
    }

    /**
     * Add the UUID variable to the output variables of the loop lang
     */
    public function langParseResults(LoopExtendsParseResultsEvent $event)
    {
        $loopResult = $event->getLoopResult();
        $arguments = $event->getLoop()->getArgumentCollection();
        if ($arguments->get('uuid')->getValue()) {
            foreach ($loopResult as $row) {
                $row->set('UUID', uniqid());
            }
        }
    }

    /**
     * Change cart items
     */
    public function cartBuildArray(LoopExtendsBuildArrayEvent $event)
    {
        $elements = $event->getArray();

        /** @var CartItem $item */
        foreach ($elements as $item) {
            $item->setPrice("0");
        }
    }
}
```

Nothing really special here.  
Just notice that to have some consistency in the name of the event,
we use the function `TheliaEvents::getLoopExtendsEvent`. The first argument is the
type of the event, and the second argument is the name of the loop.
