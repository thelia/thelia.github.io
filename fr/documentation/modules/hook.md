---
layout: home
title: Admin hooks - Modules
sidebar: plugin
lang: fr
subnav: plugin_hook
---

<div class="page-header">
    <h1>Hooks du back-office</h1>
</div>

Grâce aux hooks (crochets) vous pouvez insérez des blocs de code à de nombreux emplacements dans le back-office.

La procédure est la suivante : créer un fichier html dans le dossiers adminIcludes du modules, il sera analyser er inclus dans le back-office. (le nom du fichier es primordial et dépend du hook)

Votre fichier doit avoir le même nom que le hook dans lequel vous vous injecter du contenu. Par exemple si le nom du hook est ```product-edit```, le nom du fichier doit être ```product-edit.html```

Pour découvrir tous les hooks disponibles dans le back-office, ajouter ```SHOW_INCLUDE=1```à l'url sous forme de querry string. Cela ne fonctionne qu'en mode debug.

Exemple : http://www.mon-site.com/index_dev.php/admin?SHOW_INCLUDE=1
