---
layout: home
title: Hooks - Modules
sidebar: plugin
lang: en
subnav: plugin_hook
---

<div class="page-header">
    <h1>Modules : <small>Hooks</small></h1>
</div>

Lorsque vous créez un module pour Thelia, vous voudrez certainement qu'il puisse intéragir avec votre site de 2 manières différentes : 

- sur les événements du coeur de Thelia pour générer de nouveaux comportements, comme par exemple envoyer un mail à l'administrateur lorsqu'un produit n'est plus disponible. Sur Thelia, cette fonctionnalité est gérer par le système d'Event Listener / Dispatcher
- en modifiant l'affichage de certaines pages. Cette fonctionnalité est rendu possible grâce aux **Hooks**

Les **Hooks** sont en fait des points d'accrochages dans les templates dans lesquels les modules vont pourvoir insérer leur propre code et ainsi ajouter des fonctionnalités et modifier l'apparence du site.

Avant les Hooks, la seule possibilité pour pourvoir modifier l'affichage du site était de modifier le template du site pour inclure les nouveaux morceaux de codes permettant d'intéragir avec le module.  
Cette solution n'était pas idéale car elle nécessitait un certain travail d'intégration pouvant être assez complexe pour des débutants et pouvait poser des problèmes si le template modifié était le template par défaut de Thelia et qu'une mise à jour de ce thème était disponible.

Avec les Hooks, l'intégration devient plus simple voir totalement automatique. En effet, les modules utilisant les hooks fournissent une implémentation par défaut basé sur le template par défaut de Thelia. Si vous avez créé un template basé sur ce template par défaut de Thelia alors il y a de grandes chances que vous n'ayez rien d'autres à faire que d'activer le module. 

La grande force de Thelia étant la possibilité de personnaliser son site au niveau de l'affichage, il peut arriver que certains modules ne s'intègrent pas de manières optimales avec leur implémentations par défaut.  
Heureusement, un système de surcharge est possible au niveau du template sans avoir à toucher aux fichiers du module, rendant ainsi une mise à jour du module possible.

  



