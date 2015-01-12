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

Since version 2.1 we have created sub project allowing us to explode Thelia into little component. The repo [thelia-project](https://github.com/thelia/thelia-project)
is the glue if you want to create a new project with this new component and manage your installation with composer.

## Start a new project

```
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia-project your-project-name 2.1.1
```

Your Thelia is now downloaded and ready to be [installed](/en/documentation/installation/index.html#install-it)

Now you are ready to require new dependency in your project like module who already use the [thelia-installer](https://packagist.org/packages/thelia/installer)
or even templates who use the thelia-installer to.