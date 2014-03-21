---
layout: home
title: delivery module
sidebar: plugin
lang: en
subnav: plugin_delivery
---

<div class="page-header">
    <h1>Modules : <small>Delivery module</small></h1>
</div>

A delivery module is like a class module. The main class must extends the ```Thelia\Module\DeliveryModuleInterface``` interface and implement the ```getPostage``` method.

# getPostage method

This method have an argument : The country for calculating the delivery price

The Container is available when this method is called and you can use it by calling ```$this->container```

Best practice : create an admin panel for managing all delivery rules.

```
/**
 *
 * calculate and return delivery price
 *
 * @param Country $country
 * @return float
 */
public function getPostage(Country $country)
{
    //retrieve the cart
    $cartWeight = $this->getContainer()->get('request')->getSession()->getCart()->getWeight();

    $postage = Your rules

    return $postage;
}
```