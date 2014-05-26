---
layout: form
title: customer create address
form_name: thelia.front.address.create
sidebar: form
subnav: form_list_addresscreate
fields:
    - { name: "label", mandatory: "true", description: "label for identifying the address"}
    - { name: "title", mandatory: "true", description: "customer's title id. See [title loop](http://doc.thelia.net/en/documentation/loop/title.html)"}
    - { name: "firstname", mandatory: "true", description: "customer's first name"}
    - { name: "lastname", mandatory: "true", description: "customer's last name"}
    - { name: "address1", mandatory: "true", description: "customer's street address"}
    - { name: "address2", mandatory: "false", description: "customer's street address complement"}
    - { name: "address3", mandatory: "false", description: "customer's street address complement"}
    - { name: "zipcode", mandatory: "true", description: "customer's zip code"}
    - { name: "city", mandatory: "true", description: "customer's city"}
    - { name: "country", mandatory: "true", description: "customer's country id"}
    - { name: "phone", mandatory: "false", description: "customer's phone"}
    - { name: "cellphone", mandatory: "false", description: "customer's cell phone"}
    - { name: "email", mandatory: "true", description: "customer's email address"}
    - { name: "password", mandatory: "true", description: "customer's password. min length : 4"}
    - { name: "password_confirm", mandatory: "true", description: "customer's password verification. Check if password and password_confirm are the same"}
    - { name: "is_default", mandatory: "false", description: "send this parameter to true if the address is the default one"}
lang: en

---
```
{form name="thelia.front.address.create"}
<form id="form-address" class="form-horizontal" action="{url path="/address/create"}" method="post">
    {form_field form=$form field='success_url'}
        <input type="hidden" name="{$name}" value="{url path="/account"}" />
    {/form_field}

    {form_field form=$form field='error_message'}
        <input type="hidden" name="{$name}" value="{intl l="missing or invalid data"}" />
    {/form_field}
    {form_hidden_fields form=$form}
    {if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}
    <fieldset class="panel">
        <div class="panel-heading">
            {intl l="Address"}
        </div>

        <div class="panel-body">
            {form_field form=$form field="label"}
            <div class="form-group group-label{if $error} has-error{/if}">
                <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                <div class="control-input">
                    <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" minlength="2" maxlength="255" placeholder="{intl l="Placeholder address label"}"{if $required} aria-required="true" required{/if}{if !$value || $error} autofocus{/if}>
                    {if $error }
                        <span class="help-block">{$message}</span>
                        {assign var="error_focus" value="true"}
                    {elseif !$value}
                        {assign var="error_focus" value="true"}
                    {/if}
                </div>
            </div>
            <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="title"}
                <div class="form-group group-title{if $error} has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>
                    <div class="control-input">
                        <select name="{$name}" id="{$label_attr.for}" class="form-control"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                            <option value="">-- {intl l="Select Title"} --</option>
                            {loop type="title" name="title.list"}
                                <option value="{$ID}" {if $value == $ID}selected{/if} >{$LONG}</option>
                            {/loop}
                        </select>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div><!--/.form-group-->
            {/form_field}

            {form_field form=$form field="firstname"}
                <div class="form-group group-firstname {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder firstname"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}
            <!--/.form-group-->

            {form_field form=$form field="lastname"}
                <div class="form-group group-lastname {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder lastname"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="company"}
              <div class="form-group group-company{if $error} has-error{/if}">
                <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>
                  <div class="control-input">
                    <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder company"}" value="{$value}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                    {if $error }
                      <span class="help-block">{$message}</span>
                      {assign var="error_focus" value="true"}
                    {/if}
                  </div>
              </div><!--/.form-group-->
            {/form_field}

            {form_field form=$form field="address1"}
                <div class="form-group group-address1 {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder address1"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="address2"}
                <div class="form-group group-address2 {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if} </label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder address2"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="zipcode"}
                <div class="form-group group-zipcode {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="10" placeholder="{intl l="Placeholder zipcode"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="city"}
                <div class="form-group group-city {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="255" placeholder="{intl l="Placeholder city"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="country"}
                <div class="form-group group-country {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>
                    <div class="control-input">
                        <select name="{$name}" id="{$label_attr.for}" class="form-control"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                            <option value="">-- {intl l="Select Country"} --</option>
                            {loop type="country" name="country.list"}
                                <option value="{$ID}" {if $value == $ID}selected{/if} >{$TITLE}</option>
                            {/loop}
                        </select>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div><!--/.form-group-->
            {/form_field}

            {form_field form=$form field="phone"}
                <div class="form-group group-phone {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="20" placeholder="{intl l="Placeholder phone"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}

            {form_field form=$form field="cellphone"}
                <div class="form-group group-cellphone {if $error}has-error{/if}">
                    <label class="control-label" for="{$label_attr.for}">{$label}:{if $required} <span class="required">*</span>{/if}</label>

                    <div class="control-input">
                        <input type="text" name="{$name}" value="{$value}" id="{$label_attr.for}" class="form-control" maxlength="20" placeholder="{intl l="Placeholder cellphone"}"{if $required} aria-required="true" required{/if}{if !isset($error_focus) && $error} autofocus{/if}>
                        {if $error }
                            <span class="help-block">{$message}</span>
                            {assign var="error_focus" value="true"}
                        {/if}
                    </div>
                </div>
                <!--/.form-group-->
            {/form_field}
        </div>
    </fieldset>

    {form_field form=$form field="is_default"}
    <div class="form-group group-primary">
        <div class="control-input">
            <div class="checkbox">
                <label class="control-label" for="{$label_attr.for}">
                    <input type="checkbox" name="{$name}" id="{$label_attr.for}" value="1"> {$label}
                </label>
            </div>
        </div>
    </div>
    <!--/.form-group-->
    {/form_field}

    <div class="form-group group-btn">
        <div class="control-btn">
            <button type="submit" class="btn btn-submit">{intl l="Create"}</button>
        </div>
    </div>
    <!--/.form-group-->
</form>
{/form}
```