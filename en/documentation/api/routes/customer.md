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
---
---

## Creation

If you want to create a customer, you have to send the following fields with the POST method.

##### General information

- title : The [customer title](title.html) id</li>
- firstname  : The customer first name
- lastname  : The customer last name
- email  : The customer email address
- password  : The customer password
- lang : The customer [lang](lang.html) id


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
    "lang": 1
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
    "lang": 1
}
```