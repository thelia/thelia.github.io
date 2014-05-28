---
layout: home
title: Hooks - Modules
sidebar: plugin
lang: en
subnav: plugin_hook
---

<div class="page-header">
    <h1>Create hooks | <small>Hooks</small></h1>
</div>

If you want to attach your module to some Hooks, you can do this pretty easily by following these steps :


##Declare hook

in the ```config.xml``` file in your module, you have to declare a ```hooks``` tag :

```xml

<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">

        ....
        <hooks>
            <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
                <tag name="hook.event_listener" event="product.stylesheet" />
                <tag name="hook.event_listener" event="product.after.javascript.initialization" type="front" />
                <tag name="hook.event_listener" event="product.additional" type="front" method="onProductAdditionalContents" />
            </hook>   
        </hooks>

</config>
```

The ```hook``` tag represents a class responsible to handle one or more hooks.   
```xml
<hook id="module.hook.front" class="Module\Hook\Front" scope="request">
```

All attributes are mandatory. ```id``` must be unique, ```class``` is the namespace of the class in which you have your code.  


the ```tag``` tag indicates a method that will handle a defined hook :

```xml
<tag name="hook.event_listener" event="product.additional" type="front" method="onProductAdditionalContents" />
```

Some attributes here are optional. ```name="hook.event_listener"``` must be defined as well. The ```event``` attribute represents the hook *code* for which it wants to respond. The ```type``` attribute indicate the context of the hook : frontOffice (default), backOffice, pdf or email. At last, ```method``` attribute indicate the method to be called. By default, it will be based on the name of the hook. eg : for ```product.additional``` hook the method ```onProductAdditional``` will be called (*CamelCase prefixed by on*).


##Implement the class

Your class must extend ```Thelia\Core\Hook\BaseHook```. This class provides some useful methods to generate code or to retrieve objects from the session : cart, customer, ...

When a hook is called from the template, an event for this hook is created and dispatched by Thelia. If your module listens to this hook the method that you indicate in your config.xml is called with as argument the event generated.  

This event could be a ```Thelia\Core\Event\Hook\HookRenderEvent``` (*for hook function*) or ```Thelia\Core\Event\Hook\HookRenderlockEvent``` (*for hook block*). 


###Example of a hook function

We're going to display a message in the product page if the module is already in the customer cart.

In ```config.xml``` :

```xml
<hooks>
    <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
        <tag name="hook.event_listener" event="product.top" />
        <!--
        same as :
        <tag name="hook.event_listener" event="product.top" type="front" method="onProductTop" />
        -->
    </hook>   
</hooks> 
```

In our class :

```php
<?php

namespace Module\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

/**
 * Class Front
 * @package Test\Hook
 * @author Julien Chanséaume <jchanseaume@openstudio.fr>
 */
class Front extends BaseHook {

    public function onProductTop(HookRenderEvent $event)
    {
        // retrieve the product id (argument of the smarty hook function)
        $product_id = $event->getArgument('product', null);
        // get the cart from the BaseHook class
        $cart = $this->getCart();
        if (null !== $product_id && null !== $cart){
            foreach($cart->getCartItems() as $cartItem){
                if ($cartItem->getProductId() == $product_id){
                    // Add the content to the event
                    $event->add("<p>This product is already in your cart.</p>");
                    return;
                }
            }
        }
        $event->add("This product is not in your cart.");
    }

}
?>
```

and that's it. This is not very useful for now but you can imagine whatever you want.

Other methods like ```getCart``` are available thanks to BaseHook class : 

- ```getOrder``` : the order.
- ```getCustomer``` : the customer logged in.
- ```getLang``` the current lang.
- ```getCurrency``` : the current currency.
- ```getView``` : the current view displayed (category, product, contact, ...)
- ```getRequest``` : the ```Symfony\Component\HttpFoundation\Request``` object that allows you to access get, post, server parameters ...

You can also notice that the arguments of the smarty hook function/hook are accessible from the event itself thanks to the ```getArgument``` method. The event also contains the code (```getCode```) of the current event. *It's useful when several hooks point to the same method.*


###Example of a hook block

We're going to had a new tab to the additional area of the product page. In this new tab we're going to display related content to the current product.

In ```config.xml``` :

```xml
<hooks>
    <hook id="module.hook.front" class="Module\Hook\Front" scope="request">
        <tag name="hook.event_listener" event="product.additional" method="onProductAdditionalContents" />
    </hook>   
</hooks> 
```

In our class :

