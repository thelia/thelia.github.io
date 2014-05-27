---
layout: form
title: choose a delivery method
form_name: thelia.order.delivery
sidebar: form
subnav: form_list_orderdelivery
fields:
    - { name: "delivery-address", mandatory: "true", description: "delivery address id"}
    - { name: "delivery-module", mandatory: "true", description: "delivery module id"}

lang: en
---
```
{form name="thelia.order.delivery"}
<form id="form-cart-delivery" action="{url path="/order/delivery"}" method="post" {form_enctype form=$form}>

    {form_hidden_fields form=$form}

    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}

    {form_field form=$form field='delivery-address'}

    <div id="delivery-address" class="panel">
        <div class="panel-body">
            <table class="table table-address" role="presentation" summary="Address Books">
                <tbody>
                {loop type="address" name="customer.addresses" customer="current"}
                <tr>
                    <th>
                        <div class="radio">
                            <label for="delivery-address_{$ID}">
                                <input type="radio" class="js-change-delivery-address" data-country="{$COUNTRY}" name="{$name}" value="{$ID}" id="delivery-address_{$ID}">
                                {$LABEL|default:"{intl l='Address %nb' nb={$LOOP_COUNT}}"}
                            </label>
                        </div>
                    </th>
                    <td>
                        <ul class="list-address">
                            <li>
                                <span class="fn">{loop type="title" name="customer.title.info" id=$TITLE}{$SHORT}{/loop} {$LASTNAME|upper} {$FIRSTNAME|ucwords}</span>
                                <span class="org">{$COMPANY}</span>
                            </li>
                            <li>
                                <address class="adr">
                                    <span class="street-address">{$ADDRESS1}</span>
                                    {if $ADDRESS2 != ""}
                                        <br><span class="street-address">{$ADDRESS2}</span>
                                    {/if}
                                    {if $ADDRESS3 != ""}
                                        <br><span class="street-address">{$ADDRESS3}</span>
                                    {/if}
                                    <br><span class="postal-code">{$ZIPCODE}</span>
                                    <span class="locality">{$CITY}, <span class="country-name">{loop type="country" name="customer.country.info" id=$COUNTRY}{$TITLE}{/loop}</span></span>
                                </address>
                            </li>
                            <li>
                                {if $CELLPHONE != ""}
                                    <span class="tel">{$CELLPHONE}</span>
                                {/if}
                                {if $PHONE != ""}
                                    <br><span class="tel">{$PHONE}</span>
                                {/if}
                            </li>
                        </ul>
                    </td>
                </tr>
                {/loop}
                </tbody>
            </table>
        </div>
    </div>

    {/form_field}

    {form_field form=$form field='delivery-module'}

    <div id="delivery-method" class="panel">
        <div class="panel-heading">
            {intl l="Choose your delivery method"}
            {if $error}
                <span class="help-block"><span class="icon-remove"></span> {$message}</span>
            {/if}
        </div>
        {loop type="delivery" name="deliveries" force_return="true" country=$country}
        <div class="radio">
            <label for="delivery-method_{$ID}">
                <input type="radio" name="{$name}" id="delivery-method_{$ID}" value="{$ID}">
                <strong>{$TITLE}</strong> / {$POSTAGE} {currency attr="symbol"}
            </label>
        </div>
        {/loop}
    </div>

    {/form_field}

    <a href="{url path="/cart"}" role="button" class="btn btn-back"><span>{intl l="Back"}</span></a>
    <button type="submit" class="btn btn-checkout-next"><span>{intl l="Next Step"}</span></button>

</form>
{/form}
```