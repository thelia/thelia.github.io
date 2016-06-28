---
layout: home
title: Feature - Tax Engine
sidebar: features
lang: en
subnav: features_tax_admin
---

# Manage taxes

Thelia 2 tax engine is based on ***taxes*** which can be combined into ***tax rules***.

## What is a ***tax*** ?

A ***tax*** is an effect based on a [*type*](/en/documentation/features/tax/type.html)

You can view, create, update and delete taxes in **Configuration > Tax rules** back-office menu.

For example, French 20% VAT is a ***Price % tax*** type whose amount is ***20***.

![Edit tax](/img/documentation/features/tax/edit_tax.png "Edit tax")

## What is an ***tax rule*** ?

An ***tax rule*** is either a combination of taxes or a single tax. ***Tax rules*** are assigned to products ; each product has a single ***tax rule***. Tax can differ depending on the country therefore a product can have different tax - or no tax - depending on the country.

You can view, create, update and delete tax rules in **Configuration > Tax rules** back-office menu.

When managing taxes in a tax rule, you can chose if a tax is applied on the already taxed price or not. Here is a complex example :

We created the 3 taxes below :

![Alpha tax](/img/documentation/features/tax/alpha_tax.png "Alpha tax")
![Beta tax](/img/documentation/features/tax/beta_tax.png "Beta tax")
![Delta tax](/img/documentation/features/tax/delta_tax.png "Delta tax")

And we combined them into a new tax rule like this :

![Tax rule](/img/documentation/features/tax/tax_rule.png "Tax rule")

We put the alpha and beta tax in a first group and the delta tax in a second group.

Meaning we will calculate the tax amount for group 1 based on untaxed price, then we will calculate group 2 tax amount based on untaxed price plus group 1 tax.

Let's do it for a 100 €  product.

Untaxed price = 100

First we calculate group 1 taxes ; alpha tax = 5, beta tax = 100 * 10% = 10. So group 1 tax is 5 + 10 = 15 €

Then we calculate group 2 tax ; delta tax = (100+15) * 20% = 23 €

Total tax = 15 + 23 = 38 € ; Taxed price = 100 + 38 = 138 €

