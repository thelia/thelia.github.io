---
layout: home
title: Loops - Plugins
sidebar: plugin
subnav: plugin_loop
---

#Loops

##How to declare loops ?

```xml
<loops>
    <loop name="MyPlugin_Product" class="MyPlugin\Loop\Product" />
    <loop name="MyPlugin_MyLoop" class="MyPlugin\Loop\MyLoop" />
</loops>
```

You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and
class properties are mandatory. The name is the loop name used into the template ( ```<THELIA_name
type="MyPlugin_Product">...</THELIA_name>```), class property is the class executed by the template engine. This
class must extends the Thelia\Tpex\Element\Loop\BaseLoop abstract class, if not an exception is thrown.
If you name your loop like a default loop (eg : Product), your loop will replace the default loop.

##How to implement a loop ?

Your loop can be anywhere (Thanks to namespace) in your plugin but it's better to create a Loop directory and put all
 your loops in this directory.

 As see before, you must have to extends the Thelia\Tpex\Element\Loop\BaseLoop abstract class and implement exec
 function :

 ```
 public function exec($text, $args);
 ```

 The exec method is used by Tpex when it wants to render the template. The $text args contains all the substitutions
 to replace (for exemple #TITLE is a substitution) and $args all the arguments use by the loop. Reading arguments is
 possible using Thelia\Tpex\Tools::extractValueParam.

 Here an exemple for my plugin "MyPlugin" and my loops in the loop directory. This is the architecture :

 ```
 \local
   \plugins
     \MyPlugin
       ...
       \Loop
         MyLoop.php
 ```

 MyLoop.php file :

 ```php
 <?php
 namespace MyPlugin\Loop;

 use Thelia\Tpex\Element\Loop\BaseLoop;
 use Thelia\Tpex\Tools;

 class MyLoop extends BaseLoop {

     public function exec($text, $args)
     {

         $param1 = Tools::extractValueParam("param1", $args);

         $res = "";

         if ($param1 == "foo") {
            $res = str_replace("#FOO","bar",$text);
         }

         return $res;
     }
 }

 ```

 Of course you can use all classes you want in your class, like model class. All Thelia's model classes are in the
 namespace Thelia\Model

 So if I want to add some search in my BDD and return results from my product table I can use something like this :

 ```php
 <?php
 namespace MyPlugin\Loop;

  use Thelia\Tpex\Element\Loop\BaseLoop;
  use Thelia\Tpex\Tools;
  use Thelia\Model\ProductQuery;

  class MyLoop extends BaseLoop {

      public function exec($text, $args)
      {

          $ref = Tools::extractValueParam("ref", $args);

          $products = ProductQuery::create()
                        ->filterByRef($ref)
                        ->find();

          $res = "";

          foreach ($products as $product) {
                $tmp = str_replace("#TITLE", $product->getTitle(), $text);
                $tmp = str_replace("#PRICE", $product->getPrice(), $tmp);

                $res .= $tmp
          }

          return $res;
      }
  }
```
