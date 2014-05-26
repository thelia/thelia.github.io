---
layout: form
title: Newsletter
form_name: thelia.front.newsletter
sidebar: form
subnav: form_list_newsletter
fields:
    - { name: "email", mandatory: "true", description: "email subscribing to the newsletter"}
lang: en

---
```
{form name="thelia.front.newsletter"}
<form id="form-newsletter-mini" action="{url path="/newsletter"}" method="post">
    {form_hidden_fields form=$form}
    {form_field form=$form field="email"}
    <div class="form-group">
        <label for="{$label_attr.for}-mini">{intl l="Email address"}</label>
        <input type="email" name="{$name}" id="{$label_attr.for}-mini" class="form-control" maxlength="255" placeholder="{intl l="Your email address"}" aria-describedby="newsletter-describe" {if $required} aria-required="true" required{/if} autocomplete="off">
    </div>
    {/form_field}
    <button type="submit" class="btn btn-subscribe">{intl l="Subscribe"}</button>
</form>
{/form}
```