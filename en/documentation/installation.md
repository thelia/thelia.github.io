---
layout: home
title: Installation
sidebar: installation
lang: en
---

<div class="page-header">
    <h1>Requirements</h1>
</div>

* Php 5.4
    * Required extensions :
        * PDO_Mysql
        * mcrypt
        * intl
        * gd
        * curl
        * calendar
    * safe_mode off
    * memory_limit at least 128M, preferably 256.
    * post\_max\_size 20M
    * upload\_max\_filesize 2M
    * date.timezone must be defined
* Web Server : Apache 2.X or Nginx
* MySQL 5

If you use **Windows** with [WAMP](http://www.wampserver.com/) and encounter an issue with ```intl``` there is a special manipulation to do : you have to copy all files with name ```icu***.dll```  from php directory (eg: "C:\wamp\bin\php\php5.x.xx") to the ```apache``` directory ("C:\wamp\bin\apache\apache2.x.xx\bin").


<div class="page-header">
    <h1>Installation</h1>
</div>


## Download Thelia 2

You can download Thelia by two different way

### Downloading from Thelia website

Go to this page and download the zip file : [http://thelia.net/#download](http://thelia.net/#download)

Then unzip the file.


### Using composer

```bash
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia path/ 2.1.3 (or 2.0.6)
```


## Install it

You can install Thelia by two different way

### Using install wizard

Installing thelia with the web install wizard allow to create an administrator, add some informations about your shop, etc

First of all, you have to configure a vhost as describe in [configuration](/en/documentation/configuration.html) section.

The install wizard in accessible with your favorite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

For example, I have thelia downloaded at http://thelia.net and my vhost is correctly configured, I have to reach this address :

```bash
http://thelia.net/install
```

### Using cli tools

```bash
$ php Thelia thelia:install
```

You just have to follow all instructions.


### After installing Thelia

Remove the ```web/install``` directory

## How to create an admin account ?

```bash
$ php Thelia admin:create
```

## How to insert fake data ?

For a demo with fake but realistic products

```bash
$ php setup/import.php
```

For dev data

```bash
$ php setup/faker.php
```

(composer must be install [`globally`](http://getcomposer.org/doc/00-intro.md#globally))
## How to reset my database


```bash
$ ./reset_install.sh
```

this task reload the database, insert fake data using faker script and create an admin with thelia2 as username and password

<div class="page-header">
    <h1>Update to latest version</h1>
</div>

## How to update your Thelia ?

If you have already installed Thelia but a new version is available, you can update easily.

<div class="alert alert-warning">
<p>Before proceeding to the update, it's strongly recommended to backup your website (files and database).</p>
<p><em>You can backup your database with tools such as phpmyadmin or mysqldump.</em></p>
</div>

Once the backup is done, you first have to :

- clear all caches running ```php Thelia cache:clear```
- copy all files from the thelia new version (local/modules/* files too)

Then you have 3 differents ways to proceed :

### use Thelia command

- run ```php Thelia thelia:update```
- again clear all caches in all environment :
    - ```php Thelia cache:clear```
    - ```php Thelia cache:clear --env=prod```

This command **can fail** on some updates and you will have to use the next methods.

### use the update script (since version 2.1)

run ```php setup/update.php```

This script is standalone. Moreover, it will automatically backup your database and restore it if a problem is detected.

If your database is big, it's recommended to backup your database by your hands and not to use the backup proposed by the script.

### use the update wizard (since version 2.1)

An update wizard is available in the ```web/install``` directory. It's the same directory used by the install wizard.

**You have to protect the web folder if your site is public (htaccess,  List of allowed IP, ...).**

The update wizard in accessible with your favorite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

Note: 

- the wizard is available only if your Thelia is not already in the latest version.
- if your database is big, it's recommended to backup your database by your hands and not to use the backup proposed by the wizard.


<div class="page-header">
    <h1>Usage</h1>
</div>

Consult the page : http://localhost/thelia/web/index_dev.php

You can create a virtual host and choose web folder for root directory.

To run tests (phpunit required) :

```bash
$ phpunit
```

We still have lot of work to achieve but enjoy this part.
