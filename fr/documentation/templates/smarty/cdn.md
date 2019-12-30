---
layout: home
title: Utilisation d'un CDN pour les assets
sidebar: templates
lang: fr
subnav: templates_smarty_cdn
---

# Utiliser un CDN pour vos assets

À partir de la version 2.4 de Thelia vous pouvez utiliser un CDN (ou à défaut domaine alternatif) pour vos assets, document et images.

Deux variables de configuration sont définies:
- `cdn.assets-base-url` : ceci est l'URL pour les assets du templates. Ces assets sont normalement situés dans le dossier `web\assets` à savoirhttps://cdn.myshop.tld/assets. Si cette variable est renseignée, les assets seront appellés depuis l'adresse indiquée.
- `cdn.documents-base-url` : ceci est l'URL pour les images et documents des objets Thelia `contents`, `products`, `categories` et ``folders``qui sont normalement situés dans le dossier `web/cache/documents` and `web/cache/images`, respectivement https://cdn.myshop.tld/cache/images et https://cdn.myshop.tld/cache/documents. Si cette variable est renseignée, les images et documents seront appelés depuis l'adresse indiquée.

Si ces variables sont renseignées, les urls fournies seront utilisées en lieu et place des urls de base de la boutique. Si l'adresse de la boutiques est https://myshop.tld, et que la variable de configuration `cdn.assets-base-url` est https://cdn.myshop.tld, tous les assets seront appellés depuis https://cdn.myshop.tld/assets/...

Une utilisation courante de cette fonctionnalité est d'accélérer le chargement des pages d'un site et définissant les des alias d'url du site vers ceux d'un CDN. Les navigateurs téléchargeront plus de ressources en parrallèle depuis votre serveur.

Certains modules pourraient impléménter des stratégies plus sophistiquées, voir la section "Information développeur" ci-dessous.


## Dans vos templates

La fonction Smarty `{url}` a un nouveau paramètre `base_url` qui permet de créer des urls vers les CDN depuis un template. Ceci est très utile si vous manipulez des assets se trouvant en dehors des répertoires pris en charge par le système de gestion des assets de Thelia. Pour télécharger un script situé ailleurs que dans le répertoire standard, par exemple  web/mes-assets, vous pouvez utiliser le paramètre `base_url`pour définir le chemin vers le CDN.


```smarty
{url file="my-own-assets/js/vendors/tarteaucitron/tarteaucitron.js" base_url={config key='cdn.assets-base-url'}}
```

## Information développeur

Les classes utilisant les variables de configuration `cdn.*` ont une méthode `setCdnBaseUrl()` pour permettre un changement à la volée de l'url du CDN si besoin, par exemple quand un vrai CDN exists :)


`cdn.assets-base-url` est utilisé par `TheliaSmarty\Template\Assets\SmartyAssetsResolver`, et `cdn.documents-base-url` par `Thelia\Action\BaseCachedFile`
