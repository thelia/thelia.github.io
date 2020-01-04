---
layout: home
title: Actions - Modules
sidebar: plugin
lang: fr
subnav: plugin_action
---

<div class="page-header">
    <h1>Les actions</h1>
</div>

Comme dans Thelia 1 vous pouvez utiliser une action pour créer un nouveau compte, ajouter un produit et bien plus encore.

Beacoup d'action sont natives à Thelia, et vous pouvez bien sûr créer les votres en créant un module. La nouveauté dans Thelia 2 est que vous pouvez surcharger toutes les actions par défaut de Thelia  et les remplacer par les votres.

Les actions utilisent le mecanisme  d'écouteurs d'événementrs de Thelia (`EventListener`) et sont déclarées dans des fichiers de configuration. Elles sont exécutées au démarrage de la méthode `TheliaHTTPKernel::handle`.
Un écouteur interne interceptera l'événement `kernel.request` et en dispatchera un nouveau si le paramètre de l'action est présente dans la requête. Le nom de ce nouvel événeùent commence par "action" suivant du nom de l'action. Si cette action est `createCusteomer`, le nom e l'zction sera `action.createCustomer` et vous serz en mesure  d'intercepter cet événement pour un usage spécifique.

Toutes les méthodes de votre action ont pour seul argument un objet **Thelia\Core\Event\ActionEvent**. Cet objet contient les objets courants `Request` et `Dispatcher` (pour dispatcher de nouveaux événements si vous le souhaitez).

Afin de déclarer les actions de votre module, vous devez utilisez le fichier config.xml et déclarer un nouveau service. Supposons que vous créer un module Test ayant la structure suivante :

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

Dans le fichier config.xml vous avez déclarer vos propres boucles, filtres et autres services. Les écouteurs d'événements (EventListeners) doivent utiliser le tag spécial nommé "kernel.event_subscriber".

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

Votre classe Customer doit imlémenter l'interface et la méthode [Symfony\Component\EventDispatcher\EventSubscriberInterface](http://api.symfony.com/2.8/Symfony/Component/EventDispatcher/EventSubscriberInterface.html) et implementer la méthode [getSubscribedEvents](http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents).

Le nom de l'action pour créer un nouveau client est **createCustomer**, le nom de l'action sera donc **action.createCustomer** et vous devrez déclarer que vous souhaitez écouter cette action dans la méthode [getSubscribedEvents](http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents).

Comme cette action est également une action par défaut de  Thelia, vous devez déclarer une priorité supérieure à 128 (pour qu'elle soit exécutée à la place de l'action par défaut).
Etant également une action par défaut de Thelia vous devez décider si votre action doit être exécutée avant l'action par défaut (et éventuellement en stopper la propagation) ou si elle doit être appellée après l'action par défaut.

Si vous vous souhaitez exécuter votre action avant celle de Thelia vous devez lui donner une priorité supérieur à 128. Si vous voulez qu'elle soit déclarer après l'action par défaut de Thelia vous devrez lui donner une priorité inférieur à 128 (ne pas déclarer de priorité revient à déclarer une priorité égale à 0).

Dans la documentation de Thelia vous trouverez le code suivant :

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

Votre méthode pour cette action est appellée *create*.

Exemple illustrant le cas où vous souhaitez remplacer l'action par défaut :

```php
<?php

    public static function getSubscribedEvents()
    {
        return array(
            "action.createCustomer" => array("create", 256),
        );
    }

```

Exemple illustrant le cas où vous ne souhaitez pas remplacer l'action par défaut :


```php
<?php

    public static function getSubscribedEvents()
    {
        return array(
            "action.createCustomer" => array("create", 0),
        );
    }

```

Ci-dessous un exemple complet de votre classe Customer :

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
