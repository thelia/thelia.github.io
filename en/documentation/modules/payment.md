---
layout: home
title: payment module
sidebar: plugin
lang: en
subnav: plugin_payment
---

<div class="page-header">
    <h1>Modules : <small>Payment module</small></h1>
</div>

A payment module is like a classic module. The main class must extends the ```Thelia\Module\PaymentModuleInterface``` interface and implement the ```pay``` and ```isValidPayment``` methods.

# isValidPayment method

This method must return a boolean. In some cases, the payment solution have some limitations and can't be used. For example, paypal can't be used if there are more than 10 products in customer's cart
and/or if total amount is superior to 8000€

The Container is available when this method is called and you can use it by calling ```$this->container```

```
/**
*
* This method is call on Payment loop.
*
* If you return true, the payment method will de display
* If you return false, the payment method will not be display
*
* @return boolean
*/
public function isValidPayment()
{
    /** @var Session $session */
    $session = $this->container->get('request')->getSession();
    /** @var Cart $cart */
    $cart = $session->getCart();
    /** @var \Thelia\Model\Order $order */
    $order = $session->getOrder();
    /** @var \Thelia\TaxEngine\TaxEngine $taxEngine */
    $taxEngine = $this->container->get("thelia.taxengine");
    /** @var \Thelia\Model\Country $country */
    $country = $taxEngine->getDeliveryCountry();

    $item_number = $cart->countCartItems();
    $price = $cart->getTaxedAmount($country) + $order->getPostage();

    return $item_number <= 10 &&
        $price < 8000;
}
```

# Pay method

The ```pay``` method is the main method in the module. From this method you can generate all you need for sending information to the payment interface.

A good practice is to return a ```Thelia\Core\HttpFoundation\Response``` instance containing the response to display to the customer. In many case a javascript submit the form
on onLoad document event.

This method take an argument : the processed order already saved in database.

The Container is available when this method is called and you can use it by calling ```$this->container```

```
/**
 *
 *  Method used by payment gateway.
 *
 *  If this method return a \Thelia\Core\HttpFoundation\Response instance, this response is send to the
 *  browser.
 *
 *  In many cases, it's necessary to send a form to the payment gateway. On your response you can return this form already
 *  completed, ready to be sent
 *
 * @param \Thelia\Model\Order $order processed order
 * @return null|\Thelia\Core\HttpFoundation\Response
 */
public function pay(Order $order)
{
    //Do what you have to do
    //generate the form you need
    //It is possible here to use the parser. ex : $parser = $this->container->get("thelia.parser");

    //at the end return a reponse : return Response::create("html content");
}
```