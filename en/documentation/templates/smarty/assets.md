---
layout: home
title: Thelia Template Assets
sidebar: templates
lang: en
subnav: templates_smarty_assets
---

# Managing Template Assets

Template assets are managed in a sub-directory of the template directory. For example, the default front-office template contains an 'assets' directory to store all template's assets :

    template
    |
    + frontOffice
      |
      + default
        |
        + assets
          |
          + css
          + js
          + font
          + less
          + img
          + ...

Thus, assets are not available to the Web server, as they're not physically located in the 'web' directory.

However, Thelia provides a way to make the assets available to the web server, while pre-processing it if required. For example, compile a LESS css, or a CoffeesSript JS file. This feature is implemented by the [Assetic library](https://github.com/kriswallsmith/assetic).

## Activate automatic assets generation

Even if Thelia uses a cache and a file modification checking system, assets generation is time consuming and may have an impact on your shop performances. Thus, automatic assets generation is disabled by default.

To activate it you have to :

1. Set the `process_assets` configuration variable to 1
2. Access your shop in development mode, using `index_dev.php` instead of `index.php`, e.g. `http://www.myshop.com/index_dev.php` instead of `http://www.myshop.com`.

If the web server is not installed on your local machine, you have to add your workstation IP address to the allowed list of IP in the `index_dev.php` file :

    // List of allowed IP
    $trustedIp = array(
      '::1',
      '127.0.0.1',
      'your.ip.goes.here',
    );

> From Thelia 2.2, the structure of the assets of the default front-office template has changed, and are managed with Grunt and Bower (read more about [Grunt and Bower on Thelia School](http://thelia-school.com/utiliser-grunt-et-bower-pour-vos-templates-thelia.html)). The `src` directory contains the assets sources, and the `dist` directory contains the generated assets.
>
> However, you can still enjoy automatic assets generation from sources. To do do, just change in the layout.tpl file of the default front-office template :
>
> `{stylesheets file='assets/dist/css/thelia.min.css'}`
> by :
> `{stylesheets file='assets/src/less/thelia.less' filters='less'}`
>
> The assets will then be automatically generated when a change is detected in the source.


When assets are generated, a new `assets` directory is created in the `web` directory. This directory structure follows almost the same structure of the `template` directory, thus relative references in your assets files will be preserved.

The assets file names are not the same as the original ones, and some of them may be merged in a unique file, depending of the filters applied during assets processing.

## Using assets in your templates ##

To use this feature, you'll have to add some specific directives to your template files.

> Note that you may create a template which uses an assets directory directly located in the web directory, but you'll miss some interesting features, like css, js and images preprocessing and caching.


### {declare_assets} ###

This directive tells the Thelia template system where your assets are located, e.g. the name of the root directory which contains all your assets.

For example, the default front-office template stores its template in the `assets` directory :

    {declare_assets directory="assets"}


### {stylesheets} and {stylesheet} ###

This directive processes your CSS style sheets.

    {stylesheets file="assets/src/less /*.less" filters="less"}
        <link href="{$asset_url}" rel="stylesheet" type="text/css" />
    {/stylesheets}

Or

    {stylesheets file="assets/css/style.css"}
        <link href="{$asset_url}" rel="stylesheet" type="text/css" />
    {/stylesheets}

This block returns only one parameter, `$asset_url`, which is the asset URL in the web space, e.g. under the web/assets path.

The valid parameters are :

- file
- filters
- source
- template
- failsafe

You may also use the short form `{stylesheet}`, which directly returns the URL of the CSS file :

    <link href="{stylesheet file='assets/css/style.less' filters='less'}" rel="stylesheet" type="text/css" />

#### file ####

This is the path to the file (or files, as jokers like '\*' are allowed), relative to the template base path.

The value of this parameter is a file path, form example `assets/syles/my_style.css`, or a set of files, like `assets/css/*.css`

#### filters ####

Apply a filter to the source(s) files. Available filters are :

- less : compile CSS using the [LESS compiler](http://lesscss.org/)
- sass : compile CSS using the [SASS compiler](https://sass-lang.com/)
- compass : compile CSS using the [Compass compiler](http://compass-style.org/)

#### source ####

When in the templates files of a module, use this parameter to specify that the source of the asset has to be searched within the module's path instead of the main template path.

For example, in the `MyModule/templates/frontOffice/default` directory, you'll define some templates that will be displayed in the front office.

You can define module specific assets in the `MyModule/templates/frontOffice/default/assets` directory. To instruct the Thelia template system to get assets from your module's directory


    {stylesheets source="MyModule" file="assets/css/style.css" template="default"}
        <link href="{$asset_url}" rel="stylesheet" type="text/css" />
    {stylesheet}

The example above Will use the style.css file defined by MyModule, and located in `local/MyModule/templates/frontOffice/default/assets/css` directory.

#### template ####

You may want to use an asset located in another template of the same type (for example, another front office template). To do so, specify the name of this template in the `template` parameter :

    {stylesheets file="assets/css/style.css" template="default"}
        <link href="{$asset_url}" rel="stylesheet" type="text/css" />
    {stylesheet}

The example above will use the style.css file, located in the `assets/css` directory of the `default` front office template (the file path is `templates/frontOffice/default/assets/css/style.css`).

#### failsafe ####

When true, the failsafe parameter prevents the re-throw of exceptions when an asset is not found, even in development mode.
Example usage of this parameter:

    {stylesheets file="assets/css/mystyle.css" failsafe=true}
        <link href="{$asset_url}" rel="stylesheet" type="text/css" />
    {stylesheet}


### {images} and {image} ###

These directives process static images used in your template.

    {images file='assets/img/favicon.ico'}
        <link rel="shortcut icon" type="image/x-icon" href="{$asset_url}">
    {/images}

This block returns only one parameter, `$asset_url`, which is the asset URL in the web space, e.g. under the web/assets path.

You may also use the short form `{image}`, which directly returns the URL of the image :

    <img src="{image file='assets/img/kittens-and-babies.jpg'}" alt="Some text">

The valid parameters are:

- file
- source
- template

#### file ####

This is the path to the file, relative to the template base path.

In the file name joker characters, like "\*", are **NOT** allowed.

#### source ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#source)

#### template ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#template)

### {javascripts} and {javascript} ###

These directives process your javascript files

    {javascripts file='assets/js/script.js'}
        <script type="text/javascript" src="{$asset_url}"></script>
    {/javascripts}

The valid parameters are:

- file
- source
- template

You may also use the short form `{javascript}`, which directly returns the URL of the JS file :

    <script type="text/javascript" src="{javascript file='assets/js/script.js'}"></script>

#### file ####

This is the path to the file (or files, as jokers like '\*' are allowed), relative to the template base path.

The value of this parameter is a file path, for example `assets/js/script.js`, or a set of files, like `assets/js/*.js`

#### source ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#source)

#### template ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#template)

### {asset} ###

This directive processes any asset file, and is only available in its short form. Example for an audio asset:

    <audio src="{asset file='assets/sound/my_sound.ogg'}" autoplay>
      Audio not supported.
    </audio>

#### file ####

This is the path to the file, relative to the template base path.

The value of this parameter is a file path, for example `assets/sound/my_sound.ogg`.

#### source ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#source)

#### template ####

see [```{stylesheets}```](http://doc.thelia.net/en/documentation/templates/assets.html#template)

### {local_media} ###

> This directive is available since Thelia 2.3.4.

Some assets can be uploaded through the back-office (in Configuration > Store) and no longer require to be manually copied in the right folder. This features currently includes the store **logo**, the website **favicon** and the email template **banner**.

    {local_media type="favicon" width=16 height=16}
        <link rel="icon" type="{$MEDIA_MIME_TYPE}" href="{$MEDIA_URL}" />
    {/local_media}

This block can return two parameters :
- `$MEDIA_URL` : the URL of the media
- `$MEDIA_MIME_TYPE` : **for favicons only**, the mime-type of the favicon file (ex : *image/x-icon*)

> Note that this directive requires no "file" parameter because it takes the file provided in the Store Configuration in back-office. If no file was provided, it will display the default Thelia logo, banner or favicon.

> By default, the uploaded files are stored in *local/media/images/store*. You can change it by editing the system variable `images_library_path` in back-office (Configuration > System variables)

The valid parameters are:

- type
- width
- height
- resize_mode

#### type ####

This is the type of the media. The currently allowed values are :  "logo", "banner" and "favicon".

#### width ####

Width of the transformed image. If the provided file is a .ico file, this value is ignored.

#### height ####

Height of the transformed image. If the provided file is a .ico file, this value is ignored.

#### resize_mode ####

Type of resize of the transformed image. The allowed values are : "crop", "borders" and "none". If the provided file is a .ico file, this value is ignored.
