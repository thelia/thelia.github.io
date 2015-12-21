---
layout: home
title: Development - Workflow
sidebar: development
lang: en
subnav: workflow
---

<div class="page-header">
    <h1>Development : <small>Workflow</small></h1>
</div>

This is a proposed workflow for your website development that use [Thelia project](https://github.com/thelia/thelia-project).

## Create project

```bash
composer create-project thelia/thelia-project project 2.2.1
```

## Add git support

```bash
cd project
git init
```

Adjust the `.gitignore` file.

```
...
### Please add your dependencies here
LICENSE.txt
Readme.md
```

## Customize Thelia

### Database (optional)

You can use Environment variables to specify the parameters for your database, and thus version this file :

Generic `database.yml` :

```yml
database:
  connection:
    driver: %database.driver%
    user: %database.user%
    password: %database.pwd%
    dsn: mysql:host=%database.host%;dbname=%database.db_name%;port=3306
```

and in the Vhost configuration :

```
SetEnv  SYMFONY__DATABASE__USER foo
SetEnv  SYMFONY__DATABASE__PWD bar
SetEnv  SYMFONY__DATABASE__DRIVER mysql
SetEnv  SYMFONY__DATABASE__HOST localhost
SetEnv  SYMFONY__DATABASE__DB_NAME thelia
```

### Custom template

Create new template, duplicate the `default` template and named it `project` and change the template used in Thelia :

```bash
php Thelia thelia:config set active-front-template project
```

Don't forget to change in the new template the translation domain :

```smarty
{*
    in files :
    /templates/frontOffice/project/layout.tpl
    /templates/frontOffice/project/ajax/order-delivery-module-list.html
*}
{default_translation_domain domain='fo.project'}
```

You can do the same with others templates : `backOffice`, `pdf` and `email`

**commit...**

### Custom module

#### Remove default Thelia module

First we have to deactivate the module.

```bash
# list modules
php Thelia module:list

# deactivate the module Carousel
php Thelia module:deactivate Carousel

# get the name of the composer package
composer show -i
# or composer show -i | grep -i Carousel

# remove the dependency
composer remove thelia/carousel-module

# Remove files
rm -Rf local/modules/Carousel
```

Composer will remove the dependency and update the `composer.json` and `composer.lock` file.

**commit...**

#### Add new module that is on packagist

get a list of module :

```bash
composer show -a | grep thelia | grep module
```

for instance, install Paypal module :

```bash
composer require thelia/paypal-module
```

As `composer` modules are versioned in the `composer.json` file we can add an entry in the `.gitignore` file.

```
## modules
/local/modules/Paypal
```

**commit...**

#### Add custom modules

Of course, you can add your own module.

```bash
php Thelia module:generate MyModule
```

These modules have to be added to versioning so don't add entries in your `.gitignore`.

**commit...**

## Collaboration

Get a (private) remote git repository (gitlab, github, bitbucket, ...)

```bash
git remote add origin git@bitbucket.org:xxx/thelia.git
git push -u origin master
```

You can use any branching model like git-flow for example. We're going to keep things simple here. The branches :

- **master** : the production ready branch
- **develop** : for next production
- **features** : a branch by new feature that will be merge in develop when finished

```bash
git checkout -b develop master
git push origin develop
```

### Develop a new feature

Create a new branch

```bash
git checkout -b frontoffice-logo develop
```

Make your changes and test.

```bash
git add ...
git commit -m 'Updated frontOffice logo'
```

Now you can merge in develop branch

```bash
git checkout develop
git merge --no-ff frontoffice-logo
git branch -d frontoffice-logo
git push origin develop
```

### Make a new release

Create a new branch for the release :

```bash
git checkout -b release-1.0 develop
./bump-version.sh 1.0
git commit -a -m "Bumped version number to 1.0"
```

Then, update the master branch

```bash
git checkout master
git merge --no-ff release-1.0
git tag -a 1.0
```

Update the develop branch (possible conflict) :

```bash
git checkout develop
git merge --no-ff release-1.0
```

Finally, delete the release branch

```bash
git branch -d release-1.0
```

### Automate deployment

You can use Git webhooks to automate deployment on a pre-prod or production server.

On your remote versioning server create a web hook triggered on push events.

Call an accessible URL that will get the latest version and do some extra stuff.

For instance, on the production server :

```php
<?php
// file deploy_prod.sh
$body = file_get_contents('php://input');

$request = json_decode($body, true);

if ($request['ref'] !== 'refs/heads/master') {
    die('deploy in production only works with master branch');
}

exec("./update.sh master > /dev/null 2>deploy_err.txt &", $output, $status);
```

Example of the update script :

```bash
#!/bin/bash

if [ $# -ne 1 ]
then
    echo "usage: $0 branch-name"
    exit
fi

# make a backup of the DB, ...

# get the last version
# the server should have access to the  repository
git pull origin $2

# Update dependencies
# due to github limitation and the fact that lot of modules
# are on github, you should sometimes provide an access token :
# https://help.github.com/articles/creating-an-access-token-for-command-line-use/
composer install

# Clear caches
php Thelia cache:clear --env=prod

# ...
```

## Pre-prod, Production Environment

*Work in progress*

## Thelia Updates

*Work in progress*
