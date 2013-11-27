---
layout: home
title: Configuration
sidebar: configuration
lang: fr
---

<div class="page-header">
    <h1>Configuration</h1>
</div>

Actuellement vous pouvez uniquement configurer la connection à votre base de données avec le fichier de configuration. Toutes les autres configurations doivent être développées et seront certainement stockées en base de données.

## Configuration du serveur

Thelia a besoin au minimum de php 5.4, d'un serveur http (ex: apache2) et de mysql (sqlite et pgsql seront bientôt supportés).

Après l'installation vous aurez l'architecture suivante :

```
www <- repertoire racine de votre serveur
    thelia <- repertoire de votre Thelia
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

Il n'y a que le repertoire ```web``` qui doit être accessible par apache, vous pouvez configurer vos vhost comme ceci (ici /var/www est le repertoire racine de votre serveur):

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

Vérifiez les droits des repertoires suivants afin qu'Apache puisse y accéder en écriture :

* cache
* log
* local/session

## Configuration de la base de données

Pour configurer la connexion à votre base de données, vous devez renommer le fichier ```local/config/database.yml.sample``` en ```local/config/database.yml``` et l'éditer.

Voici un exemple de configuration de connection à une base de données :

``` yaml
database:
  connection:
    driver: mysql
    user: root
    password: root
    dsn: mysql:dbname=thelia;host:localhost
    classname: \Propel\Runtime\Connection\DebugPDO #Seulement en mode debug et si vous voulez les informations sur toutes les requêtes
```