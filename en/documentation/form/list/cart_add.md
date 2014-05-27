---
layout: form
title: Add a product in cart
form_name: thelia.cart.add
sidebar: form
subnav: form_list_cartadd
fields:
    - { name: "product", mandatory: "true", description: "ID of the product added to the cart"}
    - { name: "product_sale_elements_id", mandatory: "true", description: "product sale elements id added to the cart"}
    - { name: "quantity", mandatory: "true", description: "quantity added to the cart. Must be superior to 0 if the stock is not managed in the store"}
    - { name: "append", mandatory: "false", description: "if the value is 1, increment the quantity if the combination of product and product_sale_elements_id already exists in the cart"}
    - { name: "newness", mandatory: "false", description: "if the value is 1, create a new entry if the combination of product and product_sale_elements_id already exist in the cart"}
lang: en

---
```
{form name="thelia.cart.add" }
<form id="form-product-details" action="{url path="/cart/add" }" method="post" class="form-product">
    {form_hidden_fields form=$form}

    {if $form_error}<div class="alert alert-error">{$form_error_message}</div>{/if}

    {form_field form=$form field='product_sale_elements_id'}
    {if $default_product_sale_elements }
        <input type="hidden" name="{$name}" value="{$default_product_sale_elements}" {$attr}>
    {else}
        {loop name="productSaleElements_promo" type="product_sale_elements" product="{$product_id}" limit="1"}
            <input type="hidden" name="{$name}" value="{$ID}" {$attr}>
        {/loop}
    {/if}
    {/form_field}
    {form_field form=$form field="product"}
        <input id="{$label_attr.for}" type="hidden" name="{$name}" value="{$product_id}" {$attr} >
    {/form_field}

    <fieldset class="product-options hide">
        {ifloop rel="stock"}
            <div class="option">
                <label for="options" class="option-heading">Options</label>
                <div class="option-content">
                    <select name="options" class="form-control">
                        {loop name="stock" type="product_sale_elements" product="$product_id" order="min_price"}
                        {if $LOOP_TOTAL == 1}
                            {assign var="hasSubmit" value = true}
                        {/if}
                        {loop name="combi" type="attribute_combination" product_sale_elements="$product_id" order="alpha"}
                                <option value="{$ID}" data-quantity="{$QUANTITY}" data-price="{format_number number="{$BEST_TAXED_PRICE}"} {currency attr="symbol"}" data-old-price="{format_number number="{$TAXED_PRICE}"} {currency attr="symbol"}">{$ATTRIBUTE_AVAILABILITY_TITLE}</small></option>
                            {/loop}
                        {/loop}
                    </select>
                </div>
            </div>
        {/ifloop}
    </fieldset>
    <fieldset class="product-cart form-inline">
        {form_field form=$form field='quantity'}
            <div class="form-group group-qty hide {if $error}has-error{elseif $value != "" && !$error}has-success{/if}">
                <label for="{$label_attr.for}">{$label}</label>
                <input type="number" name="{$name}" id="{$label_attr.for}" class="form-control" value="{$value|default:1}" min="0" required>
                {if $error }
                    <span class="help-block"><i class="icon-remove"></i> {$message}</span>
                {elseif $value != "" && !$error}
                    <span class="help-block"><i class="icon-ok"></i></span>
                {/if}
            </div>
        {/form_field}

        <div class="form-group group-btn">

        </div>
        <div>
            <div class="product-btn">
                <button type="submit" class="btn btn-cart">{intl l="Add to cart"}</button>
            </div>
        </div>

    </fieldset>
</form>
{/form}
```