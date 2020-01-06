---
layout: home
title: Feature - Permissions
sidebar: features
lang: en
subnav: features_permissions_module
---

# Define permissions for module back-office interface

When creating a module interface in Thelia 2 back-office, you can define which permissions the administrators must be granted to access the interface.

## Define the needed permission to access a template

You can do this by adding the following code in your html template :

```smarty
{block name="check-resource"}module.MyModuleName{/block}
{block name="check-access"}view{/block}
```

## Define the needed permission to display something in smarty template

You may display - or not - some buttons depending on the administrators permissions. You just have to use the [**auth loop**](/en/documentation/loop/auth.html "Auth loop").

```smarty
{loop type="auth" name="can_change" role="ADMIN" module="MyModuleName" access="UPDATE"}
    *here is my link*
{/loop}
```

## Define restricted access in your PHP controller

Since filtering the displayed link in html is - of course - not secure enough, you must check the permissions into each controller action. You can do it like this :

```php
if (null !== $response = $this->checkAuth(array(), array('MyModuleName'), \Thelia\Core\Security\AccessManager::VIEW)) {
    return $response;
}
```