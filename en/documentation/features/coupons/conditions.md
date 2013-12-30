---
layout: home
title: Feature - Coupons
sidebar: features
lang: en
subnav: features_coupons_rules_index
---
---

#Giving a discount access to only a particular customer

A Coupon can be limited to only a kind of your customers.
This way Customer A will be able to get discount X and Customer B will be able to get discount Y.
A Coupon can also have no Condition associated with it and be usable by everyone.

Customer


Frontend Dev



Backend Dev

The Condition module is heavily using the [Service Container](http://symfony.com/doc/current/book/service_container.html) feature from Symfony2.
Each Coupon condition is a service identified by its name and a tag **thelia.coupon.addCondition**.

**core/lib/Thelia/Config/Resources/config.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<service id="thelia.constraint.rule.available_for_total_amount" class="Thelia\Condition\Implementation\AvailableForTotalAmount">
    <argument type="service" id="thelia.translator" />
    <tag name="thelia.coupon.addCondition"/>
</service>
```

In the example bellow you can see a Condition declaration for the Condition *Available for total amount*.
This Condition is implemented in the class **Thelia\Condition\Implementation\AvailableForTotalAmount**.
And it has a unique service name **thelia.condition.available_for_total_amount**.
By declaring your new Condition as a service you will automatically enable it for your application.

A Condition implementation must implement the **Thelia\Condition\Implementation\ConditionInterface** Interface.
You can if you wish extend the **Thelia\Condition\Implementation\ConditionAbstract** abstract class.

You will have to implement 3 aspects of your Condition behaviour :

* What your Condition will check
* The parameters your admin will have to set in the BackOffice
* The operators available for each input comparison

Checking against the Adapter

Setting inputs type

Setting inputs operators
