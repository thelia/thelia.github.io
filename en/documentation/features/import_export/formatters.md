---
layout: home
title: Feature - Formatters
sidebar: features
lang: en
subnav: formatters
---
---

# The formatters

## What is a formatter ?

A formatter is a tools that converts export data into a file format ( csv, xml, ... ) and/or import file format into treatable data.

Thelia comes with 3 formatters:

- XML
- json
- csv

## Get a formatter
In order to get a formatter, you can use the trait to get the manager ```Thelia\Core\FileFormat\Formatting\FormatterManagerTrait``` :

```php
class Foo 
{
    use FormatterManagerTrait;
    public function myMethod() {
        $archiveBuilderManager = $this->getFormatterManager($myContainer);
    }
}
```

or inject it in a service (e.g: an event listener):

```xml
<service id="my.super.service" class="My\Super\Class">
    <argument type="service" id="thelia.manager.formatter_manager" />
</service>
```

## Use a formatter
A formatter must implement 6 methods:

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

## Create a formatter
If you want to create a formatter, you must create a class that extends ```Thelia\Core\FileFormat\Formatting\AbstractFormatter``` and implements the 6 previous methods. 

## Register a formatter
In Thelia, a formatter is a service. If you to register your formatter into the manager, create a tagged service like this:

```xml
<service id="my.super.formatter" class="My\Super\Formatter">
    <tag name="thelia.manager.formatter" />
</service>
```
