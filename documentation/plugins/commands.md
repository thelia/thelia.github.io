---
layout: home
title: Commands - Modules
sidebar: plugin
subnav: plugin_command
---

#Commands

Commands use the helpfull console symfony component. In your module you can define you own command that can be used
with command cli.

##How to declare commands ?

in your config file :

```xml
    <commands>
        <command class="MyModule\Commands\HelloWorld.php">
    </commands>
```

Your class have to extends *Thelia\Command\ContainerAwareCommand* and implements at least the *configure* and
*execute* method.

Thelia use all the fonctionnalities available in the command symfony component so you can refer to it's documentation
 <a href="http://symfony.com/doc/2.2/components/console/index.html" target="_blank">here</a>