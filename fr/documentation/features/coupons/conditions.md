---
layout: home
title: Feature - Coupons
sidebar: features
lang: fr
subnav: features_coupons_conditions
---

# Les conditions des coupons ?

## Comment créer un nouveau type de condition ?

>Notre exemple aura pour objet la création d'un coupon qui sera disponible exclusivement pour les femmes ou les hommes en fonction des informations saisies lors de la création du compte.
Si vous avez du mal à suivre nos explications, vous trouverez l'ensemble du code dans un module correspondant sur [GitHub](https://github.com/gmorel/thelia2-condition-match-for-gender).



1) **Implémentation** : une condition doit implémenter l'interface [Thelia\Condition\Implementation\ConditionInterface](https://github.com/thelia/thelia/blob/master/core/lib/Thelia/Condition/Implementation/ConditionInterface.php).

Afin de ganger du temps, nous recommandons que la votre class ```MatchForGender``` étende la classe abstraite [Thelia\Condition\Implementation\ConditionAbstract](https://github.com/thelia/thelia/blob/master/core/lib/Thelia/Condition/Implementation/ConditionAbstract.php).

Veuillez créer votre nouvelle classe ```MatchForGender``` au sein d'un module. De préférence dans le dossier ```local/modules/MyModule/Condition/Implementation/``` afin de favoriser l'organisation du code.




2) **Déclaration** : afin d'informer Thelia de l'existence de votre nouvelle condition, vous devez l'enregistrer en tant que [Service](http://symfony.com/doc/current/book/service_container.html) :

Dans le fichier ``` local/modules/MyModule/Config/config.xml ```

```xml
<services>
    <service id="thelia.condition.match_for_gender" class="ConditionMatchForGender\Condition\Implementation\MatchForGender">
        <argument type="service" id="thelia.facade" />
        <tag name="thelia.coupon.addCondition"/>
    </service>
</services>
```

Vous créez en fait un nouveau service ayant l'identifiant (`id`) ```thelia.condition.match_for_gender```, définie par la classe ```ConditionMatchForGender\Condition\Implementation\MatchForGender``` ayant pour façade id ```thelia.facade``` qui est lui-même un service par ailleurs. Et comme il est taggué avec ```thelia.coupon.addCondition``` Thelia l'ajoutera automatiquement à la liste des conditions disponibles.



3) **Internationalisation (I18n)** : vous devrez impléenter 3 méthode d'internationalisation qui décrivent le coupon dans le fichier ``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

* ```getName()``` renvoie le nom i18n de la condition
  Ex: "En fonction du genre du client"
* ```getSummary()``` renvoie le résumé i18n enregistré de la condition associée au coupon.
  Ex: "Si le client est <strong >%gender%</strong >"
* ```getToolTip()``` renvoie la description i18n de la condition.
  Ex : "Si le client est un homme ou une femme"




4) **Comportement** : Cette méthode est responsable de la manière dont la condition fonctionne. C'est dans cette méthode que réside toute la puissance de notre module de condition :

La méthode ```isMatching()``` contient toute la logique de notre condition.
Elle réalise les tests permmettant de s'assurer que le client remplit les conditions requises par les réglages du coupon définis dans le back-office.
Elle doit retourner `true` si le client statisfait les critères ou `false`sinon.

Example :
Dans le fichier ``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

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

Pour une meilleure compréhension vous pouvez consulter le code du module sur [GitHub](https://github.com/gmorel/thelia2-condition-match-for-gender).



5) **Type de condition (service id)** : vous devrez ensuite surcharger l'attribut `$serviceId` :

Dans le fichier ``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/** @var string Service Id from Resources/config.xml  */
protected $serviceId = 'thelia.condition.match_for_gender';
```

où ```match_for_gender``` est l'identifiant unique de votre condition tel que défini à l'étape 2. Il s'agit du nom du service [service](http://symfony.com/doc/current/book/service_container.html).




6) **Champs de saisis personnalisés** : vous avez besoin de paramètres pour votre condition ?

Dans notre exemple nous avons besoin d'ajouter un champ pour la saisie du paramètre ```gender```(genre).
Pour ce faire vous pouvez déclarer des constantes ayant pour valeur le nom du champ pour faciliter la maintenance du code :

Dans le fichier ``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

```php
/** Condition 1st parameter : gender */
CONST INPUT1 = 'gender';
```

Afin d'attribuer une valeur à ces attributs vous devrez surcharger les méthodes ```setValidatorsFromForm()``` and ```setValidators()```.

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

A l'heure actuelle Thelia n'est pas capable d'afficher ces nouveaux de saisie supplémentaire dans le back-office.

Etant une fonctionnalité du coeur de Thelia, nous avons choisi de vous laisser libre de personnaliser la manière dont ces champs sont affichés. Ainsi vous pourrez définir le design et l'ergonomie souhaités sans être contraint par une structure rigide prédéfinie.


Dans le fichier ``` local/modules/MyModule/Condition/Implementation/MatchForGender.php ```

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

Inclure du code code HTML dans du code PHP n'est pas vraiment une bonne pratique.
Il serait préférable de définir la présentation des champs de saisie dans un template Smarty et l'afficher via le parseur Smarty.


7) **Enregistrement des champs de saisie** : à l'heure actuelle, Thelia est incapable de deviner quels champs diovent être sérialisés en JSON dans la colonne `serialized_conditions` de la table **coupon**.
Afin d'indiquer à Thelia comment enregistrer vos nouveaux paramètres il vous suffit de surcharger l'attribut `$availableOperators` dans la classe ```MatchForGender```de votre module.

Dans notre exemple nous autorisons uniquement la comparaison `est égal`. Cela n'aurait pas de sens dans notre cas d'autoriser d'autres formes de comparaison (plus grand que, plus petit que, etc.).


Dans le fichier ``` local/modules/MyModule/Coupon/Type/MatchForGender.php ```


```php
/** @var array Available Operators (Operators::CONST) */
protected $availableOperators = array(
    self::INPUT1 => array(
        Operators::EQUAL,
    )
);
```

Votre nouvelle condition est prête. Il ne reste plus qu'à activer le module dans le back-office.
