---
layout: import
title: Import des prix hors taxe des produits
description: Importer les prix hors taxes de vos produits.
sidebar: features
lang: fr
subnav: thelia_untaxed_prices_import

inputs:
    - {"name":"ref", "description":"La référence du PSE"}
    - {"name":"price", "description":"Le prix hors taxe du PSE"}
opt_inputs:
    - {"name":"promo_price", "description":"Le prix promo hors taxe du PSE"}
    - {"name":"promo", "description":"1 si vous souhaitez mettre le PSE en promotion, 0 ou vide sinon"}
    - {"name":"currency", "description":"Le code de la devise pour les prix ( EUR, USD, ... )"}
---

**PSE**

Dans Thelia un PSE (Products Sale Elements) correspond aux Informations de Vente du Produit (IVP ?). Il s'agit de l'ensemble des informations relatives à un produit donné : référence, poids, statut de nouveauté etc.
Chaque produit possède au moins un PSE :
- Les produits sans déclinaisons (variantes) ne possède qu'un seul PSE.
- Les produits ayant des déclinaisions possèdent autant de PSE que de combinaisons de déclinaisons.