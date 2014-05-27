---
layout: form
title: customer lost password
form_name: thelia.front.customer.lostpassword
sidebar: form
subnav: form_list_customerpassword
fields :
    - { name: "email", mandatory: "true", description: "customer email address"}
lang: en

---
```
{form name="thelia.front.customer.lostpassword"}
<form id="form-forgotpassword" action="{url path="/password"}" method="post">
    {form_hidden_fields form=$form}
    <p>{intl l="Please enter your email address below."} {intl l="You will receive a link to reset your password."}</p>
    {form_field form=$form field="email"}
    <div class="form-group group-email {if $error}has-error{elseif !$error && $value != ""}has-success{/if}">
        <label for="{$label_attr.for}">{$label}</label>
        <div class="control-input">
        <input type="email" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" aria-required="true" autofocus required>
        {if $error}
            <span class="help-block">{$message}</span>
        {elseif !$error && $value != ""}
            <span class="help-block"><span class="icon-ok"></span> {intl l="You will receive a link to reset your password."}</span>
        {/if}
        </div>
    </div>
    {/form_field}
    <div class="group-btn">
        <a href="{url path="/login"}" class="btn btn-cancel">{intl l="Cancel"}</a>
        <button type="submit" class="btn btn-forgot">{intl l="Send"}</button>
    </div>
</form>
{/form}
```