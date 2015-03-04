---
layout: home
title: Create Hooks - Modules
sidebar: plugin
lang: en
subnav: plugin_hooks_create_own
---

<div class="page-header">
    <h1>Hooks : <small>Create your own hook</small></h1>
</div>

<div class="alert alert-warning">
<p>This functionality is only available since version 2.1</p>
</div>

## The template entry point

To define a hook in a module template, you have to use the smarty function "hook" with a paramater "name".

The name parameter will match with the "event" one of the [service tag](hook_create.html#example-of-a-hook-function).

```smarty
{hook name="my_hook_name"}
```

<div class="alert alert-info">
<h4>Naming convention</h4>
<p>The name of the hook should be composed of 2 parts separated by a dot : the first one is the name of the page, the second is the position in the page. Words can be separated by dash :</p>
<ul>
    <li><strong>product.top</strong> : at the top of the product page</li>
    <li><strong>product.javascript-initialization</strong> : to initialize javascript (after javascript include) in the product page</li>
</ul>
</div>

## Declare your hook

Now that you have your template entry point, you need to declare your hook's type.

To do this, override the method "getHooks" of your module class.

You have to return a collection of associative array composed of those keys:

- __code__ : The hook name
- __type__ : The hook type, this value correspond to ```Thelia\Core\Template\TemplateDefinition``` constants: ```FRONT_OFFICE```, ```BACK_OFFICE```, ```PDF``` and ```EMAIL```
- title : This one can be a string, or an associative array with the locale as key.
- description : Same as title
- chapo : Same as title
- active : Boolean value, if true the hook will be automatically activated (default: false)
- block : Boolean value, set it at true if your hook is a block (default: false)
- module : Boolean value, set it at true if your hook is [relative to a module](index.html#module) (default: false)

<small> keys marked with an asterisk (*) are mandatory </small>

Example:

```php
<?php

namespace MyModule;

use Thelia\Module\BaseModule;

class MyModule extends BaseModule 
{
  public function getHooks() 
  {
     return array(
    
          // Only register the title in the default language
          array(
              "type" => TemplateDefinition::BACK_OFFICE,
              "code" => "my_super_hook_name",
              "title" => "My hook",
              "description" => "My hook is really, really great",
          ),
     
         // Manage i18n
          array(
              "type" => TemplateDefinition::FRONT_OFFICE,
              "code" => "my_hook_name",
              "title" => array(
                  "fr_FR" => "Mon Hook",
                  "en_US" => "My hook",
              ),
              "description" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "chapo" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "block" => true,
              "active" => true
          )
     );
  }
}
```
