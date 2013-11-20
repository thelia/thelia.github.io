---
layout: home
title: Feature - Coupons
sidebar: features
subnav: features_coupons_rules_index
---
---

#Giving a discount access to only a particular customer

A Coupon can be limited to only a kind of your customer.
This way Customer A will be able to get discount X and Customer B will be able to get discount Y.
They can also have no rules associated with and be usable by everyone.

Customer


Frontend Dev



Backend Dev

The Coupon module is heavily using the [Service Container](http://symfony.com/doc/current/book/service_container.html) feature from Symfony2.
Each Coupon rule is a service identified by its name and a tag **thelia.coupon.addRule**.

**core/lib/Thelia/Config/Resources/config.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<service id="thelia.constraint.rule.available_for_total_amount" class="Thelia\Constraint\Rule\AvailableForTotalAmount">
    <argument type="service" id="thelia.translator" />
    <tag name="thelia.coupon.addRule"/>
</service>
```

In the example bellow you can see a rule declaration for the rule *Available for total amount*.
This rule is implemented in the class **Thelia\Constraint\Rule\AvailableForTotalAmount**.
And it has a unique name **thelia.constraint.rule.available_for_total_amount**.
By declaring your new rule as a service you will automatically enable it for your application.

A rule implementation must implement the **Thelia\Constraint\Rule\CouponRuleInterface** Interface.
You can if you wish extend the **Thelia\Constraint\Rule\CouponRuleAbstract** abstract class.

You will have to implement 3 aspects of your rule behaviour :

* What your rule will check
* The parameters you admin will have to set in the BackOffice
* The operators available for each input comparison

Checking against the Adapter

Setting inputs type

Setting inputs operators
