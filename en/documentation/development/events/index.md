---
layout: home
title: Developement - Events
sidebar: development
lang: en
subnav: development_events
eventClass: "Thelia\\Core\\Event\\TheliaEvents::"
events:
    - {
        name: "thelia.boot",
        const: "BOOT",
        desc: "sent at the beginning",
        eventClass: "Thelia\\Core\\Event\\DefaultActionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"
      }
    - {
        name: "action.customer_logout",
        const: "CUSTOMER_LOGOUT",
        desc: "Sent when the customer logged out",
        eventClass: "Thelia\\Core\\Event\\DefaultActionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"
      }
    - {
        name: "action.customer_login",
        const: "CUSTOMER_LOGIN",
        desc: "Sent when customer is successfully logged in.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerLoginEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerLoginEvent.html"
      }
    - {
        name: "action.createCustomer",
        const: "CUSTOMER_CREATEACCOUNT",
        desc: "sent on customer account creation",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerCreateOrUpdateEvent.html"
      }
    - {
        name: "action.before_createcustomer",
        const: "BEFORE_CREATECUSTOMER",
        desc: "sent once the customer creation form has been successfully validated, and before customer insertion in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.after_createcustomer",
        const: "AFTER_CREATECUSTOMER",
        desc: "Sent just after a successful insert of a new customer in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.updateCustomer",
        const: "CUSTOMER_UPDATEACCOUNT",
        desc: "sent on customer account update",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerCreateOrUpdateEvent.html"
      }
    - {
        name: "action.before_updateCustomer",
        const: "BEFORE_UPDATECUSTOMER",
        desc: "Sent once the customer change form has been successfully validated, and before customer update in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.after_updateCustomer",
        const: "AFTER_UPDATECUSTOMER",
        desc: "Sent just after a successful update of a customer in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.updateProfileCustomer",
        const: "CUSTOMER_UPDATEPROFILE",
        desc: "sent on customer account update profile",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerCreateOrUpdateEvent.html"
      }
    - {
        name: "action.deleteCustomer",
        const: "CUSTOMER_DELETEACCOUNT",
        desc: "sent on customer removal",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.lostPassword",
        const: "LOST_PASSWORD",
        desc: "sent when a customer need a new password",
        eventClass: "Thelia\\Core\\Event\\LostPasswordEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/LostPasswordEvent.html"
      }
    - {
        name: "action.admin_logout",
        const: "ADMIN_LOGOUT",
        desc: "Sent before the logout of the administrator.",
        eventClass: "Thelia\\Core\\Event\\DefaultActionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"
      }
    - {
        name: "action.admin_login",
        const: "ADMIN_LOGIN",
        desc: "Sent once the administrator is successfully logged in.",
        eventClass: "Thelia\\Core\\Event\\DefaultActionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"
      }

---
<div class="page-header">
    <h1>Events</h1>
</div>

Thelia use the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) for managing all the action like creating a new customer, updating a product.
For each action an event is dispatching containing an event object. Event object contain only data.

##List of event

{% for event in page.events %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : [{{ event.eventClass }}]({{ event.eventClassApi }})
{% endfor %}
