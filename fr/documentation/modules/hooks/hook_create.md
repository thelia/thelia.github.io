---
layout: home
title: Hooks Quick Start - Modules
sidebar: plugin
lang: fr
subnav: plugin_hooks_create
---

<div class="page-header">
    <h1>Hooks : démarrage rapide</h1>
</div>

<div class="alert alert-warning">
<p>Cette fonctionnalité est disponible depuis la version 2.1</p>
</div>

Si vous attacher votre module à certains hooks vous pouvez y parvenir en suivant ces étapes :


## Declarer un hook

Dans le fichier ```config.xml```de votre modules, vous devez définir le noued ```hooks```:

```xml

<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">

        ....
        <hooks>
            <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
                <tag name="hook.event_listener" event="product.stylesheet" />
                <tag name="hook.event_listener" event="product.after.javascript.initialization" type="front" />
                <tag name="hook.event_listener" event="product.additional" type="front" method="onProductAdditionalContents" />
            </hook>
        </hooks>

</config>
```

Le tag ```hook``` represente une classe responsable de la gestion  d'un ou pluieurs hooks.

```xml
<hook id="module.hook.front" class="Module\Hook\Front" scope="request">
```

Tous les atttributs sont obligatoires.
```id``` doit être unique, ```class``` est le namespace dans lequel réside votre code.

Le tag ```tag```  indique qui prendra en charge le hook défini :

```xml
<tag name="hook.event_listener" event="product.additional" type="frontoffice" method="onProductAdditionalContents" active="0" />
```

Certains attributs sont optionnels. Attributs :

- ```name="hook.event_listener"``` doit être défini.
- ```event``` : représente le *code* du hook pour lequel il souhaite répondre
- ```type``` : indique le contexte : frontoffice (default), front, fo, backoffice, back, bo, pdf or email.
- ```method``` : indique la méthode qui sera appellée. Par défaut il sera basé sur le nom du hook, par exemple : pour le hook ```product.additional```, la méthode ```onProductAdditional``` sera appellée (*CamelCase prefixé par on*).
- ```active``` : permet d'activer le hook  (**set to 1** - *défaut*) or not (**set to 0**) quand le module est installé.


## Implementation de la classe

Votre classe doit étendre la classe ```Thelia\Core\Hook\BaseHook```. Celle-ci fournit un ensemble de méthodes pour générer du code ou retruver des objets relatifs à la session : panier, client, etc.

Quand un hook est appellé depuis le template, un événement pour ce hook est crée et dispatcher par thelia. Si votre module écoute cet événement, la méthode déclarée dans le fichier ```config.xml``` sera appelée en passant l'événement généré comme argument.

Cet événement sera un ```Thelia\Core\Event\Hook\HookRenderEvent``` (*pour un hook fonction*) ou ```Thelia\Core\Event\Hook\HookRenderBlockEvent``` (*pour un hook bloc*)


### Exemple o de hook fonction

Nous allons afficher un message sur la page produit quand un produit  est déjà présent dans le panier du client.

Dans le fichier ```config.xml``` :

```xml
<hooks>
    <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
        <tag name="hook.event_listener" event="product.top" />
        <!--
        same as :
        <tag name="hook.event_listener" event="product.top" type="front" method="onProductTop" active="1" />
        -->
    </hook>
</hooks>
```

Dans notre classe :

```php
<?php

namespace Module\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

/**
 * Class Front
 * @package Test\Hook
 * @author Julien Chanséaume <jchanseaume@openstudio.fr>
 */
class Front extends BaseHook {

    public function onProductTop(HookRenderEvent $event)
    {
        // retrieve the product id (argument of the smarty hook function)
        $product_id = $event->getArgument('product', null);
        // get the cart from the BaseHook class
        $cart = $this->getCart();
        if (null !== $product_id && null !== $cart){
            foreach($cart->getCartItems() as $cartItem){
                if ($cartItem->getProductId() == $product_id){
                    // Add the content to the event
                    $event->add("<p>This product is already in your cart.</p>");
                    return;
                }
            }
        }
        $event->add("<p>This product is not in your cart.</p>");
    }

}
?>
```

