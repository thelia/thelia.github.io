---
layout: home
title: Plugins
sidebar: plugin
subnav: plugin_index
---

#What about plugin ?

Like Thelia 1 you can develop plugins for extending Thelia functionalities but the artchitecture is totaly new :

* your plugin must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant (enjoy, you can now use Namespace)
* you can declare how many loop as you want in one plugin
* you can replace Thelia's loop with your own implementation
* hooks are replace by eventListeners
* configure your plugin with a xml file

![caution](/img/caution.png) **All folders and files are case sensitive**

The structure of your plugin is like this :

```
\local
  \plugins
    \MyPlugin
      \Config
        config.xml
      MyPlugin.php <- mandatory
      plugin.xml   <- mandatory
      \Loop
        Product.php
        MyLoop.php
      \Filter
        Upper.php
        MySuperFilter.php
      ...
```

Your root folder is the name of your plugin (in this exemple the name is "MyPlugin"). You have to create the main
class MyPlugin in the MyPlugin.php file. Remember, your plugin must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant, so your main class is MyPlugin\MyPlugin.php (yes
 namespace use is mandatory and it's good for you). The other mandatory file is plugin.xml this file contains
 information about plugin like compatibility, dependencies with other plugins.

The config file (Config/config.xml) is not mandatory but highly recommended. With this file you can declare all your
services like event listeners, all your element for Tpex execution (loops, filters, baseParams, TestLoops).

This is the body of your config.xml file :

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">


</config>
```


In this file you can declare :

* [Loops](/documentation/plugins/loops.html)
* [testLoops](documentation/plugins/testloops.html)
* [BaseParams](documentation/plugins/baseparams.html)
* [actions](/documentation/plugins/actions.html)
