---
layout: home
title: Forms
sidebar: form
subnav: form_action
---

#Use your form class for validating data

In next [chapter](/documentation/form/index.html) you see how to create your class form, adding fields and constraints on each.

Validating your form is very easy. You have to bind your form with the current request and check if the form id valid.

Let's see :

```php
<?php

//retrieve your request, in an action the request is in the ActionEvent instance
$request = $event->getRequest();

//create an instance of your form
$customerForm = new \Telia\Form\CustomerCreation($request);

$form = $customerForm->getForm();

$form->bind($request);

if($form->isValid) {
    //ok, your form is valid, you can persist your customer
} else {
    //There is at least one error
}
```

<br />
If you are in a Thelia action, the ActionEvent object have a method allowing to inform that your form is invalid and stop the action for displaying errors :

```php
<?php

class MyAction implements EventSubscriberInterface
{
...
    function MyAction(ActionEvent $event)
    {
        $request = $event->getRequest();

        $myForm = new MyOwnForm($request);

        $form = $myForm->getForm();

        //validation process only if it's a post method
        if ($request->isMethod("post")) {
            $form->bind($request)

            if($form->isValid()) {
                //your form is valid, do what you want like persisting data.
            } else {
                //here I call the setFormError that record some information for displaying errors after.
                $event->setFormError($form);
            }
        }
    }
}
```