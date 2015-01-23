---
layout: home
title: Configuration
sidebar: configuration
subnav: config_variable
lang: en
---

<div class="page-header">
    <h1>Configuration</h1>
</div>

## Environment variables

It is possible to use environment variables instead of hard coding database credentials.

The HttpKernel component already has this feature so we reuse it in Thelia so you stil have to use the prefix SYMFONY__ , 
the documentation is here : [http://symfony.com/fr/doc/2.3/cookbook/configuration/external_parameters.html](http://symfony.com/fr/doc/2.3/cookbook/configuration/external_parameters.html)

database.yml file exemple : 

    database:
      connection:
        driver: %database.driver%
        user: %database.user%
        password: %database.pwd%
        dsn: mysql:host=%database.host%;dbname=%database.db_name%;port=3306
        

and the variable in the Vhost :
 
    SetEnv  SYMFONY__DATABASE__USER foo
    SetEnv  SYMFONY__DATABASE__PWD bar
    SetEnv  SYMFONY__DATABASE__DRIVER mysql
    SetEnv  SYMFONY__DATABASE__HOST localhost
    SetEnv  SYMFONY__DATABASE__DB_NAME thelia
    
With this system, you can now add your database.yml file in your versionning system and deploy easily your Thelia without modifying it.
Of course you have to configure the Vhost on your production environment.

Obviously you can already use environment variables in all your container configuration.