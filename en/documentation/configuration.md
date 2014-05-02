---
layout: home
title: Configuration
sidebar: configuration
lang: en
---

<div class="page-header">
    <h1>Configuration</h1>
</div>

Currently you can only configure your database connection with config files. All other configuration have to be developed and certainly use database storage.

## Server Configuration

Thelia needs at least php 5.4, an any http server (eg : apache2) and mysql (sqlite and pgsql will be support soon)

after installation you have an architecture like this :

```
www <- your web root directory
    thelia <- your thelia directory
        bin
        cache
        core
        install
        local
            config
            modules
            session
        log
        templates
        web
```

### Apache configuration

only the ```web``` directory has to be accessible with apache, you can configure your vhost like this (here /var/www is your web root directory) :

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
* local/media
* web


### nginx configuration

only the ```web``` directory has to be accessible :

```
server {

    listen          80;

    server_name     domain.tld;

    root            /var/www/thelia/web;
    index           index.php index.html index.htm;

    error_log       /var/log/nginx/domain_error.log;
    access_log      /var/log/nginx/domain_access.log;

    location / {
        try_files $uri @rewriteapp;
    }

    location @rewriteapp {
        # rewrite all to index.php
        rewrite ^(.*)$ /index.php/$1 last;
    }

    location ~ ^/(index|index_dev)\.php(/|$) {
        fastcgi_pass unix:/var/run/php5-fpm.sock;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTPS off;
    }

    # Security. discard all files and folders starting with a "."
    location ~ /\. {
        deny  all;
        access_log off;
        log_not_found off;
    }
    
    # Stuffs
    location = /favicon.ico {
        allow all;
        access_log off;
        log_not_found off;
    }
    location ~ /robots.txt {
        allow  all;
        access_log off;
        log_not_found off;
    }
    
    # Static files
    location ~* ^.+\.(jpg|jpeg|gif|css|png|js|pdf|zip)$ {
        expires     30d;
        access_log  off;
        log_not_found off;
    }
}
```