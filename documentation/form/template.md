---
layout: home
title: Forms
sidebar: form
subnav: form_action
---

# Display your form

<<<<<<< HEAD
You have created a form, it's time to display it in your template.
=======
Once you've created a form, it's time to display it in your template.
>>>>>>> cf3f6712189fa8797df5d3d5ab2a5b84a87e2467

All you need is knowing the form name and all the field names of your form.

## Call your form

first of all you have to call the form you need by using the form block :

```smarty
{form name="thelia.customer.creation"}
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

<br />the *{form_enctype}* function automagically select the proper form encoding.

<<<<<<< HEAD
Thelia uses hidden fields internally. For the displaying these fields, and all the hidden fields, you should use the *{form_field_hidden}* function, don't forget this, as it contains the CRSF validation data :
=======
For displaying all the hidden fields, you have to use the *{form_field_hidden}* function, don't forget this part, that contains the csrf validation :
>>>>>>> cf3f6712189fa8797df5d3d5ab2a5b84a87e2467

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form}>
 
        {form_field_hidden form=$form}
        ...
    </form>
{/form}
```

## Display a form field

For displaying a field, you have to use the *{form_field}* block, and put the field you want to display in the "field" parameter:

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >
        
        {form_field_hidden form=$form}

        {form_field form=$form field="firstname"}
           <label>{intl l="{$label}"}</label> 
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}

    </form>
{/form}
```

<<<<<<< HEAD
#### Values available in the *{form_field}* block :
=======
<br />
Values available in the *{form_field}* block :
>>>>>>> cf3f6712189fa8797df5d3d5ab2a5b84a87e2467

 * $name : field's name used in the name part of your input
 * $value : default value to display
 * $label : label for this field, can be used in label html tag for exemple
 * $attr : all the attribute defined in your form class, can be any HTML attributes, such as an id, or any other attribute such as HTML5 form validation for exemple
 * $options : all the options available for this field. This variable is a php array.
 * $error : true if validation error has been detected on the field
 * $message : the error message, defined if $error is true, empty otherwise.

## Display errors

If your form contains some errors, it automatically display the value already sent by the user and can display a message for each fields containing errors. The *{form_field_error}*
is used and it works like the *{form_field}* block. You can call it outside the *{form_field}* block :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >
        
        {form_field_hidden form=$form}

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

<<<<<<< HEAD
An alternative to the *{form_error}* block is using the $error and $message values from the *{form_field}* block :
=======
<br />To finish, a complete example with the customer creation form (note that customer title is hard coded, you loop here) :
>>>>>>> cf3f6712189fa8797df5d3d5ab2a5b84a87e2467

```smarty
        {form_field form=$form field="firstname"}
            {if $error}<div class="error-field">$message</div>{/if}

            <label>{intl l="{$label}"}</label> 
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}
{/form}
```

To finish, a complete exemple with the customer creation form (note that customer title is hard coded - the customer_title loop is not yet available at this time ;-) ) :

```smarty
{form name="thelia.customer.creation"}
{* We use $INDEX_PAGE as form action to avoid mixing post and get data *}
<form action="{url path='your/target'}" method="post" {form_enctype form=$form}>
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

	{if #form_error}<div class="alert alert-error">#form_error_message</div>{/if}


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
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" value="{$value}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="email_confirm"}
        {form_error form=$form field="email_confirm"}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="password"}
        {form_error form=$form field="password"}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form field="password_confirm"}
        {form_error form=$form field="password_confirm"}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

<input type="submit" value="valider">
</form>
{/form}

```


