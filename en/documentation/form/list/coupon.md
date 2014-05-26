---
layout: form
title: Coupon
form_name: thelia.order.coupon
sidebar: form
subnav: form_list_coupon
fields:
    - { name: "coupon-code", mandatory: "true", description: "Coupon code"}

lang: en
---
```
{form name="thelia.order.coupon"}

<form id="form-coupon" action="{url path="/order/coupon"}" method="post" {form_enctype form=$form}>
    {form_hidden_fields form=$form}
    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}
    {form_field form=$form field='success_url'}
    <input type="hidden" name="{$name}" value="{url path="/order/invoice"}" />
    {/form_field}
    {form_field form=$form field='coupon-code'}
        <div class="{if $error}has-error{/if}">
            <div class="input-group">
                <label class="control-label sr-only" for="code">{intl l='Code :'}</label>
                <input id="coupon" class="form-control" type="text" name="{$name}" value="{$value}" placeholder="{intl l='Coupon code'}" required>
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-coupon">{intl l="Ok"}</button>
                </span>
            </div>
            {if $error}<span class="help-block">{$message}</span>{/if}
        </div>
    {/form_field}
</form>
{/form}
```