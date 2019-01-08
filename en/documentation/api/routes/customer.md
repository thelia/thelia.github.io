---
layout: api
title: API - Customers
sidebar: api
lang: en
subnav: api_c_customers

description:
    - Manage the customers

methods:
    - { name: GET, route: /api/customers, return_code: 200, return: "Results of the 'customer' loop" }
    - { name: GET, route: "/api/customers/{entityId}", parameters: "entityId: The customer id", return_code: 200, return: "Results of the 'customer' loop for entityId" }
    - { name: POST, route: /api/customers, return_code: 201, return: "Results of the 'customer' loop for the created customer"}
    - { name: PUT, route: /api/customers, return_code: 201, return: "Results of the 'customer' loop for the updated customer" }
    - { name: DELETE, route: "/api/customers/{entityId}", parameters: "entityId: The customer id", return_code: 204, return: Nothing }
    - { name: POST, route: "/api/customers/checkLogin", return_code: 200, return: "Results of the 'customer' loop if the customer exists" }
---
---

## Creation

If you want to create a customer, you have to send the following fields with the POST method.

##### General information

- title : The [customer title](title.html) id
- firstname  : The customer first name
- lastname  : The customer last name
- email  : The customer email address
- password  : The customer password
- lang_id : The customer [lang](lang.html) id


##### The address

-  country : The address [country](country.html) id 
-  zipcode : The address zipcode 
-  city : The address city 
-  address1 : The address (street, number, ...) 
-  address2 : The additional address (optional) 
-  address3 : Another additional address (optional) 

### Example
```json
{
    "title": 1,
    "firstname": "Thelia",
    "lastname": "Thelia",
    "address1": "street address 1",
    "city": "Clermont-Ferrand",
    "zipcode": 63100,
    "country": 64,
    "email": "dev@thelia.net",
    "password": "azerty",
    "lang_id": 1
}
```

## Update

To update a customer, you have to send the same data (only updated ones) as for a create, but with the PUT method.

Moreover, you have to add the "id" field.

### Example
```json
{
    "id": 1,
    "title": 1,
    "firstname": "Thelia",
    "lastname": "Thelia",
    "address1": "street address 1",
    "city": "Clermont-Ferrand",
    "zipcode": 63100,
    "country": 64,
    "email": "foo@thelia.net",
    "lang_id": 1
}
```

## Check login

You can check if an email and password correspond to a customer with the '/api/customers/checkLogin' route.

The corresponding customer will be returned if one exists, or a 404 response if one does not.

### Exemple
```json
{
    "email": "foo@thelia.net",
    "password": "azerty"
}
```
