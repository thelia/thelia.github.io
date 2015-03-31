---
layout: home
title: Configuration
sidebar: configuration
subnav: database
lang: en
---

<div class="alert alert-warning">
    This feature is only available since Thelia 2.2
</div>

<div class="page-header">
    <h1>Configuration</h1>
</div>

## Database

It is possible to use different database, depending on the environment.

Install Thelia with the graphical wizard or with ```php Thelia thelia:install``` command.
Then you can define another connection for an environment by creating a ```database_*env*.yml``` file in the ```local/config``` directory.

For instance, if you have a ```database_prod.yml``` file, the database used with ```index.php``` will be this one, while the one used with ```index_dev.php``` and during unit tests will be the one of ```database.yml```
