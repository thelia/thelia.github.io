---
layout: home
title: Installation with composer
sidebar: installation
subnav: installation_composer
lang: fr
---

<div class="page-header">
    <h1>Installation avancée avec Composer</h1>
</div>

<div class="alert alert-warning">
	<p>Cette focntionnalité est disponible depuis la version 2.1</p>
</div>

Les pré-requis sont toujours les mêmes mais avec cette méthode vous pourrez facilement gérer Thelia avec Composer, ajouteer de nouvelles dépendances, modules etc.

Depuis la version 2.1 nous avons créer des sous projets nous permettant de diviser thelia en composants. Ce "repository" [thelia-project](https://github.com/thelia/thelia-project) est le lien entre eux si vous voulez créer votre projet avec ces composants et gérer votre installation avec Composer.

## Démarrer un nouveau projet

```bash
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia-project your-project-name 2.3.1 (or 2.2.3)
```

Votre Thelia est téléchargé et prêt à être [installé](/fr/documentation/installation/index.html#install-it)

Vous êtes maitenant prêt à ajouter de nouvelles dépendances dans votre project tel que les modules qui utilisent déjà [thelia-installer](https://packagist.org/packages/thelia/installer) ou encore des templates utilisant le `thelia-installer` également.


## Mettre à jour votre projet

Si vous avez installé Thelia en suivant les instructions précédentes, vous pouvez le mettre à jour en utilisant un script présent dans votre projet :

```bash
$ sh change-version.sh 2.3.1 (or 2.2.3)
```

Ici `2.3.1` est la version à installer. Pour mettre à jour la base de données, suivez les [instructions suivantes](/en/documentation/installation/index.html#use-the-update-script-%28since-version-2-1%29)

## Problèmes connus

### GitHub et Composer

Avec Composer vous pourriez rencontrer un dépassement de fréquence d'appel à l'API durant l'installation.

Dans ce cas, vous devez créer un nouvau [token d'accès personnel](https://github.com/settings/tokens) dans votre compte Github et l'ajouter à votre configuration Composer avec la commande suivante :

```bash
composer config --global github-oauth.github.com <YOUR_TOKEN>
```
