---
layout: home
title: Create Hooks - Modules
sidebar: plugin
lang: fr
subnav: plugin_hooks_create_own
---

<div class="page-header">
    <h1>Créer vos propres hoooks</h1>
</div>

<div class="alert alert-warning">
<p>Cette fonctionnalité est disponible depuis la version 2.1</p>
</div>

## Point d'entrée dans un template

Pour définir un hook dans le template d'un module, vous devez appeller la fonction Smarty `{hook}` avec un paramètre "name".

Le nom de ce paramètre devra correspondre à un des événements de [service tag](hook_create.html#example-of-a-hook-function).

```smarty
{hook name="my_hook_name"}
```

<div class="alert alert-info">
<h4>Convezntion de nommage</h4>
<p>Le nom du hook doit être composé de deux parties séparées par une point : la première partie est le nom de la page, la secondes parties est la position dans la page. les mots peuvent être séparées par un tiret :</p>
<ul>
    <li><strong>product.top</strong> : en haut de la page produit</li>
    <li><strong>product.javascript-initialization</strong> : pour initialiser les script javascript (après leur inclusion) dans la page produit.</li>
</ul>
</div>

## Declarer votre hookk

Après avoir déclaré les points d'entrée de vos hook dans le template, vous devez déclarez le type de vos hook.

Pour ce faire, surchargez la méthodes `getHooks` de la class de votre module.

Vous devez retourner une collection de tableaux associatif contenant ces clés :

- __code__ : le nom du hook
- __type__ : le type de hook, cette valeur correspond aux constantes définies dans ```Thelia\Core\Template\TemplateDefinition```: ```FRONT_OFFICE```, ```BACK_OFFICE```, ```PDF``` and ```EMAIL```
- title : cette valeur peut être un chaîne de caractères ou un tableau associatif dont la locale est la clé.
- description : idem que pour la clé `title`
- chapo : idem que pour la clé `title`
- active : valeur booléene, si égale à `true`le hook sera automatiquement activé (`false` par défaut)if true the hook will be automatically activated (défaut: false)
- block : valeur booléenne, positionnez la à `true` si le hook est un block (`false`par défaut)
- module : valeur booléenne, positionnez la à `true`si vote hook est [relatif à un module](index.html#module) (défaut: `false`)

<small> les clés marquées d'une astérisque (*) sont obligatoires </small>

Exemple:

```php
<?php

namespace MyModule;

use Thelia\Module\BaseModule;

class MyModule extends BaseModule
{
  public function getHooks()
  {
     return array(

          // Only register the title in the default language
          array(
              "type" => TemplateDefinition::BACK_OFFICE,
              "code" => "my_super_hook_name",
              "title" => "My hook",
              "description" => "My hook is really, really great",
          ),

         // Manage i18n
          array(
              "type" => TemplateDefinition::FRONT_OFFICE,
              "code" => "my_hook_name",
              "title" => array(
                  "fr_FR" => "Mon Hook",
                  "en_US" => "My hook",
              ),
              "description" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "chapo" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "block" => true,
              "active" => true
          )
     );
  }
}
```
