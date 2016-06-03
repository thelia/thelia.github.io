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


