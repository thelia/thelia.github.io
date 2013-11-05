---
layout: home
title: Modules
sidebar: plugin
subnav: plugin_index
---

#What about module ?

Like in Thelia 1 you can develop modules for extending Thelia functionalities however the architecture is totally new :

* your module must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant
(enjoy, you can now use Namespace)
* you can declare as many loops as you wish in one module
* you can replace Thelia's loop with your own implementation
* hooks are replaced by EventListeners
* configure your module with a XML file

![caution](/img/caution.png) **All folders and files are case sensitive**

The structure of your module is like this :

```
\local
  \modules
    \MyModule
      \Config
        config.xml   <- mandatory
        module.xml   <- mandatory
        schema.xml
      MyModule.php <- mandatory
      \Loop
        Product.php
        MyLoop.php
      ...
```

Your root folder is the name of your module (in this example the name is "MyModule"). You have to create the main
class MyModule in the MyModule.php file. Remember, your module must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant, so your main class is MyModule\MyModule.php (yes
 namespace use is mandatory and it's good for you). The other mandatory file is module.xml. This file contains
 information about module like compatibility and dependencies with other modules.

The config file (Config/config.xml) is mandatory. With this file you can declare all your
services like event listeners, loops, forms or commands.

Here is the body of your config.xml file :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">


</config>
```
<br />
#Module and Command line

Command line is very usefull for generating many thinks around modules.

##How to generate a new module

```
$ php Thelia module:generate ModuleName
```
<br />
This command line generate a module with all needed classes, files and folders

##How to generate the model

```
$ php Thelia module:generate:model ModuleName
```
<br />
This command search the schema.xml file and parse it using Propel command line. This file is explain in this chapter.

##How to generate the sql

```
$ php Thelia module:generate:sql ModuleName
```
<br />
Just like the precedent command, schema.xml is parsed and sql file is created in Config folder.



