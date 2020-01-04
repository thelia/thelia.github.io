---
layout: home
title: About Hooks - Modules
sidebar: plugin
lang: fr
subnav: plugin_hooks_about
---

<div class="page-header">
    <h1>À propos des hooks</h1>
</div>

<div class="alert alert-warning">
<p>Cette fonctionnalité est disponible depuis la version 2.1</p>
</div>

Lors de la création d'un module pour Thelia, vous pourriez avoir envie de modifier le site de 2 manières :
- Modifier le coeur de Thelia pour ajouter de nouveaux comprtements comme par exemple l'envoi d'un email à l'administrateur quand un produit n'est plus disponible. Dans Thelia ce type de comportement fait appel aux écouteurs/dispatcheurs d'événements.
- Modifier le rendu de certaines zones d'une page. Ce type de comportement fait appel aux **hooks**.

Les **hooks** sont des points d'accroches dans les templates où les modules peuvent ajouter leur propre contenu, ajouter de nouvelle fonctionnalités ou changer l'apparence du site.

Avant l'introduction des hooks dans Thelia, la seule manière de modifier l'aspect du site était de changer directement le template pour ajouter le code gérant les interactions avec le module. Cette solution était loin d'être idéale dans la mesure où elle nécessitait du travail d'intégration supplémentaire, pouvait être complexe pour un débutant et introduisait la possibilité d'écraser les personnalisations du template par défaut en cas de mise à jour.

Les **hooks** simplifient ce tyoe d'intégration. Les modules qui étendent les hooks peuvent fournir une implémentation par défaut basé sur les templates par défaut de Thelia. Si votre template utilise un des hooks natifs de Thelia, activer le module qui étend ce hook devrait fonctionner sans réglage particulier.

La grande force de Thelia est la possibilité de créer un thème personnalisé sans contraintes de blocs ou de structure imposée. Il peut cependant arriver que certains modules ne s'intègrent pas de manière optimale à certains thèmes. Heureusement Thelia offire la possibilité de surcharger cette intgration module-thème sans avoir à modifier les fichiers du module rendant possible les mises à jour futures de ce dernier.


## Fonctionnement des hooks

Le principe des hooks est simple. Le template inclue un hook sous forme de fonction ou de bloc dans le code Smarty. Quend Smarty analyse la fonction ou le bloc un événement est créé et dispatcher aux méthodes du module qui sont à l'écoute de l'événement.

Les modules écoutant ces événements génrent alors le contenu et l'ajoute directement à lévénement. A la fin de l'événement le contenu est injecté en lieu et place de la fonction ou du block Smarty.

Il existe deux types de hooks qui peuvent être étendues : la fonction de base du `hook` et le bloc `hookblock`.


### La fonction hook

La fonction Smarty ```{hook name="hookname" ... }``` injecte le code généré pendant la propagation de l'événement. *La portion de code HTML générér dans les modules est ajouté au code du template que l'événement va renvoyer.*.

Ces hooks passe un objet ```Thelia\Core\Event\Hook\HookRenderEvent``` aux écouteurs ayant souscrit à cet événement.

#### Exemple d'une fonction hook

Dans cet exemple, le code du hook est ```product.details.top``` et le code généré par les modules écoutant cet événement est concaténé et injecté à cet emplacement.

*N.B. : vous pouvez ajouter des arguments à la fonction (ou au block) afin d'identifier le contexte de la reqête. Dans l'emple ci-dessous nous avons l'identifiant du produit qui permettra de savoir de quel produit il s'agit et d'afficher des informations relatives au produit courant.*


```html
...
<section id="product-details">
    {hook name="product.details.top" product="{$ID}"}
...
</section>
```

### Le bloc {hookblock}

Le bloc Smarty ```{hookblock name="hookname" ... }...{/hookblock}``` fonctionne de concert avec le bloc ```{forhook rel="hookname" ... }{/forhook}``` et permet une itération sur le nombre de fragment que le module aura généré et ajouté au hook via l'API [HookRenderBLockEvent](http://doc.thelia.net/api/master/Thelia/Core/Event/Hook/HookRenderBlockEvent).

