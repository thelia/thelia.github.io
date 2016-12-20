---
layout: home
title: Forms
sidebar: form
lang: en
subnav: form_action
---

# Use your form class in order to validate data

In previous [chapter](/documentation/form/index.html) you've seen how to create your own form class, adding fields and fields constraints.

Validating your form is very easy. You have to bind your form with the current request and check that the form is valid.

Let's see :

```php
<?php
public function create(ActionEvent $event) 
{
    // Retrieve your request, in an action the request is in the ActionEvent instance
    $request = $event->getRequest();
    
    // Create an instance of your form
    $customerForm = new \Thelia\Form\CustomerCreation($request);
    
    $form = $customerForm->getForm();
    
    $form->bind($request);
    
    if($form->isValid()) {
        // Ok, your form is valid, you can persist your customer and display the result template
    } 
    else {
        // There is at least one error
    }
}
```

# Error processing

In a Thelia action, use the ActionEvent method `setErrorForm()` when your form is invalid. The event propagation will then be stopped.

Use the setError() method of the form to set the error flag, which is processed in the Smarty Form plugin and passed to the template through the $error *form* block value.

The setErrorMessage() defines a message available in the template in the $message *form* block value. As this message is displayed in the client browser, it should be internationalized, either in the action code, or in the template code using the `{intl l='$message'}` Smarty function.

> TODO : explain internationalisation of error messages in the action code

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

                // Your form is valid. You can perform additional check,
                // Or do what you want like persisting data.
                
                // Every form has as success_url field, which contains the base site URL by default.
                // Redirect to this URL now
                Redirect::exec($form->getSuccessUrl());

                // Redirect::exec() has called exit(), so nothing more will happen.
            } 

            // The form has errors
            $form->setError(true);

            // Add a message that could be displayed by the form on the template
            $form->setMessage("Invalid or missing data, please check entered data");

            // Call the setFormError to store the errored form and propagate it to the template
            $event->setErrorForm($form);

            // At this point, the form action URL is displayed. 
            // Likely, the same view is displayed again, displaying form and fields error messages  
        }
    }
}
```
