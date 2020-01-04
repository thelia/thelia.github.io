---
layout: home
title: Routing - Modules
sidebar: plugin
lang: fr
subnav: plugin_routing
---

<div class="page-header">
    <h1>Les routes</h1>
</div>

<div class="alert alert-info">Vous pouvez utiliser la notation Symfony a:b:c depuiis la Thelia  v2.1.0-alpha2</div>

Vous pouvez définir vos propres règles de routage au sein de votre module.
La définition des routes utilise des fichiers XML.

## Comportement par défaut

Il suffit de créer une fichier nommé `routing.xml` au sein du répertoire `Config`du module. thelia configurera le nouveau routeur (avec l'indentifiant router.**module_code** (ex : router.*hooksearch*)) et lui affectera une priorité par défaut (150).


## Définition de routes personnalisées.

Si vous avez besoin d'une configuration personnalisée pour vos règles de routage, vous pouvez déclarer un service et le taggué en indiquant ```router.register```comme nom de propriété et la priorité souhaitée.
Cependant votre fichier ne  **DEVRAIT PAS** être nommé `routing.xml`(réservé au fichier des règles de routage par défaut de Thelia).

Vous **DEVRIEZ** indiquer comme un identifiant unique pour l'attribut `id`du service et définir le chemin vers votre fichier de routing dans le second élément <argument>

L'indentifiant du service doit donc être unique et une bonne pratique est de le préficxer avec ```router```: router.**quelquechose**

Le second argument est le chemin relatif de votre fichier de routing par rapport au répertoire des modules. L'exemple ci-dessous provient du module Front pour le quel le niveau de priorité est fixé à 128 (donc inférieur au niveau de priorité par défaut).

```xml
    <!-- the service id must be unique and prefixed by router. -->
    <service id="router.front" class="%router.class%">
        <argument type="service" id="router.module.xmlLoader"/>

        <!-- This argument is the relative path to your routing file from the modules directory. Change it with your own path -->
        <argument>Front/Config/front.xml</argument>
        <argument type="collection">
            <argument key="cache_dir">%kernel.cache_dir%</argument>
            <argument key="debug">%kernel.debug%</argument>
        </argument>
        <argument type="service" id="request.context"/>
        <tag name="router.register" priority="128"/>
    </service>
```

## Syntaxe de routes

Le contenu du fichier routing.xml ressemble au texte ci-dessous :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<routes xmlns="http://symfony.com/schema/routing"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">

    <route id="MyModule.home" path="/mymodule/" >
        <default key="_controller">Thelia\Controller\Front\DefaultController::noAction</default>
        <default key="_view">index</default>
    </route>

    <route id="MyModule.foo" path="/mymodule/foo" >
        <default key="_controller">Thelia:Front\Default:no</default>
        <default key="_view">foo</default>
    </route>

    <route id="MyModule.create.something" path="/mymodule/something/create">
        <default key="_controller">MyModule\Controller\SomethingController::createAction</default>
    </route>

    <route id="MyModule.update.something" path="/mymodule/something/update">
        <default key="_controller">MyModule:Something:update</default>
        <!-- It is the same as:
        <default key="_controller">MyModule\Controller\SomethingController::updateAction</default>
        -->
    </route>

</routes>
```

## Comment créer un contrôleur

Un contrôleur est un classe PHP. Cette classe doit étendre une classe qui difféère selon son contexte.

Si vous êtes dans le context `frontOffice` le contrôleur doit étendre la classe [`Thelia\Controller\Front\BaseFrontController`](/api/master/Thelia/Controller/Front/BaseFrontController.html) class.
Dans le cas contraire, dans le contexte `backOffice`, le contrôleur doit étendre la classe [`Thelia\Controller\Admin\BaseAdminController`](/api/master/Thelia/Controller/Admin/BaseAdminController.html)

Exemple :

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

Si vous voulez une URl à partir le l'identifiant d'une route dans les contrôleurs, pensez à utiliser le bon routeur. Par exemple  si vous voulez utiliser  la fonction `generateRedirectFromRoute` avec une route définie dans votre module, vous devriez correctement configurez le routeur courant.

```php
<?php

class Something extends BaseFrontController
{
    protected $currentRouter = "router.mymodule";

    public function redirectAction()
    {
        return $this->generateRedirectFromRoute('mymodule.create.success');
    }
}
```