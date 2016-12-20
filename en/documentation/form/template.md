---
layout: home
title: Forms
sidebar: form
subnav: form_template
lang: en
---

# Display your form

Once you've created a form, it's time to display it in your template.

All you need is knowing the form name and all the field names of your form.

## Call your form

First of all you have to call the form you need by using the form block :

```smarty
{form name="thelia.customer.creation" type="myFormType"}
    ...
{/form}
```

The form reference is now available in the $form variable.

## Display it

You can open now the form html tag :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form}>
    ...
    </form>
{/form}
```

### Nested forms

If your form is a collection of many types, you have to use points to get the field.
For example, if you have a field like this:

```php
<?php
$builder->add("customer_data", "customer")
```

And the type "customer" adds a field "first_name",
you can access to this field in your template:

```smarty
{form_field form=$form field="customer_data.first_name"}

{/form_field}
```

### Hidden fields

The *{form_enctype}* function automagically select the proper form encoding.

Thelia uses hidden fields internally. In order to display these fields (and all the hidden fields defined in your form), use the *{form\_hidden\_fields}* function. Don't forget this, as it contains the CRSF validation data :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form}>

        {form_hidden_fields form=$form}
        ...
    </form>
{/form}
```

If you want to manage yourself one or more hidden field (for exemple to set its value), you may pass these field  names to the form_hidden_fields function using the "exclude" parameter. The field names listed in this parameter will not be processed by the function:

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form}>

        {form_hidden_fields form=$form exclude="area_id,some_other_field"}

        {render_form_field form=$form field="area_id" value={$area_id}}
        {render_form_field form=$form field="some_other_field" value="the field value"}

        ...
    </form>
{/form}
```


## Displaying a form field

For displaying a field, you have to use the *{form_field}* block, and put the name of the field you want to display in the "field" parameter :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >

        {form_hidden_fields form=$form}

        {form_field form=$form field="firstname"}
           <label>{intl l="{$label}"}</label>
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}

    </form>
{/form}
```

#### Values available in the *{form_field}* block :

 * `$name` : field's name used in the name part of your input
 * `$value` : default value to display
 * `$data` : the form definition data attribute
 * `$type` : the field type, as defined in the form definition (choice, radio, number, text, textarea, etc.)
 * `$checked` : the checked status (true / false) of a radio or checkbox field
 * `$multiple` : true if a select field may have multiple selected values
 * `$disabled` : true if the field is disabled, false otherwise
 * `$read_only` : true if the fiedl is read only, false otherwise
 * `$max_length` : the maximum length of the field
 * `$required` : true if the field is required, false otherwise
 * `$label` : label for this field, can be used in label html tag for example
 * `$attr` : all the attributes defined in your form class, can be any HTML attributes, such as an id, or any other attribute such as HTML5 form validation for example
 * `$attr_list` : the 'attr' array of form definition
 * `$options` : all the options available for this field. This variable is a PHP array.
 * `$error` : true if validation error has been detected on the field
 * `$message` : the error message, defined if $error is true, empty otherwise.
 * `$choices` : an array of available choices. $choices is available only if your field has defined choices.

```smarty
{form_field form=$form field="firstname"}
    {foreach $choices as $choice}
        label : {$choice->label}<br />
        data : {$choice->data}<br />
        value : {$choice->value}
    {/foreach}
{/form_field}
```

### Standardized form field generation

Using the form_field loop to display a form generates a lot of repetitive code. To help template writers, Thelia provides a basic binding, which speed-up and clarify the form code with 3 Smarty plugins : 

- `render_form_field` : a Smarty function which automatically generates the field HTML code, and all the related code, such as formartting and  error reporting.
- `custom_render_form_field` : a Smarty block which automatically generates the field's related HTML code (formatting, error reporting, etc.), and uses the block content as the field code.
- `form_field_attributes` : a Smarty function which generates the input field parameters

These plugins uses field data defined in the form definition to build the HTML field. They are sharing the same parameter set :

- form : the current form
- field : the field name
- value : a value, which will be used if the form field value is not defined.
- extra_class : one or more extra classes; that will be added to the standard input field class.
- show_label : if false, the field label and help text are not displayed.
- template : name of the template fragments that will be used to generate the code (see "Templates Fragments" below)

