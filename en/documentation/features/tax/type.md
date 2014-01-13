---
layout: home
title: Feature - Tax Engine
sidebar: features
lang: en
subnav: features_tax_type
---

#Tax type

There are several tax types in Thelia 2 :

* Fix amount tax type
* Percent price tax
* Fix amount depending on a feature ; you can set tax amount on each product in a given feature.

#Create your own tax type

You can create tax types in your plugins, or why not directly in [*Thelia 2*](https://github.com/thelia/thelia) and ask for a pull request.

You must create a class which extends \Thelia\TaxEngine\TaxType\BaseTaxType.

Here is the FixAmountTaxType class as an example :

```php
class PricePercentTaxType extends BaseTaxType
{
    public function pricePercentRetriever()
    {
        return ($this->getRequirement("percent") * 0.01);
    }

    public function fixAmountRetriever(\Thelia\Model\Product $product)
    {
        return 0;
    }

    public function getRequirementsList()
    {
        return array(
            'percent' => new \Thelia\Type\FloatType(),
        );
    }

    public function getTitle()
    {
        return "Price % Tax";
    }
}
```