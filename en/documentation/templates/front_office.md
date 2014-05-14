---
layout: home
title: Front Office
sidebar: templates
lang: en
subnav: templates_fronts
---
<div class="page-header">
    <h1>How to modify your template ?</h1>
</div>

## Modify .LESS FILE

1- Use lessc, or any other tool to compile your LESS file to generate a new style.css used by thelia

2- If you want thelia to do an automatic compilation you can go in the backOffice and set the "process_assets" variable to 1

Then in the file called layout.tpl replace 

```
{stylesheets file='assets/css/styles.css'}
by
{stylesheets file='assets/less/styles.less' filters="less"}

```

Last thing to test your new changes run http://yoursite.com/index_dev.php 
