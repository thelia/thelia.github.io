---
layout: export
title: Contents and folders export
description: Export your orders
sidebar: features
lang: fr
subnav: thelia_contents_export
has_images: true
has_documents: true

outputs:
    - {"name":"id", "description":"l'$ID du contenu"}
    - {"name":"title", "description":"Le titre du contenu"}
    - {"name":"chapo", "description":"Le résumé du contenu"}
    - {"name":"description", "description":"La description du contenu"}
    - {"name":"conclusion", "description":"Le postscriptum du contenu"}
    - {"name":"visible", "description":"1 si le contenu est visble, 0 sinon"}
    - {"name":"seo_title", "description":"Le titre SEO du contenu"}
    - {"name":"seo_description", "description":"La descrition SEO du contenu"}
    - {"name":"seo_keywords", "description":"Les mots clés associés au contenu"}
    - {"name":"url", "description":"L'url rééecrite du contenu"}
    - {"name":"folder_id", "description":"L'identifiants ($ID) des dossiers associés au contenu"}
    - {"name":"is_default_folder", "description":"1 si le dossier est celui par défaut, 0 sinon"}
    - {"name":"folder_title", "description":"Le titre du dossier"}

opt_outputs:
    - {"name":"content_images", "description":"Uniquement si l'export contient des images. Le nom des images séparés par des virgules"}
    - {"name":"folder_images", "description":"Uniquement si l'export contient des images. Le nom des images du dossier séparés par des virgules"}
    - {"name":"content_documents", "description":"Only if the export contains the documents. Le nom des documents du contenus séparés par des virgules"}
    - {"name":"folder_documents", "description":"Only if the export contains the documents. Le nom des documents du dossies séparés par des virgules"}
---
