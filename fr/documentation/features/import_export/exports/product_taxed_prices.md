---
layout: export
title: Export des prix taxe comprise des produits
description: Exporter les prix taxe compris de vos produits
sidebar: features
lang: fr
subnav: thelia_taxed_prices_export

outputs:
    - {"name":"product_id", "description":"l'ID du produit"}
    - {"name":"ref", "description":"La référence du PSE"}
    - {"name":"title", "description":"Le titre du produit"}
    - {"name":"attributes", "description":"Les attributs liés au PSE séparés par des virgules"}
    - {"name":"ean", "description":"Le code EAN du PSE"}
    - {"name":"price", "description":"Le prix taxé du PSE"}
    - {"name":"promo_price", "description":"Le prix promo taxé du PSE"}
    - {"name":"currency", "description":"La devise utilisé pour les prix"}
    - {"name":"promo", "description":"1 si le PSE est en promo, 0 sinon"}
    - {"name":"product_tax_title", "description":"Le titre de la règle de taxe du produit"}
    - {"name":"tax_id", "description":"L'ID de la règel de taxe du produit"}
---

**PSE**

Dans Thelia un PSE (Products Sale Elements) correspond aux Informations de Vente du Produit (IVP ?). Il s'agit de l'ensemble des informations relatives à un produit donné : référence, poids, statut de nouveauté etc.
Chaque produit possède au moins un PSE :
- Les produits sans déclinaisons (variantes) ne possède qu'un seul PSE.
- Les produits ayant des déclinaisions possèdent autant de PSE que de combinaisons de déclinaisons.