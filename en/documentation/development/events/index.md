---
layout: home
title: Developement - Events
sidebar: development
lang: en
subnav: development_events
eventClass: "Thelia\\Core\\Event\\TheliaEvents::"
events:
    - {name: "thelia.boot", const: "BOOT", desc: "sent at the beginning", eventClass: "Thelia\\Core\\Event\\DefaultActionEvent", eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"}
    - {name: "action.customer_logout", const: "CUSTOMER_LOGOUT", desc: "Sent before the logout of the customer", eventClass: "Thelia\\Core\\Event\\DefaultActionEvent", eventClassApi: "/api/master/Thelia/Core/Event/DefaultActionEvent.html"}
---
<div class="page-header">
    <h1>Events</h1>
</div>

Thelia use the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) for managing all the action like creating a new customer, updating a product.
For each action an event is dispatching containing an event object. Event object contain only data.

##List of event

{% for event in page.events %}
####{{ event.name }}
* constant name : {{ page.eventClass }}{{ event.cons }}
* Description : {{ event.desc }}
* event class : [{{ event.eventClass }}]({{ event.eventClassApi }})
{% endfor %}
