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

Mail layouts are used to provide a layout to all or some of the e-mails sent by
the Thelia core or the modules.

The layouts should have the 'tpl' extension, and should use {$message_body} as the
placeholder of the final message content.

For example, a minimal layout is :

   {$message_body nofiler}

You should use the `nofilter` flag to prevent html-escaping of the `$message_body` variable content: Thelia templating system always escape variable contents.

There are no specific limitations in the content of the layout. For example, you
can forecast inheritance, using a block :

{block name='message-body'}{$message_body nofilter}{/block}

(In fact, this is the content of the default HTML layout, default-html-layout.tpl)

This way, you can extends the layout in message views :

    {block name='message-body'}

    Here is the template content

    {/block}

## Views

A View contains the body of a specific message. It may extends a layout, but in this case, you SHOULD NOT select this layout as the message layout in the back office.

HTML views SHOULD have the 'html' extension to be displayed in the "Name of the HTML view file" menu in the back-office.

TEXT views SHOULD have the 'text' extension to be displayed in the "Name of the text view file" menu in the back-office.

## Templates

A mail template is just a collection of layouts (.tpl) and/or views (.html), grouped in a sub-directory of the templates/emails directory.

The current mail template is defined in the Thelia configuration, by the `active-mail-template` variable.

## What are your options ?

For any email message, you can :

- Not use views or layouts, and rely on HTML and TEXT entered in the back-office.
- Use only layouts, to define  a common look and feel to your mails. These layouts are be populated (through {$message_body}) with HTML or TEXT entered in the back-office.
- Use only views, without layouts, to define message content. In this case,
HTML or TEXT entered in the back-office is ignored.
- Use layouts and views, without inheritance. This way, layouts are populated (through {$message_body}) with HTML or TEXT found in the message views. HTML or TEXT entered in the back-office is ignored.
- Use views which inherit from a layout. In the layout, {$message_body} (if present) is then ignored, and the classic Smarty bock-based inheritance is used. Be sure in this case to not define an extended layout as the message layout, or unexpected results may be generated (probably repeated layout content)