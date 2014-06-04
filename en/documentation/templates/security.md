---
layout: home
title: Thelia Template Internationalisation
sidebar: templates
lang: en
subnav: templates_security
---
# Security
If you need to do some security checks in your pages, Thelia provides you some Smarty functions to help you.

Those functions must be placed in a Smaty block called "no-return-functions" like this:

{% highlight smarty %}

{block name="no-return-functions"}
    {check_auth role="CUSTOMER" login_tpl="login"}
    {check_cart_not_empty}
    {check_valid_delivery}
{/block}

{% endhighlight %}

## Check the user authentication

The function **check_auth** can be used to know if the user is granted to view something.

Example:
{% highlight smarty %}

{check_auth role="CUSTOMER" login_tpl="login"}

{check_auth resource="admin.address" access="VIEW" login_tpl="login"}

{% endhighlight %}

### role

In Thelia 2, a user can only have one of these two roles:

- ADMIN : an administrator of the site
- CUSTOMER : a registed and logged in customer

### resource

The resource argument may be useful in the back office.
There is the list of the available resources in Thelia 2:

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

### module

Name of the module(s) which the user must have access.
Example:

{% highlight smarty %}
{block name="no-return-functions"}
    {check_auth role="ADMIN" module="Colissimo" access="UPDATE" login_tpl="login"}
{/block}
{% endhighlight %}

### access

There is 4 types of access to a resource:

- CREATE : create a new entry
- VIEW : view the resource
- UPDATE : update the resource
- DELETE : delete the resource

Those accesses can be configured from the back office, tab "Configuration", on "Administration Profile".

### login_tpl

This argument is the name of the view name (the login page is "login").
If the user is not granted and this argument is defined, it redirects to this view.

## Check if the cart is empty

This function checks if the customer's cart is empty, and redirects to the route "cart.view" if it is.

{% highlight smarty %}
{block name="no-return-functions"}
    {check_cart_not_empty}
{/block}

{% endhighlight %}

## Check if a delivery module has been selected and if the address is valid

Check if the delivery module and address are valid, redirects to the route "order.delivery" if not.

{% highlight smarty %}
{block name="no-return-functions"}
    {check_valid_delivery}
{/block}
{% endhighlight %}
