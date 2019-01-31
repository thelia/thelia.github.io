---
layout: loop
title: Product Loop
description: Product loop lists products from your shop. You very probably will have to use the <a href="/en/documentation/loop/product_sale_elements.html">product sale elements loop</a> inside your product loop.
sidebar: loop
lang: en
subnav: loop_product
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : true }
text_search_fields: ref, title, chapo, description, postscriptum
type: product
arguments :
    - name: "complex"
      description: "A boolean. If set to true, product loop will consider all product sale elements else it will only consider default product sale element. Some of the arguments/outputs will not be available depending on the complex argument."
      example: "complex=\"true\""
      default: "false"
    - name: "id"
      description: "A single or a list of product ids."
      example: "id=\"2\", id=\"1,4,7\""
    - {name: "ref", description: "A single or a list of product references.", example: "ref=\"ref0\", id=\"ref1,ref6\""}
    - {name: "category", description: "A single or a list of category ids.", example: "category=\"2\", category=\"1,4,7\""}
    - {name: "category_default", description: "A single or a list of default category ids allowing to retrieve all products having this parameter as default category.", example: "category_default=\"2\", category_default=\"1,4,7\""}
    - {name: "current_category", description: "A boolean value which allows either to exclude current category products from results either to match only current category products. If a product is in multiple categories whose one is current it will not be excluded if current_category=\"false\" but will be included if current_category=\"yes\"", example: "current_category=\"yes\""}
    - {name: "content", description: "One or more content ID. When this parameter is set, the loop returns the products related to the specified content IDs.", example: "content=\"3\"", from_version: "2.3"}
    - {name: "depth", description: "A positive integer value which precise how many subcategory levels will be browse. Will not be consider if category parameter is not set.", example: "depth=\"2\"", default: "1"}
    - {name: "new", description: "A boolean value.", example: "new=\"yes\""}
    - {name: "promo", description: "A boolean value.", example: "promo=\"yes\""}
    - {name: "min_price", description: "A float value. Equal value matches.", example: "min_price=\"12.3\""}
    - {name: "max_price", description: "A float value. Equal value matches.", example: "max_price=\"32.1\""}
    - {name: "min_stock", description: "An integer value. Equal value matches.", example: "min_stock=\"3\""}
    - {name: "min_weight", description: "A float value. Equal value matches.", example: "min_weight=\"32.1\""}
    - {name: "max_weight", description: "A float value. Equal value matches.", example: "max_weight=\"32.1\""}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false"}
    - {name: "brand", description: "A single or a list of brand ids.", example: "brand=\"2\", brand=\"1,4,7\""}
    - {name: "current", description: "A boolean value which allows either to exclude current product from results either to match only this product", example: "current=\"yes\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "virtual", description: "A boolean value.", example: "virtual=\"yes\""}
    - {name: "exclude", description: "A single or a list of product ids.", example: "exclude=\"2\", exclude=\"1,4,7\""}
    - {name: "exclude_category", description: "A single or a list of category ids. If a product is in multiple categories which are not all excluded it will not be excluded.", example: "exclude_category=\"2\", exclude_category=\"1,4,7\""}
    - {name: "feature_availability", description: "A list of mandatory features and the feature_availability expected for these.", example: "feature_availability=\"1: (1 | 2) , 2:*, 3: 10 | (11&12)\" : feature 1 must have feature_availability 1 or 2 AND feature 2 must be set to any feature_availability AND feature 3 must have feature_availability 10 or both feature_availability 11 and 12"}
    - {name: "feature_values", description: "A list of mandatory features and the string value expected for these.", example: "feature_values=\"1: (foo | bar) , 2:*, 3: foobar\" : feature 1 must have feature value \"foo\" or \"bar\" AND feature 2 must be set to any feature_availability AND feature 3 must have feature value \"foobar\""}
    - {name: "lang", description: "A lang id", example: "lang=\"1\""}
    - {name: "currency", description: "A currency id", example: "currency=\"1\""}
    - {name: "title", description: "filter by title", example: "title=\"foo\""}
    - {name: "return_url", description: "A boolean value which allows the urls generation.", example: "return_url=\"no\"", default: "yes", from_version: "2.3"}
    - {name: "tax_rule_id", description: "Filter products having this tax rule ID", example: "tax_rule_id=21", from_version: "2.4"}
    - {name: "exclude_tax_rule_id", description: "Filter products not having this tax rule ID", example: "exclude_tax_rule_id=21", from_version: "2.4"}
    - {
        name: "attribute_non_strict_match",
        description: "<strong>Only available if complex='true'</strong><br />promo, new, quantity, weight or price may differ in the different product sale element depending on the different attributes. This parameter allows to provide a list of non-strict attributes.",
        default: "none",
        example: "attribute_non_strict_match=\"promo,new\" : loop will return the product if it has at least a product sale element in promo and at least a product sale element as new ; even if it's not the same product sale element.",
        expected_values: [
            {name: "none",             description: "product loop will look for at least 1 attribute which matches all the loop criteria."},
            {name: "*",             description: "all the attributes are non strict"},
            {name: "min_stock"},
            {name: "promo"},
            {name: "new"},
            {name: "min_weight"},
            {name: "max_weight"},
            {name: "min_price"},
            {name: "max_price"}
        ]
      }
    - {
        name: "order", description: "A list of values", example: "order=\"category,min_price\"", default: "alpha",
        expected_values: [
            {name: "id",                description: "order by ascending ID"},
            {name: "id_reverse",        description: "order by descending ID"},
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha_reverse",     description: "reverse alphabetical order on title"},
            {name: "min_price",         description: "ascending price"},
            {name: "max_price",         description: "descending price"},
            {name: "manual",            description: "order by ascending position considering a given category. `category` argument must be set"},
            {name: "manual_reverse",    description: "order by ascending position considering a given category. `category` argument must be set"},
            {name: "visible",           description: "online items firts"},
            {name: "visible_reverse",   description: "offline items first"},
            {name: "created",           description: "ascending order on date of content creation"},
            {name: "created_reverse",   description: "descending order on date of content creation"},
            {name: "updated",           description: "ascending order on date of content update"},
            {name: "updated_reverse",   description: "descending order on date of content update"},
            {name: "ref",               description: "alphabetical order on reference"},
            {name: "ref_reverse",       description: "reverse alphabetical order on reference"},
            {name: "position",          description: "order by ascending position, without considering a parent category"},
            {name: "position_reverse",  description: "order by descending position, without considering a parent category"},
            {name: "promo",             description: "promo products first"},
            {name: "new",               description: "new products first"},
            {name: "random",            description: "return products in random order"},
            {name: "given_id",          description: "return the same order received in `id` argument which therefore must be set"}
        ]
      }
