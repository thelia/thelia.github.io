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

## Typical payment process
 
Once the customer has put some products in his cart, logged-in (or created his account) and selected a delivery method, the payment  becomes possible. Here is a typical payment process :
 
1. The customer selects the Payment module
2. The customer trigger the payment (by clicking a "Pay" button on the front office
3. The pay() method of the selected payment module is called by the Thelia core
4. The pay() method manages the payment process, which could consists in :
    - Invoking a web service or a platform specific API.
    - Submitting a form that contains payment parameters to a payment gateway.
    - Nothing (like in Cheque or Bank Transfer).
    - Other specific stuff.
5. If the payment is successful, the customer is redirected to a "thank you" page.
6. If the payment fails, the customer is redirected to a "oops, sorry" page.

## Standard templates

In the standard front-office template, three template files provides a common and standard way to interact with the customer :

- `order-placed.html`, to tell the customer his payment is successful.
- `order-failed.html`, to tell the customer his payment failed, and offer a way to try again.
- `order-payment-gateway.html`, to provide a standard template to submit data to the payment gateway. This template file is not used by modules that do not send form-data to payment gateway.

These templates allow an immediate module integration in a shop template, but it's always possible for a module to provide its own templates.
 
# Implementing a payment module

A payment module is basically a classic module. The main class should at least extends the ```Thelia\Module\PaymentModuleInterface``` interface and implement the ```pay``` and ```isValidPayment``` methods.

For an easier integration with standard templates, a payment module may extends the ```Thelia\Module\AbstractPaymentModule``` class, which offers some convenient methods :

- `generateGatewayFormResponse()` to generate the form that redirects the customer the platform gateway, using `order-payment-gateway.html`. 
- `getPaymentSuccessPageUrl()`, to get the URL of the standard successful payment page.
- `getPaymentFailurePageUrl()`, to get the URL of the standard failed payment page.


## `isValidPayment()` method

This method should return a `boolean`. If `true`, the payment module is displayed on the front office by the payment loop. If `false`, the module is not displayed.

This is useful if the payment solution have some limitations and can't be used. For example, PayPal can't be used if there are more than 10 products in customer's cart and/or if total order amount is greater than 8000 €.

You may also use this method to restrict access to your module to some IP addresses the during test phase.

```
/**
*
* This method is called by the Payment loop.
*
* If you return true, the payment method will be displayed
* If you return false, the payment method will not be displayed
*
* @return boolean
*/
public function isValidPayment()
{
    // At this point, the order does not exists yet in the database. We have to get
    // item count from the customer cart.

    /** @var Session $session */
    $session = $this->getRequest()->getSession();

    /** @var Cart $cart */
    $cart = $session->getCart();

    $cartContentCount = $cart->countCartItems();

    // BaseModule::getCurrentOrderTotalAmount() is a convenient methods 
    // to get order total from the current customer cart.

    $orderTotal = $this->getCurrentOrderTotalAmount();

    return $cartContentCount <= 10 && $orderTotal < 8000;
}
```

## `pay()` method

The `pay()` method is the most useful method of a payment module: it performs the payment of the current order, accordingly to the payment system requirements:

- submit a form that directs the customer to the payment gateway,
- invoke a web service, a specific API, etc. to perform the payment from inside the method, and redirects the user to the result (success / failure) ant the end of the process
- start a specific process, managed by a module controller
- whatever your requirements are :)

The current order is passed as a parameter to the `pay()` method.

The method should return a ```Thelia\Core\HttpFoundation\Response``` object. Alternatively, depending on your specific needs, you can redirect the customer to another URL.

To use the standard `order-payment-gateway.html` template, just generate an array of (name, value) couples with the , and send it the template along with the payment gateway URL using the `generateGatewayFormResponse($order, $gateway_url, $form_data)` method.
The form will be automatically submitted, and the customer will be directed to the payment gateway.

Example for the Payzen payment module :

```
/**
 * Payment gateway invocation
 *
 * @param  Order $order processed order
 * @return Response the payment form
 */
protected function pay(Order $order)
{
    $payzen_params = $this->getPayzenParameters($order, 'SINGLE');

    // Convert files into standard var => value array
    $html_params = array();

    /** @var PayzenField $field */
    foreach($payzen_params as $name => $field)
        $html_params[$name] = $field->getValue();

    // Be sure to have a valid platform URL, otherwise give up
    if (false === $platformUrl = PayzenConfigQuery::read('platform_url', false)) {
        throw new \InvalidArgumentException(Translator::getInstance()->trans("The platform URL is not defined, please check Payzen module configuration."));
    }

    // Generate the form
    return $this->generateGatewayFormResponse($order, $platformUrl, $html_params);
}
```

If you have a specific API, call it with the required parameters, and depending on the result, redirect to the success or failure page.

