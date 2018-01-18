---
layout: substitution
title: Product Substitution
description: Product Substitutions provide current product, identified by `product_id` parameter (either GET or POST).
sidebar: substitution
lang: en
subnav: substitution_product
prefix: product
attributes :
    - {name: "id", description: "The product ID"}
    - {name: "ref", description: ""}
    - {name: "brand_id", description: ""}
    - {name: "title", description: "The product title, in the current selected language"}
    - {name: "chapo", description: "The product chapo, in the current selected language"}
    - {name: "description", description: "The product description, in the current selected language"}
    - {name: "postscriptum", description: "The product postscriptum, in the current selected language"}
    - {name: "tax_rule_id", description: "The product tax rule ID"}
    - {name: "visible", description: "True if the product is visdible, false otherwise"}
    - {name: "position", description: "The product position in the default category"}
    - {name: "createdAt", description: "The product creation date", is_DateTime: true}
    - {name: "updatedAt", description: "The product last modification date", is_DateTime: true}
    - {name: "version", description: "The product version number"}
    - {name: "versionCreatedAt", description: "The current product version creation date", is_DateTime: true}
    - {name: "versionCreatedBy", description: "The current product version last modification date", is_DateTime: true}
---