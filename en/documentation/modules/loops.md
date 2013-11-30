---
layout: home
title: Loops - Modules
sidebar: plugin
lang: en
subnav: plugin_loop
---

<div class="page-header">
    <h1>Modules : <small>Loops</small></h1>
</div>

##How to declare loops ?

```xml
<loops>
    <loop name="MyModule_Product" class="MyModule\Loop\Product" />
    <loop name="MyModule_MyLoop" class="MyModule\Loop\MyLoop" />
</loops>
```

You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and
class properties are mandatory. The name is the loop name used into the template ( like in Thelia v1 : ```<THELIA_name
type="MyModule_Product">...</THELIA_name>```), class property is the class executed by the template engine. This
class must extends the [Thelia\Core\Template\Element\BaseLoop](/api/master/Thelia/Core/Template/Element/BaseLoop.html)
abstract class, if not an exception is thrown.
**If you name your loop like a default loop (eg : Product), your loop will replace the default loop.**

##How to implement a loop ?

Your loop can be anywhere (Thanks to namespace) in your module but it's better to create a Loop directory and put all your loops in this directory.

You have to extends the [Thelia\Core\Template\Element\BaseLoop](/api/master/Thelia/Core/Template/Element/BaseLoop.html) abstract class and implement *exec* and *defineArgs* methods :

```
public function defineArgs()
public function exec(&$pagination);
```

The *exec* method is used to render the template. It must return a [Thelia\Core\Template\Element\LoopResult](http://localhost:4000/api/master/Thelia/Core/Template/Element/LoopResult.html) instance.

The defineArgs method defines all args used in your loop. Args can be mandatory, optional, with default value, etc. This method must return an [Thelia\Core\Template\Loop\ArgumentCollection](). ArgumentCollection contains [Thelia\Core\Template\Loop\Argument]() which contains a [Thelia\Type\TypeCollection](). Types in the collection must implement [Thelia\Type\TypeInterface](). You can check here the [available types](/documentation/features/types).

If you don't define your arguments here, you can't use them in your new loop. All arguments are accessible in the ```exec``` method.

Baseloop class declares 3 public properties you might overload in your new loop.

```php
public $countable = true;
public $timestampable = false;
public $versionable = false;
```

With these properties set to true, the loop will automatically render - or not - the following outputs :

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

###Example 1

Here an example for my module "MyModule" and my loops in the loop directory. This is the architecture :

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

 class MyLoop extends BaseLoop {

    public $countable = false;
    public $timestampable = false;
    public $versionable = false;

     public function defineArgs()
     {
         return new ArgumentCollection(
             Argument::createIntListTypeArgument('id'),
             Argument::createBooleanTypeArgument('current', false),
             new Argument(
                 'order',
                 new TypeCollection(
                     new EnumListType(
                         array(
                             'id', 'id_reverse',
                             'name', 'name_reverse',
                             'code', 'code_reverse',
                             'symbol', 'symbol_reverse',
                             'rate', 'rate_reverse',
                             'is_default', 'is_default_reverse',
                             'manual', 'manual_reverse')
                     )
                     ),
                 'manual'
             )
         );
     }

     /**
     *
     * return Thelia\Core\Template\Element\LoopResult
     */
     public function exec(&$pagination)
     {

         $loopResult = new LoopResult();

         for($i=0; $i<5; $i++) {
            $loopResultRow = new LoopResultRow();
            $loopResultRow->set("FOO", $i);

            $loopResult->addRow($loopResultRow);
         }

         return $loopResult;
     }
 }

 ```

 Of course you can use all classes you want in your own loop class, like model class. All Thelia's model classes are in the
 namespace Thelia\Model

 So if I want to add some search in my DB and return results from product table I can use something like this :

 ```php
<?php
/**
*
* return Thelia\Core\Template\Element\LoopResult
*/
public function exec(&$pagination)
{
    $products = ProductQuery::create()
         ->find();

    $loopResult = new LoopResult($products); //pass your model collection to LoopResult to make the loop countable

     foreach($products as $product) {
        $loopResultRow = new LoopResultRow(
            $loopResult,
            $product,
            $this->versionable,
            $this->timestampable,
            $this->countable
        );

        //pass your LoopResult and your model object to LoopResultRow to make the loop countable/editable/timestampable
        $loopResultRow->set("REF", $product->getRef());

        $loopResult->addRow($loopResultRow);
    }

    return $loopResult;
}
```
