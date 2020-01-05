---
layout: export
title: Export des commandes
description: Exporter les commandes de vos clients
sidebar: features
lang: fr
subnav: thelia_orders_export

outputs:
    - {"name":"ref", "description":"La référence de la commande"}
    - {"name":"date", "description":"La date de la commande"}
    - {"name":"customer_ref", "description":"la référence du client"}
    - {"name":"discount", "description":"Le rabais lié à la commande"}
    - {"name":"coupons", "description":"le nom de coupons utilisés pour la commande"}
    - {"name":"postage", "description":"Le montant des frais de ports"}
    - {"name":"total_including_taxes", "description":"Le montant total taxe comprise avant rabais et hors frais de port"}
    - {"name":"total_with_discount", "description":"Le montant total de la commmande après rabais"}
    - {"name":"total_discount_and_postage", "description":"Le montant total de la commande taxe comprise après rabais et incluant les frais de port"}
    - {"name":"delivery_module", "description":"Le mode de livraison choisi"}
    - {"name":"delivery_ref", "description":"La référence du mode de livraison, utilisé généralement pour le suivi colis"}
    - {"name":"payment_module", "description":"Le mode de paiment sélectionné"}
    - {"name":"invoice_ref", "description":"La référence de la facture, utilisé pour le suiv de facturation"}
    - {"name":"status", "description":"Le statut de la commande (Not Paid, Paid, Processing, Sent, Canceled)"}
    - {"name":"delivery_title", "description":"La civilité utilisé pour l'adresse de livraison (M., Mme, ...)"}
    - {"name":"delivery_company", "description":"Le nom de société attaché à l'adresse de livraison (le cas échéant)"}
    - {"name":"delivery_first_name", "description":"Le prénom attaché à l'adresse de livraison"}
    - {"name":"delivery_last_name", "description":"Le nom attaché à l'adresse de livraison"}
    - {"name":"delivery_address1", "description":"Ligne 1 de l'adresse de livraison"}
    - {"name":"delivery_address2", "description":"Ligne 2 de l'adresse de livraison"}
    - {"name":"delivery_address3", "description":"Ligne 3 de l'adresse de livraison"}
    - {"name":"delivery_zip_code", "description":"Le code postal de l'adressse de livraison"}
    - {"name":"delivery_city", "description":"La ville de l'adressse de livraison"}
    - {"name":"delivery_country", "description":"Le pays de l'adressse de livraison"}
    - {"name":"delivery_phone", "description":"le numéro de téléphone de l'adressse de livraison"}
    - {"name":"invoice_title", "description":"La civilité de l'adresse de facturation (M., Mme, ...)"}
    - {"name":"invoice_company", "description":"Le nom de société attaché à l'adresse de facturation"}
    - {"name":"invoice_first_name", "description":"Le prénom attaché à l'adresse de facturation"}
    - {"name":"invoice_last_name", "description":"Le nom attaché à l'adresse de facturation"}
    - {"name":"invoice_address1", "description":"la ligne 1 de l'adresse de facturation"}
    - {"name":"invoice_address2", "description":"la ligne 2 de l'adresse de facturation"}
    - {"name":"invoice_address3", "description":"la ligne 3 de l'adresse de facturation"}
    - {"name":"invoice_zip_code", "description":"Le code postal de l'adresse de facturation"}
    - {"name":"invoice_city", "description":"La ville de l'adresse de facturation"}
    - {"name":"invoice_country", "description":"Le pays de l'adresse de facturation"}
    - {"name":"invoice_phone", "description":"Le numéro de téléphone de l'adresse de facturation"}
    - {"name":"product_title", "description":"le nom du produit"}
    - {"name":"price", "description":"Le prix H.T. du produit (prix hors taxe)"}
    - {"name":"taxed_price", "description":"Le prox T.T.C. du produit (prix taxe comprise)"}
    - {"name":"currency", "description":"La devise utilisé pour la commande (EUR, USD, ...)"}
    - {"name":"was_in_promo", "description":"1 si le produit était en promo, 0 sinon"}
    - {"name":"quantity", "description":"Le nombre de produit commandé"}
    - {"name":"tax_amount", "description":"Le montant de la taxe appliquée au prodiut"}
    - {"name":"tax_title", "description":"Le nom de la règle de taxe appliquée au produit"}
---
