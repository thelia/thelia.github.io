---
layout: home
title: Sécurité des templates Thelia
sidebar: templates
lang: fr
subnav: templates_smarty_security
---

# Securité
Si vous avez besoin de faire des vérifications relatives à la sécurité dans vos pages, Thelia fournit quelques fonctions Smarty pour vous aider.

Ces fonction doivent être placées dans un bloc Smarty appellé `no-return-functions` comme ceci :

```smarty

{block name="no-return-functions"}
    {check_auth role="CUSTOMER" login_tpl="login"}
    {check_cart_not_empty}
    {check_valid_delivery}
{/block}

```


## Vérification de l'identité d'un utilisateur

La fonction **check_auth** peut être utilisée pour vérifier si un utilisateur a accès à une ressource, voir telle ou telle page.

Exemple:
```smarty

{check_auth role="CUSTOMER" login_tpl="login"}

{check_auth resource="admin.address" access="VIEW" login_tpl="login"}

```

### Rôle

Dans Thelia 2.0 un utilisateur ne peut avoir que l'un de ces deux rôles :

- ADMIN : un administrateur du site
- CUSTOMER : un client enregistré et connecté

### Ressource

L'argument ressource peut être utile en back-office.
Voici la liste des ressources disponibles dans Thelia 2.0 :

    admin.address
    admin.configuration.administrator
    admin.configuration.advanced
    admin.configuration.area
    admin.configuration.attribute
    admin.category
    admin.configuration
    admin.content
    admin.configuration.country
    admin.coupon
    admin.configuration.currency
    admin.customer
    admin.configuration.feature
    admin.folder
    admin.home
    admin.configuration.language
    admin.configuration.mailing-system
    admin.configuration.message
    admin.module
    admin.order
    admin.product
    admin.configuration.profile
    admin.configuration.shipping-zone
    admin.configuration.tax
    admin.configuration.template
    admin.configuration.system-logs
    admin.configuration.admin-logs
    admin.configuration.store
    admin.configuration.translations
    admin.configuration.update
    admin.export
    admin.export.customer.newsletter
    admin.tools

### Module

Le nom du module auquel l'utilisateur a accès.

Exemple:

```smarty
{block name="no-return-functions"}
    {check_auth role="ADMIN" module="Colissimo" access="UPDATE" login_tpl="login"}
{/block}
```

### Accès

Il existe 4 types d'accès aux ressources :

- CREATE : creér une nouvelle ressource
- VIEW : voir une ressource
- UPDATE : merttre à jour une ressource
- DELETE : supprimer une ressource

Ces accès peuvent être configurés dans le back-office, onglet "Configuration", dans "Gestion des profils".


### Le paramètre `login_tpl`

Cet argument est le nom de la vue de connexion.
Si l'utilisateur n'a pas accès à une ressource et que ce paramètre est défini, il sera redirigé vers cette page.

## Vérifier si le paneier est vide

Cette fonction vérifie si le panier du client est vide et redirige ves la route `cart.view` si c'est le cas.


```smarty
{block name="no-return-functions"}
    {check_cart_not_empty}
{/block}

```

## Vérifier si un mode de livraison est sélectionné et si l'adresse est valide

Check if the delivery module and address are valid, redirects to the route "order.delivery" if not.

```smarty
{block name="no-return-functions"}
    {check_valid_delivery}
{/block}
```
