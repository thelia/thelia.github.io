---
layout: home
title: Plugins
sidebar: plugin
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

Your root folder is the name of your plugin (in this exemple the name is "MyPlugin"). You have to create the main
class MyPlugin in the MyPlugin.php file. Remember, your plugin must be [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) compliant, so your main class is MyPlugin\MyPlugin.php (yes
 namespace use is mandatory and it's good for you). The other mandatory file is plugin.xml this file contain
 information about plugin like compatibility, dependencies with other plugins.

 The config file (Config/config.xml) is not mandatory but highly recommended. With this file you can declare all your
  services like event listeners, all your element for Tpex execution (loops, filters, baseParams, TestLoops).

<span id="config">This is the body of your config.xml file :</span>

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">


</config>
```

###How to declare loops ?

*loop explanation here*

```xml
<loops>
    <loop name="MyPlugin_Product" class="MyPlugin\Loop\Product" />
    <loop name="MyPlugin_MyLoop" class="MyPlugin\Loop\MyLoop" />
</loops>
```

You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and
class properties are mandatory. The name is the loop name used into the template ( ```<THELIA_name
type="MyPlugin_Product">...</THELIA_name>```), class property is the class executed by the template engine. This
class must extends the Thelia\Tpex\Element\Loop\BaseLoop abstract class, if not an exception is thrown.
If you name your loop like a default loop (eg : Product), your loop will replace the default loop.

###How to declare TestLoop ?

*testloop explanation here*

```xml
<testLoops>
    <testLoop name="myTestLoop" class="MyPlugin\TestLoop\MyTestLoop" />
</testLoops>
```

You have to create as many testLoop node as testLoop you have into the testLoops node. In this example there is 1
testLoop. Name and class properties are mandatory. The name is the testLoop name used into the template
(```<TEST_name test="myTestLoop" ...> ... </TEST_name>```), class property is the class executed by the template
engine. This class must extends the Thelia\Tpex\Element\TestLoop\BaseTestLoop abstract class,
if not an exception is thrown.

###How to declare BaseParam ?

*baseParam explanation here*

```xml
<baseParams>
    <baseParam name="secure" class="MyPlugin\BaseParam\Secure">
</baseParams>
```

You have to create as many baseParam node as baseParam you have into the baseParams node. In this example there is 1
baseParam. Name and class properties are mandatory. The name is the baseParam name used into the template
(```#PARAM_BASE_secure```), class property is the class executed by the template
engine. This class must extends the Thelia\Tpex\BaseParam\BaseParam abstract class,
if not an exception is thrown.
