---
layout: home
title: Using a CDN for assets
sidebar: templates
lang: en
subnav: templates_smarty_cdn
---

# Using a CDN for your assets

From Thelia 2.4, you can use a CDN (or at least an alternate domain) for your assets, documents and images URLs.

Two configuration variables are defined : 
- `cdn.assets-base-url` : this is the URL for the template assets. These assets are normally located in the web/assets directory, that is https://cdn.myshop.tld/assets. If this variable is set, they will be searched at the provided URL.
- `cdn.documents-base-url` : this is the URL for content, products, categories, folders, etc. images and doucments, which are normally located in `web/cache/documents` and `web/cache/images`, that is https://cdn.myshop.tld/cache/images and https://cdn.myshop.tld/cache/documents. If this variable is set, they will be searched at the provided location.

If these variables are not empty, the provided URL is used instead of the shop base URL. For example, if the shop URL is https://myshop.tld, and the cdn.assets-base-url is https://cdn.myshop.tld, all assets will be searched on https://cdn.myshop.tld/assets/...

A basic usage of this feature is speeding-up page loading, by defining CDNs URLs as aliases of the shop main URL. The browser will then make more parallel connections to your server.

Some modules may implement more sophisticated CDN strategy, see "Developper information" below.

## In your templates

The `{url}` Smarty function has a new `base_url` parameter, which allow creation of CDN URLs from the template. This is useful if you're manipulating assets or resources which are outside the directories managed by Thelia assets management. For example, to load a script which is located in the non standard directory web/my-own-assets, you can use the `base_url` parameter to set the location to the CDN 

```
{url file="my-own-assets/js/vendors/tarteaucitron/tarteaucitron.js" base_url={config key='cdn.assets-base-url'}}
```

## Developper information

The classes that use cdn.* variables have a setCdnBaseUrl() method, to allow on the fly change of the CDNs URL if needed, for example when a real CDN exists :)

cdn.assets-base-url is used by TheliaSmarty\Template\Assets\SmartyAssetsResolver, and cdn.documents-base-url by Thelia\Action\BaseCachedFile