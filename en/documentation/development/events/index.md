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
        name: "action.before_deleteCustomer",
        const: "BEFORE_DELETECUSTOMER",
        desc: "sent just before customer removal",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.after_deleteCustomer",
        const: "AFTER_DELETECUSTOMER",
        desc: "ssent just after customer removal",
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
    - {
        name: "action.createAddress",
        const: "ADDRESS_CREATE",
        desc: "sent for address creation",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressCreateOrUpdateEvent.html"
      }
    - {
        name: "action.before_createAddress",
        const: "BEFORE_CREATEADDRESS",
        desc: "sent once the address creation form has been successfully validated, and before address insertion in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.after_createAddress",
        const: "AFTER_CREATEADDRESS",
        desc: "Sent just after a successful insert of a new address in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.updateAddress",
        const: "ADDRESS_UPDATE",
        desc: "sent for address modification",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressCreateOrUpdateEvent.html"
      }
    - {
        name: "action.before_updateAddress",
        const: "BEFORE_UPDATEADDRESS",
        desc: "sent once the address update form has been successfully validated, and before address modification in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.after_updateAddress",
        const: "AFTER_UPDATEADDRESS",
        desc: "Sent just after a successful modification of an existing address in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.deleteAddress",
        const: "ADDRESS_DELETE",
        desc: "sent on address removal",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.before_deleteAddress",
        const: "BEFORE_DELETEADDRESS",
        desc: "sent just before address removal",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.after_deleteAddress",
        const: "AFTER_DELETEADDRESS",
        desc: "sent just after address removal",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.createCategory",
        const: "CATEGORY_CREATE",
        desc: "sent for category creation",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryCreateEvent.html"
      }
    - {
        name: "action.before_createcategory",
        const: "BEFORE_CREATECATEGORY",
        desc: "sent just before insertion in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.after_createcategory",
        const: "AFTER_CREATECATEGORY",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.updateCategory",
        const: "CATEGORY_UPDATE",
        desc: "sent for category modification",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryUpdateEvent.html"
      }
    - {
        name: "action.before_updateCategory",
        const: "BEFORE_UPDATECATEGORY",
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.after_updateCategory",
        const: "AFTER_UPDATECATEGORY",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.deleteCategory",
        const: "CATEGORY_DELETE",
        desc: "sent for category removal",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryDeleteEvent.html"
      }
    - {
        name: "action.before_deletecategory",
        const: "BEFORE_DELETECATEGORY",
        desc: "sent just before removing category in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.after_deletecategory",
        const: "AFTER_DELETECATEGORY",
        desc: "sent just after removing category in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.toggleCategoryVisibility",
        const: "CATEGORY_TOGGLE_VISIBILITY",
        desc: "sent when category visibility change",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryToggleVisibilityEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryToggleVisibilityEvent.html"
      }
    - {
        name: "action.updateCategoryPosition",
        const: "CATEGORY_UPDATE_POSITION",
        desc: "sent when category position change",
        eventClass: "Thelia\\Core\\Event\\UpdatePositionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/UpdatePositionEvent.html"
      }
    - {
        name: "action.categoryAddContent",
        const: "CATEGORY_ADD_CONTENT",
        desc: "sent when a content is added to a category",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryAddContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryAddContentEvent.html"
      }
    - {
        name: "action.categoryRemoveContent",
        const: "CATEGORY_REMOVE_CONTENT",
        desc: "sent when a content is removed to a category",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryDeleteContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryDeleteContentEvent.html"
      }

---
<div class="page-header">
    <h1>Events</h1>
</div>

Thelia use the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) for managing all the action like creating a new customer, updating a product.
For each action an event is dispatching containing an event object. Event object contains only data.

##List of event

{% for event in page.events %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : [{{ event.eventClass }}]({{ event.eventClassApi }})
{% endfor %}
