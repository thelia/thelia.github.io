---
layout: home
title: Loops - Plugins
sidebar: plugin
subnav: plugin_loop
---

#Loops

##How to declare loops ?

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

##How to implement a loop ?

Your loop can be anywhere (Thanks to namespace) in your plugin but it's beter to create a Loop directory and put all your loops in this directory.