---
layout: home
title: Thelia Templates
sidebar: templates
lang: en
subnav: templates_introduction
---
# About Thelia Templates #

Thelia templates uses the Smarty template engine, enriched by many Thelia additions, such as loops, data access functions, internationalization function, etc. 

## Managing assets

**TBC**

### {declare_assets}

**TBC**

### {stylesheets}

**TBC**

### {images}

**TBC**

### {javascripts}

**TBC**

## Internationalization

If you want to create multilingual compatible templates, you have to pay a special attention to :
- static text
- date formatting
- number formatting
- money formatting

Thelia provides several Smarty functions to help you.

### {intl}

The {intl} function translates a string. 

    {intl l="This is a string to translate"}
    
    or 
    
    {intl l="This is another string to translate" d="mymodule.ai"}

    or

    {intl l="Hello, %name, how do you do ?" name=$name}

We have here three typical uses of {intl}

#### `l`

The `l` parameter contains the string that will be translated. This string should not contains any variable, such as `{intl l="Hello, $name, how do you do ?"}`, internal variables should be used instead. Every `%varname` found in the string will be replaced by the value of the `varname` parameter. For example: `{intl l="Hello, %user, how do you do ?" user=$name}` is fine.

If no translation can be found for a given string, the translator will return either the value of the `l` parameter, or an empty string, depending on the "Languages & URLs" parameters.  

#### `d`

The `d` parameter is the message domain, a set of internationalized messages. Thelia contains the following domains :

- `core` => for thelia core translations
- bo.*template_name* (eg : `bo.default`) => for each back-office template
- fo.*template_name* (eg : `fo.default`) => for each front-office template
- pdf.*template_name* (eg : `pdf.default`) => for each PDF template
- email.*template_name* (eg : `email.default`) => for each email template
- In Modules :
    - *module_code* (eg : `paypal`) => fore module core translations
    - *module_code*.ai (eg : `paypal.ai`) => used in AdminIncludes templates
    - *module_code*.bo.*template_name* (eg : `paypal.bo.default`) => used in back office template
    - *module_code*.fo.*template_name* (eg : `paypal.fo.default`) => used in front office template

This parameter is mostly used in modules. Other templates (front-office, back-office, PDF and email) may use the `{default_translation_domain}` function to define a template-wide message domain, and the `d` parameter could then be omitted.

For examples, in the `layout.tpl` file of the default front-office template, you'll find `{default_translation_domain domain='fo.default'}`.

#### Translating your templates

Translations is done through the back-office -> Configuration -> Translation. The string are automatically collected in your template, and you'll be able to enter the translation for any language defined in your store (see Configuration, -> Languages & URLs).

### {format_date}

Use this function to format a date according to the current locale standards.

#### Examples

    Return the given date using the locale date format as date and time
    {format_date date=$dateTimeObject}

    Return the given date using a specified format    
    {format_date date=$dateTimeObject format="Y-m-d H:i:s"}

    Return the given date as a date string, using the locale date
    {format_date date=$dateTimeObject output="date"}

    Return the given date as a time string, using the locale date
    {format_date date=$dateTimeObject output="time"}

#### Parameters

- `date`: a DateTime object (required)
- `format`: the expected format. The current locale format will be used if this parameter is empty or missing
- `output`: the type of desired ouput, one of :
    - `date`: the date only
    - `time`: the time only 
    - `datetime`: the date and the time (default)


### {format_number}

Use this function to format a number according to the current locale standards, or a specific format.

#### Examples

    Outputs "1 246,1"
    {format_number number="1246.12" decimals="1" dec_point="," thousands_sep=" "}

    Outputs "1246,12" if locale is fr_FR, 1 246.12 if locale is en_US
    {format_number number="1246.12"}


#### Parameters

- `number`: int or float number
- `decimals`: how many decimals format expected
- `dec_point`: separator for the decimal point
- `thousands_sep`: thousands separator


### {format_money}

Use this function to format an amount of money according to the current locale standards, or a specific format.

#### Examples

    Outputs "1 246,1 €"
    {format_money number="1246.12" decimals="1" dec_point="," thousands_sep=" " symbol="€"}

    Outputs "1246,12 €" if locale is fr_FR, "€ 1 246.12" if locale is en_US
    {format_money number="1246.12"}

#### Parameters

- `number`: int or float number
- `decimals`: how many decimals format expected
- `dec_point`: separator for the decimal point
- `thousands_sep`: thousands separator
- `symbol`: Currency symbol

**TBC**
