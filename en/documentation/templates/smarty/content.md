---
layout: home
title: Thelia Template Contents
sidebar: templates
lang: en
subnav: templates_smarty_contents
---
# Content of a template #

A template is a collection of files, mostly HTML files. Each HTML file is a **view**.

Thelia back and front office template view names should have the `.html` extension.

The mail template files may contain text-only version of e-mail templates, which should have the `.text` extension (see [E-mail templates documentation](http://doc.thelia.net/en/documentation/templates/emails.html) for details).

Using [Smarty inheritance](http://www.smarty.net/inheritance) may save a lot of time and code duplication.

The default front office (and back-office) template uses a global layout, in the `layout.tpl` file, which contains template-wide common code and declarations.

# Template descriptor #

From Thelia 2.4.0, a template may have de descriptor, a file named `template.xml` located at the root of the template. The content of this descriptor is very similar to a module descriptor. 

Here is the descriptor of the "default" front-office template :

```
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

# Predefined names #

Every template should contains specific template files, which are the views invoked in the Front and Back Offices controllers. 

For a front-office template, these files are :

- `product.html` : display a product
- `content.html` : display a contents
- `category.html` : displays a category contents
- `feed.html` : the RSS product or content feed
- `folder.html` : display a folder contents
- `404.html` : displayed if a page cannot be found

Other templates names are defined by the `Front` module configuration, and specifically in the routing configuration file, `Front/Config/front.xml`. For example, the customer login page is defined by the `login.process` route :

    <!-- Login -->
    <route id="customer.login.process" path="/login" methods="post">
        <default key="_controller">Front\Controller\CustomerController::loginAction</default>
        <default key="_view">login</default>
    </route>

The templates referenced in the Front module configuration are :

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

You can add as many templates as you want. The URL of such templates is `http://www.yourshop.com/template_file_name_without_extension`. For exemple, if your template contains a buzz.html view, the URL of this view is `http://www.yourshop.com/buzz`.

## Template configuration ##

In the `configs` directory, Thelia searches for the `variables.conf` file. This optional file could contain a set of variable definitions, that will be available in the template files. This file is a [Smarty Config file](http://www.smarty.net/docs/en/config.files.tpl).

For example, if `configs/variables.conf` contains :
    
    # Maximum number of lines in lists
    # --------------------------------
    max_displayed_orders = 20
    max_displayed_customers = 20


The max_displayed_orders variable will be available in the templates, using the `#max_displayed_orders#` syntax :

    {loop name="customer_list" type="customer" current="false" visible="*" order=$customer_order backend_context="1" page=$page limit=#max_displayed_customers#}


## Template inheritance (from Thelia 2.4) ##

Thelia 2.4 introduces template inheritance: you can use in a template all files from a _parent_ template, and override only the ones you want to customize. In other words, you can create a new template, and redefine only the required files instead of copying the whole template.

This is working for any template type: front-office, pdf, email and back-office.

For example, you can create a specific layout and a set of customized home, category and product pages, while keeping the default customer and purchase management pages (cart, customer managemenbt, delivery selection, etc.). To do so, just create your own version of :
- layout.tpl
- product.html
- category.html
- index.html

All other template files will be searched in the parent template.

When you want to create a new template (let's say "mytemplate") from another one (for example "default"), you just have to declare in the the `<parent>` element of your template.xml descriptor that your template extends "default" :

```
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

The important element here is `parent`, which identifies the parent template, which should be an existing template of the same type (front-office, back-office, pdf, mail) as the child template. In our example, the new template inherits from the default template.

All template files are inherited, including the assets, the translations and the module overrides.

However, you can define specific translations for your template, and use them by declaring a default translation domain in your template files, for example `{default_translation_domain domain='bo.mytemplate'}`, or using the domain (abbreviated d) parameter of the intl Smarty function : `{intl l='Edit a customer' d='bo.mytemplate'}`

You can also use your own assets, as in a regular template. Use a `{declare_assets directory='your_asset_directory'}` if your CSS or JS references relative resources, so that they could be copied in the `web/assets` directory.

Additionally, you can also override the assets of your parent if you're using the same asset directory structure. For example, if you want to override the `assets/css/styles.css` of your parent, create an `assets/css/styles.css` file in your template, and it will override the parent's one.

> Warning ! Don't forget to clear the cache when manipulating templates, as template and/or assets information may be cached by Thelia.



