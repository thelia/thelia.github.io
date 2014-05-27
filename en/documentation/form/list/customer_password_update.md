---
layout: form
title: customer password update
form_name: thelia.front.customer.password.update
sidebar: form
subnav: form_list_updatepassword
fields:
    - { name: "password_old", mandatory: "true", description: "customer old password"}
    - { name: "password", mandatory: "true", description: "customer password. min length : 4"}
    - { name: "password_confirm", mandatory: "true", description: "Customer password verification. Thelia will checks that password and password_confirm are identical."}
lang: en

---
```
{form name="thelia.front.customer.password.update"}
<form id="form-register" class="form-horizontal" action="{url path="/account/password"}" method="post">
    {form_field form=$form field='success_url'}
        <input type="hidden" name="{$name}" value="{url path="/account"}" />
    {/form_field}

    {form_hidden_fields form=$form}

    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}

    <fieldset id="register-info" class="panel">
        <div class="panel-heading">
            {intl l="Login Information"}
        </div>

        <div class="panel-body">
            {form_field form=$form field="password_old"}
            <div class="form-group group-password_old{if $error} has-error{/if}">
                <label class="control-label" for="{$label_attr.for}">{$label}{if $required} <span class="required">*</span>{/if}</label>
                <div class="control-input">
                    <input type="password" name="{$name}" id="{$label_attr.for}" class="form-control" maxlength="255" value="{$value}" {if $required} aria-required="true" required{/if}{if !$value || $error} autofocus{/if}>
                    {if $error}
                        <span class="help-block">{$message}</span>
                        {assign var="error_focus" value="true"}
                    {elseif !$value}
                        {assign var="error_focus" value="true"}
                    {/if}
                </div>
            </div><!--/.form-group-->
            {/form_field}

            {form_field form=$form field="password"}
            <div class="form-group group-password{if $error} has-error{/if}">
                <label class="control-label" for="{$label_attr.for}">{$label}{if $required} <span class="required">*</span>{/if}</label>
                <div class="control-input">
                    <input type="password" name="{$name}" id="{$label_attr.for}" class="form-control" maxlength="255" value="{$value}" {if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                    {if $error }
                        <span class="help-block">{$message}</span>
                        {assign var="error_focus" value="true"}
                    {/if}
                </div>
            </div><!--/.form-group-->
            {/form_field}
            {form_field form=$form field="password_confirm"}
            <div class="form-group group-password_confirm{if $error} has-error{/if}">
                <label class="control-label" for="{$label_attr.for}">{$label}{if $required} <span class="required">*</span>{/if}</label>
                <div class="control-input">
                    <input type="password" name="{$name}" id="{$label_attr.for}" class="form-control" maxlength="255" autocomplete="off"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                    {if $error }
                        <span class="help-block">{$message}</span>
                    {/if}
                </div>
            </div><!--/.form-group-->
            {/form_field}
        </div>
    </fieldset>

    <div class="form-group group-btn">
        <div class="control-btn">
            <button type="submit" class="btn btn-register">{intl l="Change Password"}</button>
        </div>
    </div><!--/.form-group-->
</form>
{/form}
```