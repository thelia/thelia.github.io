---
layout: home
title: Templates d'emails
sidebar: templates
lang: fr
subnav: templates_smarty_emails
---

# Les emails Thelia

Thelia propose une méthide flexible pour définir le contenu des emails envoyés par le système. Un template d'email utilise les mêmes principes qu'un template pour le front-office ou le back-office. Il utilise le langage Smarty et les boucles et substitutions Thelia.

## À propos des gabarits d'emails, des vues et des templates

Vous pouvez définir les contenus des emails directement dans le back-office mais vous pouvez égelement utilser le même système  que le front-office ou les PDF, en définissant un ensemble de vues et en les regroupant dans un sous-dossier du doossier templates/emails de votre installation.
Vous pourrez alors utiliser toues les fonctionnalités de Smarty y compris l'héritage.

La manière la plus basique de définir le contenu d'un email est de saisir le code directement dans le back-office dans les paramètres "Messages".

Si vous voulez réutiliser les gabarits ou utiliser le mécanisme d'inclusion ou d'héritage pout tous ou sertains de vos emails, utilisez un template d'emails. Créer un gabarit (.tpl) et/ou des vues (.html) et configurez le message dans le back-office de Thelia.

## Layouts

Les gabarits d'emails sont utilisés pour fournir un modèles certains ou la totalité des emails envoyés par Thelia ou par les modules.

Les gabarits devraient avoir l'extension `tpl`et devraient utiliser `{message_body}` comme emplacement temporaire du contenu final du message.

Par exemple, un gabarit minimal est :

```smarty
{$message_body nofiler}
```

Vous devriez le drapeau `nofilter` pour éviter l'échappement HTML du contenu de la variable `$message_body`. Thelia échappe automatiquemnt le contenu des variables.

Il n'y a pas de limitations quelconques en ce qui concerne le contenu du gabarit.Par exemple il est possible de prévoir l'héritage en utilisant des blocks.

```smarty
{block name='message-body'}{$message_body nofilter}{/block}
```

(Le gabarit `default` default-html-layout.tpl utilise d'aiileurs ce principe)

Avec un block défini de cette manière, vous pourrez ensuite étendre les vues de messages comme ci-dessous :

```smarty

{block name='message-body'}

...Placer ici le contenu du template...

{/block}
```

## Vues

Une vue contient le corps  d'un message spécifique. Elle pourrait étendre un gabarit, mais dans ce cas, vous de DEVEZ PAS choisir ce gabarit  comme gabarit du message dans le back office.

Les vues au format HTML DEVRAIENT AVOIR l'extension `html` pour être visible dans le menu "Nom du fichier HTML" dans le back-office.
Les vues au format texte DEVRAIENT AVOIR l'extension `text` pour être visible dans le menu "Nom du fichier texte" dans le back-office.

## Templates

Un template email est simplement une collection de gabarits (.tpl) et/ou de vues (.html), groupées dans un sous-dossier du répertoire templates/emails.

Le template email courant est défini dans la configuration Thelia par la variable `active-mail-template`.

## Quelles choix s'offrent à vous ?

Pour n'importe quel message vous pouvez :

- Ne pas utiliser de vues ou de gabarits et vous en remettre au texte et contenu HTML saisi en back-office.
- Utiliser uniquement les gabarits pour définir un design commun pour tous vos emails. Ces gabarits seront enrichis (via `{$message_body}`) avec du texte ou du contenu HTML saisi dans le back-office.
- N'utiliser que des vues , sans gabarits, pour définir le contenu du message. Dans ce cas le contenu HTML ou texte saisi dans le back-office sera ignoré.
- Utiliser les gabarits et les vues, sans le mécanisme d'héritage. De ce manière les gabarits sont enrichis (via `{$message_body}`) avec le contenu au format HTML et au format texte contenus dans les vues. Le contenu HTML et texte saisi dans le back-office est ignoré.
- Utiliser les vues qui hérite d'un gabarit. Dans ce dernier {$message_body} (si présent) est ignoré et le mécanisme d'héritage classique de Smarty est utilisé. Assurez-vous dans ce cas de ne pas définir un gabarit étendu comme gabarit du message sous peine de générer des erreurs (probablement une répétion de l'afficge du contenu du gabarit).
