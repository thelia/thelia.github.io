---
layout: home
title: Contenu d'un template Thelia
sidebar: templates
lang: fr
subnav: templates_smarty_contents
---
# Contenu d'un template #

Un tempate est une collection de fichiers, essentiellement HTML. Chaque fichier HTML est une **vue**.

Les noms des templates front-office et back-office de Thelia devraient avoir l'extension `.html`.

Les fichiers de template d'emails peuvent ne contenir que du texte auquel cas l'extension du fichier devrait être `.text` (voir la [documentaztion des templates d'email](http://doc.thelia.net/fr/documentation/templates/emails.html) pour plus de détails.)

Utiliser le [mécanisme d'héritage de Smarty](http://www.smarty.net/inheritance) pourra faire gagner beaucoup de temps et limiter la duplication du code.

Le template `default` du front-office et du back-office Thelia utilise un gabarit global `layout.tpl` qui contient du code et des déclarations utilisés par l'ensemble des fichiers du template.

# Descripteur de template #

A partir de Thelia 2.4, un template pourra avoir un un descripteur, a fichier nommmé `template.xml` situé à la racine du template. Le contenu de ce fichier est très proche de celui du fichier descripteur de module.

Ci-dessous le descripteur du template front-office `default` :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<template xmlns="http://thelia.net/schema/dic/template"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/template http://thelia.net/schema/dic/template/template-1_0.xsd">
    <descriptive locale="fr">
        <title>Template front office par défaut</title>
    </descriptive>
    <descriptive locale="en">
        <title>Default front office template</title>
    </descriptive>
    <languages>
        <language>ar_SA</language>
        <language>cs_CZ</language>
        <language>de_DE</language>
        <language>el_GR</language>
        <language>en_US</language>
        <language>es_ES</language>
        <language>fa_IR</language>
        <language>fr_FR</language>
        <language>hu_HU</language>
        <language>id_ID</language>
        <language>it_IT</language>
        <language>nl_NL</language>
        <language>pl_PL</language>
        <language>pt_BR</language>
        <language>pt_PT</language>
        <language>ru_RU</language>
        <language>sk_SK</language>
        <language>tr_TR</language>
        <language>uk_UA</language>
    </languages>
    <version>1.0.0</version>
    <authors>
        <author>
            <name>Thelia team</name>
            <company>thelia.net</company>
            <email>contact@thelia.net</email>
            <website>thelia.net</website>
        </author>
    </authors>
    <thelia>2.4.0</thelia>
    <stability>prod</stability>
</template>
```

# Noms prédéfinis #

Chaque template devrait contenir un certain nombre de fichier spécifiques qui seront appellés par les contrôleurs du front-office et du back-office.

Pour un template du front-office ces fichiers sont :

- `product.html` : affiche un produit
- `content.html` : affiche un contenu
- `category.html` : affiche une catégorie de produits
- `feed.html` : le flux RSS des produits ou des contenu
- `folder.html` : affiche le contenu des dossiers Thelia
- `404.html` : affiché quand une page ne peut être trouvée.

D'autres exemples sont définis dans la configuration du module `Front` et particulièrement dans le fichier de configuration du routing `Front/Config/front.xml`. Par exemple la page de connexion client est définie par la route `login.process` :

```xml
    <!-- Login -->
    <route id="customer.login.process" path="/login" methods="post">
        <default key="_controller">Front\Controller\CustomerController::loginAction</default>
        <default key="_view">login</default>
    </route>
```

Les vues référencées dans la configuration du modules Front sont :

- `account.html`
- `account-password.html`
- `account-update.html`
- `address.html`
- `address-update.html`
- `cart.html`
- `contact.html`
- `contact-success.html`
- `includes/addedToCart.html`
- `includes/mini-cart.html`
- `index.html`
- `login.html`
- `modal-address.html`
- `newsletter.html`
- `order-delivery.html`
- `order-failed.html`
- `order-invoice.html`
- `order-invoice.html`
- `order-payment-gateway.html`
- `order-placed.html`
- `password.html`
- `register.html`

Vous pouvez ajouter autant de vues que vous le souhaitez. L'url de ces vues sera de la forme `http://www.yourshop.com/nom-de-la-vue-sans-extension`. Par exemple si votre template contient une vue buzz.html, l'url de cette vue sera `http://www.yourshop.com/buzz`.

## Configuration d'un template ##

Dans le répertoire `configs`, thelia recherche le fichier `variables.conf`. Ce fichier optionnel contient un ensemble de définitions de variables qui seront accessibles depuis toutes le fichiers **vues**. Ce fichier est un [fichier de configuration Smarty](http://www.smarty.net/docs/en/config.files.tpl).

Par exemple si `configs/variables.conf` contient :
```ini
    # Maximum number of lines in lists
    # --------------------------------
    max_displayed_orders = 20
    max_displayed_customers = 20
```

La variable `max_displayed_orders` sera disponible dans les différentes vues en utilisant la syntaxe suivante :

```smarty

{loop name="customer_list" type="customer" current="false" visible="*" order=$customer_order backend_context="1" page=$page limit=#max_displayed_customers#}
....
{/loop}
```

## Héritage de template (à partir de Thelia 2.4) ##

Thelia 2.4 introduit l'héritage de template : vous puvez utilisez dans un template tous les fichiers d'un template `_**parent**_` et surcharger que ceux que vous souhaitez personnaliser. En d'autres termes, vous pouvez créer un nouveau template et ne personnaliser que certains fichiers au lie de copier l'intégralité des fichires du template.

Ce mécanisme fonctionne pour n'importe quel type de template : front-office, pdf, email et back-office.

Par exemple, vous pouvez créer un gabarit spécifique et un ensemble de fichier personnalisée pour la page d'accueil, les catégories et les pages produits tout en gardant les vues par défaut pour la gestion des clients etr des achats (panier, gestion client, choix du mode de livbraison etc.). POur se faire créer simplemùent votre propore version de :

- layout.tpl
- product.html
- category.html
- index.html

Tous les autres fichiers (vues) du template parent seront utilisé pour l'affichage.

Quand vous souhaitez créer un nouveau template (disons "mon-super-template") à partir d'un template existant (par exemple "default"), il vous suffit de d&clarer dans l'éléments `<parent>` de votre descripteur template.xml que votre template étend "default" :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<template xmlns="http://thelia.net/schema/dic/template"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/template http://thelia.net/schema/dic/template/template-1_0.xsd">
    <descriptive locale="fr">
        <title>Un tempate front qui étend le template "default"</title>
    </descriptive>
    <descriptive locale="en">
        <title>A front-office template which extends the "default" template</title>
    </descriptive>

    <parent>default</parent>

    ... rest of the descriptor ...

</template>
```

Le point important ici est `<parent>default</parent>`, qui identifie le template parent qui doit être un template existant du même type (front-office, back-office, pdf, email) que le template enfant ("mon-super-template"). Dans notre exemple le nouveau template hérite du template par defaut.

Tous les fichiers du template sont hérités y compris les ressources, les traductions et les surcharge des modules.

Cependant vous pouvez définir des trzductions spécifiques pour votre template et les utiliser en déclarant un nouveau domaine de traduction dans les fichiers (**vues**) de votre template, par exemple `{default_translation_domain domain='bo.mytemplate'}`, ou en utilisant  le paramètre domaine (d) de la fonction smarty `intl` : `{intl l='Edit a customer' d='bo.mytemplate'}`.

Vous pouvez egalement utiliser vos propores ressources comme dans n'importe quel template. Utilisez la fonction `declare_assets` (`{declare_assets directory='your_asset_directory'}`) si vos fichiers CSS ou javascripts références à ds ressources relatives, de façon à ce qu'ils soient copiés dans  le répertoire `web/assets`.

Vous pouvez également surcharger les ressources du template parent si vous utilisez la même structure de répertoire. Par exemple si vous souhaitez surcharger les fichier `styles.css` du template parent qui se trouve dans le dossier `assets/css/styles.css`, créez un fichiers `styles.css`dans le répertoire `assets/css/styles.css` de votre template et il surchargera le fichier du template parent.

> Attention ! N'oubliez pas de vider le cache quand vous manipulez les fichiers templates car ces derniers et/ou leur ressources peuvent avoir été mis en cache pa Thelia.


