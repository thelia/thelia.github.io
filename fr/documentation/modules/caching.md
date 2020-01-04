---
layout: home
title: Caching - Modules
sidebar: plugin
lang: fr
subnav: plugin_caching
---

<div class="page-header">
    <h1>Cache</h1>
</div>

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est disponible que depuis la version 2.4</p>
</div>

Thelia utilise le composant cache de Symfony.

Ce composant fournit une implémentation stricte de [`PSR-6`](http://www.php-fig.org/psr/psr-6/) pour ajouter un cache à vos modules.

Il est conçu pour fournir un faible overhead afin que la mise en cache soit la plus rapide possible. Il est fournit avec quelques adaptateurs pour les mécanismes de cache les plus répandus.
Il fournit égalelment un proxy doctrine/cache pour prendre en compte des besoins de cache plus avancés et une proxy adaptateur pour offir la plus grand interropérabilité possible entre les implémentations de PSR-6.

This component provides a strict [`PSR-6`](http://www.php-fig.org/psr/psr-6/) implementation for adding cache to your applications. It is designed to have a low overhead so that caching is fastest. It ships with a few caching adapters for the most widespread and suited to caching backends. It also provides a doctrine/cache proxy adapter to cover more advanced caching needs and a proxy adapter for greater interoperability between PSR-6 implementations.

## Implémentation par défaut dans thelia

Thelia fournit par défaut le service `thelia.cache`. Ce service est une implémentation de `FilesystemAdapter`.

### Exemple

```php
class MyController extends BaseFrontController
{
    public function myMethod()
    {
        $myItemKey = 'my_cache_key';

        /** @var \Symfony\Component\Cache\Adapter\AdapterInterface $cacheAdapter */
        $cacheAdapter = $this->container->get('thelia.cache');

        /** @var \Symfony\Component\Cache\Adapter\AdapterInterface $cacheItem */
        $cacheItem = $cacheAdapter->getItem($myItemKey);

        if (!$cacheItem->isHit()) {
            $cacheItem
                ->set('My big value')
                ->expiresAfter(6000)
                ->save();
        }

        $myValue = $cacheItem->get();
    }
}
```