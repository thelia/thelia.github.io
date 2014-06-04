---
layout: home
title: Forms
sidebar: form
lang: en
subnav: form_index
---

# How form works ?

With Thelia 2, form management is completely new. Each form has a dedicated class allowing to control many things like validation, default values, etc.

Form in Thelia 2 use Forms Symfony component. We made a wrapper that initializes all form processing for you, you just have to declare all your fields and to define options
on each field manually, such as validation. Using form process is not mandatory but highly recommended !

# Form lifecycle

A form is displayed using a Thelia template. When this form is submitted, the data are processed by a Thelia action.

If the form is successfully processed, the customer is redirected to a success URL, which is defined by the 'success_url' form field (remember: Thelia navigation is completely driven by your templates)

If the form cannot be processed, the form "action" attribute is then used. Thus, setting the form action URL to the current view is a good way to process errors. If it's not clear, see the [form template](template.html) below.

## How to declare your forms ?

Like loops, you have to declare your form in config file using ```<forms>``` and ```<form>``` elements :

```xml
<forms>
    <form name="mymodule.customer.creation" class="MyModule\Form\CustomerCreation"/>
    <form name="mymodule.customer.modification" class="MyModule\Form\CustomerModification"/>
</forms>
```

In the ```<forms>``` element, the number of forms is not limited, declare as many form you as you want. For each form, you should define a unique name, and provide the full qualified name for class path (remember: your module must be PSR-0 compliant).

The form name is mandatory, and will be used in your templates in order to display the form.

## How to create a form ?

Each form class must extend *Thelia\Form\BaseForm*. This class is abstract and you have to overload at least *buildForm* and *getName* methods.

### getName method

The *getName* method must return the name of your form. A good practice is to return the same name as the one defined in the ```<form>``` configuration element.

### buildForm method

The *buildForm* method defines all the fields of the form, and the fields options, such as for each label and field validation constraints.

`$this->formBuilder` is the Symfony [FormFactoryInterface](http://api.symfony.com/2.3/Symfony/Component/Form/FormFactoryInterface.html) object, and is used to create your form fields :

```php
<?php
public function buildForm()
{
    $this->formBuilder->add("field name", "field type", array of options);
}
```

*add* method always returns the formBuilder instance, so you can chain the methods for adding fields :

```php
<?php
public function buildForm()
{
    $this->formBuilder
        ->add("field name", "type", array("label" => "field label")
        ->add("other field", "typ", array("label" => "other field label");
}
```

## Validatation constraints

You can add constraints for all your fields, so that the form system will automatically detect errors. For this part we delegate all the constraints on the Symfony Validator component.
You can also create your own validator, following the Symfony validator guidelines.

The list of available validator constrains is here : [http://symfony.com/doc/current/reference/constraints.html](http://symfony.com/doc/current/reference/constraints.html)

## Example

Below a complete form example, the customer creation form.

In the config.xml file, we declare the form like this :

```xml
<forms>
    ...
    <form name="thelia.customer.creation" class="Thelia\Form\CustomerCreation"/>
    ...
</forms>
```

The form class is in the file Thelia/Form/CustomerCreation.php, and contains all form definitions. We use here different constraints :
- Constraints\NotBlank()
- Constraints\Email()
- Constraints\Callback, to check specific conditions, such as duplicate emails, or non matching passwords.

```php
<?php
namespace Thelia\Form;

use Symfony\Component\Validator\Constraints;
use Symfony\Component\Validator\ExecutionContextInterface;
use Thelia\Model\ConfigQuery;
use Thelia\Model\CustomerQuery;
use Thelia\Form\BaseForm

class CustomerCreation extends BaseForm
{

    protected function buildForm()
    {
        $this->formBuilder
            ->add("firstname", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "firstname"
            ))
            ->add("lastname", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "lastname"
            ))
            ->add("address1", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "address"
            ))
            ->add("address2", "text", array(
                "label" => "Address Line 2"
            ))
            ->add("address3", "text", array(
                "label" => "Address Line 3"
            ))
            ->add("phone", "text", array(
                "label" => "phone"
            ))
            ->add("cellphone", "text", array(
                "label" => "cellphone"
            ))
            ->add("zipcode", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "zipcode"
            ))
            ->add("city", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "city"
            ))
            ->add("country", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "country"
            ))
            ->add("title", "text", array(
                "constraints" => array(
                    new Constraints\NotBlank()
                ),
                "label" => "title"
            ))
            ->add("email", "email", array(
                "constraints" => array(
                    new Constraints\NotBlank(),
                    new Constraints\Email(),
                    new Constraints\Callback(array(
                        "methods" => array(
                            array($this,
                            "verifyExistingEmail")
                        )
                    ))
                ),
                "label" => "email"
            ))
            ->add("email_confirm", "email", array(
                "constraints" => array(
                    new Constraints\Callback(array(
                        "methods" => array(
                            array($this,
                            "verifyEmailField")
                        )
                    ))
                ),
                "label" => "email confirmation"
            ))
            ->add("password", "password", array(
                "constraints" => array(
                    new Constraints\NotBlank(),
                    new Constraints\Length(array("min" => ConfigQuery::read("password.length", 4)))
                ),
                "label" => "password"
            ))
            ->add("password_confirm", "password", array(
                "constraints" => array(
                    new Constraints\NotBlank(),
                    new Constraints\Length(array("min" => ConfigQuery::read("password.length", 4))),
                    new Constraints\Callback(array("methods" => array(
                        array($this, "verifyPasswordField")
                    )))
                ),
                "label" => "password confirmation"
            ))

        ;
    }

    public function verifyPasswordField($value, ExecutionContextInterface $context)
    {
        $data = $context->getRoot()->getData();

        if ($data["password"] != $data["password_confirm"]) {
            $context->addViolation("password confirmation is not the same as password field");
        }
    }

    public function verifyEmailField($value, ExecutionContextInterface $context)
    {
        $data = $context->getRoot()->getData();

        if ($data["email"] != $data["email_confirm"]) {
            $context->addViolation("email confirmation is not the same as email field");
        }
    }

    public function verifyExistingEmail($value, ExecutionContextInterface $context)
    {
        $customer = CustomerQuery::create()->findOneByEmail($value);
        if ($customer) {
            $context->addViolation("This email already exists");
        }
    }

    public function getName()
    {
        return "thelia_customer_creation";
    }
}
```