Ces fragments sont de simples tableaux associatifs (table de hashage). La boucle ```forhook```parcours l'ensemble des fragments de ces tableaux et fait correspondrent les clés du tableau à des variables Smarty que vous pourrez utiliser dans les templates. C'est exctement le même procédé quand vous  passer un tableau associatif de variables Smarty lors du rendu d'un fichier de template Smarty.

Ce type de hook est utile quand vous devez respecter le gabarit de mise en page du template et ajouter seulement les informations pertinentes provenant de votre module. Par exemple si vous avez une liste de blocs qui ont la même apparence dans la barre latérale (barre de titre, bloc de content, un lien).
Vos modules peuvent étendre ce hook en écoutant l'événement auquel il est associé et ajouter un tableau avec le titre, le contenu et le lien à l'ojet événement passé.

Ces hooks  passent un objet ```Thelia\Core\Event\Hook\HookRenderBlockEvent``` aux écouteurs ayant souscrit à cet l'événement.

#### Exemple d'un bloc {hookblock}

Le block Smarty `{hookblock}` est un peu plus complexe que le bloc `hook` mais beaucoup plus flexible. Le hook fournit à Smarty un tableau de tableau : chacun des tableaux es t un tableau associatif et peut être perçu comme étant une rangée dans laquelle chaque colonne à sa propre valeur. Le bloc ```forhook``` permet de parcourir l'ensemble des rangées et de récupérer ses variables (ses colonnes) de manière artbitraire.
les variables peuvent différer en foncton du hook.
Pour savoir quelles sont les variables supportées par chaque hook, reportez-vous à la documentation.

```html
...
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
...
```

Note the three Smarty variables rendered in the two `forhook` constructs above: `$id`, `$title`, and `$content`. Again, these depend on the hook. There is nothing special about these three variables in the broader context of this template; they just happen to be required from any module that extends the `product.additional` hook.

### Comportements communs entre les fonctions et les blocs

#### Atrributs

##### Module

Certains hooks sont conçus pour n'être appellés que depuis un module spécifique en utilisant l'attribut `module`. Cet fonctionnalité concerne en fait les modules de paiement et de livraison. De fait vous pouvez appeller ces hooks pour le module de paiement et le module de livraison qui ont été utilisé _par la commande en cours_ et non pour tous les modules.

Par exemple :

```smarty
{* delivery module can customize the delivery address *}
{hook name="order-invoice.delivery-address" module="{order attr="delivery_module"}"}
```
Au lieu de l'argument `module` vous pouvez utiliser l'argument `modulecode` qui fontionne de la même manière mais accepte une code de module au lieu d'un identifiant.

##### Emplacememnt

Cet argument n'existe que pour des raisons de rétro compatibilité avec la fonction `module_include` utilisée dans les version de Thélia précédant la version 2.1

Par exemple :

```smarty
{hook name="customer.top" location="customer_top" }
```

En premier lieu, les modules attaché au hook `customer.hook` seront appllés. Ensuite les anciens boucles `{module_include location="customer_top"}` seront ajoutés à l'événement (en fait tous les templates du répertoire `{modules}/AdminIncludes/customer_top.html`).

##### Autres

All other attributes that are used in the hook block/function will be added to the event propagated for this hook and could be used to precise the context of the hook (the id of the current product, ...)

### Les blocs {ifhook} / {elsehook}

de même que pour les boucles `{ifloop}`/`{elseloop}`, Thelia fournit des boucles permettant de tester si du contenu a été généré pour l'événement correspondannt.

Cez comportement est similaire et vous devez utiuliser l'attribut `rel`pour précisez le hoohk concerné.

```smarty
{loop name="order" type="order" customer="current" id="$order_id" limit="1" }
    ...
    {ifhook rel="account-order.delivery-information"}
        {hook name="account-order.delivery-information" module={$delivery_id} order={$order_id}}
    {/ifhook}
    {elsehook rel="account-order.delivery-information"}
        <p>{loop name="delivery-module" type="module" id=$DELIVERY_MODULE}{$TITLE}{/loop}</p>
    {/elsehook}
    ...
{/loop}
```

Ici, dans la clause `elsehook`, `$DELIVERY_MODULE` et `$TITLE` doivent provenir du scope du la boucle environnante, dans la mesure où si le code du bloc `{elsehook}` est exécuté, cela signifie par définition qu'aucune variable telles que `$delivery_id`n'est disponible.
