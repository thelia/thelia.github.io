---
layout: home
title: URLs et chemins dans les templates
sidebar: templates
lang: fr
subnav: templates_smarty_urls_and_paths
---

# URLs et chemins

Les urls dans vos templates devraient être créées en utilisant les fonctions Smarty `{url}`, `{navigate}` ou `{view}` pour assurer la compatibilité avec toutes les configurations possibles de Thelia.


> Les urls dans vos templates devraient toujours être absolues

## La fonction `{url}`

Cette fonction Smarty crée une url absolue à partir du chemin d'une route :

```smarty
{url path="/contact"}
```

crééra l'url suivante :

    http://www.yourshop.com/contact

### La fonction `path`

La valeur du paramètre `path`est le chemin de la route dont vous souhaitez obtenir l'url. Par exemple, pour obtenir l'url de la route `account/password` utilisez :
The value of the path parameter is the route path you want to get as an URL. For example, to get the URL of the `/account/password` route, use :

    <a href="{url path="/account/password"}">{intl l='Change your password'}</a>

#### Ajouter des paramètres dynamiques dans les chemins

<div class="alert alert-warning">
    <p>This functionality is only available since version 2.1</p>
</div>

Dans certains cas vous aurez besouin d'injectez des paramètres dynamiques dans vos chemins. Le paramètre a le même comportement que dans la fonction `{intl}`. Chaque `%variable`trouvé dans la chaîne de caractère sera remplacée par la valeur de la variable.


Exemple :
```smarty
{url path="/product/%id" id=$product_id}
```

Dans cet exemple, si `$product_id` vaut 1 alors la fonction `{url}`retournera : `http://www.yourshop.com/product/1`


### Le paramètre `file`

La valeur  du paramètre `file` est le chemin absolu d'un fichier physique (à partir du dossier /web) sur votre serveur qui sera renvoyé tel quel sans être traité part THelia.

Par exemple si vous placez un fichier `guide.pdf`dans le répertoire `/web`, le chemin vers ce fichier sera :


```smarty
{url file="/guide.pdf"}
```

ce qui renverra :

    http://www.yourshop.com/guide.pdf

### `noamp`

Positionnez le paramètre `noamp`à 1 transformera tous les caractères `&`en `&amp;`dans l'url générée.

###  Les paramètres `router`et `route_id`

<div class="alert alert-warning">
<p>Cette fonctionnlaité n'est disponible qu'à partir de la version 2.3</p>
</div>

Depuis la version 2.3, il est possible de générer une url à partir d'une route_id.
L'argument `router` a comme valeur par défaut l'environnement d'exécution courant (`front`ou `admin`).

    {url route_id="contact.success"}
    {url route_id="admin.catalog"}
    {url route_id="admin.folders.update" folder_id=42}

Exemple pour un module :

```smarty
{url router="paypal" route_id="paypal.configure"}
```

### Ajouter des paramètres aux urls générées

Vous pouvez ajouter autant de paramètres que vous le souhiatez aux url générées par la fonction `{url}`en les ajoutant à la fonction en paramètres dans la fonction :

```smarty
{url path="/contact" mavariable="1" monautrevariable="2"}
```

génèerra l'url suivante :

    http://www.yourshop.com/contact?mavariable=1&monautrevariable=2


## La fonction `{viewurl}`

Cette fonction génère une url absolue vers une vue du front-office (ex : un fichier HTML dans le template courant). Si il existe par exemple un fichier `mentions-legales.html` dans le template front-office courant, le moyen d'obtenir l'url pour afficher cette vue est :

    <a href="{viewurl view="mentions-legales"}">{intl l="Legal"}</a>

ce qui donnera :

    <a href="http://www.yourshop.com/?view=mentions-legales">{intl l="Legal"}</a>

Vous pouvez également ajouter autant de paramètres que vous le voulez dans l'url générée en les ajoutant comme paramètres dans `{viewurl}`:

    {viewurl view="mentions-legales" mavar="1" monautrevar="2"}

ce qui renverra :

    http://www.yourshop.com/?view=mentions-legales&mavar=1&monautrevar=2


## La fonction `{admin_viewurl}`

Cette fonction réalise les mêmes opération que la fonction `{viewurl}` mais ne fonctionne que dans les templates back-office.
Consultez la documentation de `{viewurl}` pour plus d'informations.

## La fonction {navigate}

La fonction `{navigate}` est un moyen pratique de générer des url pointant vers des emplacements bien connus.
Cette fonction  n'accepte qu'un seul paramètre, `to` qui pourra prendre les valeurs suivantes :

- `current`: l'url absolu de la page courante
- `previous` : l'url absolue de la page précédente
- `index` : l'url absolue vers la page d'accueil de la boutique
- `catalog_last` (depuis la version 2.4.0) : l'url absolue vers la dernière page visitée du catalogue, produit ou catgeorie.

Exemple:

- retour ver ala page d'accueil de la boutique : `<a href="{navigate to='index'}">{intl l="Back to home"}</a>`
- retour vers la page précédente : `<a href="{navigate to='previous'}">{intl l="Back to home"}</a>`
- recharger la page courante : `<a href="{navigate to='current'}">{intl l="Reload !"}</a>`

Vpus ne pouvez directement pas ajouter de paramètres personnalisées aux urls créées par `{navigate}`. Pour y parvenir utilisez cette fonction en paramètre de la fonction `{url}`:

```smarty
{url path={navigate to="current"} limit="4"}
```

De cette manière le paramètre limit=4 sera ajoutée à l'url : `http://www.myshop.com/page-courante.html?limit=4`


## `{set_previous_url}`

Dans la plupatr des cas Thelia définit les urls précédentes de telle sorte que `{navigate to='previous'}` génèrera l'url vers la page précédement visitée par le client. Mais dans certains cas, vous pourriez avoir besoin de définir ces urls vous même pour faire en sorte que le visteur soit redirigé vers une page spécifique au lieu de la page visitée précédemment.

La fonction `{set_previous_url}` permet de définir l'url de la page qui deviendra la page précédente :


```smarty
{set_previous_url path='chemin/vers/une/page/specifique'}
```

Pour connaîtrre les paramètres possibles pour cette fonction consultez la documentation de la fonction `{url}`.

Vous pourriez également avoir envie de faire en sorte qu'une page ne puisse pas devenir la "page précédente". Pour ce faire utilisez le paramètre `ignore_current` and placez le quelque part dans la page.


```smarty
{set_previous_url ignore_current=1}
```

Un cas typique d'utilisation de ce paramètre est la page de connexion/inscription pour laquelle l'utilisateur devrait être redirigé vers la page où il se trouvait avant d'avoir saisi ces identifiants (panier ou commande), et non la page de connexion/inscription elle-même.

> Si votre page en étend une  autre (typiquement `layout.tpl`) assurez-vous d'utiliser la fonction au sein d'un bloc `{block}...{/block}` sinon elle ne sera pas exécutée.
