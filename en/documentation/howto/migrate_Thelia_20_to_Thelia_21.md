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

Between Thelia 2.0 and Thelia 2.1 we made a lot of effort for not breaking backward compatibility. Here is a list of change you have to do with your new version of Thelia.

## Templates

### `{token_url}`

the smarty function `token_url` was introduced in Thelia 2.0 but since Thelia 2.1 it is mandatory to use it when you want to delete a resource.
This function add a single token at the end of your url preventing CSRF attack.

Here is the list of template you have to modify : 

- cart.html :
    - form action for quantity update `<form action="{token_url path="/cart/update"}"`
    - link for removing a cart item : ` <a href="{token_url path="/cart/delete/$ITEM_ID"}">`
- mini-cart.html
    - link for removing a cart item : `<a href="{token_url path="/cart/delete/$ITEM_ID"}">`

### `{set_previous_url}`

`set_previous_url` is a new smarty function and allow to not save the current Url in the navigation history with the `ignore_current` parameter set to 1.

It is useful for template page like register, password or even login because you can return on this page is the form contains error and this url will be save in the history and use for the ```success_url```.

exemple : 

    {set_previous_url ignore_current="1"}
    
### new template pages

* error.html : display an error message instead of a blank page if an error occurred. set ```error_message.show``` config value to 1 if you want to use this feature.
* account-order.html : display an order details. Of course you have to create a link to this page. You can see the account.html template in the default template for an exemple.

### Hooks

Hooks are new features in Thelia 2.1. It is not mandatory to use them, you can still use your current template without hooks.
But if you don't use them, maybe some modules developed for Thelia 2.1 will not work with your template because they use Hooks.

The documenation explain how hooks work and contains the official list of all hooks : [Hook documentation](/en/documentation/modules/hooks/index.html)



