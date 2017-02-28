---
layout: home
title: Templating - Modules
sidebar: plugin
lang: en
subnav: plugin_templating
---

<div class="page-header">
    <h1>Modules : <small>Templating</small></h1>
</div>

In your controller, you can use the templating engine to generate the content of your response, basicaly HTML content. 

2 helper functions are present to do this job : render and renderRaw

The main difference is that `renderRaw` returns the rendered code (`string`) whereas `render` returns a response (`\Thelia\Core\HttpFoundation\Response`). That is, `renderRaw('response.html')` and `render('response.html')` will both attempt to render the `response.html` template: the former will simlpy return HTML rather an object.

## Example

`Something.php` :

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class Something extends BaseFrontController
{
    public function viewAction($productId)
    {
        // ...
        
        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```

By default, the template file to render is located inside your module in the `templates` directory. Then, in one of the following directories depending of the context of the request : frontOffice, backOffice, pdf, email. And finally in the directory with the same name of you current template (in the current context)

`mytemplate.html` : 

```smarty
{loop type="product" name="mymodule.product" id="{$product_id}"}
    {* Do something with product *}
{/loop}
```

## Overrides and fallbacks

When you call the `render` function inside your module, Thelia will apply rules to define which file to use. Thus, persons could override template files without having to change the module files.

Example : if we use the frontOffice template `mytemplate`, and render `myrender` file inside `mymodule` module :

1. Thelia will first test if file `templates/frontOffice/mytemplate/myrender.html` exists and will use it.
2. Then it will test the file `/local/modules/mymodule/templates/frontOffice/mytemplate/myrender.html`.
3. By default, Thelia will stop here and generate an error if the file has not been founded. But, in your controller, if you have set variable `$useFallbackTemplate` to `true`, then Thelia will finally fall back on file `/local/modules/mymodule/templates/frontOffice/default/myrender.html`.

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class MyController extends BaseFrontController
{
    
    protected $useFallbackTemplate = true;
    
    public function viewAction($productId)
    {
        // ...
        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```
