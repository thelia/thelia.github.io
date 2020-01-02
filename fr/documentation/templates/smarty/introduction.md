---
layout: home
title: Les templates Smarty dans Thelia
sidebar: templates
lang: fr
subnav: templates_smarty_introduction
---

# À propos des templates Smarty #

Pour le rendu des pages HTML Thelia utilise le moteur de templates [Smarty](http://www.smarty.net/) enrichi de nombresuses fonctionnalités propres à Thélia telles que les boucles, les fonctions d'accès aux données ou encore les fonctions liés à l'internationalisation.

Une connaissance minimale de Smarty est donc requise avant de pouvoir créer des templates pour Thelia. La documentation [Smarty documentation](http://www.smarty.net/docs/fr/) vous aidera à bien démarrer.

Le template `default` fournit un guide et les bonnes pratiques à suivre pour développer un template Thelia.

[Héritage de template](content.html#template-inheritance-from-thelia-24) is available from Thelia 2.4. You can now create a new template, and redefine only the required files instead of copying the whole template.

## Structure d'un template ##

Les templates Smarty dans Thelia sont localisés dans le sous répertoire `templates` de votre installation. Ce répertoire contien quatre sous répertoires :

- `backOffice` : les templates du back-office se trouvent dans ce dossier.
- `frontOffice` : les templates du front-office se trouvent dans ce dossier.
- `pdf` : contient les templates des documents PDF tel que les factures.
- `mail` : contient les templates des emails envoyées par Thelia aux clients et aux administrateurs du site.

Ces répertoires ont une structure identique et contiiennent un nombre illimités de dossiers contenant chacun un template :


    + templates
      |
      + frontOffice
      | |
      | + default
      | + my-first-template
      | + my-other-template
      | + ...
      |
      + backOffice
        |
        + default
        + ...
      + pdf
        |
        + default
        + ...
      + mail
        |
        + default
        + ...

Chacun de ces dossiers templates  contiennent un ensemble de fichiers HTML et leur ressources associées (feuilles de styles CSS, fichiers javascripts, gabarits etc.)

## Sélection du template courant

Pour sélectionner le template actif, indiquez le nom du dossier du template dans les variables de configuration suivantes :

	active-admin-template : le template back-office
  active-front-template : le template front-office
	active-mail-template : le template des emails
	active-pdf-template : le template des documents PDF

## Variables globales

<div class="alert alert-warning">
  <p>Cette fonctionnalité n'est disponible que depuis la version 2.3.4</p>
</div>

La variable `$app` est accessible dans tous les templates et vous donnes accès aux objets et valeurs fréquemment utilisés.

```smarty
    {$app->environment} {* string	L'environnement d'exécution courant (ex : 'dev') *}
    {$app->request} {* Request|null	L'objet HTPP Request *}
    {$app->session} {* Session|null	L'objet Session *}
    {$app->debug} {* bool	Le mode de debug courant *}
```