In most cases, you'll use `render_form_field`. However, in some cases you need to perform specific  operations. For example if the field value should be defined using a loop. In such cases, you'll use the `custom_render_form_field` block, providing yourself the field HTML code.

For example, using an image loop to define option's attributes :

```smarty
{custom_render_form_field form=$form field='logo_image_id'}
    <select {form_field_attributes form=$form field='logo_image_id' extra_class='brand-image-selector'} >
        <option value="">{intl l="No logo image"}</option>

        {loop name="brand-images" type="image" brand=$ID width="90" height="90" resize_mode="crop"}
            <option value="{$ID}" data-img-src="{$IMAGE_URL}" {if $LOGO_IMAGE_ID == $ID}selected="selected"{/if}>{$TITLE}</option>
        {/loop}
    </select>
{/custom_render_form_field}
```

In the form definition, the definition of the logo_image_id field is :

```php
$this->formBuilder->add("logo_image_id", "integer", [
        'constraints' => [ ],
        'required'    => false,
        'label'       => Translator::getInstance()->trans('Select the brand logo'),
        'label_attr'  => [
            'for' => 'logo_image_id',
            'help' => Translator::getInstance()->trans("Select the brand logo amongst the brand images")
        ]
    ])
;
```

Note that we're using the `form_field_attributes` to create the select attributes.

#### Example

A more complete example: the brand update form.

```smarty
{form name="thelia.admin.brand.modification"}

    <form method="POST" action="{url path="/admin/brand/save/{$ID}"}" {form_enctype form=$form} class="clearfix">

        {form_hidden_fields form=$form}

        {render_form_field form=$form field="success_url" value={url path="/admin/brand"}}
        {render_form_field form=$form field="locale" value={$edit_language_locale}}

        {if $form_error}
            <div class="alert alert-danger">{$form_error_message}</div>
        {/if}

        <div class="row">
            <div class="col-md-8">
                {include file="includes/standard-description-form-fields.html"}
            </div>

            <div class="col-md-4">
                {render_form_field form=$form field="visible"}

                {custom_render_form_field form=$form field='logo_image_id'}
                    <select {form_field_attributes form=$form field='logo_image_id' extra_class='brand-image-selector'} >
                        <option value="">{intl l="No logo image"}</option>

                        {loop name="brand-images" type="image" brand=$ID width="90" height="90" resize_mode="crop"}
                            <option value="{$ID}" data-img-src="{$IMAGE_URL}" {if $LOGO_IMAGE_ID == $ID}selected="selected"{/if}>{$TITLE}</option>
                        {/loop}
                    </select>
                {/custom_render_form_field}
            </div>
        </div>
    </form>
{/form}
```

#### Template fragments

The plugins are using two specific template fragments, located in the `template/*your_template*/forms/standard` directory :

- `form-field-renderer.html` : to generate the input fields HTML  
- `form-field-attributes-renderer.html` : to generate the input fields attributes.

`form-field-renderer.html` is in charge of rendering a complete, ready to use, form field, and should contains all the code to do so.

`form-field-attributes-renderer.html` renders the attributes of a specific field. In the example above, `{form_field_attributes form=$form field='logo_image_id' extra_class='brand-image-selector'}` will be rendered as :

`id="logo_image_id" name="thelia_brand_modification[logo_image_id]" value="2" class="form-control brand-image-selector"`

These fragments are the standard fragments, which are located in the `standard` directory. You can create your own customized fragments.

#### Customized templates fragments

One's can defines its own set of template fragments, that will be used instead of the standard one if the `template` parameter is defined.

For example, `{render_form_field form=$form field='logo_image_id' template='my_fragments'}` will use the 'my_template' set, which is located in the `template/*your_template*/forms/my_fragments` directory.

The name of the fragment files should always be be `form-field-renderer.html` and `form-field-attributes-renderer.html`

## Display errors

