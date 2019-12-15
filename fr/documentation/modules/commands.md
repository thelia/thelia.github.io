---
layout: home
title: Commands - Modules
sidebar: plugin
lang: fr
subnav: plugin_command
---

<div class="page-header">
    <h1>Les commandes</h1>
</div>

Les commandes utilisent le composant console de Symfony. DAns votre module vous pouvez définir vos propres commandes qui seront utilisé via le CLI.

## Comment déclarer des commandes ?

Dans votre fichier de configuration :

```xml
    <commands>
        <command class="MyModule\Commands\HelloWorld.php"/>
    </commands>
```

Votre classe doit étendre *Thelia\Command\ContainerAwareCommand* et implémenter les méthodes *configure* et *execute* methods.

Par exemple :

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

Vous pouvez maintenant tester le résultat en utilisant la CLI. Rendez-vous à la racine de votre installation Thelia et utilisez cette commande :

```
$ php Thelia hello:world
```
<br />
Thelia utilise toutes les fonctionnalités disponibles dans le composant console de Symfony dont vous pouvez la documentation
 <a href="http://symfony.com/doc/2.2/components/console/index.html" target="_blank">ici</a>
