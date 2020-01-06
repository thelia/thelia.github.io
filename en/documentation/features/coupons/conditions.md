---
layout: home
title: Feature - Coupons
sidebar: features
lang: en
subnav: features_coupons_conditions
---

# Coupon Conditions ?

## How to create a new type of Condition ?

>Our example will be based on a Coupon available for only men or women depending on what the customer entered during its subscription.
In case you have trouble following our explanation, you can find the whole code as a module on [GitHub](https://github.com/gmorel/thelia2-condition-match-for-gender).




1) **Implement** : A Condition has to implement the [Thelia\Condition\Implementation\ConditionInterface](https://github.com/thelia/thelia/blob/master/core/lib/Thelia/Condition/Implementation/ConditionInterface.php) Interface.

In order to save you some time, we advise to simply have your ```MatchForGender``` class extends our [Thelia\Condition\Implementation\ConditionAbstract](https://github.com/thelia/thelia/blob/master/core/lib/Thelia/Condition/Implementation/ConditionAbstract.php) class.

Please create your new ```MatchForGender``` type class in your module. Preferably in the directory ```local/modules/MyModule/Condition/Implementation/```.



2) **Inform** : In order to inform Thelia2 about the existence of your new Condition you would have to register it as a [Service](http://symfony.com/doc/current/book/service_container.html) :

``` local/modules/MyModule/Config/config.xml ```

```xml
<services>
    <service id="thelia.condition.match_for_gender" class="ConditionMatchForGender\Condition\Implementation\MatchForGender">
        <argument type="service" id="thelia.facade" />
        <tag name="thelia.coupon.addCondition"/>
    </service>
</services>
```

Basically you create a new service having ```thelia.condition.match_for_gender``` as id building the class ```ConditionMatchForGender\Condition\Implementation\MatchForGender``` with the facade id ```thelia.facade``` which is also another service.
And since we tag it with ```thelia.coupon.addCondition``` Thelia2 will automatically add it to its Condition list.




3) **I18n** : You would then have to implements 3 simple i18n methods describing the Coupon :

``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

* ```getName()``` which contains the i18n name of your condition.
  Ex: "By Customer gender"
* ```getSummary()``` which contains the i18n summary of the saved condition associated to a coupon.
  Ex: "If customer <strong >is a %gender%</strong >"
* ```getToolTip()``` which contains the i18n description of your condition.
  Ex : "If customer is a man or a woman"




4) **Behavior** : Then the method responsible for the Condition behavior. This is where all the strength of our Condition module is :

The method ```isMatching()``` contains all the Condition logic.
It performs the condition tests to make sure whether the Customer (or something else time/Thelia2 variable/etc..) meets the Coupon conditions set in the BackOffice.
It will return true if the Customer meets the criteria or false.

Example :
``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/**
 * Test if Customer meets conditions
 *
 * @return bool
 */
public function isMatching()
{
    // We retrieve current Customer title
    // 1 M
    // 2 Mrs
    // 3 Miss
    $titleId = $this->facade->getCustomer()->getTitleId();

    // We match the customer title to our stored parameter
    // 1 => self::GENDER_MAN (man)
    // 2 and 3 => self::GENDER_WOMAN (woman)
    $toCheck = self::GENDER_WOMAN;
    if ($titleId == 1) {
        $toCheck = self::GENDER_MAN;
    }

    // Is Customer the title gender matching
    // the gender set in this Condition ?
    $condition = $this->conditionValidator->variableOpComparison(
        $toCheck,
        $this->operators[self::INPUT1],
        $this->values[self::INPUT1]
    );

    if ($condition) {
        return true;
    }

    return false;
}
```

In you are lost, maybe the whole code will help you [GitHub](https://github.com/gmorel/thelia2-condition-match-for-gender).



5) **Type (service id)** : You would then have to implements this attribute :

``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/** @var string Service Id from Resources/config.xml  */
protected $serviceId = 'thelia.condition.match_for_gender';
```

Where ```match_for_gender``` is the unique id of your Condition set in step 2). This is the name of the [Service](http://symfony.com/doc/current/book/service_container.html).




6) **Custom inputs** : You might need to have parameters ?

In our example we need to add a ```gender``` parameter.
You can declare constants with the name of your inputs in order to ease the maintainability :

