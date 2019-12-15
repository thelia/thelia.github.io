---
layout: home
title: payment module
sidebar: plugin
lang: fr
subnav: plugin_payment
---

<div class="page-header">
    <h1>Module de paiement</h1>
</div>

## Déroulement typique d'un processus de paiement

Une fois que le client a mis des articles dans son panier, qu'il s'est connecté (ou a créé un compte) et sélectionné un mode de livraison, il peut passer à l'étape de paiement. Le déroulement de cet étape est le suivant :

1. Le client choisit son mode de paiement
2. Il déclenche le paiment en cliquant sur le bouton "Payer" de la page
3. La méthode pay() du module de paiement sélectionné est appellée par Thelia
4. La méthode de pay() gère le processus de paiement qui pourrait consister à accomplir une des tâches suivantes :
    - Appel d'un web service ou d'une API spécifique à la plateforme.
    - Envoi d'un formulaire contenant tous les paramètres du paiement à la passerelle de paiment.
    - Rien (aucune action pour un paiement par chèque ou un virement bancaire).
    - Autres tâches.
5. Si le paiement est réussi le client est redirigé vers un page de remerciement.
6. Si le paiement écohoue, le client est redirigé vers une de type "Ooops, désolé".

## Templates standards

Dans le template front-office par défaut, trois fichiers de templates permettent une communication standardisée avec le client :

- `order-failed.html`, pour informer le client de la réussite du paiement.
- `order-placed.html`, pour informaer le client de l'échec du paiement et l'inviter à renouveller sa tentative.
- `order-payment-gateway.html`, pour fournir un gabarit standard d'envoi des paramètres de paiement à la passerelle. Ce fichier n'est pas utilisé par des modules n'envoyant pas de données via un POST vers la passerelle de paiement.

Ces templates permettent une intégration immédiate du module dans un thème, mais il est tout à fait possible pour un modules de fournir ses propres templates.

# Implementer un module de payment

Un module de livraison se présente tout comme un module classique. La classe principale du module doit étendre au minimum l'interface  ```Thelia\Module\PaymentModuleInterface``` et implémenter les méthodes ```pay```et ``ìsValidPayment```.

Pour faciliter l'intégration avec les templates standards, un module de paiement pourra étendre la class ```Thelia\Module\AbstractPaymentModule```, qui offre quelques méthodes pratiques telles que :

- `generateGatewayFormResponse()` pour générer le formulaire qui redirige le client vers la passerelle de paiement en utilisant le fichier `order-payment-gateway.html`.
- `getPaymentSuccessPageUrl()`, pour obtenir l'url du template standard à afficher en cas de succès du paiement.
- `getPaymentFailurePageUrl()`, pour obtenir l'url du template standard à afficher en cas d'échec du paiement.


## La méthode `isValidPayment()`

Cette méthode retroune un `booléen`.
Si la valeur de retour est `true`, le module sera affiché sur le front office par la boucle Paiement loop.
Si la valeur de retour est `false` le module ne sera pas affiché.

Ce comportement est très utile si le mode de livraison a certaines contraintes et ne peut être utilisée. Par exemple Paypal ne peut être utilisé si il y a plus de 10 articles présent dans le panier ou si le montant total de la commande excède 8000 €

Cette méthode pourrait aussi être utilisée pendant les phases de test pour limiter l'accès au module à certaines adresses IP.

```php
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

## La méthode `pay()`

The `pay()` method is the most useful method of a payment module: it performs the payment of the current order, accordingly to the payment system requirements:

- submit a form that directs the customer to the payment gateway,
- invoke a web service, a specific API, etc. to perform the payment from inside the method, and redirects the user to the result (success / failure) ant the end of the process
- start a specific process, managed by a module controller
- whatever your requirements are :)

The current order is passed as a parameter to the `pay()` method.

The method should return a ```Thelia\Core\HttpFoundation\Response``` object. Alternatively, depending on your specific needs, you can redirect the customer to another URL.

To use the standard `order-payment-gateway.html` template, just generate an array of (name, value) couples with the , and send it the template along with the payment gateway URL using the `generateGatewayFormResponse($order, $gateway_url, $form_data)` method.
The form will be automatically submitted, and the customer will be directed to the payment gateway.

Example pour le module de paiement Payzen :

```php
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

Si vous utilisez une API spécifique, appelez là avec les paramètres requis et en fonction du résultat, redirigez le client vers la page de réussite ou d'échec du paiement.

```php
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

## Traitement du callback de la passerelle de paiement (alias "l'url retour")

La plupart des passerelle de paiement dispose d'une méthode de callback pour communiquer le résultat d'un paiement à votre site. Ce callback conssiste souvent en un appel à votre serveur : la fameuse url retour.

### Définition de la route correspondant à l'url retour

Définissez une route dans le fichier `Config/routing.xml` de votre module. Cette url sera appellée par lapasserelle de paiement après que le client aura payé. Par exemple pour le module Payzen :

```xml
<routes xmlns="http://symfony.com/schema/routing"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">

    <route id="payzen.payment.confirmation" path="payzen/callback" methods="post">
        <default key="_controller">Payzen\Controller\PaymentController::processPayzenRequest</default>
    </route>
