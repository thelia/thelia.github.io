---
layout: home
title: BaseParams - Modules
sidebar: plugin
lang: en
subnav: plugin_baseparam
---

<div class="page-header">
    <h1>Modules : <small>BaseParams</small></h1>
</div>

##How to declare BaseParam ?

*baseParam explanation here*

```xml
<baseParams>
    <baseParam name="secure" class="MyModule\BaseParam\Secure">
</baseParams>
```

You have to create as many baseParam nodes as baseParam you have into the baseParams node. In this example there is 1
baseParam. Name and class properties are mandatory. The name is the baseParam name used into the template
(in Thelia v1 ```#PARAM_BASE_secure```), class property is the class executed by the template
engine. This class must extends the Thelia\Tpex\BaseParam\BaseParam abstract class,
if not an exception is thrown.
