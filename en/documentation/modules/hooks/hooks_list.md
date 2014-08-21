---
layout: home
title: Hooks List - Modules
sidebar: plugin
lang: en
subnav: plugin_hook
---

<div class="page-header">
    <h1>Hooks : <small>list of hooks</small></h1>
</div>

<div class="alert alert-warning">
<p>This is a functionality in development and not available in the current version of Thelia. This is planned for version 2.1</p>
</div>

- [Front Office](#front-office)
- [Back Office](#back-office)
- [PDF](#pdf)


## Front Office 

### Page 404

- **404.content** : content area
- **404.stylesheet** : CSS stylesheet
- **404.after-javascript-include** : after javascript include
- **404.javascript-initialization** : after javascript initialisation

### customer account

- **account.top** : at the top
- **account.bottom** : at the bottom
- **account.stylesheet** : CSS stylesheet
- **account.after-javascript-include** : after javascript include
- **account.javascript-initialization** : after javascript initialisation

### Change password

- **account-password.top** : at the top
- **account-password.bottom** : at the bottom
- **account-password.stylesheet** : CSS stylesheet
- **account-password.after-javascript-include** : after javascript include
- **account-password.javascript-initialization** : after javascript initialisation

### Update customer account

- **account-update.top** : at the top
- **account-update.form-top** : at the top of the form
- **account-update.form-bottom** : at the bottom of the form
- **account-update.bottom** : at the bottom
- **account-update.stylesheet** : CSS stylesheet
- **account-update.after-javascript-include** : after javascript include
- **account-update.javascript-initialization** : after javascript initialisation

### Address creation

- **address-create.top** : at the top
- **address-create.form-top** : at the top of the form
- **address-create.form-bottom** : at the bottom of the form
- **address-create.bottom** : at the bottom
- **address-create.stylesheet** : CSS stylesheet
- **address-create.after-javascript-include** : after javascript include
- **address-create.javascript-initialization** : after javascript initialisation

### Address update

- **address-update.top** : at the top
- **address-update.form-top** : at the top of the form
- **address-update.form-bottom** : at the bottom of the form
- **address-update.bottom** : at the bottom
- **address-update.stylesheet** : CSS stylesheet
- **address-update.after-javascript-include** : after javascript include
- **address-update.javascript-initialization** : after javascript initialisation

### Payment failed

- **badresponseorder.stylesheet** : CSS stylesheet
- **badresponseorder.after-javascript-include** : after javascript include
- **badresponseorder.javascript-initialization** : javascript initialization

### Cart

- **cart.top** : at the top
- **cart.bottom** : at the bottom
- **cart.after-javascript-include** : after javascript include
- **cart.stylesheet** : CSS stylesheet
- **cart.javascript-initialization** : javascript initialization

### Category page

- **category.top** : at the top
- **category.main-top** : at the top of the main area
- **category.main-bottom** : at the bottom of the main area
- **category.bottom** : at the bottom
- **category.stylesheet** : CSS stylesheet
- **category.after-javascript-include** : after javascript include
- **category.javascript-initialization** : after javascript initialisation
- **category.sidebar-top** : at the top of the sidebar
- **category.sidebar-body** : the body of the sidebar
- **category.sidebar-bottom** : at the bottom of the sidebar

### Contact page

- **contact.top** : at the top
- **contact.form-top** : at the top of the form
- **contact.form-bottom** : at the bottom of the form
- **contact.bottom** : at the bottom
- **contact.stylesheet** : CSS stylesheet
- **contact.after-javascript-include** : after javascript include
- **contact.success** : if successful response

### Content page

- **content.top** : at the top
- **content.main-top** : at the top of the main area
- **content.main-bottom** : at the bottom of the main area
- **content.bottom** : at the bottom
- **content.stylesheet** : CSS stylesheet
- **content.after-javascript-include** : after javascript include
- **content.javascript-initialization** : after javascript initialisation
- **content.sidebar-top** : at the top of the sidebar
- **content.sidebar-body** : the body of the sidebar
- **content.sidebar-bottom** : at the bottom of the sidebar

### Curency selection page

- **currency.top** : at the top
- **currency.bottom** : at the bottom
- **currency.stylesheet** : CSS stylesheet
- **currency.after-javascript-include** : after javascript include
- **currency.javascript-initialization** : after javascript initialisation

### Folder page

- **folder.top** : at the top
- **folder.main-top** : at the top of the main area
- **folder.main-bottom** : at the bottom of the main area
- **folder.bottom** : at the bottom
- **folder.stylesheet** : CSS stylesheet
- **folder.after-javascript-include** : after javascript include
- **folder.javascript-initialization** : after javascript initialisation

### Home page

- **home.body** : main area
- **home.stylesheet** : CSS stylesheet
- **home.after-javascript-include** : after javascript include
- **home.javascript-initialization** : after javascript initialisation

### language selection page

- **language.top** : at the top
- **language.bottom** : at the bottom
- **language.stylesheet** : CSS stylesheet
- **language.after-javascript-include** : after javascript include
- **language.javascript-initialization** : after javascript initialisation

### Login page

- **login.top** : at the top
- **login.main-top** : at the top of the main area
- **login.form-top** : at the top of the form
- **login.form-bottom** : at the bottom of the form
- **login.main-bottom** : at the bottom of the main area
- **login.bottom** : at the bottom
- **login.stylesheet** : CSS stylesheet
- **login.after-javascript-include** : after javascript include
- **login.javascript-initialization** : after javascript initialisation

### HTML layout

- **main.head-top** : after the opening of the head tag
- **main.stylesheet** : CSS stylesheet
- **main.head-bottom** : before the end of the head tag
- **main.body-top** : after the opening of the body tag
- **main.header-top** : at the top of the header
- **main.navbar-secondary** : secondary navigation
- **main.navbar-primary** : primary navigation
- **main.header-bottom** : at the bottom of the header
- **main.content-top** : before the main content area
- **main.content-bottom** : after the main content area
- **main.footer-top** : at the top of the footer
- **main.footer-body** : footer body (*smarty block*)
- **main.footer-bottom** : bottom of the footer
- **main.after-javascript-include** : after javascript include
- **main.javascript-initialization** : javascript initialization
- **main.body-bottom** : before the end body tag

### Newsletter page

- **newsletter.top** : at the top
- **newsletter.bottom** : at the bottom
- **newsletter.stylesheet** : CSS stylesheet
- **newsletter.after-javascript-include** : after javascript include
- **newsletter.javascript-initialization** : after javascript initialisation

### Delivery choice

- **order-delivery.top** : at the top
- **order-delivery.form-top** : at the top of the form
- **order-delivery.form-bottom** : at the bottom of the form
- **order-delivery.bottom** : at the bottom
- **order-delivery.javascript-initialization** : after javascript initialisation
- **order-delivery.stylesheet** : CSS stylesheet
- **order-delivery.after-javascript-include** : after javascript include
- **order-delivery.extra** : extra area (*by module*)
- **order-delivery.javascript** : javascript (*by module*)

### Order failed

- **order-failed.top** : at the top
- **order-failed.bottom** : at the bottom
- **order-failed.stylesheet** : CSS stylesheet
- **order-failed.after-javascript-include** : after javascript include
- **order-failed.javascript-initialization** : after javascript initialisation

### Invoice choice

- **order-invoice.top** : at the top
- **order-invoice.delivery-address** : delivery address (*by module*)
- **order-invoice.payment-extra** : extra payment zone (*by module*)
- **order-invoice.bottom** : at the bottom
- **order-invoice.javascript-initialization** : after javascript initialisation
- **order-invoice.stylesheet** : CSS stylesheet
- **order-invoice.after-javascript-include** : after javascript include

### Payment gateway

- **order-payment-gateway.body** : main area (*by module*)
- **order-payment-gateway.javascript** : javascript (*by module*)
- **order-payment-gateway.javascript-initialization** : after javascript initialisation
- **order-payment-gateway.stylesheet** : CSS stylesheet
- **order-payment-gateway.after-javascript-include** : after javascript include

### Placed order

- **order-placed.body** : main area (*by module*)
- **order-placed.stylesheet** : CSS stylesheet
- **order-placed.after-javascript-include** : after javascript include
- **order-placed.javascript-initialization** : after javascript initialisation

### Lost password

- **password.top** : at the top
- **password.form-top** : at the top of the form
- **password.form-bottom** : at the bottom of the form
- **password.bottom** : at the bottom
- **password.stylesheet** : CSS stylesheet
- **password.after-javascript-include** : after javascript include
- **password.javascript-initialization** : javascript initialization

### Product page

- **product.top** : at the top
- **product.gallery** : photo gallery
- **product.details-top** : at the top of the detail
- **product.details-bottom** : at the bottom of the detail area
- **product.additional** : additional information (*smarty block*)
- **product.bottom** : at the bottom
- **product.stylesheet** : CSS stylesheet
- **product.after-javascript-include** : after javascript include
- **product.javascript-initialization** : after javascript initialisation

### Register

- **register.top** : at the top
- **register.form-top** : at the top of the form
- **register.form-bottom** : at the bottom of the form
- **register.bottom** : at the bottom
- **register.stylesheet** : CSS stylesheet
- **register.after-javascript-include** : after javascript include
- **register.javascript-initialization** : after javascript initialisation

### Search page

- **search.stylesheet** : CSS stylesheet
- **search.after-javascript-include** : after javascript include
- **search.javascript-initialization** : after javascript initialisation

### Product loop

- **singleproduct.top** : at the top
- **singleproduct.bottom** : at the bottom

### Sitemap

- **sitemap.bottom** : at the bottom

### All Products

- **viewall.top** : at the top
- **viewall.bottom** : at the bottom
- **viewall.stylesheet** : CSS stylesheet
- **viewall.after-javascript-include** : after javascript include
- **viewall.javascript-initialization** : after javascript initialisation


## Back Office 




### Logs

- **admin-logs.top** : at the top
- **admin-logs.bottom** : bottom
- **admin-logs.js** : JavaScript

### Administrator

- **administrator.create-form** : create form
- **administrator.update-form** : update form
- **administrator.delete-form** : delete form

### Administrators

- **administrators.top** : at the top
- **administrators.bottom** : bottom
- **administrators.js** : JavaScript

### Attribut

- **attribute.id-delete-form** : id delete form
- **attribute.edit-js** : Edit JavaScript
- **attribute.create-form** : create form
- **attribute.delete-form** : delete form
- **attribute.add-to-all-form** : add to all form
- **attribute.remove-to-all-form** : remove to all form

### Attribute value

- **attribute-value.create-form** : create form

### Attributes

- **attributes.top** : at the top
- **attributes.table-header** : table header
- **attributes.table-row** : table row
- **attributes.bottom** : bottom
- **attributes.js** : JavaScript

### Attributes value

- **attributes-value.table-header** : table header
- **attributes-value.table-row** : table row

### Categories

- **categories.top** : at the top
- **categories.caption** : caption
- **categories.header** : header
- **categories.row** : row
- **categories.bottom** : bottom
- **categories.js** : JavaScript

### Category

- **category.tab-content** : content
- **category.contents-table-header** : contents table header
- **category.contents-table-row** : contents table row
- **category.edit-js** : Edit JavaScript
- **category.create-form** : create form
- **category.delete-form** : delete form

### Store Information

- **config-store.js** : JavaScript

### Configuration

- **configuration.top** : at the top
- **configuration.catalog-top** : at the top of the catalog area
- **configuration.catalog-bottom** : at the bottom of the catalog
- **configuration.shipping-top** : at the top of the shipping area
- **configuration.shipping-bottom** : at the bottom of the shipping area
- **configuration.system-top** : at the top of the system area
- **configuration.system-bottom** : at the bottom of the system area
- **configuration.bottom** : bottom
- **configuration.js** : JavaScript

### Content

- **content.tab-content** : content
- **content.edit-js** : Edit JavaScript
- **content.create-form** : create form
- **content.delete-form** : delete form

### Contents

- **contents.caption** : caption
- **contents.header** : header
- **contents.row** : row

### Countries

- **countries.top** : at the top
- **countries.table-header** : table header
- **countries.table-row** : table row
- **countries.bottom** : bottom
- **countries.js** : JavaScript

### Country

- **country.create-form** : create form
- **country.delete-form** : delete form
- **country.edit-js** : Edit JavaScript

### Coupon

- **coupon.create-js** : create JavaScript
- **coupon.update-js** : update JavaScript
- **coupon.top** : at the top
- **coupon.list-caption** : list caption
- **coupon.table-header** : table header
- **coupon.table-row** : table row
- **coupon.bottom** : bottom
- **coupon.list-js** : list JavaScript

### Currencies

- **currencies.top** : at the top
- **currencies.table-header** : table header
- **currencies.table-row** : table row
- **currencies.bottom** : bottom
- **currencies.js** : JavaScript

### Currency

- **currency.edit-js** : Edit JavaScript
- **currency.create-form** : create form
- **currency.delete-form** : delete form

### Customer

- **customer.top** : at the top
- **customer.bottom** : bottom
- **customer.create-form** : create form
- **customer.delete-form** : delete form
- **customer.edit** : Edit
- **customer.address-create-form** : address create form
- **customer.address-update-form** : address update form
- **customer.address-delete-form** : address delete form
- **customer.edit-js** : Edit JavaScript

### Customers

- **customers.caption** : caption
- **customers.header** : header
- **customers.row** : row
- **customers.js** : JavaScript
- **customers.header** : header
- **customers.row** : row

### Document

- **document.edit-js** : Edit JavaScript

### Export

- **export.top** : at the top
- **export.col1-top** : at the top of the column
- **export.col1-bottom** : at the bottom of column 1
- **export.bottom** : bottom
- **export.js** : JavaScript

### Feature

- **feature.value-create-form** : Value create form
- **feature.edit-js** : Edit JavaScript
- **feature.create-form** : create form
- **feature.delete-form** : delete form
- **feature.add-to-all-form** : add to all form
- **feature.remove-to-all-form** : remove to all form

### Features

- **features.top** : at the top
- **features.table-header** : table header
- **features.table-row** : table row
- **features.bottom** : bottom
- **features.js** : JavaScript

### Features value

- **features-value.table-header** : table header
- **features-value.table-row** : table row

### Folder

- **folder.tab-content** : content
- **folder.create-form** : create form
- **folder.delete-form** : delete form
- **folder.edit-js** : Edit JavaScript

### Folder

- **folders.top** : at the top
- **folders.caption** : caption
- **folders.header** : header
- **folders.row** : row
- **folders.bottom** : bottom
- **folders.js** : JavaScript

### Home

- **home.top** : at the top
- **home.bottom** : bottom
- **home.js** : JavaScript

### Hook

- **hook.edit-js** : Edit JavaScript
- **hook.create-form** : create form
- **hook.delete-form** : delete form

### Hooks

- **hooks.top** : at the top
- **hooks.table-header** : table header
- **hooks.table-row** : table row
- **hooks.bottom** : bottom
- **hooks.js** : JavaScript

### Image

- **image.edit-js** : Edit JavaScript

### Dashboard

- **index.top** : at the top
- **index.middle** : middle
- **index.bottom** : bottom

### Language

- **language.create-form** : create form

### Languages

- **languages.top** : at the top
- **languages.bottom** : bottom
- **languages.delete-form** : delete form
- **languages.js** : JavaScript

### Mailing system

- **mailing-system.top** : at the top
- **mailing-system.bottom** : bottom
- **mailing-system.js** : JavaScript

### Layout

- **main.catalog-bottom** : at the bottom of the catalog
- **main.head-css** : CSS
- **main.before-topbar** : before topbar
- **main.inside-topbar** : inside top bar
- **main.after-topbar** : after top bar
- **main.before-top-menu** : before top menu
- **main.in-top-menu-items** : in top menu items
- **main.after-top-menu** : after top menu
- **main.before-footer** : before footer
- **main.in-footer** : in footer
- **main.after-footer** : after footer
- **main.footer-js** : JavaScript

### Message

- **message.create-form** : create form
- **message.delete-form** : delete form
- **message.edit-js** : Edit JavaScript

### Messages

- **messages.top** : at the top
- **messages.table-header** : table header
- **messages.table-row** : table row
- **messages.bottom** : bottom
- **messages.js** : JavaScript

### Module

- **module.edit-js** : Edit JavaScript
- **module.configuration** : configuration (*by module*)
- **module.config-js** : configuration JavaScript

### Module hook

- **module-hook.edit-js** : Edit JavaScript
- **module-hook.create-form** : create form
- **module-hook.delete-form** : delete form
- **module-hook.js** : JavaScript

### Modules

- **modules.table-header** : table header
- **modules.table-row** : table row
- **modules.top** : at the top
- **modules.bottom** : bottom
- **modules.js** : JavaScript

### Order

- **order.tab-content** : content
- **order.product-list** : product list
- **order.edit-js** : Edit JavaScript

### Orders

- **orders.top** : at the top
- **orders.table-header** : table header
- **orders.table-row** : table row
- **orders.bottom** : bottom
- **orders.js** : JavaScript

### Product

- **product.tab-content** : content
- **product.edit-js** : Edit JavaScript
- **product.folders-table-header** : folders table header
- **product.folders-table-row** : folders table row
- **product.details-pricing-form** : details pricing form
- **product.details-details-form** : stock edit form
- **product.details-promotion-form** : details promotion form
- **product.before-combinations** : before combinations
- **product.combinations-list-caption** : combinations list caption
- **product.after-combinations** : after combinations
- **product.after-combinations** : after combinations
- **product.combination-delete-form** : combination delete form
- **product.details-pricing-form** : details pricing form
- **product.details-details-form** : stock edit form
- **product.details-promotion-form** : details promotion form
- **product.before-combinations** : before combinations
- **product.combinations-list-caption** : combinations list caption
- **product.after-combinations** : after combinations
- **product.after-combinations** : after combinations
- **product.combination-delete-form** : combination delete form
- **product.contents-table-header** : contents table header
- **product.contents-table-row** : contents table row
- **product.accessories-table-header** : accessories table header
- **product.accessories-table-row** : accessories table row
- **product.categories-table-header** : categories table header
- **product.categories-table-row** : categories table row
- **product.attributes-table-header** : attributes table header
- **product.attributes-table-row** : attributes table row
- **product.features-table-header** : features-table-header
- **product.features-table-row** : features table row
- **product.create-form** : create form
- **product.delete-form** : delete form

### Products

- **products.caption** : caption
- **products.header** : header
- **products.row** : row

### Profile

- **profile.create-form** : create form
- **profile.delete-form** : delete form
- **profile.edit-js** : Edit JavaScript

### Profiles

- **profiles.top** : at the top
- **profiles.bottom** : bottom
- **profiles.js** : JavaScript

### Search

- **search.top** : at the top
- **search.bottom** : bottom
- **search.js** : JavaScript

### Shipping configuration

- **shipping-configuration.top** : at the top
- **shipping-configuration.table-header** : table header
- **shipping-configuration.table-row** : table row
- **shipping-configuration.bottom** : bottom
- **shipping-configuration.create-form** : create form
- **shipping-configuration.delete-form** : delete form
- **shipping-configuration.js** : JavaScript
- **shipping-configuration.edit** : Edit
- **shipping-configuration.country-delete-form** : country delete form
- **shipping-configuration.edit-js** : Edit JavaScript

### Delivery zone

- **shipping-zones.top** : at the top
- **shipping-zones.table-header** : table header
- **shipping-zones.table-row** : table row
- **shipping-zones.bottom** : bottom
- **shipping-zones.js** : JavaScript
- **shipping-zones.edit-js** : Edit JavaScript

### System

- **system.logs-js** : logs JavaScript

### Tax

- **tax.create-form** : create form
- **tax.delete-form** : delete form
- **tax.edit-js** : Edit JavaScript

### tax rule

- **tax-rule.edit-js** : Edit JavaScript
- **tax-rule.create-form** : create form
- **tax-rule.delete-form** : delete form

### Taxes

- **taxes.update-form** : update form

### Taxes rules

- **taxes-rules.top** : at the top
- **taxes-rules.bottom** : bottom
- **taxes-rules.js** : JavaScript

### Template

- **template.attributes-table-header** : attributes table header
- **template.attributes-table-row** : attributes table row
- **template.features-table-header** : features-table-header
- **template.features-table-row** : features table row
- **template.create-form** : create form
- **template.delete-form** : delete form
- **template.edit-js** : Edit JavaScript

### Templates

- **templates.top** : at the top
- **templates.table-header** : table header
- **templates.table-row** : table row
- **templates.bottom** : bottom
- **templates.js** : JavaScript

### Tools

- **tools.top** : at the top
- **tools.col1-top** : at the top of the column
- **tools.col1-bottom** : at the bottom of column 1
- **tools.bottom** : bottom
- **tools.js** : JavaScript

### Translations

- **translations.js** : JavaScript

### Variable

- **variable.create-form** : create form
- **variable.delete-form** : delete form
- **variable.edit-js** : Edit JavaScript

### Variables

- **variables.top** : at the top
- **variables.table-header** : table header
- **variables.table-row** : table row
- **variables.bottom** : bottom
- **variables.js** : JavaScript

### Zone

- **zone.delete-form** : delete form


## PDF 

### Delivery

- **delivery.css** : CSS
- **delivery.header** : in the header
- **delivery.footer-top** : at the top of the footer
- **delivery.imprint** : imprint
- **delivery.footer-bottom** : at the bottom of the footer
- **delivery.information** : at the bottom of information area (*smarty block*)
- **delivery.after-information** : after the information area
- **delivery.delivery-address** : delivery address (*by module*)
- **delivery.after-addresses** : after addresse area
- **delivery.after-summary** : after the order summary

### Invoice

- **invoice.css** : CSS
- **invoice.header** : in the header
- **invoice.footer-top** : at the top of the footer
- **invoice.imprint** : imprint
- **invoice.footer-bottom** : at the bottom of the footer
- **invoice.information** : at the bottom of information area (*smarty block*)
- **invoice.after-information** : after the information area
- **invoice.delivery-address** : delivery address (*by module*)
- **invoice.after-addresses** : after addresse area
- **invoice.after-products** : after product listing
- **invoice.after-summary** : after the order summary


