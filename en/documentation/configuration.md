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
        setup
        local
            config
            modules
            session
        log
        templates
        web <- the only directory accessible by your web server
```


### Apache configuration

only the ```web``` directory has to be accessible with apache, you can configure your vhost like this (here /var/www is your web root directory) :

```
<virtualhost *:80>

	ServerName http://domain.tld
	DocumentRoot "/var/www/thelia/web"

	<Directory "/var/www/thelia/web">
	    AllowOverride All
        
        # on apache 2.2 use :
        #Order allow,deny
        #Allow from all
        
        # on apache 2.4 use :
        Require all granted
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
    listen 80;
    server_name domain.tld;

    root /Path/To/Thelia/web/;
    index index.php;

    access_log      /var/log/nginx/domain.tld_access.log;
    error_log       /var/log/nginx/domain.tld_error.log;


    location / {
        try_files $uri $uri/ @rewriteapp;
    }

    location @rewriteapp {
    # rewrite all to index.php
        rewrite ^(.*)$ /index.php?$1 last;
    }

    # Php configuration
    location ~ ^/(index|index_dev)\.php(/|$) {
        # Php-FPM Config (Socks or Network) 
        fastcgi_pass unix:/var/run/php5-fpm.sock;
        # fastcgi_pass 127.0.0.1:9000;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }


    # This rule is just needed if you want to use the web installer
    # in production you have to remove this
    # and also remove the "install" directory in the "web" directory
    location /install/ {
        alias /Path/To/Thelia/web/install/;
        location ~ ^/install/.+\.(jpg|jpeg|gif|css|png|js|pdf|zip)$ {
            expires     30d;
            access_log  off;
            log_not_found off;
         }
        location ~ ^/install/(.+\.php)$ {
            alias /Path/To/Thelia/web/install/$1;
            # Php-FPM Config (Socks or Network) 
            fastcgi_pass unix:/var/run/php5-fpm.sock;
            # fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include /etc/nginx/fastcgi_params;
        }
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
