---
layout: home
title: HowTo - Migrer de Thelia 2.2 à Thelia 2.3
sidebar: howto
lang: en
subnav: howto_migrate_22_23
---

<div class="page-header">
    <h1>Migrer de Thelia 2.2 à Thelia 2.3</h1>
</div>

## EventDispatcher

 * Les méthodes `getDispatcher()` et `getName()` de la classe `Symfony\Component\EventDispatcher\Event` sont dépréciées. L'instance du dispatcheur d'événements et le nom de l'événement sont passés directement en paramètre à l'écouteur d'événement.

Avant :

```php
use Symfony\Component\EventDispatcher\Event;

class Foo
{
    public function myFooListener(Event $event)
    {
        $dispatcher = $event->getDispatcher();
        $eventName = $event->getName();
        $dispatcher->dispatch('log', $event);

        // ... more code
   }
}
```

Après :

```php
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class MyListenerClass
{
    public function myListenerMethod(Event $event, $eventName, EventDispatcherInterface $dispatcher)
    {
        $dispatcher->dispatch('log', $event);

        // ... more code
    }
}
```
Bien que cet exemple soit suffisant dans la plupart des cas, **si votre module doit être compatible avec des version antérieures à la 2.3, ou si vos modules utlisent de multiples instances Eventdispatcher**, vous aurez besoin d'injecter explicitememt le dispatcher d'événement `EventDispatcher` dans les écouteurs d'événements (Listeners).
Cela peut se faire en injectant via le constructeur ou via une setter comme suit :

```php
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class MyListenerClass
{
    protected $dispatcher = null;

    public function __construct(EventDispatcherInterface $dispatcher)
    {
        $this->dispatcher = $dispatcher;
    }
}
```

## Les services Request et RequestStack

 * Le service `Request` est déprécié,  vous devez désormais utiliser le service `RequestStack`.


##### Dans vos boucles
La manière de retrouver la requête ne change pas.

Pour obtenir la rrequête courante :

```php
class MyLoopClass extends BaseLoop implements PropelSearchLoopInterface
{
    public function buildModelCriteria()
    {
        // Get the current request
        $request = $this->getCurrentRequest();
        // Or
        $request = $this->requestStack->getCurrentRequest();

        // ... more code
    }
}
```


##### Dans vos contrôleurs

Il n'est pas recommandé d'utiliser `getRequest()` et `getSession()`, l'instance de l'objet Request est reçue dans les paramètres de la méthode `action`.

La fonction `getRequest()` renvoie l'objet correspondant à la requête courante.

**Attention !!** Ceci n'est pas compatible avec Thelia 2.0 car elle utilise Symfony 2.2

Pour obtenir la requête courante

```php
use Thelia\Core\HttpFoundation\Request;

class MyControllerClass extends ...
{
    public function MyActionMethod(Request $request, $query_parameters ...)
    {
        $session = $request->getSession();
        // ... more code
    }
}
```

## Container Scopes

* Le concept de `container scopes` n'existe plus dans Thelia 2.3.
Pour des raisons de rétro compatibilité, les attributs `scope`sont automatiquement supprimés des fichier de configuration XML.

**Attention !!** l'attribut `scope`est toujours obligatoire pour les modules compatibles avec les version de Thelia inférieur à la 2.3.

[Voir la documentation de Symfony pour plus d'informations](http://symfony.com/doc/2.8/cookbook/service_container/scopes.html)


## Test unitaires

 * Les services `SecurityContext`, `ParserContext`, `TokenProvider`, `TheliaFormFactory`, `TaxEngine` ne dépendent plus de `Request`
 mais de `RequestStack`.

 Cela pourrait faire échouer vos tests.

## A propos de la mise à jour de Symfony 2.3 à Symfony 2.8

[Mise à jour de Symfony 2.3 à 2.4](https://github.com/symfony/symfony/blob/2.8/UPGRADE-2.4.md)

[Mise à jour de Symfony 2.4 à 2.5](https://github.com/symfony/symfony/blob/2.8/UPGRADE-2.5.md)

[Mise à jour de Symfony 2.5 à 2.6](https://github.com/symfony/symfony/blob/2.8/UPGRADE-2.6.md)

[Mise à jour de Symfony 2.6 à 2.7](https://github.com/symfony/symfony/blob/2.8/UPGRADE-2.7.md)

[Mise à jour de Symfony 2.7 à 2.8](https://github.com/symfony/symfony/blob/2.8/UPGRADE-2.8.md)

[Mise à jour de Symfony 2.8 à 3.0](https://github.com/symfony/symfony/blob/2.8/UPGRADE-3.0.md)




