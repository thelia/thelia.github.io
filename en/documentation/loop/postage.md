---
layout: loop
title: Postage amount for cart
description:
    - The postage loop (smarty function) retrieve the postage amount of the current cart if it exists.
    - the default country used for get the postage amount depends on several elements :
        - the country of the delivery address of the customer related to the cart if it exists
        - the country saved in cookie if customer have changed the default country
        - the default country for the shop if it exists
     - the loop selects the cheapest delivery for this country.
sidebar: loop
lang: en
subnav: loop_postage
uses_global_argument: false
returns_global_outputs: { countable : false, timestampable : false, versionable : false }
type: auth
outputs :
    - {name: "$country_id", description: "The country id"}
    - {name: "$delivery_id", description: "The delivery id"}
    - {name: "$postage", description: "The postage amount or 0.0"}
    - {name: "$is_customizable", description: "Indicate if the postage can be customized. False When customer is signed and have a valid delivery address"}
---

An implementation for the default template :

<div class="code large-12">

{% highlight smarty %}

...

{postage}
{assign var="postageAmount" value=$postage }
<tr>
    <td class="product" colspan="2">
        <form action="{url path="/cart/country"}" class="form-inline" method="post">
            <h3>
                {intl l="Estimated shipping "}
                {if $is_customizable == false}
                    {loop type="country" name="countryLoop" id="$country_id"}
                    {intl l="for"} {$TITLE}
                    {/loop}
                {/if}
            </h3>
            {if $is_customizable}
            <div>
                <label for="cart-country">{intl l="Select your country:"}</label>
                <select id="cart-country" name="country">
                {loop type="country" name="countryLoop" with_area="true"}
                    <option value="{$ID}" {if $ID == $country_id }selected="selected" {/if}>{$TITLE}</option>
                {/loop}
                </select>
                <a class="btn btn-change-country" href="#"><i class="icon-refresh"></i> {intl l="update"}</a>
            </div>
            {/if}
            {if $delivery_id != 0 }
            <div>
                {intl l="with:"} {loop type="delivery" name="deliveryLoop" id=$delivery_id}{$TITLE} {/loop}
            </div>
            {else}
            <div class="alert alert-danger">
                {intl l="No deliveries available for this cart and this country"}
            </div>
            {/if}
        </form>
    </td>
    <td class="unitprice">{$postage} {currency attr="symbol"}</td>
    <td class="qty">-</td>
    <td class="subprice">{$postage} {currency attr="symbol"}</td>
</tr>
{/postage}

...

{% endhighlight %}

</div>

and the associated javscript to trigger the form submission :

<div class="code large-12">

{% highlight smarty %}

<script>
    $(document).ready(function(){
        $(".btn-change-country").click(function(e){
            e.preventDefault();
            var $form = $(this).parents('form');
            $form.submit();
        })
    });
</script>

{% endhighlight %}

</div>
