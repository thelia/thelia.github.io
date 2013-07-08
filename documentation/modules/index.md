---
layout: home
title: Modules
sidebar: plugin
subnav: plugin_index
---

#What about module ?

Like Thelia 1 you can develop modules for extending Thelia functionalities but the artchitecture is totaly new :

* your module must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant
(enjoy, you can now use Namespace)
* you can declare how many loop as you want in one module
* you can replace Thelia's loop with your own implementation
* hooks are replace by eventListeners
* configure your module with a xml file

![caution](/img/caution.png) **All folders and files are case sensitive**

The structure of your module is like this :

```
\local
  \modules
    \MyModule
      \Config
        config.xml
      MyModule.php <- mandatory
      module.xml   <- mandatory
      \Loop
        Product.php
        MyLoop.php
      ...
```

Your root folder is the name of your module (in this exemple the name is "MyModule"). You have to create the main
class MyModule in the MyModule.php file. Remember, your module must be [PSR-0](https://github
.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant, so your main class is MyModule\MyModule.php (yes
 namespace use is mandatory and it's good for you). The other mandatory file is module.xml this file contains
 information about module like compatibility, dependencies with other modules.

The config file (Config/config.xml) is not mandatory but highly recommanded. With this file you can declare all your
services like event listeners, all your elements for Tpex execution (loops, filters, baseParams,
TestLoops) and commands

This is the body of your config.xml file :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">


</config>
```


In this file you can declare :

* [Loops](/documentation/modules/loops.html)
* [BaseParams](/documentation/modules/baseparams.html)
* [actions](/documentation/modules/actions.html)
* [commands](/documentation/modules/commands.html)