Et voilà.
Ce n'est pas une fonctionnalité très utilie pour lemoement mais cela donne une idée de ce qu'il est possible de faire.

D'autres méthodes telles que ```getCart``` sont disponibles grâce à la classe ```BaseHook```:

- ```getOrder``` : obtenir la commande en cours.
- ```getCustomer``` : obtenir le client actuellement connecté.
- ```getLang``` : obtenir la langue utilisée.
- ```getCurrency``` : obtenir la devise utilisée.
- ```getView``` : obtenir la vue affichée (category, product, contact, ...).
- ```getRequest``` : obtenir l'objet ```Symfony\Component\HttpFoundation\Request``` permettant d'accéder aux objets get, post, paramètres serveur etc.

Vous pouvez noter également que les arguments Smarty des fonction hook et des bloc hook ({hook} et {hookblock}) sont accéssibles dans l'événement lui-même grâce à la méthode ```getArgument```. L'événement contient également le code de l'événement courant (via ```getCode```).
*Utilie quand plusieurs hooks pointent vers la même méthode*


### Exemple d'un hookblock

Nous allons ajouter un nouvel onglet sur la page produit. Celui-ci contiendra du contenu relatif au produit affiché.

Dans le fichier ```config.xml``` :

```xml
<hooks>
    <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
        <tag name="hook.event_listener" event="product.additional" method="onProductAdditionalContents" />
    </hook>
</hooks>
```

Dans notre classse :

```php
<?php

namespace Module\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Hook\BaseHook;
use Thelia\Model\ContentQuery;
use Thelia\Model\ProductAssociatedContentQuery;

/**
 * Class Front
 * @package Test\Hook
 * @author Julien Chanséaume <jchanseaume@openstudio.fr>
 */
class Front extends BaseHook {

    public function onProductAdditionalContents(HookRenderBlockEvent $event)
    {
        $product_id = intval($event->getArgument('product', null));

        $associatedContents = ProductAssociatedContentQuery::create()->findByProductId($product_id);

        if (null !== $associatedContents){
            $html = array('<ul>');
            foreach($associatedContents as $associatedContent){
                $content = ContentQuery::create()->findPk($associatedContent->getId());
                $html[] = '<li><a href="' . $content->getUrl() . '">' . $content->getTitle() . '</a></li>';
            }
            $html[] = '</ul>';

            $event->add(array(
                "id" => "related-content",
                "title" => $this->trans("related content"),
                "content" => implode($html)
            ));
        }

    }

}
?>
```

Et voila !
Le contenu associé est maintenant affiché dans un nouvel ongletk.The associated contents are now displayed in a new tab.

Ci-dessous le template du contenu associé dans la page produit :

```html
    <section id="product-tabs">

        {hookblock name="product.additional" product="{product attr="id"}"}

        <ul class="nav nav-tabs" role="tablist">
            <li class="active" role="presentation"><a id="tab1" href="#description" data-toggle="tab" role="tab">{intl l="Description"}</a></li>

            {forhook rel="product.additional"}
                <li role="presentation"><a id="tab{$id}" href="#{$id}" data-toggle="tab" role="tab">{$title}</a></li>
            {/forhook}

        </ul>
        <div class="tab-content">
            <div class="tab-pane active in" id="description" itemprop="description" role="tabpanel" aria-labelledby="tab1">
                <p>{$DESCRIPTION|default:'N/A' nofilter}</p>
            </div>

            {forhook rel="product.additional"}
            <div class="tab-pane" id="{$id}" role="tabpanel" aria-labelledby="tab{$id}">
                {$content nofilter}
            </div>
            {/forhook}

        </div>
        {/hookblock}
    </section>
```

C'est génial mais nous pouvons faire quelque chose de plus simple en utilisant un template Smartyy dans la méthode hook.


### Utiliser un template Smarty dans les hooks.

La classe ```BaseHook``` fournit la méthode ```render```qui fait le gtravail pour vous. Son comportement est simple.

Vous devez tout d'abors placer vos templates dans le dossier `templates`. L'emplacement des templates dépend du type (contexte) du hook. Si c'est un hook ```frontOffice```le chemin de base de vos templates sera utemplate sera ```local/modules/MyModule/templates/frontOffice/default/```.

