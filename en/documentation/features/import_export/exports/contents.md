---
layout: export
title: Contents and folders export
description: Export your orders
sidebar: features
lang: en
subnav: thelia_contents_export
has_images: true
has_documents: true

outputs:
    - {"name":"id", "description":"The content's ID"}
    - {"name":"title", "description":"The content's title"}
    - {"name":"chapo", "description":"The content's short description"}
    - {"name":"description", "description":"The content's description"}
    - {"name":"conclusion", "description":"The content's postscriptum"}
    - {"name":"visible", "description":"1 if the content is visible, 0 otherwise"}
    - {"name":"seo_title", "description":"The content's SEO title"}
    - {"name":"seo_description", "description":"The content's SEO description"}
    - {"name":"seo_keywords", "description":"The content's keywords"}
    - {"name":"url", "description":"The content's rewritten URL"}
    - {"name":"folder_id", "description":"The assocatied folders' ids"}
    - {"name":"is_default_folder", "description":"1 if the folder is the default one, 0 otherwise"}
    - {"name":"folder_title", "description":"The folder title"}
    
opt_outputs:
    - {"name":"content_images", "description":"Only if the export contains the images. The content's images name, seperated by commas"}
    - {"name":"folder_images", "description":"Only if the export contains the images. The folder's images name, seperated by commas"}
    - {"name":"content_documents", "description":"Only if the export contains the documents. The content's documents names, seperated by commas"}
    - {"name":"folder_documents", "description":"Only if the export contains the documents. The folder's documents names, seperated by commas"}
---
