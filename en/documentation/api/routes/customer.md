---
layout: api
customer: Customers
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

<h2>Creation</h2>

If you want to create a customer, you have to send the following fields with the POST method.

<h5> General information </h5>

<ul>
    <li>title : The <a href="title.html">customer title</a> id</li>
    <li>firstname  : The customer first name</li>
    <li>lastname  : The customer last name</li>
    <li>email  : The customer email address</li>
    <li>password  : The customer password</li>
    <li>lang : The customer <a href="lang.html">lang</a> id</li>
</ul>

<h5> The address <h5>

<ul>
    <li> country : The address <a href="country.html">country</a> id </li>
    <li> zipcode : The address zipcode </li>
    <li> city : The address city </li>
    <li> address1 : The address (street, number, ... ) </li>
    <li> address2 : The additional address (optional) </li>
    <li> address3 : Another additional address (optional) </li>
</ul>

<h4> Example </h4>
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

<h2>Update</h2>

To update a customer, you have to send the same data ( only updated ones ) as for a create, but with the PUT method.

Moreover, you have to add the "id" field.

<h4> Example </h4>
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