---
layout: home
title: API - Authentication
sidebar: api
lang: en
subnav: api_authentication
---

#{{ page.title }}

In order to use Thelia API in another application, you have to authenticate.

The authentication is done using a token. This token is generated when the API access is created in the admin.
The token must be set in the authorization http header like this :

```
Authorization: Token MYSUPERTOKEN
```

Example using the symfony Request object :

```php
<?php
$request = new Request();
$request->headers->set('Authorization', 'Token MYSUPERTOKEN');
```

Apache authorization header is only used by basic or digest methods. So you must have to force the HTTP_AUTHORIZATION header in your .htaccess file :

```
RewriteRule .* - [env=HTTP_AUTHORIZATION:%{HTTP:Authorization},last]
```

The ```.htaccess``` file included in Thelia is already modified.

## Signing your request

To prevent from [Man in the middle attacks](http://en.wikipedia.org/wiki/Man-in-the-middle_attack), you have to sign your request.

After generating your token, a key has been generated in ```path-to-thelia/local/config/key/you-token.key```
You have to embed this key into your application, as it has to be used as a key for a SHA-1 hash.

Here's an example on how you can do to sign your request:

```php
<?php
/**
 * @param $requestContent is empty for the get method. You have to give your content body if you have one.
 */
function getSignature($requestContent = '')
{
    $secureKey = pack('H*', file_get_contents("api_key_file.key"));
    
    return hash_hmac('sha1', $requestContent, $secureKey);
}

$request = new Request();
$request->headers->set('Authorization', 'Token MYSUPERTOKEN');
$request->query->set('sign', getSignature());

```