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

# Implementing a delivery module

A delivery module is basically a classic module. The main class should at least extends the ```Thelia\Module\DeliveryModuleInterface``` interface and implement the ```getPostage``` and ```isValidDelivery``` methods.

For an easier integration, a delivery module may extends the ```Thelia\Module\AbstractDeliveryModule``` class, which will offers some convenient methods in the future.

## `isValidDelivery()` method

This method should return a `boolean`. If `true`, the delivery module is displayed on the front office by the delivery loop. If `false`, the module is not displayed.

This is useful if the delivery solution have some limitations and can't be used. For example, Colissimo can't be used if the total weight of the customer cart is greater than 30 Kg.

You may also use this method to restrict access to your module to some IP addresses the during test phase.

```
/**
 * This method is called by the Delivery loop, to check if the current module has to be displayed to the customer.
 * Override it to implements your delivery rules/
 *
 * If you return true, the delivery method will de displayed to the customer
 * If you return false, the delivery method will not be displayed
 *
 * @param Country $country the country to deliver to.
 *
 * @return boolean
 */
public abstract function isValidDelivery(Country $country) {

    // Retrieve the cart weight
    $cartWeight = $this->getRequest()->getSession()->getCart()->getWeight();

    return $cartWeight <= 30;
}
```

## `getPostage` method

This method have an argument : The country for which the delivery price should be calculated.

If the module can't calculate the price for some reasons, it should throw a DeliveryException, with a internationalized message which describes the problem.

```
/**
 * Calculate and return delivery price in the shop's default currency
 *
 * @param Country $country the country to deliver to.
 *
 * @return float the delivery price
 * @throws DeliveryException if the postage price cannot be calculated.
 */
public function getPostage(Country $country)
{
    if (! $this->isValidDelivery($country)) {
        throw new DeliveryException(
            Translator::getInstance()->trans("This module cannot be used on the current cart.")
        );
    }

    $postage = $this->giveMeThePriceOfTheDeliveryInThisCountry($country);

    return $postage;
}
```