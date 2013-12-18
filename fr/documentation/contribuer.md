---
layout: home
title: Contribuer
sidebar: contribuer
lang: fr
---
<div class="page-header">
    <h1>Comment contribuer ?</h1>
</div>

Le projet Thelia est hébergé sur [GitHub](https://github.com/thelia/thelia). Pour contribuer vous n'avez qu'à créer un fork du projet et soumettre des [Pull Request](https://help.github.com/articles/using-pull-requests) ou des [Issues](https://github.com/thelia/thelia)

## Normes de codage

Thelia suit les normes [PSR-I](http://www.php-fig.org/psr/psr-1/) et [PSR-2](http://www.php-fig.org/psr/psr-2/) par conséquent vous devez suivre ces règles. Ne vous inquiétez pas, vous pouvez utiliser des outils pour le faire comme [PHP Coding Standards Fixer](http://cs.sensiolabs.org/)

## Pull Request

[Créer une Pull request](https://help.github.com/articles/creating-a-pull-request) est la meilleure façon de soumettre un patch, mais il y a quelques règles à suivre. La première est de créer un fork du dépôt de [Thelia](https://github.com/thelia/thelia) et de créer une nouvelle branche, ne travaillez jamais sur la branche master, utilisez la uniquement pour vous synchroniser avec le dépôt de [Thelia](https://github.com/thelia/thelia).

```
$ git checkout -b nouvelle-branch master
```

Après avoir terminé votre modification, vous devez changer la base de votre branche et la pousser sur votre dépôt.

```
$ git remote add upstream https://github.com/thelia/thelia.git
$ git checkout master
$ git pull --ff-only upstream master
$ git checkout nouvelle-branch
$ git rebase master
$ git push origin nouvelle-branch
```

Prochaine et dernière étape, soumettez une Pull Request comme indiqué dans la [documentation GitHub](https://help.github.com/articles/creating-a-pull-request).

Si vous souhaitez aller plus loin, lisez cet article très utile : [http://williamdurand.fr/2013/11/20/on-creating-pull-requests/](http://williamdurand.fr/2013/11/20/on-creating-pull-requests/)