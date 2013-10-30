---
layout: home
title: index
sidebar: index
---

Thelia is an open source tool for creating e-business websites and managing online content. This software is published under GPL.

Here is the current developping next major version. You can download this version for testing or see the code.
Here is the most recent developed code for the next major version (v2). You can download this version for testing or having a look on the code (or anything you wish, respecting GPL).

Most part of the code can possibly change, a large part will be refactor soon, graphical setup does not exist yet.

Requirements
------------

* php 5.4
    * Required extensions :
        * PDO_Mysql
        * mcrypt
        * intl
        * gd
        * curl
    * safe_mode off
    * memory_limit at least 150M, preferably 256.
    * post_max_size 20M
    * upload_max_filesize 2M
* apache 2
* mysql 5

If you use Mac OSX, it still doesn't use php 5.4 as default php version... There are many solutions for you :

* use linux (the best one)
* use last MAMP version and put the php bin directory in your path  :

```bash
export PATH=/Applications/MAMP/bin/php/php5.4.x/bin/:$PATH
```

* configure a complete development environment : http://php-osx.liip.ch/
* use a virtual machine with vagrant and puppet : https://puphpet.com/

Installation
------------

``` bash
$ git clone --recursive https://github.com/thelia/thelia.git
$ cd thelia
$ wget http://getcomposer.org/composer.phar
$ php composer.phar install
```

Finish the installation using cli tools :

``` bash
$ php Thelia thelia:install
```

You just have to follow all instructions.

##How to create an admin account ?

```bash
$ php Thelia admin:create
```
<br />
##How to insert fake data ?

For a demo with fake but realistic products

``` bash
$ php install/import.php
```
<br />
For dev data

```bash
$ php install/faker.php
```
<br />
##How to reset my database

(composer must be install globally http://getcomposer.org/doc/00-intro.md#globally)

```bash
$ ./reset_install.sh
```

this task reload the database, insert fake data using faker script and create an admin with thelia2 as username and password

Usage
-----

Consult the page : http://localhost/thelia/web/index_dev.php

You can create a virtual host and choose web folder for root directory.

To run tests (phpunit required) :

``` bash
$ phpunit
```

We still have lot of work to achieve but enjoy this part.