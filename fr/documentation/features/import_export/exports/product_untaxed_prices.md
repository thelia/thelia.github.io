---
layout: export
title: Export des prix hors taxe des produits
description: Exporter les prix hors taxe de vos produits
sidebar: features
lang: fr
subnav: thelia_prices_export

outputs:
    - {"name":"product_id", "description":"l'ID du produit"}
    - {"name":"ref", "description":"La référence du PSE"}
    - {"name":"title", "description":"Le titre du produit"}
    - {"name":"attributes", "description":"Les attributs liés au PSE séparés par des virgules"}
    - {"name":"ean", "description":"Le code EAN du PSE"}
    - {"name":"price", "description":"Le prix hors taxe du PSE"}
    - {"name":"price", "description":"Le prix promo hors taxe du PSE"}
    - {"name":"currency", "description":"La devise utilisé pour les prix"}
    - {"name":"promo", "description":"1 si le PSE est en promo, 0 sinon"}
---

**PSE**

Dans Thelia un PSE (Products Sale Elements) correspond aux Informations de Vente du Produit (IVP ?). Il s'agit de l'ensemble des informations relatives à un produit donné : référence, poids, statut de nouveauté etc.
Chaque produit possède au moins un PSE :
- Les produits sans déclinaisons (variantes) ne possède qu'un seul PSE.
- Les produits ayant des déclinaisions possèdent autant de PSE que de combinaisons de déclinaisons.