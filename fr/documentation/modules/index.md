---
layout: home
title: Modules
sidebar: plugin
lang: fr
subnav: plugin_index
---

<div class="page-header">
    <h1>Modules : <small>Débuter</small></h1>
</div>

Comme en Thelia 1, vous pouvez développer des modules pour étendre les fonctionnalités de Thelia néanmoins l'architecture est totalement nouvelle :

* votre module doit être conforme au [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md)
(savourez, vous pouvez désormais utiliser les Namespace)
* vous pouvez déclarer autant de boucles que vous le souhaitez dans un seul module 
* vous pouvez remplacer les boucles Thelia par vos propres implémentations
* les points d'entrées ont été remplacés par des EventListeners
* configurez votre module avec un fichier XML

![attention](/img/caution.png) **Tous les dossiers et les fichiers sont sensibles à la casse**

La structure de votre module est la suivante :

```
\local
  \modules
    \MyModule
      \Config
        config.xml   <- obligatoire
        module.xml   <- obligatoire
        routing.xml
        schema.xml
      MyModule.php <- obligatoire
      \Loop
        Product.php
        MyLoop.php
      ...
```

Votre repertoire racine correspond au nom de votre module (dans cet exemple le nom est "MyModule"). Vous devez créer la classe principale MyModule dans le fichier MyModule.php. Souvenez-vous, votre module doit être conforme au [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md), donc votre classe principale est MyModule\MyModule.php (oui l'utilisation de namespace est obligatoire et c'est une bonne chose pour vous). L'autre fichier obligatoire est module.xml. Ce fichier contient les informations propres au module, comme la compatibilité et les dépendances à d'autres modules.

Le fichier de configuration (Config/config.xml) est obligatoire. Avec ce fichier, vous pouvez décliarer tous vos services comme les écouteurs d'événement, les boucles, les formulaires et les commandes.

Voici le corps du fichier config.xml :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">


</config>
```

# Module et ligne de commande

La ligne de commande est très utile pour générer beaucoup de choses autour des modules.

## Comment générer un nouveau module

```
$ php Thelia module:generate ModuleName
```

Cette commande génére un module avec toutes les classes, fichiers et répertoires nécessaires.

## Comment générer les "model"

```
$ php Thelia module:generate:model ModuleName
```

Cette commande recherche le fichier schema.xml et le parse en utilisant la ligne de commande Propel. Ce fichier 
This command search the schema.xml file and parse it using Propel command line. Ce fichier est expliqué dans ce chapitre.

## Comment générer le sql

```
$ php Thelia module:generate:sql ModuleName
```

Aussi simplement que les commandes précédentes, le fichier schema.xml est parsé et un fichier sql est créé dans le répertoire Config.