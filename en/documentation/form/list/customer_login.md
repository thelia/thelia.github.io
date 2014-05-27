---
layout: form
title: customer login
form_name: thelia.front.customer.login
sidebar: form
subnav: form_list_customerlogin
fields :
    - { name: "email", mandatory: "true", description: "customer email address"}
    - { name: "account", mandatory: "true", description: "Flag set by the customer to specify if he/she already has a customer account", values: [
        {value: "0", description: "The customer is a new customer, and wishes to create a customer account"},
        {value: "1", description: "The customer is a returning customer, and already has an account"}
    ]}
    - { name: "password", mandatory: "true", description: "customer's password"}
lang: en

---
```
{form name="thelia.front.customer.login"}
<form id="form-login" action="{url path="/login"}" method="post" {form_enctype form=$form} novalidate>
    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}
    {form_field form=$form field='success_url'}
        <input type="hidden" name="{$name}" value="{navigate to="return_to"}"> {* the url the user is redirected to on login success *}
    {/form_field}

    {form_field form=$form field='error_message'}
        <input type="hidden" name="{$name}" value="{intl l="missing or invalid data"}"> {* the url the user is redirected to on login success *}
    {/form_field}
    {form_hidden_fields form=$form}
    <fieldset>
        {form_field form=$form field="email"}
            <div class="form-group group-email{if $error} has-error{/if}">
                <label for="{$label_attr.for}">{$label}</label>
                <div class="control-input">
                <input type="email" name="{$name}" id="{$label_attr.for}" value="{$value}" class="form-control" maxlength="255" {$attr} {if $required}aria-required="true" required{/if}{if !$value || $error} autofocus{/if}>
                {if $error}
                    <span class="help-block">{$message}</span>
                    {assign var="error_focus" value="true"}
                {elseif !$value}
                    {assign var="error_focus" value="true"}
                {/if}
                </div>
            </div>
        {/form_field}

        <fieldset>
            {form_field form=$form field="account"}
            <legend>{intl l="Do you have an account?"}</legend>
                {foreach $choices as $choice}
                <div class="radio radio-account{$choice->value}">
                    <label for="{$label_attr.for}{$choice->value}">
                        <input type="radio" name="{$name}" id="{$label_attr.for}{$choice->value}" data-toggle="password" value="{$choice->value}"{if $value === {$choice->value}} checked{/if}> {$choice->label}
                    </label>
                </div>
                {/foreach}
            {/form_field}
            {form_field form=$form field="password"}
            <div class="form-group group-password{if $error} has-error{/if}">
                <label for="{$label_attr.for}" class="sr-only">{$label}</label>
                <div class="control-input">
                <input type="password" name="{$name}" id="{$label_attr.for}" class="form-control" maxlength="255" autocomplete="off"{if !isset($error_focus)} autofocus{/if}>
                {if $error}
                    <span class="help-block">{$message}</span>
                {/if}
                </div>
            </div>
            {/form_field}
        </fieldset>
    </fieldset>

    <div class="group-btn">
        <a href="{url path="/password"}" data-toggle="confirmation" class="forgot-password">{intl l="Forgot your Password?"}</a>
        <button type="submit" class="btn btn-login">{intl l="Next"}</button>
    </div>
</form>
{/form}
```