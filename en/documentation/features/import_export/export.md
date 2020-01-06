---
layout: home
title: Feature - Export
sidebar: features
lang: en
subnav: do_export
---
---

<div class="alert alert-warning">
<p>This functionality is no longer available since version 2.3</p>
</div>

# Thelia exports

## How to create an export ?

To create an export you have to create a class that extends ```Thelia\ImportExport\Export\ExportHandler```. You have to implement the methods:

```php
 public function getHandledTypes();
 public function buildDataSet(Lang $lang);
```

```getHandledTypes``` must return an array or a string, this is used to match with [Formatters](formatters.html), an export may be handled by only one formatter, are by all.
To match them, we use strings defined in ```Thelia\Core\FileFormat\FormatType```

```buildDataSet``` may return 3 types of object:

- An array
- A Propel ModelCriteria ( Query objects )
- A BaseLoop

In the case of an array, the data is directly placed for formatting.
In the case of a ModelCriteria, the query is executed and the result is placed for formatting
In the case of a BaseLoop, the loop is executed and the results are explored, placed into an array, and placed for formatting.

Two other methods may be useful:

```php
protected function getAliases();
protected function getDefaultOrder();
```

```getAliases``` has to return an associative array, with the "real row name" as a key, and the aliased name as the value. "real row name" meens: array keys, MySQL Select name or LoopResultRow variable name.

```getDefaultOrder``` has to return a array. Place your aliased names in the order you want them to appear in the file ( for formatters which support this option ( CSV ) ).

Moreover, you have an helper for the loops:

```php
public function buildDataSet(Lang $lang) {
    return $this->renderLoop("myLoopName", ["my"=>1, "super"=>["arguments"]]);
}
```
And you're done with your export ;)

## Register an export <a name="register_export"></a>
To register an export in a module, you have to edit your Config/config.xml

Your have to add in "exports" a tag with that skeleton:

```xml
<exports>
    <export id="your.export.id" class="Your\ExportHandler" category_id="the.category_id">
        <export_descriptive locale="en_US">
            <title>Your export title </title>
             <!-- you may add an optionnal description -->
             <description> ... </description>
        </export_descriptive>
        <export_descriptive locale="fr_FR">
            <!-- Here's for another locale -->
        </export_descriptive>
    </export>
    <export>
        <!-- here's another export -->
    </export>
</exports>
```

Thelia export categories ids are:

- thelia.export.customer : Exports concerning Customers
- thelia.export.products : Exports concerning Products
- thelia.export.content : Exports concerning Contents
- thelia.export.orders : Exports concerning Orders
- thelia.export.modules : Module related exports

If you want to create a new category, you have to put in your ```Config/config.xml```:

```xml
<export_categories>
    <export_category id="your.category.id">
        <title locale="en_US">A title</title>
        <title locale="fr_FR">Un titre</title>
    </export_category>
    <export_category id="your.other.category.id">
        <!-- here's another export category -->
    </export_category>
</export_categories>
```