```
/**
 * Payment gateway invocation
 *
 * @param  Order $order processed order
 * @return Response the payment form
 */
protected function pay(Order $order)
{
    $api = new SamplePaymentApi();

    // Invoke API
    $result = $api->performPayment($with_some_parameters);

    if ($result == API::SUCCESS) {
        // Redirect to the standard success page
        Redirect::exec($this->getPaymentSuccessPageUrl());
    } else {
        // Redirect to the standard failure page
        Redirect::exec($this->getPaymentFailurePageUrl());
    }
 }
```

## `manageStockOnCreation()` method

<div class="alert alert-warning">
<p>This functionality is only available since version 2.1</p>
</div>

You can decide with this function if your payment module decrease stock when the order is created or when the order status change to paid.

Return true for decrementing stock on order creation.
Return false for decrementing stock when order status change to paid.

If you use `AbstractPaymentModule` class, this method is already defined and return true. Override it if you change to change this behaviour.

```
/**
* Decrement stock on order creation
**/
public function manageStockOnCreation()
{
    return true;
}
```

```
/**
* Decrement stock when status change to paid
**/
public function manageStockOnCreation()
{
    return false;
}
```

## Processing of payment system callback (aka "return URL")

Most of payment platforms offers a callback system, to notify your module of the payment result. The callback often consists in calling an URL on your server, the Return URL. 

### Define the callback route

First, define a route in the `Config/routing.xml` file of your module. This will be the URL the payment system will call after your customer payment. Example for the Payzen module:

```
<routes xmlns="http://symfony.com/schema/routing"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">

    <route id="payzen.payment.confirmation" path="payzen/callback" methods="post">
        <default key="_controller">Payzen\Controller\PaymentController::processPayzenRequest</default>
    </route>
</routes>
```

The callback URL will be `http://www.yourshop.com/payzen/callback`.

### Create a payment controller

The callback URL will invoke a method in your payment controller. This controller may extends the abstract `Thelia\Modules\BasePaymentModuleController` class, which provides useful methods for payment confirmation:

- `getLog()` : returns a `Tlog` instance to a module specific log file. The file name is *module_code*.log, and is located in the log directory. For example, the Payzen module log file is `payzen.log`.

- `confirmPayment($order_id)` : call this method to confirm the payment of the order with ID `$order_id`. The method updates the order status to PAID, and dispatch the required events.
 
- `cancelPayment($order_id)` : Some payment systems may notify a cancellation of an already paid order through the return URL. Call this method in this case, to cancel the payment of an already paid order with ID `$order_id`. The order status will be set to `NOT_PAID`, and the required events will be dispatched.

- `getOrder($order_id)` : returns the Order object for order ID `$order_id`, or log an error the order can't be found.

- `redirectToSuccessPage($order_id)` : redirects the customer to the standard successful payment page. Use it only if your controller is invoked in the customer request scope.

- `redirectToFailurePage($order_id)` :  redirects the customer to the standard failed payment page. Use it only if your controller is invoked in the customer request scope.

Your controller should implement the `getModuleCode()` method, which returns your module code, that is the name of the module main class. For example "Payzen" for the Payzen module.

Your controller should perform all required check before calling `confirmPayment()`, to be sure that the customer payment is valid. 

As an example, here is the processing of the Payzen system callback :

```
class PaymentController extends BasePaymentModuleController
{
    protected function getModuleCode()
    {
        return "Payzen";
    }

    /**
     * Process a Payzen platform request
     */
    public function processPayzenRequest()
    {
        // The response code to the server
        $gateway_response_code = 'ko';

        $payzenResponse = new PayzenResponse(
            $_POST,
            PayzenConfigQuery::read('mode'),
            PayzenConfigQuery::read('test_certificate'),
            PayzenConfigQuery::read('production_certificate')
        );

        $request = $this->getRequest();
        $order_id = intval($request->get('vads_order_id'));

        $this->getLog()->addInfo($this->getTranslator()->trans("Payzen platform request received for order ID %id.", array('%id' => $order_id)));
``` 
We're using  `getLog()` to log this method's feedback in the `payzen.log` file, whatever the current Thelia log configuration is.
```
        if (null !== $order = $this->getOrder($order_id)) {

            // Check the authenticity of the request
            if ($payzenResponse->isAuthentified()) {

                // Check payment status

                if ($payzenResponse->isAcceptedPayment()) {

                    // Payment was accepted.

                    if ($order->isPaid()) {
                        $this->getLog()->addInfo($this->getTranslator()->trans("Order ID %id is already paid.", array('%id' => $order_id)));

                        $gateway_response_code = 'payment_ok_already_done';
                    } else {
                        $this->getLog()->addInfo($this->getTranslator()->trans("Order ID %id payment was successful.", array('%id' => $order_id)));
```
We're sure the order has been successfully paid. Let's call the `confirmPayment()` method, to set its status to PAID.
```
                        // Payment OK !
                        $this->confirmPayment($order_id);

                        $gateway_response_code = 'payment_ok';
                    }
                } else {
                    if ($payzenResponse->isCancelledPayment()) {
```
Here, the order payment has been canceled, for some reason. Let's call the `cancelPayment()` method, to set its status back to NOT_PAID.
```
                        // Payment was canceled.
                        $this->cancelPayment($order_id);
                    } else {

                        // Payment was not accepted.

                        $this->getLog()->addError($this->getTranslator()->trans("Order ID %id payment failed.", array('%id' => $order_id)));

                        if ($order->isPaid()) {
                            $gateway_response_code = 'payment_ko_already_done';
                        } else {
                            $gateway_response_code = 'payment_ko';
                        }
                    }
                }
            } else {
                $this->getLog()->addError($this->getTranslator()->trans("Response could not be authentified."));

                $gateway_response_code = 'auth_fail';
            }
        } else {
            $gateway_response_code = 'order_not_found';
        }

        $this->getLog()->info($this->getTranslator()->trans("Payzen platform request for order ID %id processing teminated.", array('%id' => $order_id)));

        return Response::create($payzenResponse->getOutputForGateway($gateway_response_code));
    }
}
```

