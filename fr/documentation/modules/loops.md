---
layout: home
title: Boucles - Modules
sidebar: plugin
lang: fr
subnav: plugin_loop
---

<div class="page-header">
    <h1>Les boucles</h1>
</div>

## Comment déclarer des boucles ?

```xml
<loops>
    <loop name="MyModule_Product" class="MyModule\Loop\Product" />
    <loop name="MyModule_MyLoop" class="MyModule\Loop\MyLoop" />
</loops>
```
Vous devez créer autant de boucles qu'il en existe dans le noeud `loops` du fichier de configuration. Dans l'exemple ci-dessus 2 bloucles sont déclarées. Les attributs `name` et `class` sont obligatoires.

L'attribut `name` correspond au nom de la boucle telle qu'elle devra être appellée dans le template (dans Thelia v1 : ```<THELIA_name
type="MyModule_Product">...</THELIA_name>```, dans Thelia v2 ```{loop name="MyModule_MyLoop"}....{/loop}```).

L'attribut `class`correspond à la classe qui sera exécutée par le moteur de template. Cette class coit étendre la classe abstraite [Thelia\Core\Template\Element\BaseLoop](/api/master/Thelia/Core/Template/Element/BaseLoop.html), dans le cas contraire une exception sera levée.

**Si le nom de votre boucle est le même quecelui d'une boucle de Thelia (ex : produit), votre boucle remplacera celle de Thelia.**


## Comment implémenter une boucle ?

Votre boucle peut être placée n'importe où dans votre module (grâce au namespace), cependant une bonne pratique est de créer un répertoire `Loops` dédié et y ranger toutes vos boucles.

Vous devez étendre la classe abstraite [Thelia\Core\Template\Element\BaseLoop](/api/master/Thelia/Core/Template/Element/BaseLoop.html) et implémenter l'une des interfaces suivantes ```Thelia\Core\Template\Element\PropelSearchLoopInterface``` ou ```Thelia\Core\Template\Element\ArraySearchLoopInterface```. Les méthodes suivantes devront donc être définies *getArgDefinitions*, *parseResults* et l'une des méthodes suivantes *buildModelCriteria* ou *buildArray*.


NB : Vous pouvez également étendre la classe BaseI18nLoop qui elle même étend la classe BaseLoop. Des outils de gestion de l'internationalisation seront alors fournies à votre boucle.

### Quelle est la différence entre *PropelSearchLoopInterface* et *ArraySearchLoopInterface*

C'est une question de type de données. Si les données retrournées par votre boucle proviennent de la base de données vous devez implémenter *PropelSearchLoopInterface* et définier la méthode *buildModelCriteria* qui renvoie un *Propel\Runtime\ActiveQuery\ModelCriteria*. Au contraire si votre boucle retourne des valeurs provenant d'un tableau vous devez implémenter *ArraySearchLoopInterface* et définir une méthode *buildArray* qui renvoie un tableau.

La méthode *parseResults* est utilisée pour le rendu du template. Elle doit retourner une instance de [Thelia\Core\Template\Element\LoopResult](http://localhost:4000/api/master/Thelia/Core/Template/Element/LoopResult.html).

La méthode defineArgs définit tous les arguments utilisés par votre boucle. Les arguments peuvent être obligatoire ou optionnels, avoir des des valeurs par défaut etc. Cette méthode doit retourner un [Thelia\Type\TypeCollection](). Les types dans la collection doivent implémenter l'interface [Thelia\Type\TypeInterface](). La liste des types possibles est disponible ici [available types](/documentation/features/types).

Si vous ne definissez pas vos arguments ici, vous ne pourrez pas les utiliser comme paramètres dans votre boucle. Tous les arguments sont accessibles dans la méthodes ```parseResults```.

La class Baseloop class declare 3 propriétés publiques qui pourront être surchargées dans votre boucle.

```php
<?php
public $countable = true;
public $timestampable = false;
public $versionable = false;
```

En fonction de la valeur de ces propriétés (`true` ou `false`), la boucle retournera les variables de sorties suivantes :

```php
<?php
if($countable === true)
```

* LOOP_COUNT
* LOOP_TOTAL

```php
<?php
if($timestampable === true) //available if your table is timestampable
```

* CREATE_DATE
* CREATE_UPDATE

```php
<?php
if($versionable === true) //available if your table is versionable
```

* VERSION
* VERSION_DATE
* VERSION_AUTHOR

### Example 1

Ci-dessous un example pour le modules "MyModule" et la boucle MyLoop définie dans le dossier Loop. L'organisation des fichiers est la suivante :

 ```
 \local
   \modules
     \MyModule
       ...
       \Loop
         MyLoop.php
 ```

 MyLoop.php file :

 ```php
 <?php
 namespace MyModule\Loop;

 use Thelia\Core\Template\Element\BaseLoop;
 use Thelia\Core\Template\Element\LoopResult;
 use Thelia\Core\Template\Element\LoopResultRow;

 class MyLoop extends BaseLoop implements ArraySearchLoopInterface {

    public $countable = true;
    public $timestampable = false;
    public $versionable = false;

     public function defineArgs()
     {
         return new ArgumentCollection(
             Argument::createIntListTypeArgument('start', 0),
             Argument::createIntListTypeArgument('stop', null, true)
         );
     }

     public function buildArray()
     {
         $items = array();

         $start = $this->getStart();
         $stop = $this->getStop();

         for($i=$start; $i<=$stop; $i++ {
            $items[] = $i;
         }

         return $items;

     }

     public function parseResults(LoopResult $loopResult)
     {
         foreach ($loopResult->getResultDataCollection() as $item) {

             $loopResultRow = new LoopResultRow();

             $loopResultRow->set("MY_OUTPUT", $item);

             $loopResult->addRow($loopResultRow);
         }

         return $loopResult;
     }
 }

 ```

Vous pouvez bien sûr utiliser toutes les classes que vous souhaitez dans votre boucle comme par exemple la classe d'un modèle. Tous les modèles Thelia (Product, Category, etc.) sont dans le namespace Thelia\Model.

Donc si vous voulez effectuer une recherche dans la base de données et retrouner les résultats de la table des produits vous pouvez utiliser le code suivant :


 ```php
<?php
/**
*
* return Thelia\Core\Template\Element\LoopResult
*/
public function buildModelCriteria()
{
    return $products = ProductQuery::create()
         ->find();
}

public function parseResults(LoopResult $loopResult)
{
     foreach ($loopResult->getResultDataCollection() as $product) {

        $loopResultRow = new LoopResultRow($product);

        $loopResultRow->set("REF", $product->getRef());

        $loopResult->addRow($loopResultRow);
    }

    return $loopResult;
}
```
