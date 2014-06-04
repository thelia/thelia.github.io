---
layout: home
title: Thelia Template Postage
sidebar: templates
lang: en
subnav: templates_postage
---

# Postage amount for cart #

The postage loop (smarty block) retrieve the postage amount of the current cart if it exists.

The default country used for get the postage amount depends on several elements :

  - the country of the delivery address of the customer related to the cart if it exists
  - the country saved in cookie if customer have changed the default country
  - the default country for the shop if it exists

The loop selects the cheapest delivery for this country.


## Outputs ##

Inside the ```postage``` block this variables are defined :

 - **$country_id**: the country id or ```null```
 - **$delivery_id**: the delivery id or ```null```
 - **$postage**: the postage amount or 0.0
 - **$is_customizable**: indicate if the postage can be customized. False When customer is signed and have a valid delivery address


## An implementation for the default front office template ##

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
</tbody>
<tfoot>
    <tr>
        <td colspan="3" class="empty">&nbsp;</td>
        <th class="total">{intl l="Total"}</th>
        <td class="total">
            <div class="total-price">
                {assign var="totalAmount" value={cart attr='total_taxed_price_without_discount'} + $postageAmount }
                <span class="price">{$totalAmount} {currency attr="symbol"}</span>
            </div>
        </td>
    </tr>
</tfoot>

...

{% endhighlight %}

</div>

And the associated javascript to trigger the form submission. It allows the customer to change the default country. His choice is saved in a cookie by the ```Front\Controller\FrontCrontroller::changeCountry``` method.

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
