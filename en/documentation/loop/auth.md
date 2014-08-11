---
layout: loop
title: Authentification checker loop
description:
    - The Auth loop perform authorisation checks against the current user. This loop returns nothing if the authorization fails, or the loop contents if it succeeds.
    - You may check in the front office if an administrator is logged in, and perform specific functions in your front-office template (such as direct editing, for example).
sidebar: loop
lang: en
subnav: loop_auth
uses_global_argument: false
returns_global_outputs: { countable : false, timestampable : false, versionable : false }
type: auth
arguments :
    - {name: "role", description: "A comma separated list of user roles", mandatory: "true", example: "role=\"ADMIN\" or can be role=\"CUSTOMER\""}
    - {name: "resource", description: "A comma separated list of resources"}
    - {name: "module", description: "A comma separated list of modules"}
    - {name: "access", description: "A comma separated list of access, . If empty or missing, the authorization is checked against the roles only",
        expected_values: [
            {name: "VIEW"},
            {name: "UPDATE"},
            {name: "CREATE"},
            {name: "DELETE"}
        ]
    }
---

<div class="description large-12">
    I want to check if current administrator is allowed tu use the back-office search function.
</div>

<div class="code large-12">

{% highlight smarty %}

{loop type="auth" name="can_create" role="ADMIN" resource="admin.administrator" access="CREATE"}
    <a title="{intl l='Create a new administrator'}" href="#administrator_create_dialog" data-toggle="modal">
        <span class="glyphicon glyphicon-plus"></span>
    </a>
{/loop}


{% endhighlight %}

</div>&nbsp;

 <div class="postscriptum large-12">

    The role is ADMIN, which mean that the current user should have the "ADMIN" role.
    The permission is "admin.administrator", which is the identifier of the administrator permission.
    According to the access attribute, the current user should have the CREATE permission.

</div>

<div class="description large-12">
    I want to check if the customer is logged in, or not.
</div>

<div class="code large-12">

{% highlight smarty %}

{loop type="auth" name="customer_info_block" role="CUSTOMER"}
    <p>Your are logged in. <a href="{viewurl view='index' action='logoutCustomer'}">Logout</a></p>
{/loop}

{elseloop rel="customer_info_block"}
    You are not logged in. <a href="{viewurl view='login'}">Login now</a> or <a href="{viewurl view='create_account'}">create your account</a>
{/elseloop}


{% endhighlight %}

</div>&nbsp;