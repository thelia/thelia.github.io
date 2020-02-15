---
layout: home
title: Installation
sidebar: installation
subnav: installation_index
lang: fr
---

<div class="page-header">
    <h1>Pré-requis</h1>
</div>

* PHP 5.5 à 7.2
    * Extensions requises:
        * PDO_Mysql
        * openssl
        * intl
        * gd
        * curl
        * calendar
        * dom
    * safe_mode off
    * memory_limit à 128 Mo, 256Mo de préférence.
    * post\_max\_size 20Mo
    * upload\_max\_filesize 2Mo
    * date.timezone doit être défini
* Serveur web : Apache 2 ou Nginx
* MySQL 5

Si vous utilisez **Windows** avec [WAMP](http://www.wampserver.com/) et rencontrez un erreur avec ```intl``` il faut procéder à la modificartion suivante : copier tous les fichiers nommés ```icu***.dll``` du répertoire PHP (ex. : "C:\wamp\bin\php\php5.x.xx") vers le répertoire Apache (ex. : "C:\wamp\bin\apache\apache2.x.xx\bin").

## MySQL 5.6

À partir de MySQL 5.6, la configuration par défaut de `sql_mode` est :

```sql
STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION
```

La configuration 'STRICT_TRANS_TABLES' entraîne des erreur SQL quand aucune valeur n'est définie sur les colonnes NOT NULL et que la valeur est vide ou invalide.

Vous pouvez modifier la configuration par défaut dans /etc/my.cnf et changer le paramètre sql_mode  pour supprimer la valeur STRICT_TRANS_TABLES.


```ini
[mysqld]
sql_mode=NO_ENGINE_SUBSTITUTION
```
En supposant que votre configuration sql_mode a sa valeur par défaut, vous pouveze changer la valeur à la volée en utilisant la commande SQL suivante :

```sql
SET @@GLOBAL.sql_mode='NO_ENGINE_SUBSTITUTION', @@SESSION.sql_mode='NO_ENGINE_SUBSTITUTION'
```

Pour plus d'informations sur sql_mode vous pouvez consulter la [docuementation MySQL](http://dev.mysql.com/doc/refman/5.0/fr/server-sql-mode.html "sql Mode")

## Créateur d'archives

Le créateur d'archives Thelia requiert des librairies externes.
Pour les archives au format ZIP, vous aurez besoin de PECL ZIP. Voir la [documentation PHP](http://php.net/manual/en/zip.installation.php)

Pour les arhives au format TAR, vous aurez besoin de PECL PHAR. De plus il faudra désactiver l'option "phar.readonly" de php.ini :

```ini
phar.readonly = Off
```

Pour les archives au format TAR.BZ2, vous aurez besoin des dépendances de tar et de l'extension "bzip2". Voir la [docuementation PHP](http://php.net/manual/fr/book.bzip2.php)

Pour les archives au format TAR.GZ, vous aurez besoin des dépendances de tar et de l'extension "zlib". Voir la [docuementation PHP](http://fr2.php.net/manual/fr/book.zlib.php)

<div class="page-header">
    <h1>Installation</h1>
</div>

## Télécharger Thelia 2

Vous pouveez télécharger Thelia en utilisant une des méthodes suivantes :

### Télécharger la distribution complète à partir du site de Thelia

Rendez vous sur cette page et télécharger l'archive ZIP : [http://thelia.net/#download](http://thelia.net/#download)

Dézipper le fichier dans un répertoire accessible à votre server web.

### En utilisant Composer via la commande `create-project`

```bash
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia path/ 2.3.1 (or 2.2.3)
```

Assurez-vous d'avoir Git installé sur votre machine car il est nécessaire pour installer certaines dépendances telles que Propel.

## Installer Thelia

Vous pouvez installer Thelia depuis la console ou l'assistant web.


### Depuis l'assistant web

Installer Thelia via l'assistant web permet de créer un administrateur, d'ajouter des informations à propos de la boutique etc.

Avnt toute chose vous devrez configurer un vhost tel que décrit dans la section [configuration](/fr/documentation/configuration/server.html).

L'assisatnt d'installation web est accessible depuis votre navigateur favori à l'adresse suivante :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

Par exemple, après le téléchargement de Thelia à l'adresse suivante : http://thelia.local et avec un vhost correctement configuré, I have to reach this address :

```bash
http://thelia.local/install
```

### Depuis la console et les outils CLI

```bash
$ php Thelia thelia:install
```

Il vous suffit de suivre les instructions


### Après l'installation

Supprimer le répertoire ```web/install```

## Comment céer un compte administrateur ?

```bash
$ php Thelia admin:create
```

## Comment insérer les données de tests ?

Pour un un jeu de donnée de démonstration avec des produits réalistes

```bash
$ php setup/import.php
```

Pour installer des doonées de tests et de développment (Composer doit être installé [`globallement`](http://getcomposer.org/doc/00-intro.md#globally))

```bash
$ php setup/faker.php
```

Plus d'informations sonst disponible dans la [documentation de Faker](../development/faker.html).

## Comment remettre à zéro la base données


```bash
$ ./reset_install.sh
```

Cette tâche réinitialisera la basse de données, insèrera les données de tests via le script Faker et crééra un administrateur ayant le nom et mot de passe suivants : thelia2 / thelia2

<div class="page-header">
    <h1>Mise à jour vers la dernière version</h1>
</div>

## Comment mettre à jour Thelia ?

<div class="alert alert-warning">
<p>Avant de procéder à une mise à jour, il est vivement recommandé d'effectuer un sauvegarde complète de votre site (fichiers et base de données).</p>
<em>Vous pouvez faire une sauvegarde de votre base avec des outils tels que PHPMyAdmin ou mysqldump.</em>
</div>

### Version courte

1. Téléchargez la nouvelle version de Thelia sur le [site web de Thelia](http://thelia.net/#download).
2. Paasez la boutique hors ligne afin d'être le seul à pouvoir y accéder (en utilisant un fichier .htaccess, une liste blanche d'adresses IP ou un [module dédié](https://github.com/nicolasleon/Maintenance)
3. Décompressez le fichier téléchargé dans votre répertoire Thelia, en remplaçant les fichiers existants avec ceux téléchargés
4. Allez à l'adresse `http://yourshop.tld/install` pour démarrez l'assistant de mise à jour. **Cette opération poeut être relativement longue !**
5. Supprimez ou renommez le répertoire `web/install`.
6. Terminé !

### Version détaillée et methodes alternatives de mise à jour

Une fois votre sauvegarde effectuée, la mise à jour ne prend que quelques minutes et consiste en 2 étapes :

- la mise à jour des fichiers
- la mise à jour de la basse de données

#### Étape 1 : mise à jour des fichiers

Vous disposez de 3 options pour mettre à jour les fichiers Thelia :
- télécharger l'archive de la nouvelle version [http://thelia.net/#download](http://thelia.net/#download) et remplacer tous les fichiers avec ceux de l'archive.
- copier tous les fichiers de la nouvelle version de Thelia (y compris les fichiers du dossier `local/modules/*`)
- en utilisant Git, effectuez un ```git checkout``` vers de la version courante pour migrer vers la nouvelle version (voir également: [Installation avancée avec Composer](/en/documentation/installation/advanced.html))

Nota Bene : si vous avez déplacé les répertoires admin/install, index_dev.php ou n'importe quel fichier ou répertoire, pensez à les mettre à jour également.

Dans les deux cas, videz tous les caches grace à la commande ```php Thelia cache:clear```


#### Etape 2 : mise à jour de la base de données

Si vous effectuez une mise à jour vers une version supérieure à la 2.1.X, tapez cette commande depuis la console ```php setup/update.php```.
Ce script sauvegarde automatiquement la base de données et la restaurera si un problème est détecté.
Cependant, si votre base de données est conséquente, il est recommandé de la sauvegarder manuellement et non d'utiliser le script de sauvegarde.

Il est fortement recommandé de videz les caches dans tous les environnements :
- ```php Thelia cache:clear```
- ```php Thelia cache:clear --env=prod```

##### Méthode alternative de mise à jour de la base de données : utilisation de l'assistant web (depuis Thelia 2.1)

Un assistant de mise à jour est disponible  dans le répertoire ```web/install```. Le répertoire est le même que celui utilisé par l'assistant d'installation.

**Pendant la mise à jour, l'accès au site devrait être pour les visiteurs (via un .htaccess, une liste blanche d'adresses IP etc.).**

L'assistant de mise à jour est disponible à cette adresse depuis votre navigateur favori :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

Nota Bene:

- l'assistant n'ewt disponible que si votre Thelia n'est pas déjà mise à jour vers la dernière version.
- si votre base de données est conséquent (nombreux produits, nombreuses commandes, etc.) il est recommandé de saugvegarder manuellement la base de données (sans faire appel à l'assistant de sauvegarde)


##### Pour mettre à jour un Thelia 2.0.x EXCLUSIVEMENT, utilisez les outils en ligne de commande de Thelia

- exécutez ```php Thelia thelia:update```
- videz les caches de tous les environements :
    - ```php Thelia cache:clear```
    - ```php Thelia cache:clear --env=prod```

Cette commande **pourrait échouer** sur certaines mises à jour, vous devriez alors utiliser un méthode alternative de mise à jour.
