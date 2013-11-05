---
layout: home
title: Configuration
sidebar: configuration
---

#How to configure ?

Currently you can only configure your database connection with config files. All other configuration have to be developed and certainly use database storage.

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


