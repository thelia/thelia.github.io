---
layout: home
title: Forms
sidebar: form
lang: en
subnav: form_controller
---

# Use your form class in order to validate data


Just like in actions, you can validate your forms. The major difference is that you have two helpers:

- ```createForm``` : allows you to get an instance of your form, just by giving his xml name.
- ```validateForm``` : validates the form, and throws an exception if the form is not valid

Let's see :

```php
<?php
public function createAction() 
{
	$form = $this->createForm("thelia.customer.creation");
	$error_msg = false;

	try {
		$this->validateForm($form);

		return new RedirectResponse($form->get("success_url")->getData());
	} catch (FormValidationException $ex) {
            // Form cannot be validated
            $error_msg = $this->createStandardFormValidationErrorMessage($ex);
        } catch (\Exception $ex) {
            // Any other error
            $error_msg = $ex->getMessage();
        }

	if (false !== $error_msg) {
            $this->setupFormErrorContext(
                $this->getTranslator()->trans("Customer creation"),
                $error_msg,
                $creationForm,
                $ex
            );

            // At this point, the form has error, and should be redisplayed.
	    return $this->render("customer");
        }
}
```

### Form types

You can create forms only with there type.

```php
<?php
public function myAction() {
	$form = $this->createForm(null, "myFormType");

	// You can mix a thelia form and a type too
	$form = $this->createForm("thelia.customer.creation", "myFormType");
}
```


