---
layout: home
title: Cache
sidebar: templates
lang: fr
subnav: templates_smarty_cache
---

# Cache de blocs

<div class="alert alert-warning">
<p>Cette fonctionnlaité n'est disponible que depuis la version 2.4</p>
</div>

Le chache de bloc utilise le service `thelia.cache`.
Vous pouvez utiliser cette fonction sur les parties statiques de votre site (menu, pied de page) accélérer la génération de vos pages web.

### Arguments

- key : (obligatoire) un identifiant unique
- ttl : (obligatoire) une durée de vie, validité du cache (en secondes)
- lang : un cache spécifique par langue (par défaut l'ID de la langue courante)
- currency : un cache specifique à une devise (par défaut l'ID de la devise courante)

Vous pouvez ajouter autant d'arguments que vous le souhaitez. Ceux-ci seront utilisés pour générer un indentifiant unique.

### Exemple:

Cas standard :
Dans l'exemple suivant le contenu HTML ou Smarty dans le bloc `{cache key="my-cache"}` et `{/cache}` sera mis en cache pour pendant 600 secondes pour tous les visiteurs du site.

```smarty
{cache key="my-cache" ttl=600}
    ...Code HTML ou Smarty ...
{/cache}
```

Exemple de mise en cache de contenu pour un client donné :
Dans l'exemple suivant le contenu HTML ou Smarty dans le bloc `{cache key="my-cache"}` et `{/cache}` sera mis en cache pour pendant 600 secondes uniquement pour le visiteurs dont l'identifiant est `$CUSTOMER_ID`.

```smarty
{cache key="my-cache" ttl=600 customer_id=$CUSTOMER_ID}
    ...Code HTML ou Smarty ...
{/cache}
```

Exemple d'annulation de la mise en cas par devise.
Dans l'exemple suivant le contenu HTML ou Smarty dans le bloc `{cache key="my-cache"}` et `{/cache}` sera mis en cache pour pendant 600 secondes quelque soit la devise actuellement utilisée.

```smarty
{cache key="my-cache" ttl=600 currency="no"}
    ...Code HTML ou Smarty ...
{/cache}
```

Exemple de mise en cache pour un administrateur donné :
Dans l'exemple suivant le contenu HTML ou Smarty dans le bloc `{cache key="my-cache"}` et `{/cache}` sera mis en cache pour pendant 600 secondes pour l'administrateur dont l'identifiant est `$ADMIN_ID`.

```smarty
{cache key="my-cache" ttl=600 admin_id_=$ADMIN_ID}
    ...Code HTML ou Smarty ...
{/cache}
```

Vous pouvez désactiver la mise en cache d'un block sans pour autant le supprimer. Pour ce faire vous devez spécifiez un `ttl` égal à 0.

```smarty
{$ttl = 600}
{if $maCondition}
    {$ttl = 0}
{/if}

{cache key="my-cache" ttl=$ttl}
    ...Code HTML ou Smarty ...
{/cache}
```

<div class="alert alert-info">
<p>En mode développement, la mise en cache est ésactivée.</p>
</div>

### Pour les versions de Thélia antérieures à la version 2.4

Un module permet de disposer de cette fonctionnalité.
Vous pouvez télécharger le module suivant : [Smarty Cache for Thelia < 2.4](https://github.com/thelia-modules/SmartyCache)