---
layout: home
title: Development - Events
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
eventsAddress:
    - {
        name: "action.before_createAddress",
        const: "BEFORE_CREATEADDRESS",
        desc: "sent once the address creation form has been successfully validated, and before address insertion in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.createAddress",
        const: "ADDRESS_CREATE",
        desc: "sent for address creation",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressCreateOrUpdateEvent.html"
      }
    - {
        name: "action.after_createAddress",
        const: "AFTER_CREATEADDRESS",
        desc: "Sent just after a successful insert of a new address in the database.",
        eventClass: "Thelia\\Core\\Event\\Address\\AddressEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Address/AddressEvent.html"
      }
    - {
        name: "action.before_updateAddress",
        const: "BEFORE_UPDATEADDRESS",
        desc: "sent once the address update form has been successfully validated, and before address modification in the database.",
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
        name: "action.after_updateAddress",
        const: "AFTER_UPDATEADDRESS",
        desc: "Sent just after a successful modification of an existing address in the database.",
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
        name: "action.deleteAddress",
        const: "ADDRESS_DELETE",
        desc: "sent on address removal",
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
eventsAdmin:
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
eventsArea:
    - {
        name: "action.before_createArea",
        const: "BEFORE_CREATEAREA",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
    - {
        name: "action.createArea",
        const: "AREA_CREATE",
        desc: "sent when an area is created",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaCreateEvent.html"
      }
    - {
        name: "action.after_createArea",
        const: "AFTER_CREATEAREA",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
    - {
        name: "action.area.postageUpdate",
        const: AREA\_POSTAGE_UPDATE,
        desc: "sent for content modification",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaUpdatePostageEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaUpdatePostageEvent.html"
      }
    - {
        name: "action.before_updateArea",
        const: "BEFORE_UPDATEAREA",
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
    - {
        name: "action.after_updateArea",
        const: "AFTER_UPDATEAREA",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
    - {
        name: "action.area.removeCountry",
        const: AREA\_ADD_COUNTRY,
        desc: "sent when a country is removed from an existing area",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaAddCountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaAddCountryEvent.html"
      }
    - {
        name: "action.area.addCountry",
        const: AREA\_REMOVE_COUNTRY,
        desc: "sent when a country is added to an existing area",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaRemoveCountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaRemoveCountryEvent.html"
      }
    - {
        name: "action.before_deleteArea",
        const: "BEFORE_DELETEAREA",
        desc: "sent just before removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
    - {
        name: "action.deleteArea",
        const: "AREA_DELETE",
        desc: "sent when an area is removed",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaRemoveCountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaRemoveCountryEvent.html"
      }
    - {
        name: "action.after_deleteArea",
        const: "AFTER_DELETEAREA",
        desc: "sent just after removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Area\\AreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Area/AreaEvent.html"
      }
eventsCategory:
    - {
        name: "action.before_createcategory",
        const: "BEFORE_CREATECATEGORY",
        desc: "sent just before insertion in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.createCategory",
        const: "CATEGORY_CREATE",
        desc: "sent for category creation",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryCreateEvent.html"
      }
    - {
        name: "action.after_createcategory",
        const: "AFTER_CREATECATEGORY",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.before_updateCategory",
        const: "BEFORE_UPDATECATEGORY",
        desc: "sent just before updating the database",
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
        name: "action.after_updateCategory",
        const: "AFTER_UPDATECATEGORY",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.before_deletecategory",
        const: "BEFORE_DELETECATEGORY",
        desc: "sent just before removing category in database",
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
        name: "action.after_deletecategory",
        const: "AFTER_DELETECATEGORY",
        desc: "sent just after removing category in database",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryEvent.html"
      }
    - {
        name: "action.toggleCategoryVisibility",
        const: CATEGORY\_TOGGLE_VISIBILITY,
        desc: "sent when category visibility change",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryToggleVisibilityEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryToggleVisibilityEvent.html"
      }
    - {
        name: "action.updateCategoryPosition",
        const: CATEGORY\_UPDATE_POSITION,
        desc: "sent when category position change",
        eventClass: "Thelia\\Core\\Event\\UpdatePositionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/UpdatePositionEvent.html"
      }
    - {
        name: "action.categoryAddContent",
        const: CATEGORY\_ADD_CONTENT,
        desc: "sent when a content is added to a category",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryAddContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryAddContentEvent.html"
      }
    - {
        name: "action.categoryRemoveContent",
        const: CATEGORY\_REMOVE_CONTENT,
        desc: "sent when a content is removed to a category",
        eventClass: "Thelia\\Core\\Event\\Category\\CategoryDeleteContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Category/CategoryDeleteContentEvent.html"
      }
eventsContent:
    - {
        name: "action.before_createContent",
        const: "BEFORE_CREATECONTENT",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
    - {
        name: "action.createContent",
        const: "CONTENT_CREATE",
        desc: "sent when a content is created",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentCreateEvent.html"
      }
    - {
        name: "action.after_createContent",
        const: "AFTER_CREATECONTENT",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
    - {
        name: "action.before_updateContent",
        const: "BEFORE_UPDATECONTENT",
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
    - {
        name: "action.updateContent",
        const: "CONTENT_UPDATE",
        desc: "sent for content modification",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentUpdateEvent.html"
      }
    - {
        name: "action.after_updateContent",
        const: "AFTER_UPDATECONTENT",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
    - {
        name: "action.before_deleteContent",
        const: "BEFORE_DELETECONTENT",
        desc: "sent just before removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
    - {
        name: "action.deleteContent",
        const: "CONTENT_DELETE",
        desc: "sent for content removal",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentDeleteEvent.html"
      }
    - {
        name: "action.after_deleteContent",
        const: "AFTER_DELETECONTENT",
        desc: "sent just after removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Content\\ContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Content/ContentEvent.html"
      }
eventsCountry:
    - {
        name: "action.before_createCountry",
        const: "BEFORE_CREATECOUNTRY",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
    - {
        name: "action.createCountry",
        const: "COUNTRY_CREATE",
        desc: "sent when a country is created",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryCreateEvent.html"
      }
    - {
        name: "action.after_createCountry",
        const: "AFTER_CREATECOUNTRY",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
    - {
        name: "action.before_updateCountry",
        const: "BEFORE_UPDATECOUNTRY",
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
    - {
        name: "action.updateCountry",
        const: "COUNTRY_UPDATE",
        desc: "sent for content modification",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryUpdateEvent.html"
      }
    - {
        name: "action.after_updateCountry",
        const: "AFTER_UPDATECOUNTRY",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
    - {
        name: "action.before_deleteCountry",
        const: "BEFORE_DELETECOUNTRY",
        desc: "sent just before removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
    - {
        name: "action.deleteCountry",
        const: "COUNTRY_DELETE",
        desc: "sent for content removal",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryDeleteEvent.html"
      }
    - {
        name: "action.after_deleteCountry",
        const: "AFTER_DELETECOUNTRY",
        desc: "sent just after removing content in the database",
        eventClass: "Thelia\\Core\\Event\\Country\\CountryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Country/CountryEvent.html"
      }
eventsCustomer:
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
        name: "action.before_createcustomer",
        const: "BEFORE_CREATECUSTOMER",
        desc: "sent once the customer creation form has been successfully validated, and before customer insertion in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.createCustomer",
        const: "CUSTOMER_CREATEACCOUNT",
        desc: "sent on customer account creation",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerCreateOrUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerCreateOrUpdateEvent.html"
      }
    - {
        name: "action.after_createcustomer",
        const: "AFTER_CREATECUSTOMER",
        desc: "Sent just after a successful insert of a new customer in the database.",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.before_updateCustomer",
        const: "BEFORE_UPDATECUSTOMER",
        desc: "Sent once the customer change form has been successfully validated, and before customer update in the database.",
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
        name: "action.before_deleteCustomer",
        const: "BEFORE_DELETECUSTOMER",
        desc: "sent just before customer removal",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.deleteCustomer",
        const: "CUSTOMER_DELETEACCOUNT",
        desc: "sent on customer removal",
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
        name: "action.customer.deleteAddress",
        const: "CUSTOMER_ADDRESS_DELETE",
        desc: "sent on customer removal",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
    - {
        name: "action.lostPassword",
        const: "LOST_PASSWORD",
        desc: "sent on customer removal",
        eventClass: "Thelia\\Core\\Event\\Customer\\CustomerEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Customer/CustomerEvent.html"
      }
eventsFolder:
    - {
        name: "action.before_createFolder",
        const: "BEFORE_CREATEFOLDER",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
    - {
        name: "action.createFolder",
        const: "FOLDER_CREATE",
        desc: "sent when a folder is created",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderCreateEvent.html"
      }
    - {
        name: "action.after_createFolder",
        const: "AFTER_CREATEFOLDER",
        desc: "sent just after insertion in database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
    - {
        name: "action.before_updateFolder",
        const: "BEFORE_UPDATEFOLDER",
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
    - {
        name: "action.updateFolder",
        const: "FOLDER_UPDATE",
        desc: "sent for folder modification",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderUpdateEvent.html"
      }
    - {
        name: "action.after_updateFolder",
        const: "AFTER_UPDATEFOLDER",
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
    - {
        name: "action.before_deleteFolder",
        const: "BEFORE_DELETEFOLDER",
        desc: "sent just before removing folder in the database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
    - {
        name: "action.deleteFolder",
        const: "FOLDER_DELETE",
        desc: "sent for folder removal",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderDeleteEvent.html"
      }
    - {
        name: "action.after_deleteFolder",
        const: "AFTER_DELETEFOLDER",
        desc: "sent just after removing folder in the database",
        eventClass: "Thelia\\Core\\Event\\Folder\\FolderEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Folder/FolderEvent.html"
      }
eventsProduct:
    - {
        name: "action.before_createproduct",
        const: BEFORE_CREATEPRODUCT,
        desc: "sent when a new product is created",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.createProduct",
        const: PRODUCT_CREATE,
        desc: "sent when a new product is created",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductCreateEvent.html"
      }
    - {
        name: "action.after_createproduct",
        const: AFTER_CREATEPRODUCT,
        desc: "sent when a new product is created",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.before_updateProduct",
        const: BEFORE_UPDATEPRODUCT,
        desc: "sent just before updating the database",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.updateProduct",
        const: PRODUCT_UPDATE,
        desc: "sent when a new product is updated",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductCreateEvent.html"
      }
    - {
        name: "action.after_updateProduct",
        const: AFTER_UPDATEPRODUCT,
        desc: "sent just after updating the database",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.before_deleteproduct",
        const: BEFORE_DELETEPRODUCT,
        desc: "sent just before removing the product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.deleteProduct",
        const: PRODUCT_DELETE,
        desc: "sent when a new product is removed",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductDeleteEvent.html"
      }
    - {
        name: "action.after_deleteproduct",
        const: AFTER_DELETEPRODUCT,
        desc: "sent just after removing the product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductEvent.html"
      }
    - {
        name: "action.toggleProductVisibility",
        const: PRODUCT\_TOGGLE_VISIBILITY,
        desc: "sent when a prodcut's visibility change",
        eventClass: "Thelia\\Core\\Event\\UpdatePositionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/UpdatePositionEvent.html"
      }
    - {
        name: "action.updateProductPosition",
        const: PRODUCT\_UPDATE_POSITION,
        desc: "sent when a prodcut's position change",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductToggleVisibilityEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductToggleVisibilityEvent.html"
      }
    - {
        name: "action.productAddContent",
        const: PRODUCT\_ADD_CONTENT,
        desc: "sent when a content is added to a product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductAddContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductAddContentEvent.html"
      }
    - {
        name: "action.productRemoveContent",
        const: PRODUCT\_REMOVE_CONTENT,
        desc: "sent when a content is removed to a product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductDeleteContentEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductDeleteContentEvent.html"
      }
    - {
        name: "action.updateProductContentPosition",
        const: PRODUCT\_UPDATE\_CONTENT_POSITION,
        desc: "",
        eventClass: "Thelia\\Core\\Event\\UpdatePositionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/UpdatePositionEvent.html"
      }
    - {
        name: "action.addProductSaleElement",
        const: PRODUCT\_ADD\_PRODUCT\_SALE_ELEMENT,
        desc: "Create a new product sale element, with or without combination",
        eventClass: "Thelia\\Core\\Event\\ProductSaleElement\\ProductSaleElementCreateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ProductSaleElement/ProductSaleElementCreateEvent.html"
      }
    - {
        name: "action.updateProductSaleElement",
        const: PRODUCT\_UPDATE\_PRODUCT\_SALE_ELEMENT,
        desc: "Update an existing product sale element",
        eventClass: "Thelia\\Core\\Event\\ProductSaleElement\\ProductSaleElementUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ProductSaleElement/ProductSaleElementUpdateEvent.html"
      }
    - {
        name: "action.deleteProductSaleElement",
        const: PRODUCT\_DELETE\_PRODUCT\_SALE_ELEMENT,
        desc: "Delete a product sale element",
        eventClass: "Thelia\\Core\\Event\\ProductSaleElement\\ProductSaleElementDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ProductSaleElement/ProductSaleElementDeleteEvent.html"
      }
    - {
        name: "action.deleteProductSaleElement",
        const: PRODUCT\_COMBINATION_GENERATION,
        desc: "Generate combinations. All existing combinations for the product are deleted.",
        eventClass: "Thelia\\Core\\Event\\ProductSaleElement\\ProductCombinationGenerationEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ProductSaleElement/ProductCombinationGenerationEvent.html"
      }
    - {
        name: "action.productSetTemplate",
        const: PRODUCT\_SET_TEMPLATE,
        desc: "Generate combinations. All existing combinations for the product are deleted.",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductSetTemplateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductSetTemplateEvent.html"
      }
    - {
        name: "action.productAddProductAccessory",
        const: PRODUCT\_ADD_ACCESSORY,
        desc: "add an accessory (a product) to a product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductAddAccessoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductAddAccessoryEvent.html"
      }
    - {
        name: "action.productRemoveProductAccessory",
        const: PRODUCT\_REMOVE_ACCESSORY,
        desc: "remove an accessory (a product) to a product",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductDeleteAccessoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductDeleteAccessoryEvent.html"
      }
    - {
        name: "action.updateProductAccessoryPosition",
        const: PRODUCT\_UPDATE\_ACCESSORY_POSITION,
        desc: "update accessory position",
        eventClass: "Thelia\\Core\\Event\\UpdatePositionEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/UpdatePositionEvent.html"
      }
    - {
        name: "action.updateProductFeatureValue",
        const: PRODUCT\_FEATURE\_UPDATE_VALUE,
        desc: "Update the value of a product feature",
        eventClass: "Thelia\\Core\\Event\\FeatureProduct\\FeatureProductUpdateEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/FeatureProduct/FeatureProductUpdateEvent.html"
      }
    - {
        name: "action.deleteProductFeatureValue",
        const: PRODUCT\_FEATURE\_DELETE_VALUE,
        desc: "Delete a product feature value",
        eventClass: "Thelia\\Core\\Event\\FeatureProduct\\FeatureProductDeleteEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/FeatureProduct/FeatureProductDeleteEvent.html"
      }
    - {
        name: "action.addProductCategory",
        const: PRODUCT\_ADD_CATEGORY,
        desc: "add a product in a secondary category",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductAddCategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductAddCategoryEvent.html"
      }
    - {
        name: "action.deleteProductCategory",
        const: PRODUCT\_REMOVE_CATEGORY,
        desc: "remove a product from a secondary category",
        eventClass: "Thelia\\Core\\Event\\Product\\ProductDeleteCategoryEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/Product/ProductDeleteCategoryEvent.html"
      }
eventsShippingZone:
    - {
        name: "action.shippingZone.addArea",
        const: SHIPPING\_ZONE\_ADD_AREA,
        desc: "sent when an aera is added to a shipping zone",
        eventClass: "Thelia\\Core\\Event\\ShippingZone\\ShippingZoneAddAreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ShippingZone/ShippingZoneAddAreaEvent.html"
      }
    - {
        name: "action.shippingZone.removeArea",
        const: SHIPPING\_ZONE\_REMOVE_AREA,
        desc: "sent when an aera is removed from a shipping zone",
        eventClass: "Thelia\\Core\\Event\\ShippingZone\\ShippingZoneAddAreaEvent",
        eventClassApi: "/api/master/Thelia/Core/Event/ShippingZone/ShippingZoneAddAreaEvent.html"
      }

---
<div class="page-header">
    <h1>Events</h1>
</div>

Thelia usee the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) for managing all the action like creating a new customer, updating a product.
For each action an event is dispatching containing an event object. Event object contains only data.

##List of event

This list is maybe not complete. All events constant are in [{{ page.eventClass }}](/api/master/Thelia/Core/Event/TheliaEvents.html)


### Core event

{% for event in page.events %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Address event

{% for event in page.eventsAddress %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Admin event

{% for event in page.eventsAdmin %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Area event

{% for event in page.eventsArea %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Category event

{% for event in page.eventsCategory %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Content event

{% for event in page.eventsContent %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Country event

{% for event in page.eventsCountry %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Customer event

{% for event in page.eventsCustomer %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Folder event

{% for event in page.eventsFolder %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Product event

{% for event in page.eventsProduct %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}

### Shipping Zone event

{% for event in page.eventsShippingZone %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.const }}
* Description : {{ event.desc }}
* event class : <a href="{{ event.eventClassApi }}" target="_blank">{{ event.eventClass }}</a>
{% endfor %}
