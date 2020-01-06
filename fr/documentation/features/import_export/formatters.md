---
layout: home
title: Feature - Formateurs
sidebar: features
lang: fr
subnav: formatters
---
---

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est plus disponible depuis la version 2.3</p>
</div>

# Les formateurs

## Qu'est-ce qu'un formateur ?

Un formateur est un outil qui convertit les données exportées vers un format de fichier (csv, xml, ...) et/ou les données importées vers une structure de données exploitables.

Thelia dispose de 3 formateurs :

- XML
- json
- csv

## Obtenir un formateur
Afin d'obtenir un formateur, utilisez le trait ```Thelia\Core\FileFormat\Formatting\FormatterManagerTrait``` :

```php
class Foo
{
    use FormatterManagerTrait;
    public function myMethod() {
        $archiveBuilderManager = $this->getFormatterManager($myContainer);
    }
}
```

ou injecter le dans un service  (par exemple dans un écouteur d'événements) :

```xml
<service id="my.super.service" class="My\Super\Class">
    <argument type="service" id="thelia.manager.formatter_manager" />
</service>
```

## Utiliser un formateur

Un formateur doit implémenter les 6 méthodes suivantes :

```php
/**
 * This method goes from a FormatterData object and must return the encoded value.
 * It may return null if the formatter is decode only
 */
public function encode(FormatterData $data);

/**
 * This method goes from a rawData ( string, object, ... ) and must return a FormatterData
 * It may return null if the formatter is encode only
 */
public function decode($rawData);

/**
 * This method returns a string containing the handled Type that is used to match with a export or an
 * import
 */
public function getHandledType();

/**
 * As a formatter should belong to a file format, here are the basic information about a format
 * that the formatter must return.
 */

// The format name
public function getName();

// The format extension
public function getExtension();

// The format mime type
public function getMimeType();
```

## Créer un formateur

Si vous voulez créer un formateur, créez une classe qui étend la classe ```Thelia\Core\FileFormat\Archive\AbstractArchiveBuilder``` et implémente les méthodes définies ci-dessus.


## Déclarer un formateur

Dans Thelia un formateur est un service. Si déclarez votre service auprès du gestionnaire, créez le service en le tagguant comme suit :

```xml
<service id="my.super.formatter" class="My\Super\Formatter">
    <tag name="thelia.formatter" />
</service>
```
