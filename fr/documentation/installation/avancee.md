---
layout: home
title: Installation par composer
sidebar: installation
subnav: installation_composer
lang: fr
---

<div class="page-header">
    <h1>Installation avancé par composer</h1>
</div>

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est disponible que depuis la version 2.1</p>
</div>

Les exigences sont toujours les mêmes, mais cette installation vous permet de gérer facilement votre Thelia avec composer, pour ajouter des nouvelles dépendances, etc.

Depuis la version 2.1, nous avons créé un sous projet. Le dépôt est [thelia-project](https://github.com/thelia/thelia-project)
Vous pouvez donc générer thelia comme une dépendances avec composer.

## Commencer un nouveau projet

```
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia-project nom-du-projet 2.1.1 (ou 2.0.6)
```

Thelia est téléchargé et prêt pour l'[installation](/fr/documentation/installation/index.html)

## Mettre à jour votre projet

Si vous avez installé Thelia en suivant la méthode ci-dessus, vous pouvez mettre à jour vos fichiers en utilisant un script présent dans votre projet :

```
$ sh change-version.sh 2.1.2
```

Pour mettre à jour votre base de données, suivre la méthode de mise à jour [méthode de mise à jour](/fr/documentation/installation/index.html)