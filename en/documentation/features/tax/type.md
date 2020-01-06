---
layout: home
title: Feature - Tax Engine
sidebar: features
lang: en
subnav: features_tax_type
---

# Tax type

There are three default tax types in Thelia 2 :

* Fixed amount tax type
* Percent of the product price tax
* Fixed amount depending on a product's feature value ; you can set tax amount on each product in the given feature.

# Create your own tax type

You can create tax types in your plugins, or why not directly in [*Thelia 2*](https://github.com/thelia/thelia) and ask for a pull request.

For this, you must create a class which extends `\Thelia\TaxEngine\BaseTaxType`.

Here is the FixAmountTaxType class as an example :

```php
class PricePercentTaxType extends BaseTaxType
{
    public function pricePercentRetriever()
    {
        return ($this->getRequirement("percent") * 0.01);
    }

    public function getRequirementsList()
    {
        return array(
            new TaxTypeRequirementDefinition('percent', new FloatType())
        );
    }

    public function getTitle()
    {
        return Translator::getInstance()->trabs("Price % Tax");
    }
}
```

`getRequirementsList()` should return an array of TaxTypeRequirementDefinition objects. The TaxTypeRequirementDefinition class store the name of a requirement (a parameter) of your tax type, that will be entered in the back-office by the administrator.

`getTitle()` returns a short description of your tax type, used in the back-office in the tax management section.

You shuold override either `pricePercentRetriever()` or `fixAmountRetriever()`, depending on your tax type. If it provides a percentage that should be applied to product price, implement `pricePercentRetriever()`.
If it provides a constant amount, implements `fixAmountRetriever()`. See BaseTaxType for more information.

If you're implementing this new class outside the Thelia core, e.g. outside the base Tax types directory `Thelia/TaxEngine/TaxType` - in a plugin for example - you should inform the Tax Engine.

Let's say you have created the MyTaxPlugin, and stored several tax type classes in the `MyTaxPlugin/TaxType` directory. The namespace of these classes will be `MyTaxPlugin\TaxType`.

First, in your plugin constructor (or any convenient place) get the TaxEngine from the container :

```php
$taxEngine = $container->get('thelia.taxEngine');
```

If you have implemented only a few tax type, just call the `addTaxType` method for each tax type, providing the fully qualified class name of your tax type. For example, if your tax type class is `MyTaxType` :

```php
$taxEngine->addTaxType('MyTaxPlugin\TaxType\MyTaxType');
```

If you have several tax types, store all implementations in the same directory, and call the `addTaxTypeDirectory` method, providing the namespace of your classes, and the path to the directory :

```php
$taxEngine->addTaxTypeDirectory('MyTaxPlugin\TaxType', __DIR__ .DS . 'TaxType');
```