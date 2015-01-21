---
layout: home
title: HowTo - migrate Thelia 2.0 to Thelia 2.1
sidebar: howto
lang: en
subnav: howto_migrate_20_21
---

<div class="page-header">
    <h1>How To : <small>migrate Thelia 2.0 to Thelia 2.1</small></h1>
</div>

Between Thelia 2.0 and Thelia 2.1 we made a lot of effort for not breaking backward compatibility. 

## Templates

### token_url

the smarty function `token_url` was introduced in Thelia 2.0 but since Thelia 2.1 it is mandatory to use it when you want to delete a resource.
This function add a single token at the end of your url preventing CSRF attack.

Here is the list of template you have to modify : 

- cart.html :
    - form action for quantity update `<form action="{token_url path="/cart/update"}"`
    - link for removing a cart item : ` <a href="{token_url path="/cart/delete/$ITEM_ID"}">`
- mini-cart.html
    - link for removing a cart item : `<a href="{token_url path="/cart/delete/$ITEM_ID"}">`



Once your Thelia is updated ([following this steps](/en/documentation/installation/index.html#use-the-update-script-(since-thelia-2-1)))