```php
<?php

namespace Module\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Hook\BaseHook;
use Thelia\Model\ContentQuery;
use Thelia\Model\ProductAssociatedContentQuery;

/**
 * Class Front
 * @package Test\Hook
 * @author Julien Chanséaume <jchanseaume@openstudio.fr>
 */
class Front extends BaseHook {

    public function onProductAdditionalContents(HookRenderBlockEvent $event)
    {
        $product_id = intval($event->getArgument('product', null));

        $associatedContents = ProductAssociatedContentQuery::create()->findByProductId($product_id);

        if (null !== $associatedContents){
            $html = array('<ul>');
            foreach($associatedContents as $associatedContent){
                $content = ContentQuery::create()->findPk($associatedContent->getId());
                $html[] = '<li><a href="' . $content->getUrl() . '">' . $content->getTitle() . '</a></li>';
            }
            $html[] = '</ul>';

            $event->add(array(
                "id" => "related-content",
                "title" => $this->trans("related content"),
                "content" => implode($html)
            ));
        }

    }

}
?>
```

Et voila ! The associated contents are now displayed in a new tab.

The associated template in product page :

```html
    <section id="product-tabs">
        
        {hookBlock name="product.additional" product="{product attr="id"}"}
        
        <ul class="nav nav-tabs" role="tablist">
            <li class="active" role="presentation"><a id="tab1" href="#description" data-toggle="tab" role="tab">{intl l="Description"}</a></li>

            {forHook rel="product.additional"}
                <li role="presentation"><a id="tab{$id}" href="#{$id}" data-toggle="tab" role="tab">{$title}</a></li>
            {/forHook}

        </ul>
        <div class="tab-content">
            <div class="tab-pane active in" id="description" itemprop="description" role="tabpanel" aria-labelledby="tab1">
                <p>{$DESCRIPTION|default:'N/A' nofilter}</p>
            </div>
            
            {forHook rel="product.additional"}
            <div class="tab-pane" id="{$id}" role="tabpanel" aria-labelledby="tab{$id}">
                {$content nofilter}
            </div>
            {/forHook}

        </div>
        {/hookBlock}
    </section>
```

It's great but we can make something easier by using a smarty template in our hook method.


###Use smarty template in hooks.

The ```BaseHook``` class provides the ```render``` method which do the work for you. Its behavior is not complicated.

First, you have to put your templates inside the `Template` directory. The location of the templates also depends of the type (context) of the hook. If it's a ```frontOffice``` hook then the root path of your templates will be ```local/modules/MyModule/templates/frontOffice/default/```

You can override these smarty templates in the current template. You have to put your templates in this directory (with default template) : ```template/frontOffice/default/modules/MyModule/```

The function revisited :

```php
<?php

    public function onProductAdditionalContents(HookRenderBlockEvent $event)
    {
        $product_id = intval($event->getArgument('product', null));

        if (0 !== $product_id){
            $html = $this->render("related-content.html", array("product" => $product_id));

            if ("" !== $html){
                $event->add(array(
                    "id" => "related-content",
                    "title" => $this->trans("related content"),
                    "content" => $html
                ));
            }
        }

    }

?>
```

The template (```templates/frontOffice/default/related-content.html```) :

```html
{ifloop rel="associated_content"}
<ul class="list list-content">
{loop name="associated_content" type="associated_content" product=$product }
    {loop name="content" type="content" id=$CONTENT_ID}
    <li class="list-item">
        <h4 class="list-item-title">{$TITLE}</h4>
        <p class="list-item-chapo">{$CHAPO}</p>
        <p class="list-item-more">
            <a href="{$URL}">
                {images file='img/more.png' source='MyModule'}<img src="{$asset_url}" alt="{intl l="view full article" d="mymodule.fo.default"}" />{/images}
                {intl l="view full article" d="mymodule.fo.default"}
            </a>
        </p>
    </li>
    {/loop}
{/loop}
</ul>
{/ifloop}
```

As you can see, you can use **assets** and **translations** in your smarty template. To keep the module isolated and independent, you have to use the concept of domain in the assets and translate functions.

For translate function (eg: intl) you should use the ```d``` attribute with a special code. You can learn more about the intl function on this page : [internationalization](/en/documentation/templates/i18n.html#{intl})

For assets functions (eg: image, images, stylesheets, javascripts) you should use the ```source``` attribute with your module code. 

We've added a system of overriding for assets allowing you to redefine the asset in the template you use. For example, if you use the default template, and use the image ```img/more.png``` in your smarty template, you could override this image in your template if you put your own image in ```template/frontOffice/default/modules/MyModule/img/more.png```


###Going even further

TBC