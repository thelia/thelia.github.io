---
layout: home
title: Feature - Moteur de taxe
sidebar: features
lang: fr
subnav: features_tax_admin
---

# Gestion des taxes

Le moteur de taxe de Thelia est basé sur des **txes** qui peuvent être combinées au sein de **règles de taxe**


## Qu'est-ce qune ***taxe*** ?

Une ***taxe*** est une effet basé sur un [*type*](/fr/documentation/features/tax/type.html)

Vous pouvez voir, créer, mettre à jour et supprimer des txes dans le menu "Configuration" -> "Règles de taxes" du back-office.

Par exemple, la TVA française à 20% est de type ***Price % tax*** dont le montant est ***20***.

![Edition d'une taxe](/img/documentation/features/tax/edit_tax.png "Edition d'une taxe")


## Qu'est-ce q'une ***règle de taxe*** ?

Une ***règle de taxe*** est ou une combinaison de teaxe ou une taxe unique. Les ***règles de taxe*** sont assignées à des produits. Chacun se voit attribuer une ***règle de taxe***. Les taxes variant selon les pays, un produit pourra avoir dirrérente taxe - ou pas de taxe du tout - en fonction du pays.

Vous pouvez voir, créer, mettre à jour et supprimer des txes dans le menu "Configuration" -> "Règles de taxes" du back-office.

Quand vous gérez les taxes au sein de règles de taxe, vous pouvez indiquer si la taxe est applicable à un prix incluant déjà une taxe.

Voici un exemple relativement complexe,  nous avons créer les 3 taxes suivantes :

![Taxe alpha](/img/documentation/features/tax/alpha_tax.png "Taxe alpha")
![Taxe beta](/img/documentation/features/tax/beta_tax.png "Taxe beta")
![Taxe delta](/img/documentation/features/tax/delta_tax.png "Taxe delta")

et les combinons dans une nouvelle règle de taxe conmme ceci :

![Règle de taxe](/img/documentation/features/tax/tax_rule.png "Règle de taxe")

Nous plaçons les taxes alpha et beta dans un premier groupe et la atxe delta dans un second groupe.

Nous calculerons donc le montant de la taxe du premier groupe sur un prix hors taxe, et ensuite le montant de la taxe du deuxième groupe sur une prix hors taxe auquel s'ajoute le montant de la taxe calculé pour le premier groupe.

Effectuons le calcul pour un produit valant 100 €.

Montant hors taxe du produit = 100

Calculons tout d'abord le montant de la taxe pour le premier groupe;<br/>
Taxe alpha = 5€, le montant de cette taxe est fixe et égale à 5€<br/>
Taxe beta = 10%, le montant de cette taxe est donc de 100 x 10% soit 10€<br/>

Le montant total des taxes pour le premier groupe est donc de **5€ + 10€ = 15€**


Nous calculons ensuite le montant de la taxe pour le deuxième groupe, soit **(100 + 15) * 20% = 23€**

Le montant totale des taxes pour ce produit est donc de 15€ + 23€ = 38€. Le prix toutes taxes comprices (T.T.C.) du produit est donc de 138€

