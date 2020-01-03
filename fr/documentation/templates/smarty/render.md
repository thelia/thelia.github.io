---
layout: home
title: La fonction render
sidebar: templates
lang: fr
subnav: templates_smarty_render
---

# La fonction `{render}`

La fonction render accepte un argument ```action``` obligatoire correspondant à la méthode de l'action. Elle supporte la notation ```a:b:c```.

Exemple:

```smarty
{render action="Module:Foo:bar"}
```
Exécutera ```Module\Controller\FooController::barAction``` et affichera le résultat.

__Vous pouvez spécifier la methode HTTP__:

```smarty
{render action="Module:Foo:bar" method="PUT"}
```

__Vous pouvez spécifier les paramètres de requête__:

```smarty
{render action="Module:Foo:bar" query="foo=bar&baz=thelia"}
{render action="Module:Foo:bar" query=$anArray}
```

__Idem pour les requêtes__ _(si non précisé sera défini automatiquement à POST)_:

```smarty
{render action="Module:Foo:bar" request="foo=bar&baz=thelia"}
{render action="Module:Foo:bar" request=$anArray}
```

Tous les autres paramètres seront utilisés comme paramètres de la méthode.

Le contrôleur suivant :

```php
<?php

namespace Module\Controller\FooController;

use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Response;

class TestController extends BaseFrontController
{
    public function barAction($paramA, $paramB)
    {
        return new Response($paramA . $paramB);
    }
}
```

sera exécuté avec l'appel de la fonction suivante:

```smarty
{render action="Module:Foo:bar" paramA="foo" paramB="bar"}
```