``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/** Condition 1st parameter : gender */
CONST INPUT1 = 'gender';
```

In order to feed these attributes you would need to extend the default ```setValidatorsFromForm()``` and ```setValidators()``` methods.

```php
/**
 * Check validators relevancy and store them
 *
 * @param array $operators Operators the Admin set in BackOffice
 * @param array $values    Values the Admin set in BackOffice
 *
 * @throws \InvalidArgumentException
 * @return $this
 */
public function setValidatorsFromForm(array $operators, array $values)
{
    $this->setValidators(
        $operators[self::INPUT1],
        $values[self::INPUT1]
    );

    return $this;
}
```

```php
/**
 * Check validators relevancy and store them
 *
 * @param string $genderOperator Gender Operator ex <
 * @param int    $genderValue    Gender set to meet condition
 *
 * @throws \Thelia\Exception\InvalidConditionValueException
 * @throws \Thelia\Exception\InvalidConditionOperatorException
 * @return $this
 */
protected function setValidators($genderOperator, $genderValue)
{
    // We first test if the operator given by the admin is legit
    // ie. in our case if it is Operators::EQUAL (==)
    $isOperator1Legit = $this->isOperatorLegit(
        $genderOperator,
        $this->availableOperators[self::INPUT1]
    );
    // If not we throw an exception wich will display an error
    // During the condition saving.
    if (!$isOperator1Legit) {
        throw new InvalidConditionOperatorException(
            get_class(), 'gender'
        );
    }

    // We then check if the admin set correctly the parameter value
    // If value selected is either self::GENDER_MAN (man)
    // or self::GENDER_WOMAN (woman)
    if (!in_array($genderValue, array(self::GENDER_MAN, self::GENDER_WOMAN))) {
        throw new InvalidConditionValueException(
            get_class(), 'gender'
        );
    }

    // We then assign set entered operators and values
    $this->operators = array(
        self::INPUT1 => $genderOperator,
    );
    $this->values = array(
        self::INPUT1 => $genderValue,
    );

    return $this;
}
```


Right now, Thelia2 won't be able to draw these new inputs in the BackOffice.

As it is a Thelia2 key feature, we chose to give you the opportunity to customize the way you want these inputs to be be displayed.
In this way you will be able to focus on the ergonomic rather than be stuck on a rigid structure.

``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/**
 * Draw the input displayed in the BackOffice
 * allowing Admin to set its Coupon Conditions
 *
 * @return string HTML string
 */
public function drawBackOfficeInputs()
{
    $labelOnlyForMen = $this->translator->trans(
        'Available only if a Customer is a man',
        array(),
        'condition'
    );
    $labelOnlyForWomen = $this->translator->trans(
        'Available only if a Customer is a woman',
        array(),
        'condition'
    );

    $checkedWoman = $checkedMan = '';
    if (isset($this->operators) && isset($this->operators[self::INPUT1])) {
        if ($this->operators[self::INPUT1] == self::GENDER_WOMAN) {
            $checkedWoman = 'checked';
        } else {
            $checkedMan = 'checked';
        }
    }

    $html = '
            <div id="condition-add-operators-values" class="form-group col-md-6">
                <input type="hidden" id="' . self::INPUT1 . '-operator" name="' . self::INPUT1 . '[operator]" value="==" />
                <div class="row radio">
                    <div class="input-group col-lg-10">
                        <label>
                            <input type="radio" name="' . self::INPUT1 . '[value]" value="' . self::GENDER_WOMAN . '" ' . $checkedWoman . '>
                            ' . $labelOnlyForWomen . '
                        </label>
                    </div>
                </div>
                <div class="row radio">
                    <div class="input-group col-lg-10">
                        <label>
                            <input type="radio" name="' . self::INPUT1 . '[value]" value="' . self::GENDER_MAN . '" ' . $checkedMan . '>
                            ' . $labelOnlyForMen . '
                        </label>
                    </div>
                </div>
            </div>
        ';
    return $html;
}
```

Putting HTML into PHP class file is not really a good practice.
If needed you could draw your inputs in a Smarty template and render it via the SmartyParser.




7) **Inputs saving** : At this moment Thelia2 is not able to guess what it will have to serialize in the table Coupon column serialized_conditions.
In order to teach it how to save your new parameters simply extends this attribute in your ```MatchForGender``` implementation class in your module.

In our example we will allow only the equals comparison. As it would be irrelevant in our case to allow other type of comparison (is superior, inferior, etc..).


``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/** @var array Available Operators (Operators::CONST) */
protected $availableOperators = array(
    self::INPUT1 => array(
        Operators::EQUAL,
    )
);
```



Your brand new custom Condition is ready. You just have to enable your module.
