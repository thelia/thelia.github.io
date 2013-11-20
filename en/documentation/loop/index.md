---
layout: home
title: About Loops
sidebar: loop
subnav: loop_index
---

#{{ page.title }}

Loops are the most convenient feature in Thelia for front developers. Already there in Thelia's first version, the deserved a makeover for Thelia v2.

Loops allow to gather data from your shop and display them in your front view. In Thelia v2, loops are a <a href="http://www.smarty.net" target="_blank">Smarty v3</a> plugin.

###Classic loop

Here is a peace of html code which intends to list 4 random products from your shop.

```html
<div>
    <div class="product-block">
        PRODUCT 0 (ref : 0535233)<br />
        The ideal product to have fun.<br />
        <strong>Afford it for 70 €</strong>
    </div>
    <div class="product-block">
        PRODUCT 1 (ref : 1245152)<br />
        A very beautiful product to make you happy.<br />
        <strong>Afford it for only 10 € (instead of 100) !</strong>
    </div>
    <div class="product-block">
        PRODUCT 2 (ref : 9437252)<br />
        A perfect product to procrastinate.<br />
        <strong>Afford it for 20 €</strong>
    </div>
    <div class="product-block">
        PRODUCT 4 (ref : 3566236)<br />
        The product which will change your life.<br />
        <strong>Afford it for only 1 000 € (instead of 1 000 000) !</strong>
    </div>
</div>
```
&nbsp;

How to make this peace of code dynamic ? Gathering the products you set up in your Thelia v2 back-office ?

Just use a Thelia <a href="product.html" target="_blank">product loop</a> :

```smarty
<div>
    {loop type="product" name="my_product_loop" limit="4" order="random"}
    <div class="product-block">
        {$TITLE} (ref : {$REF})<br />
        {$DESCRIPTION}<br />
        <strong>
            {if $IS_PROMO == 1}
                Afford it for only {$PROMO_PRICE} € (instead of {$PRICE}) !
            {else}
                Afford it for {$PRICE} €
            {/if}
        </strong>
    </div>
    {/loop}
</div>
```
&nbsp;

And what if you want only the products you tagged as new ? And which are from category 3 and 5 ? And whose price is at least 100 € ?

No problem ! Here you are :

```smarty
<div>
    {loop type="product" name="my_product_loop" limit="4" order="random" new="true" category="3,5" min_price="100"}
    <div class="product-block">
        [...]
    </div>
    {/loop}
</div>
```
&nbsp;

You can of course use a loop into another loop and pass a loop output to another loop parameter

```smarty
{loop type="category" name="my_category_loop"}
    <h2>{$TITLE}</h2>
        {loop type="product" name="my_product_loop" category="{$ID}"}
        <div class="product-block">
            [...]
        </div>
        {/loop}
{/loop}
</div>
```
&nbsp;

Thelia 2 provides a lot of loop types. You can see all the loops and their parameters / outputs in the <strong>Loops</strong> sidebar menu.

###Conditional loop

Conditional loops allow to define a different behaviour depending on if the a classic loop displays something or not.

A conditional loop is therefore linked to a classic loop using the ```rel``` attribute which must match a classic loop ```name``` attribute.

For example, you want to display all the associated content of a product in an unorder list (ul). If the product has no associated contents you won't display empty ```<ul></ul>```. And you want a message to inform there is no available content. You can use a conditional loop to do this.

 ```smarty
{ifloop rel="my_associated_content_loop"}
    Associated contents for this product :
    <ul>
        {loop type="associated_content" name="my_associated_content_loop" product="12"}
            <li>
                <a href="{$URL}">{$TITLE}</a>
            </li>
        {/loop}
    </ul>
{/ifloop}
{elseloop rel="my_associated_content_loop"}
    No associated content for this product
{/elseloop}
 ```
 &nbsp;

###Page loop

Page loops can be use on any classic loop which has ```page``` parameter. Page loops list all the pages the classic loop needs to display all it's returns.

A page loop is therefore linked to a classic loop using the ```rel``` attribute which must match a classic loop ```name``` attribute.

```smarty
{pageloop rel="my_product_loop"}
    {if $PAGE != $CURRENT}
        <a href="{url view="category" page="4"}">{$PAGE}</a>
    {else}
        { {$PAGE} }
    {/if}
    {if $PAGE != $LAST}
        -
    {/if}
{/pageloop}
```