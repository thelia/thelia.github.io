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
class must extends the [Thelia\Tpex\Element\Loop\BaseLoop](/api/class-Thelia.Tpex.Element.Loop.BaseLoop.html)
abstract class, if not an exception is thrown.
**If you name your loop like a default loop (eg : Product), your loop will replace the default loop.**

##How to implement a loop ?

Your loop can be anywhere (Thanks to namespace) in your plugin but it's better to create a Loop directory and put all
 your loops in this directory.

 As see before, you must have to extends the [Thelia\Tpex\Element\Loop\BaseLoop](/api/class-Thelia.Tpex.Element.Loop
 .BaseLoop.html) abstract class and implement *exec* and *defineArgs* functions :

 ```
 public function defineArgs()
 public function exec($text, $args);
 ```

 The *exec* method is used by Tpex when it wants to render the template. The $text args contains all the substitutions
 to replace (for example #TITLE is a substitution).

 The defineArgs method define all args used in your loop. Args can be mandatory, optional, with default value,
 etc. This method must return an array. Keys are arg name, value can be many things :

*   no value => this arg is mandatory
*   "optional" => this arg is optional and default value is null
*   a value (eg: "foo", 3) => the default value for this arg

 If you don't define your args here, you can't use their in you loop. All args are accessible like classe properties,
  so in your class, in the exec method you can access to you args through $this (eg : $this->param1 if param1 is an
  arg).

  For more readability, you can declare all this class property (and it's better for you IDE autocompletion)

 Here an example for my plugin "MyPlugin" and my loops in the loop directory. This is the architecture :

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

 class MyLoop extends BaseLoop {

    public $param1;
    public $param2;
    public $param3;

     public function defineArgs()
     {
         return array(
             "param1",
             "param2" => "optional",
             "param3" => 3
         );
     }

     public function exec($text, $args)
     {

         $res = "";

         if ($this->param1 == "foo") {
            $res = str_replace("#FOO","bar",$text);
         }

         return $res;
     }
 }

 ```

 Of course you can use all classes you want in your own class, like model class. All Thelia's model classes are in the
 namespace Thelia\Model

 So if I want to add some search in my DB and return results from product table I can use something like this :

 ```php
 <?php
 namespace MyPlugin\Loop;

  use Thelia\Tpex\Element\Loop\BaseLoop;
  use Thelia\Model\ProductQuery;

  class MyLoop extends BaseLoop {

      public $ref;

      public function defineArgs()
      {
        return array(
            "ref"
        );
      }

      public function exec($text, $args)
      {

          $products = ProductQuery::create()
                        ->filterByRef($this->ref)
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
