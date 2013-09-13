---
layout: loop
title: Accessory Loop
description: Accessory loop lists accessories of a product. It behaves like a product loop therefore you might use all <a href="/documentation/loop/product.html">product loop</a> arguments and outputs.
sidebar: loop
subnav: loop_accessory
uses_global_argument: false
returns_global_outputs: { countable : false, timestampable : false, versionable : false }
type: accessory
arguments :
    - {name: "product", description: "A single product id.", example: "product=\"2\"", mandatory: "true"}
    - {
            name: "order", description: "A list of values", example: "order=\"accessory,max_price\"", default: "accessory",
            expected_values: [
                {name: "accessory",                                                                 description: "manual accessory order"},
                {name: "accessory_reverse",                                                         description: "reverse manual accessory order"},
                {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> orders",  description: ""}
            ]
          }
    - {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> arguments", example: "order=\"min_price\", max_price=\"100\""}
outputs :
    - {name: "all <a href=\"/documentation/loop/product.html\">product loop</a> outputs"}
---

<div class="description large-12">
    I want to display all accessories which are in category 1, order by ascending price, for all products in category 2.
</div>

<div class="code large-12">

{% highlight smarty %}

<ul>
{loop type="product" name="products_in_category_2" category="2"}
    {loop type="accessory" name="accessories_in_category_1_order_by_min_price" category="1" product="$ID" order="min_price"}
        <li>$TITLE ($REF)</li>
    {/loop}
{/loop}
</ul>

{% endhighlight %}

</div>&nbsp;