---
layout: home
title: Installation with composer
sidebar: installation
subnav: installation_composer
lang: en
---

<div class="page-header">
    <h1>Advanced installation with composer</h1>
</div>

<div class="alert alert-warning">
<p>This functionality is only available since version 2.1</p>
</div>

The requirements are still the same but with this installation you can manage easily your Thelia with composer, require new
dependencies, etc.

Since version 2.1 we have created sub project allowing us to explode Thelia into little components. The repo [thelia-project](https://github.com/thelia/thelia-project)
is the glue if you want to create a new project with this new components and manage your installation with composer.

## Start a new project

```
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia-project your-project-name 2.2.2 (or 2.1.8)
```

Your Thelia is now downloaded and ready to be [installed](/en/documentation/installation/index.html#install-it)

Now you are ready to require new dependency in your project like module who already use the [thelia-installer](https://packagist.org/packages/thelia/installer)
or even templates who use the thelia-installer too.

## Update your project

If you have installed Thelia following the instructions before, you can update your files using a script present in your project :

```
$ sh change-version.sh 2.2.2 (or 2.1.8)
```

Here `2.2.1` is the version you want to retrieve. For updating your database, follow this [instructions](/en/documentation/installation/index.html#use-the-update-script-%28since-version-2-1%29)

## Known issues

### GitHub and composer

With composer you could encounter an API rate limit exception during the install.

In this case, you must create a new [Personal access token](https://github.com/settings/tokens) on your GitHub account and then add it to your composer configuration with this command :

```bash
composer config --global github-oauth.github.com <YOUR_TOKEN>
```