Vous pouvez surcharger les templates Smarty dans le thème courant. Vous devez enregistrer vos templates dans ce répertoire (si votre template actif est le template `default` de Thelia) : ```template/frontOffice/default/modules/MyModule/```

Si le template `fonctOffice` actif est mon-theme-special, vos fichiers pour surcharger les templates du hook devront être placés dans le répertoire : ```template/frontOffice/mon-theme-special/modules/MyModule/```.

La fonction revisitée :

```php
<?php

    public function onProductAdditionalContents(HookRenderBlockEvent $event)
    {
        $product_id = intval($event->getArgument('product', null));

        if (0 !== $product_id){
            $html = $this->render("related-content.html", array("product" => $product_id));

            if ("" !== $html){
                $event->add(array(
                    "id" => "related-content",
                    "title" => $this->trans("related content"),
                    "content" => $html
                ));
            }
        }

    }

?>
```

Le template correspondant (```templates/frontOffice/default/related-content.html```) :

```html
{ifloop rel="associated_content"}
<ul class="list list-content">
{loop name="associated_content" type="associated_content" product=$product }
    {loop name="content" type="content" id=$CONTENT_ID}
    <li class="list-item">
        <h4 class="list-item-title">{$TITLE}</h4>
        <p class="list-item-chapo">{$CHAPO}</p>
        <p class="list-item-more">
            <a href="{$URL}">
                {images file='img/more.png' source='MyModule'}<img src="{$asset_url}" alt="{intl l="view full article" d="mymodule.fo.default"}" />{/images}
                {intl l="view full article" d="mymodule.fo.default"}
            </a>
        </p>
    </li>
    {/loop}
{/loop}
</ul>
{/ifloop}
```

Comme vous pouvez le voir vous pouvez utiliser **assets** et **translations** dans vos templates Smarty. Pour que les modules restent indépendant s et isolés vous devez utiliser le concept de domaine dans les fonctions relatives aux assets et aux traductions.

Pour les fonctions de traductions (ex : `{intl}`) vous devriez utiliser l'attribut ```d```avec un code special. Vous pouvez en apprendre plus sur cette fonction sur cette page : [internationalization](/fr/documentation/templates/i18n.html#{intl})

Pour les fonctions relatives aux assets (ex: images, images, style)
For assets functions (eg: `{image}`, `{images}`, `{stylesheets}`, `{javascripts}`) vous devriez utiliser l'attribut ```source```en lui passant comme valuer le code de votre module.

Thelia contient un système de surcharge des assets permettant de redéfinir l'asset dans le template en cours. Par exemple, si vous utilisez le template par défaut, et que vous utilisez l'image ```img/more.png``` dans votre template Smarty, vous pourriez surcharger cette image dans votre template en plaçant votre propre version de l'image dans ```template/frontOffice/default/modules/MyModule/img/more.png```


### Ajouter des fichiers CSS et des des fichiers javascript

For some module, you will have to load some specific dependendies like CSS stylesheet or JavaScript.

For **CSS stylesheets**, you have to add the ```<link>``` tag in the ```<head>``` of our page. In order to do this, you have to subscribe to specific ```hook``` located in this area. The best hook is the ```main.stylesheet``` hook if you it's a stylesheet you want in each pages of your site. If it's a stylesheet just needed in few pages, you can use hook specific to page : **product**.stylesheet, **category**.stylesheet, ...

For JavaScript files, you should add them at the bottom of the page and after the inclusion of the default JavaScript files of your template. The hook for global JavaScript is : ```main.after-javascript-include``` and for specific page : **product**.after-javascript-include, **category**.after-javascript-include, ...

Once done, your method have to possibilities to add files to the hook event that is dispatched for these hooks :

### Using the ```BaseHook``` helper functions

The ```BaseHook``` class provides 2 methods to add these files. On the first hand, we have the ```addCSS``` method for CSS Stylesheet, on the second hand the ```addJS``` method for JavaScript files.

The method supports the same system of overriding as Smarty templates.

For example, this method attached to the ```main.stylesheet``` hook

