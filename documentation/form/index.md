---
layout: home
title: Forms
sidebar: form
subnav: form_index
---

#How form works ?

With Thelia 2, form management is totaly new. Each form has a dedicated class allowing to control many things like validation, default values, etc.

Form in Thelia 2 use Forms Symfony Component. We made a wrapper that initialize all form process for you, you have just to declare all your fields and put options
on each like validation. Using form process is not mandatory but highly recommanded !

##How to declare your forms ?

Like loops, you have to declare your form in config file using <forms> and <form> keyword :

```xml
<forms>
    <form name="mymodule.customer.creation" class="MyModule\Form\CustomerCreation"/>
    <form name="mymodule.customer.modification" class="MyModule\Form\CustomerModification"/>
</forms>
```

in your <forms> tag you declare how many form you want. Each form must have a name and a class (with full className, remember your module must be PSR-0 compliant).

The form name is needed and is used in your template for displaying the Form.

##How to create a form ?

Each form class must extends *Thelia\Form\BaseForm*. This class is abstract and you have to redefine at least *buildForm* and *getName* methods.

###getName method

The *getName* method must return the name of your form. Good pratice is to return the same name as define in you config

###buildForm method

The *buildForm* method allow to declare all the Fields and for each adding options like the label, validation constraints.

First of all, the form builder is in the form property of your class and you must use it in your buildForm method for adding fields :

```php
<?php
public function buildForm()
{
    $this->form->add("name field", "type", array of options);
}
```

*add* method always return the formBuilder isntance, so you can chain the method for adding fields :

```php
<?php
public function buildForm()
{
    $this->form
        ->add("name field", "type", array("label" => "field label")
        ->add("other field", "typ", array("label" => "other field label");
}
```

##Validatation constraints

You can add constraints for all your fields and the form can detect if there are errors. For this part we delegate all the constraints on the Symfony Validator component.
You can create your own validator too following the symfony validator guidelines.

The list of available validator contrainst is here : [http://symfony.com/doc/current/reference/constraints.html](http://symfony.com/doc/current/reference/constraints.html)


Complete form exemple :

```php
<?php
namespace Thelia\Form;

use Symfony\Component\Validator\Constraints;
use Symfony\Component\Validator\ExecutionContextInterface;
use Thelia\Model\ConfigQuery;
use Thelia\Model\CustomerQuery;


class CustomerCreation extends BaseForm
{

    protected function buildForm()
    {
        $this->form
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
        return "customerCreation";
    }
}
```

