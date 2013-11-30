---
layout: home
title: Commands - Modules
sidebar: plugin
lang: en
subnav: plugin_command
---

<div class="page-header">
    <h1>Modules : <small>Commands</small></h1>
</div>

Commands use the helpfull console Symfony component. In your module you can define you own command that can be used
with command CLI.

##How to declare commands ?

In your config file :

```xml
    <commands>
        <command class="MyModule\Commands\HelloWorld.php">
    </commands>
```

Your class has to extend *Thelia\Command\ContainerAwareCommand* and to implement at least the *configure* and
*execute* methods.

For example :

```php
<?php

namespace MyModule\Commands;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Thelia\Command\ContainerAwareCommand;

class HelloWorld extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName("hello:world")
            ->setDescription("output hello world");
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln("Hello world !");
    }
}

```

Now you can test the results using Thelia CLI tools. Go to your Thelia root directory and use this command :

```
$ php Thelia hello:world
```
<br />
Thelia uses all the fonctionnalities available in the command Symfony component so you can easily refer to it's documentation
 <a href="http://symfony.com/doc/2.2/components/console/index.html" target="_blank">here</a>