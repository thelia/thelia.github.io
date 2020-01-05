---
layout: home
title: Feature - Permissions et modules
sidebar: features
lang: fr
subnav: features_permissions_module
---

# Définition des permissions pour les modules du back-office

Quand vous créer l'interface graphique d'un module dans le back-office, vous pouvez définir quelles sont les permissions que l'administrateur doit avoir pour afficher la page.

## Définir les droit d'accès à un template

Vous pouvez définir les droit d'accès en procédant de la manière suivante :


```smarty
{block name="check-resource"}module.MyModuleName{/block}
{block name="check-access"}view{/block}
```

## Définir les droits nécessaires pour afficher un contenu dans un template

Vous pourriez afficher ou pas certains boutons en fonction des droits d'un administraeur. Il suffit d'utiliser la [**boucle auth**](/fr/documentation/loop/auth.html "Boucle Auth").

```smarty
{loop type="auth" name="can_change" role="ADMIN" module="MyModuleName" access="UPDATE"}
    *here is my link*
{/loop}
```

## Définir un accès restreint dans votre contrôleur PHP

Etant donné que filtrer l'affichage du lien dans le code HTML n'est pas -loin de là- suffisant, vous devrez vérifier les permissions dans chaque actions des contrôleurs. Cela pourrait se faire de la manière suivante :

```php
if (null !== $response = $this->checkAuth(array(), array('MyModuleName'), \Thelia\Core\Security\AccessManager::VIEW)) {
    return $response;
}
```