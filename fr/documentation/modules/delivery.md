---
layout: home
title: delivery module
sidebar: plugin
lang: fr
subnav: plugin_delivery
---

<div class="page-header">
    <!-- <h1>Modules : <small>Module de livraison</small></h1> -->
    <h1>Module de livraison</h1>
</div>

# Implémenter un module de livraison

Un module de livraison se présente tout comme un module classique. La classe principale doit étendre au minimum l'interface ```Thelia\Module\DeliveryModuleInterface``` et implémenter les méthodes ```getPostage``` et ```isValidDelivery```.

Pour faciliter l'intégration, un module de livraison pourra étendre la classe ```Thelia\Module\AbstractDeliveryModule```, qui offrira des méthodes pratiques dans des versions futures de thelia.

## La méthode `isValidDelivery()`

Cette méthode doit renvoyer un booléen.
Si la valeur de retour est `true`, le module sera affiché sur le front office par la boucle Livraison.
Si la valeur de retour est `false` le module ne sera pas affiché.

Ce comportement est très utile si le mode de livraison a certaines contraintes et ne peut être utilisée. Par exemple Colissimo ne peut être utilisé si le poids total des articles du panier est supérieur à 30 Kg.

Cette méthode pourrait aussi être utilisée pendant les phases de test pour limiter l'accès au module à certaines adresses IP.

```php
<?php
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

## La méthode `getPostage`

Cette méthode prend un argument : le pays pour lequel le prix de livraison doit être calculé.

Si le module ne peut calculer le prix pour quelque raison que ce soit, il devrait renvoyé l'exception `DeliveryException`, avec un message internationalisé décrivant le problème.

 ```php
 <?php
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