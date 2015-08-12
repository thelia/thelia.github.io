---
layout: home
title: Development - Faker
sidebar: development
lang: en
subnav: development_faker
---

<div class="page-header">
    <h1>Development : <small>Faker</small></h1>
</div>

When you develop a new website / module or test a functionality, it's very useful to have a website with data. It's the role of the `faker` to do so.

The faker **erases all data in your database** and generates fake :

- customers and addresses
- administrators
- categories, products, brands, features, attributes, images and documents
- folders, contents, images and documents
- orders

To run the faker (composer must be install [`globally`](http://getcomposer.org/doc/00-intro.md#globally)) :

```bash
$ php setup/faker.php
```

## Advanced usage

<div class="alert alert-warning">
    <p>Since version 2.2, the faker is now configurable</p>
</div>

By default, the script generates fake data with **real texts** for the **fr\_FR, en\_US, es\_ES, it\_IT and de\_DE** locales.
**20** top categories and from 0 to **20** sub categories are created with in each of them from 0 to **20** products.

For custom usages, you can control the faker from the command line :

```
Generate fake data for your Thelia website

Usage:

    php faker.php <OPTIONS>

Options:

    -h
        Display this message and exit

    -b <bootstrap file>
        Use this bootstrap file

    -c <number of categories>
        Maximum number of categories and sub categories to create (default: 20)

    -p <number of products>
        Maximum number of products to create in a category (default: 20)

    -l <locale list>
        The list of locales (separated with a ,) for which to generate content (default: fr_FR, en_US, es_ES, it_IT, de_DE)

    -r <real text>
        Use real text or not. real text mode is much more slower than false text mode.
        0 : false text mode
        1 : real text mode (default)

Examples:

    Generate content in english and french with false text for 5 categories and 10 products :

    php faker.php -r 0 -c 5 -p 10 -l 'fr_FR, en_US'
```
