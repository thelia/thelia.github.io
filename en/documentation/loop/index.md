---
layout: home
title: About Loops
sidebar: loop
lang: en
subnav: loop_index
---

#{{ page.title }}

Loops are the most convenient feature in Thelia for front developers. Already there in Thelia's first version, they deserved a makeover for Thelia v2.

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

By default, 10 pages are displayed. You can change this value using ```limit``` parameter.

List of output parameters :
<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <thead>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    $PAGE
                </td>
                <td>
                    current page displayed. This value is equal to the page loop parameter.
                </td>
            </tr>
            <tr>
                <td>
                    $END
                </td>
                <td>
                    Max page number displayed
                </td>
            </tr>
            <tr>
                <td>
                    $CURRENT
                </td>
                <td>
                    on each loop, this value is incremented. So it's started with the $PAGE value and end with the $END value
                </td>
            </tr>
            <tr>
                <td>
                    $LAST
                </td>
                <td>
                    Max page number. If for a loop, there are 761 pages possible, the value of $LAST is 761
                </td>
            </tr>
            <tr>
                <td>
                    $PREV
                </td>
                <td>
                    previous page number. This value is always $PAGE-1 if $PAGE is superior to 1. The value is 1 therefore
                </td>
            </tr>
            <tr>
                <td>
                    $NEXT
                </td>
                <td>
                    next page number. This value is always $PAGE+1 if $PAGE is inferior to $LAST. The value is $LAST therefore
                </td>
            </tr>
        </tbody>
    </table>
</div>

```smarty
<div class="text-center">
    <ul class="pagination pagination-centered">
    {pageloop rel="customer_list" limit="20"}
        {if $PAGE == $CURRENT && $PAGE > 2}
            <li><a href="{url path="/admin/customers" page=$PREV}">&lsaquo;</a></li>
        {/if}

        {if $PAGE != $CURRENT}
            <li><a href="{url path="/admin/customers" page="{$PAGE}"}">{$PAGE}</a></li>

        {else}
            <li class="active"><a href="#">{$PAGE}</a></li>
        {/if}

        {if $PAGE == $END && $PAGE < $LAST}
            <li><a href="{url path="/admin/customers" page=$NEXT}">&rsaquo;</a></li>
        {/if}
    {/pageloop}
    </ul>
</div>
```