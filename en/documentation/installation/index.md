---
layout: home
title: Installation
sidebar: installation
subnav: installation_index
lang: en
---

<div class="page-header">
    <h1>Requirements</h1>
</div>

* PHP 5.6 to 7.3
    * Required extensions :
        * PDO_Mysql
        * openssl
        * intl
        * gd
        * curl
        * calendar
        * dom
    * safe_mode off
    * memory_limit at least 128M, preferably 256.
    * post\_max\_size 20M
    * upload\_max\_filesize 2M
    * date.timezone must be defined
* Web Server Apache 2 or Nginx
* MySQL 5

If you're using **Windows** with [WAMP](http://www.wampserver.com/) and encounter an issue with ```intl``` there is a special manipulation to do : you have to copy all files with name ```icu***.dll```  from php directory (eg: "C:\wamp\bin\php\php5.x.xx") to the ```apache``` directory ("C:\wamp\bin\apache\apache2.x.xx\bin").

## MySQL 5.6

As of MySQL 5.6, default configuration sets the sql_mode value to

```
STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION
```

This 'STRICT_TRANS_TABLES' configuration results in SQL errors when no default value is defined on NOT NULL columns and the value is empty or invalid.

You can edit this default config in ` /etc/my.cnf ` and change the sql_mode to remove the STRICT_TRANS_TABLES part

```
[mysqld]
sql_mode=NO_ENGINE_SUBSTITUTION
```

Assuming your sql_mode is the default one, you can change the value directly on the run by running the following SQL Command

```sql
SET @@GLOBAL.sql_mode='NO_ENGINE_SUBSTITUTION', @@SESSION.sql_mode='NO_ENGINE_SUBSTITUTION'
```

For more information on sql_mode you can consult the [MySQL doc](http://dev.mysql.com/doc/refman/5.0/fr/server-sql-mode.html "sql Mode")

## Archive builders
Thelia's archive builders need external libraries.
For zip archives, you need PECL zip. See [PHP Doc](http://php.net/manual/en/zip.installation.php)

For tar archives, you need PECL phar. Moreover, you need to deactivate php.ini option "phar.readonly":
```ini
phar.readonly = Off
```

For tar.bz2 archives, you need tar's dependencies and the extension "bzip2". See [PHP Doc](http://php.net/manual/fr/book.bzip2.php)

For tar.gz archives, you need tar's dependencies and the extension "zlib". See [PHP Doc](http://fr2.php.net/manual/fr/book.zlib.php)

<div class="page-header">
    <h1>Installation</h1>
</div>

## Downloading Thelia 2

You can download Thelia using the following methods :

### Download the full distribution on Thelia website

Go to this page and download the zip file : [http://thelia.net/#download](http://thelia.net/#download)

Then unzip the file.


### Using composer 'create-project' command

```bash
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia path/ 2.3.1 (or 2.2.3)
```

Be sure to have git installed on your machine as it is required to install some dependencies, like Propel.

## Installing Thelia

You can install Thelia using the web wizard or a console

### Using install wizard

Installing thelia with the web install wizard allow to create an administrator, add some informations about your shop, etc

First of all, you have to configure a vhost as describe in [configuration](/en/documentation/configuration/server.html) section.

The install wizard in accessible with your favorite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

For example, I have thelia downloaded at http://thelia.net and my vhost is correctly configured, I have to reach this address :

```bash
http://thelia.net/install
```

### Using console cli tools

```bash
$ php Thelia thelia:install
```

You just have to follow all instructions.


### After installation

Remove the ```web/install``` directory

## How to create an admin account ?

```bash
$ php Thelia admin:create
```

## How to insert demo data ?

For a demo with fake but realistic products

```bash
$ php setup/import.php
```

For development and test data (composer must be installed [`globally`](http://getcomposer.org/doc/00-intro.md#globally))

```bash
$ php setup/faker.php
```

More information on the [faker](../development/faker.html).

## How to reset my database


```bash
$ ./reset_install.sh
```

this task reload the database, insert fake data using faker script and create an admin with thelia2 as username and password

<div class="page-header">
    <h1>Update to latest version</h1>
</div>

## How to update Thelia ?

<div class="alert alert-warning">
<p>Before proceeding to the update, it's strongly recommended to backup your website (files and database).</p>
<em>You can backup your database with tools such as phpmyadmin or mysqldump.</em>
</div>

### Short story

1. Download the new version on [Thelia web site](http://thelia.net/#download).
2. Be sure to close your shop, so that only you can access the shop (using a .htaccess, list of allowed IP, ...)
2. Unzip the downloaded archive in your Thelia directory, overwriting all files with those from the archive
3. Go to `http://yourshop.tld/install` to start the update wizard. **This may take a long time !**
4. Delete or rename the web/install directory.
5. Done !

### Detailed instructions and alternative update methods

Once the backup is done, The update process only takes a few minutes, in 2 main step:

- Update your files
- Update your database

#### Step 1 : update your files

You have three options to update Thelia files :

- download the new version archive at [http://thelia.net/#download](http://thelia.net/#download) and replace all your files with those from the archive.
- copy all files from the Thelia new distribution (including local/modules/* files)
- using git, you can ```git checkout``` to the current version to switch to your target version. (see also: [Advanced installation with composer](/en/documentation/installation/advanced.html))


Note: if you've moved your admin/install directories, your index_dev.php or any other
file/directory, don't forget to update them too.

In both case, clear all caches running ```php Thelia cache:clear```

#### Step 2 : update your database

If you're updating to a version > 2.1.x, simply run ```php setup/update.php```.
This script automatically backup your database and restore it if a problem is detected.
However, if your database is really large, it's recommended to backup it manually and not to use the script backup.

It's strongly advised to clear the cache in all environments :
- ```php Thelia cache:clear```
- ```php Thelia cache:clear --env=prod```

##### Alternative way to update your database: use the web wizard (since Thelia 2.1)

An update wizard is available in the ```web/install``` directory. It's the same directory used by the install wizard.

> **During the update process, you should protect the web folder from public access (htaccess,  list of allowed IP, ...).**

The update wizard is available through your favourite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

Note:

- the wizard is available only if your Thelia is not already updated to the latest version.
- if your database is large (many products, many orders, ...), it's recommended to backup your database manually instead of using the database backup wizard.


##### For updating a Thelia 2.0.x ONLY, use Thelia cli tools

- run ```php Thelia thelia:update```
- again clear all caches in all environment :
    - ```php Thelia cache:clear```
    - ```php Thelia cache:clear --env=prod```

This command **may fail** on some updates and you will have to use an alternative update method.
