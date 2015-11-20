---
layout: loop
title: Attribute combination Loop
description: Attribute combination loop lists attribute combinations.
sidebar: loop
lang: en
subnav: loop_attribute_combination
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: attribute_combination
arguments :
    - {name: "product_sale_elements", description: "A single product sale elements id.", example: "product=\"2\"", mandatory: "true"}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {
            name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "alpha",
            expected_values: [
                {name: "alpha",             description: "alphabetical order on attribute title"},
                {name: "alpha_reverse",     description: "reverse alphabetical order on attribute title"},
                {name: "manual",            description: "order by ascending position",     from_version: "2.3"},
                {name: "manual_reverse",    description: "order by descending position",    from_version: "2.3"}
            ]
          }

outputs :
    - {name: "$LOCALE", description: "the locale used for this loop"}
    - {name: "$ATTRIBUTE_ID", description: "the attribute id"}
    - {name: "$ATTRIBUTE_TITLE", description: "the attribute title"}
    - {name: "$ATTRIBUTE_CHAPO", description: "the attribute chapo"}
    - {name: "$ATTRIBUTE_DESCRIPTION", description: "the attribute description"}
    - {name: "$ATTRIBUTE_POSTSCRIPTUM", description: "the attribute postscriptum"}
    - {name: "$ATTRIBUTE_AVAILABILITY_ID", description: "the attribute availability id"}
    - {name: "$ATTRIBUTE_AVAILABILITY_TITLE", description: "the attribute availability title"}
    - {name: "$ATTRIBUTE_AVAILABILITY_CHAPO", description: "the attribute availability chapo"}
    - {name: "$ATTRIBUTE_AVAILABILITY_DESCRIPTION", description: "the attribute availability description"}
    - {name: "$ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM", description: "the attribute availability postscriptum"}
examples :
    - {description: "I want to .."}
---

<div class="description large-12">
    I want to display all products sale elements for current product and show all the attribute combinations which matched it.
</div>

<div class="code large-12">

{% highlight smarty %}


{loop name="pse" type="product_sale_elements" product="$PRODUCT_ID"}
    <div>
        {loop name="combi" type="attribute_combination" product_sale_elements="$ID"}
        {$ATTRIBUTE_ID}. {$ATTRIBUTE_TITLE} = {$ATTRIBUTE_AVAILABILITY_ID}. {$ATTRIBUTE_AVAILABILITY_TITLE}<br />
        {/loop}
        <br />{$WEIGHT} g
        <br /><strong>{if $IS_PROMO == 1} {$PROMO_PRICE} € (instead of {$PRICE}) {else} {$PRICE} € {/if}</strong>
        <br /><br />
        Add
        <select>
            {for $will=1 to $QUANTITY}
            <option>{$will}</option>
            {/for}
        </select>
        to my cart
    </div>
{/loop}


{% endhighlight %}

</div>&nbsp;