</routes>
```

L'url retour sera `http://www.yourshop.com/payzen/callback` dans ce cas.

### Créer un contrôleur pour le paiement

L'url retour appellera une méthode de votre contrôleur. Ce contrôleur pourra étendre la classe abstraite , qui offre quelques méthodes pratiques pour la confirmation de paiement telles que :

- `getLog()` : retourne une instance de `Tlog` spécifique pour le fichier de log du module. Le nom du fichier de log sera *module_code*.log, et sera enregistré dans le répertoire log. Par exemple pour le module Payzen, le fichier est `payzen.log`.

- `confirmPayment($order_id)` : appellez cette méthode pour confirmer le paiement de la commande dont la variable ID est `$order_id`. La méthode met à jour le statut de la commande sur `PAID` et propage les événements liés.

- `cancelPayment($order_id)` : Certaines passerelles de paiement peuvent notifier via l'url retour, une annulation d'une commande déjà payée. Appelez cette méthode dans ce cas pour annuler le paiement de la commande dont la variable ID est `$order_id`. Le statut de cette commande passera à `NOT_PAID` et les événements associés seront dispatchés.

- `getOrder($order_id)` : retourne l'objet Order dont l'ID est `$order_id`, et loggue une erreur si la commande ne peut être retrouvée.

- `redirectToSuccessPage($order_id)` : redirige le client vers la page de succès standard. Utilisez cette méthode si votre contrôleur est invoqué dans le contexte d'une reqûete client.

- `redirectToFailurePage($order_id)` :  redirige le client vers la page d'échec de paiement standard. Utilisez cette méthode si votre contrôleur est invoqué dans le contexte d'une reqûete client.

Votre contrôleur devrait implémenter la méthode , qui renvoie le code du module à savoir le nom de la classe principale du module. Par exemple "Payzen" pour le module Payzen.

Votre contrôleur devrait effectuer toutes les vérifications possibles avant d'appeller la méthode `confirmPayment()` pour être sûr que le paiement est valide.

Pour illustrer ces points, voici le traiement de l'url de retour pour Payzen :

```php
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
Nous utilisons la méthode `getLog()` pour logguer les réponses de la passerelle de paiement dans le fichier `payzen.log` file, quelque soit la configuration des log Thélia.
```php
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
Nous sommes sûrs que le paiement a été effectué. Nous appellons donc la méthode `confirmPayment()`, pour passer son status à `PAID`.
```php
                        // Payment OK !
                        $this->confirmPayment($order_id);

                        $gateway_response_code = 'payment_ok';
                    }
                } else {
                    if ($payzenResponse->isCancelledPayment()) {
```
Ici la commande a été annulée pour une raison quelconque. Nous appellons donc la méthode `cancelPayment()`, pour remettre son statut à `NOT_PAID`.
```php
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

### Envoyer une notification de paiement au client et au gestionnaire du site

Quand un paiement est réussi vous souhaiterez probablement en informer le client et lui confirmer sa commande par l'envoi d'un mail quand le status passe à `PAID` .

Pour cela, le module devra souscrire à l'événement Thelia `ORDER_UPDATE_STATUS`. Le mail de confirmation  sera envoyé quand le status de la commande ayant utilisé ce module de paiement passe à `PAID`.

Pour créer un classe (ici `SendConfirmationEmail`) capable d'écouter un événement, ajouter la déclaration nécessaire dans l'élément `<services>`du fichier de configuration `Config\config.xml` :

```xml
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

Nous devons créer la classe `Payzen\EventListener\SendConfirmationEmail` qui traitera les événements, crééra le corps du mail et enverra celui-ci.

```php
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
Le constructeur reçoit un parseur Thelia pour construire le contenu du mail et le service de mailing Thelia pour envoyer le mail au client et/ou au gestionnaire de la boutique.

```php
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
Ici nous utilisons la méthode `BaseModule::isPaymentModuleFor($orderId)` pour vérifier que la commande reçue via l'événement à bien été réglée avec notre module.

Nous pouvons ensuite construire et envoyer le mail. Dans l'exemple ci-dessous, un message ayant le code `Payzen::CONFIRMATION_MESSAGE_NAME` a été ajouté à la base au moment de l'installation du module.

```php
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

Nous devons souscrire, écouter quelques événements en implémentant la méthode `EventSubscriberInterface::getSubscribedEvents()`. Cette méthode renvoie un tableau dans lequel la clé est l'événement. La valeur est un tableau contenant le nom de la méthode qui doit être appelée (ici `updateOrderStatus`) et la priorité dans la chaîne d'appel sous corrspondant à une nombre entier compris entre à et 255.

```php
    public static function getSubscribedEvents()
    {
        return array(
            TheliaEvents::ORDER_UPDATE_STATUS => array("updateOrderStatus", 128)
        );
    }
}
```