### Notify the payment to your customer and the shop manager

When a payment is successful, you may want to notify your customer that its order is confirmed, by sending email when the order status becomes "PAID".

To do so, the module will subscribe to the `ORDER_UPDATE_STATUS` Thelia event. It will send the confirmation email when the status of and order that was paid with the module becomes PAID.

To make a class (here `SendConfirmationEmail`) an event listener, add the required declaration in the `<services>` element of the `Config\config.xml` configuration file :

```
<services>
    <service id="send.payzen.mail" class="Payzen\EventListener\SendConfirmationEmail" scope="request">
        
        <!-- We pass the Thelia parser and the Email service to our class -->
        <argument type="service" id="thelia.parser" />
        <argument type="service" id="mailer"/>

        <!-- Tag our class as an event listener -->
        <tag name="kernel.event_subscriber"/>
    </service>
</services>
```

We have then to create the `Payzen\EventListener\SendConfirmationEmail` class, that will process events, generate the email body, and send the e-mail.

```
class SendConfirmationEmail extends BaseAction implements EventSubscriberInterface
{
    /**
     * @var MailerFactory
     */
    protected $mailer;
    /**
     * @var ParserInterface
     */
    protected $parser;

    public function __construct(ParserInterface $parser, MailerFactory $mailer)
    {
        $this->parser = $parser;
        $this->mailer = $mailer;
    }
```
The constructor receives the Thelia parser, to build the mail text, and the Thelia mailing service, to send the mail to the customer and/or the shop manager.

```
    /**
     * Check if we are the payment module for the order, and if the order is paid,
     * then send a confirmation email to the customer.
     *
     * @params OrderEvent $order
     */
    public function updateOrderStatus(OrderEvent $event)
    {
        $payzen = new Payzen();

        if ($event->getOrder()->isPaid() && $payzen->isPaymentModuleFor($event->getOrder())) {
```
Here, we're using the `BaseModule::isPaymentModuleFor($orderId)` method to check if the order we get in the event has been paid with our module. 

We can build and send our mail now. In the "example below, a message with code `Payzen::CONFIRMATION_MESSAGE_NAME` has been added to the database during the module installation.

```
            $contact_email = ConfigQuery::read('store_email', false);

            Tlog::getInstance()->debug("Sending confirmation email from store contact e-mail $contact_email");

            if ($contact_email) {
                $message = MessageQuery::create()
                    ->filterByName(Payzen::CONFIRMATION_MESSAGE_NAME)
                    ->findOne();

                if (false === $message) {
                    throw new \Exception(sprintf("Failed to load message '%s'.", Payzen::CONFIRMATION_MESSAGE_NAME));
                }

                $order = $event->getOrder();
                $customer = $order->getCustomer();

                $this->parser->assign('order_id', $order->getId());
                $this->parser->assign('order_ref', $order->getRef());

                $message
                    ->setLocale($order->getLang()->getLocale());

                $instance = \Swift_Message::newInstance()
                    ->addTo($customer->getEmail(), $customer->getFirstname()." ".$customer->getLastname())
                    ->addFrom($contact_email, ConfigQuery::read('store_name'))
                ;

                // Build subject and body
                $message->buildMessage($this->parser, $instance);

                $this->getMailer()->send($instance);

                Tlog::getInstance()->debug("Confirmation email sent to customer ".$customer->getEmail());
            }
        }
        else {
            Tlog::getInstance()->debug("No confirmation email sent (order not paid, or not the proper payment module.");
        }
    }
```

We have to explicitly subscribe to some events, by implementing the `EventSubscriberInterface::getSubscribedEvents()` method. This method returns an array, where the event is the key. The value is an array which contains the name of the method that should be invoked (here, updateOrderStatus), and the priority in the invocation chain, as a integer between 0 and 255.

```
    public static function getSubscribedEvents()
    {
        return array(
            TheliaEvents::ORDER_UPDATE_STATUS => array("updateOrderStatus", 128)
        );
    }
}
```