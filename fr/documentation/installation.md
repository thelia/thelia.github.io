---
layout: home
title: installation
sidebar: installation
lang: fr
---

<div class="page-header">
    <h1>Prérequis</h1>
</div>

* php 5.4
    * Extensions nécessaires :
        * PDO_Mysql
        * mcrypt
        * intl
        * gd
        * curl
    * safe_mode off
    * memory_limit au moins 150M, mais préférez 256.
    * post\_max\_size 20M
    * upload\_max\_filesize 2M
* apache 2
* mysql 5

Si vous utilisez Mac OSX, il n'utilise pas encore php 5.4 comme version par défaut... Plusieurs solutions s'offrent à vous :

* utiliser linux (la meilleure)
* utiliser la dernière version de MAMP et mettreuse last MAMP version et modifier le chemin vers votre PHP :

```bash
export PATH=/Applications/MAMP/bin/php/php5.4.x/bin/:$PATH
```

* configurer un environnement de développement complet : [http://php-osx.liip.ch](http://php-osx.liip.ch)
* utiliser une machine virtuelle avec vagrant et puppet : [https://puphpet.com](https://puphpet.com)

<div class="page-header">
    <h1>Installation</h1>
</div>


## Télécharger Thelia 2

``` bash
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia path/ dev-master
```

Effectuez l'installation en utilisant la ligne de commande :

``` bash
$ php Thelia thelia:install
```

Vous avez juste à suivre les instructions.

## Comment créer un compte admin ?

```bash
$ php Thelia admin:create
```

## Comment insérer des données fictives ?

Pour un site de démo contenant de faux produits (mais réalistes)

``` bash
$ php install/import.php
```

Pour des données sur un environnement de développement

```bash
$ php install/faker.php
```

(composer doit être installé [`globalement`](http://getcomposer.org/doc/00-intro.md#globally))

## Comment réinitialiser la base de données ?

```bash
$ ./reset_install.sh
```

Cette tâche recharge la base de données, insert de fausses données en utilisant le "faker" et crée un compte admin dont l'identifiant et le mot de passe sont __thelia2__.

<div class="page-header">
    <h1>Utilisation</h1>
</div>

Consultez la page : http://localhost/thelia/web/index_dev.php

Vous pouvez créer un virtual host en choisissant un dossier comme répertoire racine.

Pour effectuer des tests (phpunit est nécessaire) :

``` bash
$ phpunit
```

Nous avons encore beaucoup de travail à réaliser, mais vous pouvez dors et déjà profiter de cette procédure.