```php
public function onMainStylesheet(HookRenderEvent $event)
{
    $content = $this->addCSS('assets/css/styles.css');
    $content .= $this->addCSS('assets/css/print.css',
                             array("media" => "print"));
    $event->add($content);
}
```

will render :

```html
<head>
....
    <link rel="stylesheet" type="text/css" href="http://www.myshop.com/assets/assets/css/HookCustomer/assets/css/8a0ca85.css" />
    <link rel="stylesheet" type="text/css" href="http://www.myshop.com/assets/assets/css/HookCustomer/assets/css/8a0ca85.css" media="print" />
...
</head>
```


### Using the Smarty ```assets``` block

Les directives Smarty [assets](/fr/documentation/templates/assets.html) ```{stylesheets}``` et ```{javascripts}```  peuvent être utilisées pour inclure les dépendances de vos modules.

Ces directives sont puissantes et supporte un système le même mécanisme de surcharge. Le principal avantages est que vous pouvez ajouter plusieurs fichiers à la fois :


```html
{stylesheets source="MyModule" file="assets/css/*.css"}
    <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{stylesheet}
```

Dans nos méthodes nous devons appeler la fonction `render`de cette façon :

```php
public function onMainStylesheet(HookRenderEvent $event)
{
    $content = $this->render('main-stylessheet.html');
    $event->add($content);
}
```

## La nouvelle configuration des modules

Avant les hooks les modules pouvaient interagir avec le template back-office via la fonction {module_include}, en particulier pour créer des liens dans la pages des modules pour y ajouter des pages de configuration.

Désormais ajouter des raccourcis vers votre module est plsu simple comme vous pouvez ajouter des entrées dans la navigation principale ou à d'autres emplacements besoin.
Vous pouvez toujours ajouter un lien dans la page des modules vers la page de configuration de votre modules en attachant votre module au hook `module.configuration`.
La fonction `{module_include}` module_configutration est **dépréciée** mais fonctionne toutefois comme attendu.



## Améliorations depuis Thelia 2.3

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est disponible que depuis la version 2.3</p>
</div>

L'utilisation ds hooks a été simplifiée.

Désormais il n'est plus obligatoire d'implémenter vos propres classes pour géger les hooks. Si vous souhaitez afficher un template, ajouter une feuille de style CSS ou inclure un fichier javascript vous pouvez le faire simplement. par exemple :

```xml
<hooks>
    <hook id="hooknavigation.hook.test">
      <tag name="hook.event_listener" event="main.navbar-primary" templates="render:myTemplate.html" />
      <tag name="hook.event_listener" event="main.stylesheet" type="front" active="1" templates="css:myCss.css;render:theme.css.html" />
    </hook>
</hooks>
```

Vous remarquerez que les arguments `class` et `scope`ont été omis.

Le tag `syntax`est identique et opère de la même manière sauf pour l'argument `templates`. Ce dernier est utilisé pour définir le contenu qui sera *injecté* dans le hook.

La syntaxe est la suivante :

```
templates="<action>:<file>[;<action>:<file>]*"
```

- action (que faire du fichier) :
    - **render** : par défaut (si `action` n'est pas précisé). Le fichier sera interprété. Tous les parmètres affectés au hook seront disponibles dans le template.
    - **dump** : affichera un dump du contenu du fichier.
    - **css** : crééra un tag HTML `link` et ajoutera le fichier CSS.
    - **js** : crééra un tag HTML `script` et ajoutera le fichier javascript.
- file : le chemin complet du fichier relatif au répertoire racine du répertoire de vos templates. Par exemple si le hook est un hook du front-office et que souahitez afficher le template `myTemplate.html`, ce dernier devra se trouver à l'emplacement suivant : `templates\frontOffice\default\`. Le mécanisme de surcharge est le même que celui utilisé pour les hooks classiques.

Une commande a été ajouté pour supprimer les hooks d'un ou plusieurs modules. Il seront rcréés (avec leur configuration par défaut) quand le cache de l'application sera nettoyé.

```bash
# supprime les hooks du module HookNavigation (sans demande de confirmation)
php Thelia hook:clean HookNavigation --assume-yes
# supprime les hooks de tous les modules (avec demande de confirmation)
php Thelia hook:clean
```
