---
layout: home
title: Plugins
---

#What about plugin ?

Like Thelia 1 you can develop plugins for extending Thelia functionalities but the artchitecture is totaly new :

* your plugin must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant (enjoy, you can now use Namespace)
* you can declare how many loop as you want
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

Your root folder is the name of your plugin (in this exemple the name is "MyPlugin"

