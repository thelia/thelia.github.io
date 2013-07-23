---
layout: home
title: Forms
sidebar: form
subnav: form_action
---

#Diplay your form

Once you've created a form, it's time to display it in your template.

All you need is the form's name and know all the fields of your form.

##call your form

first of all you have to call the form you need by using the form block :

```smarty
{form name="thelia.customer.creation"}
    ...
{/form}
```


<br /> Now the form is available by using $form variable.<br />

##Display it

You can open now the form html tag :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="your/target" {form_enctype form=$form}>
    ...
    </form>
{/form}
```

<br />the *{form_enctype}* function display for you the good enctype.

For displaying all the hidden fields, you have to use the *{form_field_hidden}* function, don't forget this part, that contains the csrf validation :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >
        {form_field_hidden form=$form}
        ...
    </form>
{/form}
```

##Display a field

For displaying a field, you have to use the *{form_field}* block. You have to send the specific field you want to display, in this exemple the firstname field :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >
        {form_field_hidden form=$form}
        {form_field form=$form.firstname}
                <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
            {/form_field}
    </form>
{/form}
```

<br />
Values available in the *{form_field}* block :

 * $name : field's name used in the name part of your input
 * $value : default value to display
 * $label : label for this field, can be used in label html tag for exemple
 * $attr : all the attribute define in your class form, can be class or other thing for using HTML5 form validation for exemple
 * $options : all the options available for this field. This variable is a php array.

##Display errors

If your form contains some errors, it automatically display the value already sent by the user and can display a message for each fields containing errors. The *{form_field_error}*
is used and it works like the *{form_field}* block. You can call it outside the *{form_field}* block :

```smarty
{form name="thelia.customer.creation"}
    <form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >
        {form_field_hidden form=$form}
        {form_field form=$form.firstname}
                {form_error form=$form.firstname}
                    {$message}
                {/form_error}
                <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
        {/form_field}
    </form>
{/form}
```

<br />To finish, a complete example with the customer creation form (note that customer title is hard coded, you loop here) :

```smarty
{form name="thelia.customer.creation"}
<form method="post" action="index_dev.php?action=createCustomer&view=connexion" {form_enctype form=$form} >

    {form_field_hidden form=$form}

    {form_field form=$form.title}
        {form_error form=$form.title}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label>
        <select name="{$name}">
            <option value="1">M.</option>
            <option value="2">Mme.</option>

        </select>
        <br />
    {/form_field}

    {form_field form=$form.firstname}
        {form_error form=$form.firstname}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.lastname}
        {form_error form=$form.lastname}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.address1}
        {form_error form=$form.address1}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.address2}
        {form_error form=$form.address2}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.address3}
        {form_error form=$form.address3}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.zipcode}
        {form_error form=$form.zipcode}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.city}
        {form_error form=$form.city}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr} > <br />
    {/form_field}

    {form_field form=$form.country}
        {form_error form=$form.country}
            {$message}
        {/form_error}

        <label> <span>{intl l="{$label}"} : </span></label>
            <select name="{$name}">
                <option value="1">France</option>
                <option value="2">Belgium</option>

            </select>
        <br />
    {/form_field}

    {form_field form=$form.phone}
        {form_error form=$form.phone}
            {$message}
        {/form_error}
        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr}> <br />
    {/form_field}

    {form_field form=$form.cellphone}
        {form_error form=$form.cellphone}
            {$message}
        {/form_error}
        <label> <span>{intl l="{$label}"} : </span></label><input type="text" name="{$name}" value="{$value}" {$attr}> <br />
    {/form_field}

    {form_field form=$form.email}
        {form_error form=$form.email}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" value="{$value}" {$attr} ><br />
    {/form_field}

    {form_field form=$form.email_confirm}
        {form_error form=$form.email_confirm}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="email" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form.password}
        {form_error form=$form.password}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

    {form_field form=$form.password_confirm}
        {form_error form=$form.password_confirm}
            {#message}
        {/form_error}
        <label><span>{intl l="{$label}"}</span></label><input type="password" name="{$name}" {$attr} ><br />
    {/form_field}

<input type="submit" value="valider">
</form>
{/form}
```