outputs :
    - {name: "$ID", description: "the product id"}
    - {name: "$REF", description: "the product reference"}
    - {name: "$IS_TRANSLATED", description: "check if the product is translated or not"}
    - {name: "$LOCALE", description: "the locale used for this loop"}
    - {name: "$BEST_PRICE", description: "the product best tax-free price for the received arguments, depending on the attributes and promo status."}
    - {name: "$BEST_PRICE_TAX", description: "the best price taxes amount"}
    - {name: "$BEST_TAXED_PRICE", description: "the best price including taxes"}
    - {name: "$PSE_COUNT", description: "<strong>Only available if complex='false'</strong><br />the number of product sale elements"}
    - {name: "$PRODUCT_SALE_ELEMENT", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements id"}
    - {name: "$WEIGHT", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements weight"}
    - {name: "$QUANTITY", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements stock quantity"}
    - {name: "$EAN_CODE", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements EAN Code"}
    - {name: "$PRICE", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements price"}
    - {name: "$PRICE_TAX", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements price tax"}
    - {name: "$TAXED_PRICE", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements taxed price"}
    - {name: "$PROMO_PRICE", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements promo price"}
    - {name: "$PROMO_PRICE_TAX", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements promo price tax"}
    - {name: "$TAXED_PROMO_PRICE", description: "<strong>Only available if complex='false'</strong><br />the default product sale elements taxed promo price"}
    - {name: "$IS_PROMO",
        description: "<strong>If complex='true'</strong><br />returns if at least one of it's product sale element is in promo<br /><strong>If complex='false'</strong><br />returns if the default product sale element is in promo"}
    - {name: "$IS_NEW",
        description: "<strong>If complex='true'</strong><br />returns if at least one of it's product sale element is new<br /><strong>If complex='false'</strong><br />returns if the default product sale element is new"}
    - {name: "$VISIBLE", description: "Return if the product is visible or not"}
    - {name: "$VIRTUAL", description: "Return if the product is a virtual product or not"}
    - {name: "$TITLE", description: "the product title"}
    - {name: "$CHAPO", description: "the product chapo"}
    - {name: "$DESCRIPTION", description: "the product description"}
    - {name: "$POSTSCRIPTUM", description: "the product postscriptum"}
    - {name: "$META_TITLE", description: "the product meta title"}
    - {name: "$META_DESCRIPTION", description: "the product meta description"}
    - {name: "$META_KEYWORDS", description: "the product meta keywords"}
    - {name: "$URL", description: "the product URL"}
    - {name: "$POSITION", description: "the product position"}
    - {name: "$TAX_RULE_ID", description: "the product's tax rule ID"}
    - {name: "$TEMPLATE", description: "the template id associated to this product"}
    - {name: "$BRAND_ID", description: "the brand id of this product. Empty if no brand is assigned for this product"}
    - {name: "$HAS_PREVIOUS", description: "true if a product exists before this one in the current category, following products positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$HAS_NEXT", description: "true if a product exists after this one in the current category, following products positions. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$PREVIOUS", description: "The ID of product before this one in the current category, following products positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$NEXT", description: "The ID of product after this one in the current category, following products positions, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}

    - {name: "$DEFAULT_CATEGORY", description: "the default category id associated to this product"}



---

<div class="description large-12">
    I want to display all products from categories 1 and 2 and their subcategories whose feature `color` (ID : 1) is `blue` (ID : 13) or `lightblue` (ID : 17), order by ascending price
</div>


<div class="code large-12">

{% highlight smarty %}

<ul>
{loop type="product" name="my_product_loop" category="1,2" depth="2" feature_availability="1:13|17" order="min_price"}
    <li>{$TITLE} ({$REF})</li>
{/loop}
</ul>

{% endhighlight %}

</div>&nbsp;

<div class="description large-12">
    I want to display all products which are in promo for the current category displaying the new products first and then order by decreasing price
</div>

<div class="code large-12">

{% highlight smarty %}

<ul>
{loop type="product" name="another_product_loop" promo="true" current_category="true" order="new,max_price"}
    <li>{$TITLE} ({$REF})</li>
{/loop}
</ul>

{% endhighlight %}

</div>&nbsp;
