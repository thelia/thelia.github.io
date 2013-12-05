---
layout: home
title: Contribute
sidebar: contribute
lang: en
---
<div class="page-header">
    <h1>How to contribute ?</h1>
</div>

Thelia project is host on [GitHub](https://github.com/thelia/thelia). For contributing you just have to fork the project
and submit [Pull Request](https://help.github.com/articles/using-pull-requests) or [Issues](https://github.com/thelia/thelia)

## Coding Standard

Thelia follow [PSR-I](http://www.php-fig.org/psr/psr-1/) and [PSR-2](http://www.php-fig.org/psr/psr-2/) therefore you
must follow this rules. Don't worry, you can use some tools for doing this like the
[PHP Coding Standards Fixer](http://cs.sensiolabs.org/)

## Pull Request

[Creating a Pull request](https://help.github.com/articles/creating-a-pull-request) is the better way for submitting a
patch but there are some rules to follow. First of all, fork [Thelia](https://github.com/thelia/thelia) repo and create
a new branch, never work on the master branch, use it only for syncing with [Thelia](https://github.com/thelia/thelia) repo.

```
$ git checkout -b master new-branch
```

After finishing your modification you have to rebase your branch and push it to your repo

```
$ git remote add upstream https://github.com/thelia/thelia
$ git checkout master
$ git pull --ff-only upstream master
$ git checkout new-branch
$ git rebase master
$ git push origin new-branch
```

Next and last step, submit a Pull Request as indicated in the [GitHub documentation](https://help.github.com/articles/creating-a-pull-request).

If you wan't to do more, read this usefull blog post : [http://williamdurand.fr/2013/11/20/on-creating-pull-requests/](http://williamdurand.fr/2013/11/20/on-creating-pull-requests/)