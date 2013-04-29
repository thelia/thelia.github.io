---
layout: home
title: TestLoops - Plugins
sidebar: plugin
subnav: plugin_testloop
---

#TestLoop

##How to declare TestLoop ?

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