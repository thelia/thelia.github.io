---
layout: home
title: Thelia Smarty Templates
sidebar: templates
lang: en
subnav: templates_smarty_introduction
---

# About Thelia Smarty Templates #

Thelia Smarty templates uses the [Smarty](http://www.smarty.net/) template engine, enriched by many Thelia additions, such as loops, data access functions, internationalization function, etc. 

Be sure to have a basic Smarty knowledge before starting to write a new template. The [Smarty documentation](http://www.smarty.net/docs/en/) will help you.

The `default` templates provides guidelines and good practices to build a Thelia template.

[Template inheritance](content.html#template-inheritance-from-thelia-24) is available from Thelia 2.4.

## Structure of a template ##

Thelia Smarty templates are located in the `templates` sub-directory. This directory contains two sub-directories :

- `backOffice` : this is where back-office templates are located.
- `frontOffice` : this is where front-office templates are located.
- `pdf` : contains templates of the PDF documents, like invoices.
- `mail` : contains templates of the e-mail sent by Thelia to customers or administrators.

These directories have identical structures; they contains an unlimited number of directories, each of them containing a complete template :

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

Each of the templates directories contains a set of HTML files, and related resources (CSS, JS, images, layouts, etc.).

## Selecting the current template

To select the current template, set the name of the template directory in the following configuration variables :

 	active-admin-template : the back-office template
	active-front-template : the front-office template
	active-mail-template : the mail template
	active-pdf-template : the PDF template

## Global Variables

<div class="alert alert-warning">
<p>This functionality is only available since version 2.4</p>
</div>

The app variable is available everywhere and gives access to many commonly needed objects and values.

```smarty
    {$app->environment} {* string	The current environment string (e.g 'dev') *}
    {$app->request} {* Request|null	The HTTP request object *}
    {$app->session} {* Session|null	The session *}
    {$app->debug} {* bool	The current debug mode *}
```