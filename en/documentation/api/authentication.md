---
layout: home
title: API - Authentication
sidebar: api
lang: en
subnav: api_authentication
---

#{{ page.title }}

<div class="alert alert-danger">
    For security reasons, you should always use the API over an SSL layer (https)
</div>

## Account creation

You need to create an API account before using it. For this go to the administration panel, configuration -> API Configuration. Once on this page,
create an account, fill the label field and choose an administration profile. By default, only the superadministrator profile is available.

After the creation, download the secure key, store it in a safe place and copy your API Key too.

## Authentication

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

After generating your token, a key has been generated in ```path-to-thelia/local/config/key/your-token.key```
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

## Thelia API client

A PHP client for Thelia API is available : [Thelia API Client](https://github.com/thelia/thelia-api-client)

### How to use it ?

First, add ```thelia/api-client``` to your project :

```bash
composer require "thelia/api-client": "~1.0"
```

Then, create an instance of ```Thelia\Api\Client\Client``` with the following parameters:

```php
$client = new Thelia\Api\Client\Client("my api token", "my api key", "http://mysite.tld");
```

You can access your resources by using the 'do*' methods :

```php
<?php
list($status, $data) = $client->doList("products");
list($status, $data) = $client->doGet("products/1/image", 1);
list($status, $data) = $client->doPost("products", ["myData"]);
list($status, $data) = $client->doPut("products", ["myData"]);
list($status, $data) = $client->doDelete("products", 1);
```

Or you can use magic methods that are composed like that: ```methodEntity```

```php
<?php
list($status, $data) = $client->listProducts();
list($status, $data) = $client->getTaxes(42);
list($status, $data) = $client->postPse($data);
list($status, $data) = $client->putTaxRules($data);
list($status, $data) = $client->deleteAttributeAvs(42);
```
