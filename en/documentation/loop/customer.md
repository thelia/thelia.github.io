---
layout: loop
title: Customer Loop
description: Customer loop displays customers information.
sidebar: loop
lang: en
subnav: loop_customer
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
text_search_fields: ref, firstname, lastname, email
type: customer
arguments :
    - {name: "current", description: "A boolean value which must be set to false if you need to display not authenticated customers information, typically if `sponsor` parameter is set.", example: "current=\"false\"", default: "yes"}
    - {name: "id", description: "A single or a list of customer ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "ref", description: "A single or a list of customer references.", example: "ref=\"1231231241\", ref=\"123123,789789\""}
    - {name: "reseller", description: "A boolean value.", example: "reseller=\"yes\""}
    - {name: "sponsor", description: "The sponsor ID which you want the list of affiliated customers", example: "sponsor=\"1\""}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $HAS_PREVIOUS, $HAS_NEXT, $PREVIOUS, and $NEXT output variables are available.", example: "with_prev_next_info=\"yes\"", default: "false"}
    - {
        name: "order", description: "A list of values to order loop results", example: "order=\"firstname, lastname\"", default: "lastname",
        expected_values: [
            {name: "id",                description: "order by ascending ID"},
            {name: "id_reverse",        description: "order by descending ID"},
            {name: "firstname",         description: "alphabetical order on firstname"},
            {name: "firstname_reverse", description: "reverse alphabetical order on firstname"},
            {name: "lastname",          description: "alphabetical order on lastname"},
            {name: "lastname_reverse",  description: "reverse alphabetical order on lastname"},
            {name: "reference",         description: "alphabetical order on reference"},
            {name: "reference_reverse", description: "reverse alphabetical order on reference"},
            {name: "last_order",         description: "ascending date of last order"},
            {name: "last_order_reverse", description: "descending date of last order"},
            {name: "order_amount",         description: "ascending amount of last order"},
            {name: "order_amount_reverse", description: "descending amount of last order"},
            {name: "registration_date",          description: "ascending registration date"},
            {name: "lregistration_date_reverse", description: "descending registration date"}
        ]
      }    

outputs :
    - {name: "$ID", description: "the customer id"}
    - {name: "$REF", description: "the customer reference"}
    - {name: "$TITLE", description: "the customer title which might be use in <a href=\"/en/documentation/loop/title.html\">title loop</a>"}
    - {name: "$FIRSTNAME", description: "the customer firstname"}
    - {name: "$LASTNAME", description: "the customer lastname"}
    - {name: "$EMAIL", description: "the customer email"}
    - {name: "$RESELLER", description: "return if the customer is a reseller"}
    - {name: "$SPONSOR", description: "the customer sponsor which might be use in another <a href=\"/en/documentation/loop/customer.html\">customer loop</a>"}
    - {name: "$DISCOUNT", description: "the customer discount"}
    - {name: "$NEWSLETTER", description: "true if the customer is registered in the newsletter table, false otherwise"}
    - {name: "$CONFIRMATION_TOKEN", description: "the customer registration confirmation token, used when email confirmation of registration is enabled (see <strong>customer_email_confirmation</strong> configuration variable)"}
    - {name: "$HAS_PREVIOUS", description: "true if a customer exists before the current one, regarding the curent order. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$HAS_NEXT", description: "true if a customer exists after the current one, regarding the curent order. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$PREVIOUS", description: "ID of the previous customer, or null if non exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
    - {name: "$NEXT", description: "ID of the next customer, or null if non exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true"}
---
