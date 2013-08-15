---
layout: home
title: Admin - Manipulating URLs
sidebar: admin
subnav: admin_urls
---

# Manipulating URL in the admin context


The template names template.html and located in the directory templates/admin/default/path/to will be processed and displayed.

In most cases, you'll use the admin_viewurl function :

     `{admin_viewurl path="path/to/template"}`

## How it works ?

The `admin_viewurl` function expands the template path to `http://www.yourdomain.com/index.php/admin/path/to/template`, or, if rewriting is on, and rewriting configuration has not been modified, `http://www.yourdomain.com/admin/path/to/template`

This URLs matches the default route defined in `Config/Resources/routing/admin.xml`, which triggers the processTemplateAction() method of BaseAdminController, because no other route can be matched.

processTemplateAction adds the template extension (.html) to the template name, and renders the template using the URL::adminViewUrl() method, or renders 404.html if a ResourceNotFoundException exception occurs (e.g, the template file does not exists).

## Example

This example loads the Thelia latest news in the login page via Ajax, using admin_viewurl to get the thelia_news_feed.html template, located in the includes directory of the default admin template :

```smarty
<script>
	$(function () {
		$(".feed-list").load("{admin_viewurl view='includes/thelia_news_feed'}");
	})
</script>
```