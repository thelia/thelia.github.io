---
layout: export
title: Export des informations client
description: Export your contents and folders
sidebar: features
lang: fr
subnav: thelia_customers_export

outputs:
    - {"name": "ref", "description":"La référence du client"}
    - {"name": "title", "description":"Le titre du client (M., Mme, ...)"}
    - {"name": "last_name", "description":"Le nom du client"}
    - {"name": "first_name", "description":"Le prénom du client"}
    - {"name": "email", "description":"L'adresse email du client"}
    - {"name": "discount", "description":"La réduction accordée au client sur la boutique"}
    - {"name": "is_registered_to_newsletter", "description":"0 si le client n'est pas inscrit à la newsletter, 1 sinon"}
    - {"name": "sign_up_date", "description":"La date d'inscription du client"}
    - {"name": "total_orders", "description":"Le montant total des commandes passées par le client"}
    - {"name": "last_order_amount", "description":"Le mintant total de la dernière commande du client"}
    - {"name": "last_order_date", "description":"La date de la dernière commande"}
    - {"name": "label", "description":"Le libellé de l'adresse du client"}
    - {"name": "address_title", "description":"Le titre de l'adresse du client (M., Mme, ...)"}
    - {"name": "address_first_name", "description":"Le prénom du client utilisé pour ses adresses"}
    - {"name": "address_last_name", "description":"Le nom du client utilisé pour ses adresses"}
    - {"name": "company", "description":"Le nom de société du client (le cas écheant)"}
    - {"name": "address1", "description":"La ligne 1 de l'adresse du client"}
    - {"name": "address2", "description":"La ligne 2 de l'adresse du client"}
    - {"name": "address3", "description":"La ligne 3 de l'adresse du client"}
    - {"name": "zipcode", "description":"Le code postal de l'adresse du client"}
    - {"name": "city", "description":"La ville"}
    - {"name": "country", "description":"Le pays"}
    - {"name": "phone", "description":"Le numéro de téléphone fixe du client"}
    - {"name": "cellphone", "description":"Le  numéro de téléphone mobile du client"}
    - {"name": "is_default_address", "description":"1 si l'adresse est celle par défaut, 0 sinon"}
---
