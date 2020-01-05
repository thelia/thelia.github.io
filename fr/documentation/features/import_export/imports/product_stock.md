---
layout: import
title: Import du stock produits
description: Importer vos stocks produits
sidebar: features
lang: fr
subnav: thelia_product_stock_import

inputs:
    - {"name":"ref", "description":"La référence du PSE"}
    - {"name":"stock", "description":"Le stock du PSE"}
opt_inputs:
    - {"name":"ean", "description":"Le code EAN du PSE"}
---

**PSE**

Dans Thelia un PSE (Products Sale Elements) correspond aux Informations de Vente du Produit (IVP ?). Il s'agit de l'ensemble des informations relatives à un produit donné : référence, poids, statut de nouveauté etc.
Chaque produit possède au moins un PSE :
- Les produits sans déclinaisons (variantes) ne possède qu'un seul PSE.
- Les produits ayant des déclinaisions possèdent autant de PSE que de combinaisons de déclinaisons.