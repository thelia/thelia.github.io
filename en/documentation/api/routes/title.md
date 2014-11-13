---
layout: api
title: Customer title
sidebar: api
lang: en

description:
    - Manage the customer titles

methods:
    - { name: GET, route: /api/title, return_code: 200, return: "Results of the 'title' loop" }
    - { name: GET, route: "/api/title/{entityId}", parameters: "entityId: The customer title id", return_code: 200, return: "Results of the 'title' loop for entityId" }
    - { name: POST, route: /api/title, return_code: 201, return: "Results of the 'title' loop for the created title"}
    - { name: PUT, route: /api/title, return_code: 201, return: "Results of the 'title' loop for the updated title" }
    - { name: DELETE, route: "/api/title/{entityId}", parameters: "entityId: The customer title id", return_code: 204, return: Nothing }
---
---

<h2>Creation</h2>

If you want to create a title, you have to send the following fields with the POST method.

<ul>
    <li>default : true or false. (optional)</li>
    <li>
        i18n  : a collection of the following fields:
        <ul>
            <li>locale: The lang locale. Example: en_US </li>
            <li>short: The title short (optional). Example: Mr </li>
            <li>long: The title long (optional). Example: Mister </li>
        </ul>
    </li>
</ul>

<h2>Update</h2>

To update a customer title, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

Moreover, you have to add the "title_id" field.