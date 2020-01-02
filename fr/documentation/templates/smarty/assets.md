---
layout: home
title: Gestion des ressources d'un template Thelia
sidebar: templates
lang: fr
subnav: templates_smarty_assets
---

# Gérer les ressources d'un template

Les ressources (assets) d'un tempalate sont gérés dans un sour répertoire du template. Par exemple, le répertoire du template `default`a un répertoire `assets` qui contient toutes les ressources du template :

    template
    |
    + frontOffice
      |
      + default
        |
        + assets
          |
          + css
          + js
          + font
          + less
          + img
          + ...

Ainsi les ressources/assets ne sont pas directement acdessibles au serveur web n'étant pas situés physiquement dans le répertoire `/web`.
Cependant Thelia fournit un moyen de rendre ces assets disponibles au serveur web via un pré traitement si nécessaire. Par exemple compiler un fichier CSS au format `.less` ou un fichier CoffeeScript. Cette fonctionnalité est implémentée via la [librairie Assetic](https://github.com/kriswallsmith/assetic).

## Activer la génération automatique de ressources

Même si Thelia utilise un cache et intègre un système de vérification de modification de fichiers, la génération des ressources est une ta^che chronophage et pourrait avoir avoir un impact sur les performances de votre site. C'est la raison pour laquelle la génération automatique des assets est désactivée par défaut.

Pour activer la génération automatique vous devez :

1. Passez la variable de configuration `process_assets` à 1
2. Accédez à la boutique en mode développment via `index_dev.php`
Si le serveur web n'est pas sur votre machine (en local), vous devrez ajoutez l'adresse IP de la machine à la liste blanche des adresses autorisées à accéder au fichier `index_dev.php` :

If the web server is not installed on your local machine, you have to add your workstation IP address to the allowed list of IP in the `index_dev.php` file :

```php
// List of allowed IP
$trustedIp = array(
  '::1',
  '127.0.0.1',
  'votre.adresse.ip.ici',
);
```

> À partir de Thelia 2.2, la structure des assets du template par défaut a changé et sont gérés avec Grunt et Bower (en savoir plus : [Grunt and Bower on Thelia School](http://thelia-school.com/utiliser-grunt-et-bower-pour-vos-templates-thelia.html)). Le dossier `src` contien les fichiers sources des ressources et le dossier `dist` contient les fichiers générées/compliés.
> Cependant vous pouvez toujours profités de la génération automatique depuis les fichiers sources. Pour cela il vous suffit de changer dans le fichier `layout.tpl`du template par défaut par exemple
>
> However, you can still enjoy automatic assets generation from sources. To do do, just change in the layout.tpl file of the default front-office template :

>```smarty
> {stylesheets file='assets/dist/css/thelia.min.css'}
>```
> par :
```smarty
> {stylesheets file='assets/src/less/thelia.less' filters='less'}
>```
> Les ressources seront automatiquement générées de nouveau à chaque changement du fichier source.


Lors du traitement des assets, un nouveau répertoire `assets` est créé dans le répertoire `web`. La structure de ce dossier est quasiment la même que celle du dossier `template`, donc les références relatives entre vos fichiers seront respectées.

Les noms des fichiers ressources ne sont pas les mêmes que les noms originaux et certains fichiers pourraient être fusionnés en fonction du flitre sélectionné pour le traitement automatique.

## Utiliser les ressources dans vos templates ##

Pour utiliser cett fonctionnalité vous devrez ajouter quelques directives spécifiques dans les fichiers de votre template.

> N.B. : vous pourriez créer un template utilisant un dossier de ressources situés directement dans le répertoire `/web` mais cela vous priverait d'un certain nombre de fonctionnalités intéressantes telles que la compression/fudsion des fichiers CSS et javascript, le traitement des images ou en core la mise en cache.


### La fonction {declare_assets} ###

Cette directive indique au système de templating de Thelia  l'endroit où sont stockées les ressources à sa oir le nom du sossier racine contenant toutes les ressources.

par exemple, le template front-office `default`stocke ses ressources dans le répertoire `assets` du template :

```smarty
{declare_assets directory="assets"}
```


### Les fonction {stylesheets} et {stylesheet} ###

Ces directives génére le pré-traitement des feuilles de styles CSS.

```smarty
{stylesheets file="assets/src/less /*.less" filters="less"}
  <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{/stylesheets}
```

ou

```smarty
{stylesheets file="assets/css/style.css"}
  <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{/stylesheets}
```

Ces fonction ne renvoient qu'une seule variable `$asset_url` correspondant à l'url de la ressource dans l'espace web i.e dans de dossier `/web/assets`.

Les paramètres acceptés sont :

- file
- filters
- source
- template
- failsafe

Vous pourriez utilisez la forme compacte `{stylesheet}` qui renvoie directement l'url du fichier CSS :

```smarty
<link href="{stylesheet file='assets/css/style.less' filters='less'}" rel="stylesheet" type="text/css" />
```

#### Le paramètre `file` ####

Correspond au chemin vers le fichier (ou les fihiers si le caractère joker '\*' est utilisé). Ce chemin est relatif au répertoire de base du template.

La valeur de ce paramètre est un chemin vers un fichier par exemple `assets/syles/mon_style.css` ou un ensemble de fichiers comme `assets/css/*.css`

#### Le paramètre `filters` ####

Indique le filtre à appliquer à la ressource. Les filtres disponibles sont :

- `less` : compile le fichier CSS en utilisant [LESS](http://lesscss.org/)
- `sass` : compile le fichier CSS en utilisant [SASS](https://sass-lang.com/)
- `compass` : compile le fichier CSS en utilisant [Compass](http://compass-style.org/)

#### Le paramètre `source` ####

Dans les fichiers du répertoire templates d'un module, utilisez ce paramètre pour indiquer que le fichier source doit être recherché depuis le dossier recine du module et nom dans le répertoire template principal.

Par exemple dans le dossier `MonModule/templates/frontOffice/default` vous définirez quelques vues devant être affiché depuis le front-office.

Vous pouvez également définir des ressources spécifiques au module dans le répertoire `MonModule/templates/frontOffice/default/assets`. Pour indiquer au système de tzmplating de Thelia de recherche ces ressources depuis le répertoire racine du module, procédez comme ci-dessous :

```smarty
{stylesheets source="MoModule" file="assets/css/style.css" template="default"}
  <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{stylesheet}
```

Le lien vers le fichier styles.css dans cet exemple sera relatif à `MonModule` et sera placé physiquement dans le dossier `local/modules/MonModule/templates/frontOffice/default/assets/css`.

#### Le paramètre `template` ####

Vous pourriez souhaiter utiliser une ressource située dans un autre template du même type (par exemple un autre template front-office). Pour ce faire indiquer le nom de cet autre template dans grâce au paramètre `template`:

```smarty
{stylesheets file="assets/css/style.css" template="default"}
  <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{stylesheet}
```

L'exemple ci-dessus utilisera le fichier style.css situé dans le répertoire `assets/css` du template front-office `default` (le chemin vers ce fichier est `templates/frontOffice/default/assets/css/style.css`)

#### Le paramètre `failsafe` ####

Quand la valeur de la variable est `true`(vraie), le paramètre `failsafe`empêche qu'une exception soit lévée quand la ressource n'est pas trouvée même en mode développement.

Exemple d'utilisation du paramètre :

```smarty
{stylesheets file="assets/css/mystyle.css" failsafe=true}
  <link href="{$asset_url}" rel="stylesheet" type="text/css" />
{stylesheet}
```

### Les paramètres {images} et {image} ###

Ces directives traitent les images statiques dans votre template.

```smarty
{images file='assets/img/favicon.ico'}
  <link rel="shortcut icon" type="image/x-icon" href="{$asset_url}">
{/images}
```

Ce bloc renvoie une seule valeur, `$asset_url`, qui est les chemin de la ressource dans l'espace web (document_root), sous le dossier `/web/assets`.

Vous pouvez également utiliser la forme compacte `{image}`qui renvoie directement le chemin de l'image :

```smarty
<img src="{image file='assets/img/kittens-and-babies.jpg'}" alt="Some text">
```

Les paramètres valides sont :

- file
- source
- template

#### Le paramètre `file` ####

C'est le chemin du ficher, relatif au répertoire de base du template.

La présence de caractère joker, tel que "\*", n'est **PAS** autorisée.


#### Le paramètre `source` ####

Voir la documentation de [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#source)


#### Le paramètre `template` ####

Voir la documentation de [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#template)


### {javascripts} and {javascript} ###

Ces directives traitent vos fichiers javascript.

```smarty
{javascripts file='assets/js/script.js'}
  <script type="text/javascript" src="{$asset_url}"></script>
{/javascripts}
```

Les paramètres valides sont :

- file
- source
- template

Vous pouvez également utiliser la forme compacte `{javascript}`qui renvoie l'url du fichier javascript :

```smarty
<script type="text/javascript" src="{javascript file='assets/js/script.js'}"></script>
```

#### Le paramètfre file ####

Correspond au chemin vers le fichier (ou les fihiers comme le caractère joker '\*' est autorisé) relatif au répertoire de base du template.

La valeur de ce paramètre est un chemin vers le fichier, par exemple `assets/js/script.js`, ou un ensemble de fichiers comme `assets/js/*.js`

#### Le paramètfre `source` ####

Voi [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#source)

#### Le paramètre `template` ####

Voir [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#template)

### La fonction `{asset}` ###

This directive processes any asset file, and is only available in its short form. Example for an audio asset:

```smarty
<audio src="{asset file='assets/sound/my_sound.ogg'}" autoplay>
  Audio not supported.
</audio>
```

#### Le paramètre `file` ####

Correspond au chemin vers le fichier. Ce chemin est relatif au répertoire de base du template.

La valeur de ce paramètre est un chemin vers un fichier, par exemple `assets/sound/my_sound.ogg`.

#### Le paramètre `source` ####

Voir [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#source)

#### Le paramètre template ####

Voir [```{stylesheets}```](http://doc.thelia.net/fr/documentation/templates/assets.html#template)

### La fonction `{local_media}` ###

> Cette directive est disponible depuis Thelia 2.3.4.

Certaines ressources peuvent être uploader depuis le back-office (dans "Configuration " -> "Boutique") et ne nécessite plus d'être copiées manuellement dans le bon répertoire.
Cette fonctionnalité concerne pour le moement le **logo** de la boutique ainsi que la **favicon** du site et la **banière** du template email.

```smarty
{local_media type="favicon" width=16 height=16}
  <link rel="icon" type="{$MEDIA_MIME_TYPE}" href="{$MEDIA_URL}" />
{/local_media}
```

Ce bloc peur retourner 2 variables :
- `$MEDIA_URL` : l'url pontant vers le media
- `$MEDIA_MIME_TYPE` : **pour les favicons uniquement**, le type MIMLI de la favicon (ex. : *image/x-icon*)

> Cette directive ne prend pas de paramètre "`file`"  car elle utilise le fichier fourni dans la configuration de la boutique en back-office. Si aucun fichier n'est uploader, la focntion utilisera le logo, la banière et la favicon par défaut de Thelia.

> Par défaut les fichiers uploadés sont stockés dans le dossier *local/media/images/store*. Vous pouvez changer de dossier de stockage en modifiant la variable système `images_library_path` dans le back-office ("Configuration" -> "System variables")

Les paramètres valides sont :

- type
- width
- height
- resize_mode

#### Le paramètre `type` ####
Il s'agit du type de media. Les valeurs autorisées  pour le moement sont : "logo", "banner" and "favicon".

#### Le paramètre `width` ####

Largeur de l'image traitée. Si le fichier fourni est au format `.ico` cette valeur sera ignorée.

#### Le paramètre `height` ####

Hauteur de l'image traitée. Si le fichier fourni est au format `.ico` cette valeur sera ignorée.

#### Le paramètre `resize_mode` ####

Mode de redimensionnemt de l'image traitée. Les valeurs autorisées sont  "crop", "borders" and "none". Si le fichier founi est au format `.ico`, cette valeur sera ignorée.