If your form contains some errors, it automatically displays the value already sent by the user and then can display a message for each fields containing errors. The *{form_field_error}*
is used and it works like the *{form_field}* block. You can call it outside the *{form_field}* block :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >

        {form_hidden_fields form=$form}

        {form_field form=$form field="firstname"}
            {form_error form=$form.firstname}
                {$message}
            {/form_error}

            <label>{intl l="{$label}"}</label>
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}
    </form>
{/form}
```

An alternative to the *{form_error}* block is using the $error and $message values from the *{form_field}* block :

```smarty
        {form_field form=$form field="firstname"}
            {if $error}<div class="error-field">$message</div>{/if}

            <label>{intl l="{$label}"}</label>
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}
{/form}
```

Please note that the standard form field generators generates all the required code to process errors.

## Form collection fields

Collection are treated differently than other types in Thelia. You have three functions to know when you deal with them.

- ```form_collection``` That checks if the collection exists, loops and injects the row data.
    It has an optional parameter "row" that can take a symfony form (example: a collection into a collection).
    As the fields are stacked in a collection, you can use the "limit" parameter to display them by groups. It outputs 3 variables:
    - ```$row```: the collection
    - ```$collection_current```: The current loop index.
    - ```$collection_count```: The total count of collection entries
- ```form_collection_field```: It has the same behavior has ```form_field```, but for collections.
- ```form_collection_count```: Counts the collection entries ( even before the ```form_collection``` call ). Warning: entries are used a stack, if you use this function AFTER the ```form_collection```  call, you will get 0 as result.

Example:

```smarty
{form name="book-form"}
    {form_collection form=$form collection="books"}
       {form_collection_field form=$form row=$row field="author"}
           {$label} : <input type="text" name="{$name}" id="{$label_attr.for}" value="{$value}" />
       {/form_collection_field}
    {/form_collection}
{/form}
```

### A complete example
 
Here is a complete example with the customer creation form (note that customer title is hard coded - the customer_title loop is not yet available at this time ;-) ) :

```smarty
{form name="thelia.customer.creation"}
{* We use $INDEX_PAGE as form action to avoid mixing post and get data *}
<form action="{$INDEX_PAGE}" method="post" {form_enctype form=$form}>
	{*
	The two fields below are not par of the Login form, they are here to defines
	the action to process, and the view rendered once the form is submited
	*}
	<input type="hidden" name="action" value="createCustomer" /> {* the action triggered by this form *}
	<input type="hidden" name="view" value="connexion" /> 		 {* the view to return to if the form cannot be validated *}

	{*
	This field is common to all BaseForm instances (thus, this one), and defines
	the URL the customer is redirected to once the form has been successfully
	processed
	*}
	{form_field form=$form field='success_url'}
	   <input type="hidden" name="{$name}" value="{$RETURN_TO_URL}" /> {* the url the user is redirected to on login success *}
	{/form_field}

	{*
	The form error status and the form error messages are defined in Customer action,
	and passed back to the form plugin through the ParserContext.
	*}

	{if $form_error}<div class="alert alert-danger">{$form_error_message}</div>{/if}


    {form_hidden_fields form=$form}

    {form_field form=$form field="title"}
        {form_error form=$form field="title"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label>
        <select name="{$name}">
            <option value="1">M.</option>
            <option value="2">Mme.</option>

        </select>
        <br />
    {/form_field}

    {form_field form=$form field="firstname"}
        {form_error form=$form field="firstname"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="lastname"}
        {form_error form=$form field="lastname"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="address1"}
        {form_error form=$form field="address1"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="address2"}
        {form_error form=$form field="address2"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="address3"}
        {form_error form=$form field="address3"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="zipcode"}
        {form_error form=$form field="zipcode"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="city"}
        {form_error form=$form field="city"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form field="country"}
        {form_error form=$form field="country"}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label>
            <select name="{$name}">
                <option value="1">France</option>
                <option value="2">Belgium</option>

            </select>
        <br />
    {/form_field}

    {form_field form=$form field="phone"}
        {form_error form=$form field="phone"}
            {$message}
        {/form_error}
        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr}> <br />
    {/form_field}

    {form_field form=$form field="cellphone"}
        {form_error form=$form field="cellphone"}
            {$message}
        {/form_error}
        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr}> <br />
    {/form_field}

    {form_field form=$form field="email"}
        {form_error form=$form field="email"}
            {$message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" value="{$value}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="email_confirm"}
        {form_error form=$form field="email_confirm"}
            {$message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="password"}
        {form_error form=$form field="password"}
            {$message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="password_confirm"}
        {form_error form=$form field="password_confirm"}
            {$message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

<input type="submit" value="validate">
</form>
{/form}

```


