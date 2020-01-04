---
layout: home
title: Templating - Modules
sidebar: plugin
lang: fr
subnav: plugin_templating
---

<div class="page-header">
    <h1>Le theming</h1>
</div>

Dans votre contrôleur, vous puvez le moteur de templates pour créer le contenu des réponses, du contenu au format HTML.

Deux fonctions helper exsistent pour prendre en charge cette opration : `render` et `renderRaw`

La principale différence entre ces deux fonctions est que `renderRaw` renvoie le contenu au format texte tandis que `render` renvoie une réponse HTTP (`\Thelia\Core\HttpFoundation\Response`). Ainsi `renderRaw('response.html')` et `render('response.html')` tenteront tout les deux de renvoyer le contenu de `response.html` : le premier reverra du texte HTML, le second renverra un objet.

## Exemple

`Something.php` :

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class Something extends BaseFrontController
{
    public function viewAction($productId)
    {
        // ...

        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```

Par défaut, le fichier du template à rendre se trouvent dans le dossier `templates` de votre module. Puis dans un des dossiers suivants en fonction du contexte de la requête : frontOffice, backOffice, pdf, email. Et finalement dans le répertoire portant le même nom que votre thème courant (dans le contexte courant).

`mytemplate.html` :

```smarty
{loop type="product" name="mymodule.product" id="{$product_id}"}
    {* Do something with product *}
{/loop}
```

## Surcharge et fallbacks

Quand vous appellez la méthode `render`dans votre module, Thelia appliquera les règles suivantes pour déterminer quel fichier doit être interprété.

Exemple : si vous utilisez le template frontOffice `mytemplate`, et interprétez le fichier `myrender` dans le module `MyModule` :

1. Thelia testera d'abord l'existence du fichier `templates/frontOffice/mytemplate/myrender.html` et l'utilisera si le fichier est trouvé.
2. Ensuite l'existence du fichier `templates/frontOffice/mytemplate/modules/mymodule/myrender.html`.
3. Ensuite l'existence du fichier `/local/modules/mymodule/templates/frontOffice/mytemplate/myrender.html`.
4. Par défaut Thelia s'arrêtera ici et génèrera une erreur si le fichier n'a pas été trouvé. Cependant si la variable `$useFallbackTemplate` est à `true`  dans votre contrôleu (c'est le cas par défaut), Thelia essaiera d'utiliser le fichier suivant `/local/modules/mymodule/templates/frontOffice/*default*/myrender.html`.

Ce mécanisme permet donc de surcharger un fichier template d'un module soit depuis le front-office (règle N°2) soit dans le répertoire templates du module (règle n° 3).

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class MyController extends BaseFrontController
{

    protected $useFallbackTemplate = true;

    public function viewAction($productId)
    {
        // ...
        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```
