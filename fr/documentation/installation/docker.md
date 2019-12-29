---
layout: home
title: Dockerizer votre Thelia
sidebar: installation
subnav: installation_docker
lang: fr
---

<div class="page-header">
    <h1>Dockerizer votre Thelia</h1>
</div>

Depuis la version 2.2 une configuration Docker est fournie dans le repo Thelia. Elle utilise docker-compose. Vous pouvez la copier et l'utiliser avec des versions précédentes de Thelia.
Vous pouvez également la copier dans thelia-project.

Il faut au préalable avoir installé [docker](https://docker.com/) et  [docker-compose](http://docs.docker.com/compose/)

## Démarrez les conteneurs

Exécutez la commande suivante :

```bash
docker-compose up -d
```

Astuce : créez un alias pour `docker-compose`, il est fastidieux de taper cette commande sans cesse.

## Comment utiliser Docker avec Thelia

Tous les scripts sont lancés par Docker. Par exemple :

```bash
docker exec -it thelia_web_1 php Thelia cache:clear
docker exec -it thelia_web_1 php setup/faker.php
docker exec -it thelia_web_1 unit-tests.sh
docker exec -it thelia_web_1 php composer.phar install
```

```thelia_web_1```  est le nom du conteneur principal. Exécutez ```docker-compose``` si le nom de votre conteneur est différent.

Comme vous pouvez le voir vous utilisez Thelia comme si PHP/Apache/MySQL était installé sur votre machine. Cette configuration contient également Xdebug qui permet l'exécution pas à pas de vos script.

## Paramètres de la base de données

* hôte : mariaDB
* identifiant : root
* mot de passe : toor


## Comment modifier la configuration

La configuration peut être entièrement personnalisée pour votre projet. Elle utilise l'image docker PHP officielle fournie par Docker, vous pouvez donc changer de version de PHP si vous le souhaitez.
Vous pouvez bien sûr installer toutes les extensions PHP souhaitées.

A chaque modification du fichier de configuration, vous devrez redémarrer le conteneur :
```docker-composer build --no-cache```