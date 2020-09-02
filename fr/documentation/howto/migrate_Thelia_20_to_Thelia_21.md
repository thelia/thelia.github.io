---
layout: home
title: HowTo - Migrer de Thelia 2.0 à Thelia 2.1
sidebar: howto
lang: en
subnav: howto_migrate_20_21
---

<div class="page-header">
    <h1>Migrer de Thelia 2.0 à Thelia 2.1</h1>
</div>

Nous avons fait de notre mieux dans Thelia 2.1 pour assurer la rétro compatibilité avec Thelia 2.0. Cependant vous devrez effectuer quelques modifcation mineures dans vos templates pour pouvoir utiliser les nouvelles fonctionnalités de cette version.

## Templates

### Le fonction `{token_url}`

La fonction `token_url` a été introduite dans Thelia 2.0 mais depuis Thelia 2.1 elle est obligatoire si vous voulez envoyer des données vers le serveur avec la méthode `GET` et ce depuis une URL ou via un formulaire utilisant la methodde GET.
Cette fonction ajoute un token à la fin de votre url afin de prévénir des attaques CSRF.

Ci-dessous la liste des templates à modifier :

- cart.html :
    - Formulaire de mise à jour des quantités : `<form action="{token_url path="/cart/update"}"`
    - Lien de suppression d'un rticle du panier : `<a href="{token_url path="/cart/delete/$ITEM_ID"}">`
- mini-cart.html
    - Lien de suppression d'un article du panier : `<a href="{token_url path="/cart/delete/$ITEM_ID"}">`

### La fonction `{set_previous_url}`

`set_previous_url` est une nouvelle fonction Smarty et permet de ne pas enregister l'url courante dans l'historique de navigation quand le paramètre `ignore_current` est positionné à 1.

Cette focntion est pratique pour des pages telles que la page d'inscription, celle de mise à jour du mot de passe ou encore celle de connexion car on peut revenir sur ces pages si le formulaire contient des erreurs. Cette url sera enregistrée dans l'historique de navigation  et utilisée pour l'url ```success_url```.

Par exemple :
```smarty
    {set_previous_url ignore_current="1"}
```

### Nouvelle pages templates

* **error.html** : affiche un message d'erreur au lieu d'une page blanche en cas d'erreur sur la page. Renseignez la varaible de configuration ```error_message.show``` à 1 si vous souahaitez utiliser cette fonctionnalité.
* **account-order.html** : affiche le détail d'une commande. Il faudra bien sûr créer un lien vers cette page. Vous pouvez vous référer au template `account.html` dans le template front-office par défault afin d'avoir un exemple.

### Les hooks

Les hooks sont une fontionnalité nouvelle de Thelia 2.1. Leur utilisation est facultative et vous pouvez utiliser vos templates actuels sans les hooks.
Cependant si ils ne sont putilisés, certains modules développées pour Thelia 2.1 ne fonctionneront pas car ils font appels aux hooks.

La documentationexplique comment fonctionnent les hooks et contient la liste officielle de tous les hooks Thelia :
[documentation des hooks](/fr/documentation/modules/hooks/index.html)
