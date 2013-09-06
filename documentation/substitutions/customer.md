---
layout: substitution
title: Customer Substitution
description: Customer Substitutions provide logged-in customer data.
sidebar: substitution
subnav: substitution_customer
prefix: customer
attributes :
    - {name: "id", description: ""}
    - {name: "ref", description: ""}
    - {name: "title_id", description: "the customer title ID"}
    - {name: "firstname", description: ""}
    - {name: "lastname", description: ""}
    - {name: "email", description: ""}
    - {name: "reseller", description: "1 if the customer is a reseller else 0"}
    - {name: "lang", description: "the customer lang ID"}
    - {name: "sponsor", description: "the customer sponsor ID"}
    - {name: "discount", description: "the customer % discount"}
    - {name: "createdAt", description: "", is_DateTime: true}
    - {name: "updatedAt", description: "", is_DateTime: true}
---