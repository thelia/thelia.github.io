---
layout: form
title: choose a payment method
form_name: thelia.order.payment
sidebar: form
subnav: form_list_orderpayment
fields:
    - { name: "invoice-address", mandatory: "true", description: "invoice address id"}
    - { name: "payment-module", mandatory: "true", description: "payment module id"}

lang: en
---
```
{form name="thelia.order.payment"}
<form id="form-cart-payment" action="{url path="/order/invoice"}" method="post" {form_enctype form=$form}>

    {form_hidden_fields form=$form}

    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}
    <div id="cart-address">
        {form_field form=$form field='invoice-address'}
        <div class="panel">
            <div class="panel-heading">{intl l="Billing address"}</div>

            {if $error}
                <span class="help-block"><span class="icon-remove"></span> {$message}</span>
            {/if}

            <div class="panel-body">

            {loop type="address" name="invoice-address"}
                <div class="radio">
                    <label for="invoice-address_{$ID}">
                        <input type="radio" name="{$name}" id="invoice-address_{$ID}" value="{$ID}"{if $DEFAULT} checked="checked"{/if}>
                        <span class="fn">{loop type="title" name="customer.title.info" id=$TITLE}{$SHORT}{/loop} {$LASTNAME|upper} {$FIRSTNAME|ucwords}</span>
                        <span class="org">{$COMPANY}</span>
                        <address class="adr">
                            <span class="street-address">{$ADDRESS1}</span><br>
                            {if $ADDRESS2 != ""}
                                <span class="street-address">{$ADDRESS2}</span><br>
                            {/if}
                            {if $ADDRESS3 != ""}
                                <span class="street-address">{$ADDRESS3}</span><br>
                            {/if}
                            <span class="postal-code">{$ZIPCODE}</span>
                            <span class="locality">{$CITY}, <span class="country-name">{loop type="country" name="customer.country.info" id=$COUNTRY}{$TITLE}{/loop}</span></span>
                        </address>
                    </label>
                </div>
            {/loop}
            </div>

        </div>
    </div>

    {/form_field}

    {form_field form=$form field='payment-module'}

    <div id="payment-method" class="panel">
        <div class="panel-heading">{intl l="Choose your payment method"}</div>

        {if $error}
            <span class="help-block"><span class="icon-remove"></span> {$message}</span>
        {/if}

        <div class="panel-body">
            <ul class="list-group">
                {loop type="payment" name="payments" force_return="true"}
                    {assign "paymentModuleId" $ID}
                    <li class="list-group-item text-left">
                            <label for="payment_{$paymentModuleId}">
                                <input type="radio" name="{$name}" id="payment_{$paymentModuleId}" value="{$paymentModuleId}" {if $LOOP_TOTAL ==1 && $LOOP_COUNT == 1}checked{/if}>

                                {loop type="image" name="paymentspicture" source="module" source_id=$ID force_return="true" width="100" height="72"}
                                    <img src="{$IMAGE_URL}" alt="{intl l="Pay with %module_title" module_title={$TITLE}}">
                                {/loop}

                                {$TITLE}
                            </label>
                    </li>
                {/loop}
            </ul>
        </div>
    </div>

    {/form_field}

    <a href="{url path="/order/delivery"}" role="button" class="btn btn-back"><span>{intl l="Back"}</span></a>
    <button type="submit" class="btn btn-checkout-next"><span>{intl l="Next Step"}</span></button>
</form>
{/form}
```