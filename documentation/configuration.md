---
layout: home
title: Configuration
sidebar: configuration
---

#How to configure ?

Actually you can only configure your database connection with config files. All other configuration have to be develop and certainly use database storage.

##Server Configuration

Thelia needs at least php 5.4, an any http server (eg : apache2) and mysql (sqlite and pgsql will be support soon)

after installation you have an architecture like this :

```
www <- your web root directory
    thelia <- your thelia directory
        bin
        cache
        core
        documentation
        install
        local
            config
            modules
            session
        log
        templates
        web
```


only the ```web``` directory have to be accessible with apache, you can configure your vhost like this (here /var/www is your web root directory) :

```
<virtualhost *:80>

	ServerName http://domain.tld
	DocumentRoot "/var/www/thelia/web"

	<Directory "/var/www/thelia/web">
	    AllowOverride All
        Order allow,deny
        Allow from all
	</Directory>

	# Custom log file
    Loglevel warn
    ErrorLog /var/log/apache2/yoursite.error.log
    CustomLog /var/log/apache2/yoursite.log combined

</virtualHost>

```


Apache write in some directories so check this directories and change their rights :

* cache
* log
* local/session


##Database configuration

For configuring your database connection, you have to rename the ```local/config/database.yml.sample``` into ```local/config/database.yml``` and edit it.

Here is an exemple of database connection configuration :

``` yaml
database:
  connection:
    driver: mysql
    user: root
    password: root
    dsn: mysql:dbname=thelia;host:localhost
    classname: DebugPDO #Only in debug mode and if you want all query debug information
```


