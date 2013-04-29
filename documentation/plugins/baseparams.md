---
layout: home
title: BaseParams - Plugins
sidebar: plugin
subnav: plugin_baseparam
---

#BaseParams

##How to declare BaseParam ?

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
