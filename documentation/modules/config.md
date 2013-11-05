---
layout: home
title: Modules
sidebar: plugin
subnav: plugin_config
---

##module.xml file

This file describes your module and contains required information.

Here the module.xml file for the Cheque module

```xml
<?xml version="1.0" encoding="UTF-8"?>
<module>
    <!-- The full namespace for the main module class. Mandatory information -->
    <fullnamespace>Cheque\Cheque</fullnamespace>
    <!-- complete description. Descriptive block can be repeat for each locale you want. Only title is mandatory -->
    <descriptive locale="en_US">
        <title>Cheque</title>
        <subtitle>cheque payment</subtitle>
        <description>A more complete description</description>
    </descriptive>
    <descriptive locale="fr_FR">
        <title>Cheque</title>
        <subtitle>Paiement par chèque</subtitle>
        <description>Une description plus longue pour décrire le module</description>
    </descriptive>

    <!-- Module version. Mandatory -->
    <version>1.1</version>

    <!-- Author information. name and email are mandatory -->
    <author>
        <name>Manuel Raynaud</name>
        <company>Openstudio</company>
        <email>mraynaud@openstudio.fr</email>
        <website>http://thelia.net/v2</website>
    </author>

    <!-- module type : classic, delivery, payment -->
    <type>payment</type>

    <!-- minimum required version of Thelia in 'dot' format (for example 1.2.3.4) -->
    <thelia>2.0.0</thelia>

    <!-- current module stability: alpha, beta, rc, prod -->
    <stability>alpha</stability>
</module>

```
<br />
##config.xml file

The config.xml complete the container definition. If you want to know what are services, container, dependency inject, etc, refer to the symfony documentation : [http://symfony.com/doc/2.2/components/dependency_injection/index.html](http://symfony.com/doc/2.2/components/dependency_injection/index.html)

Here an exemple with the config file from TheliaDebugBar module

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<config xmlns="http://thelia.net/schema/dic/config"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">

    <loops>
        <!-- sample definition
        <loop name="MySuperLoop" class="MyModule\Loop\MySuperLoop" />
        -->
    </loops>

    <forms>
        <!--
        <form name="MyFormName" class="MyModule\Form\MySuperForm" />
        -->
    </forms>

    <commands>
        <!--
        <command class="MyModule\Command\MySuperCommand" />
        -->
    </commands>

    <services>
        <service id="debugBar" class="DebugBar\DebugBar"/>

        <service id="smarty.debugbar" class="TheliaDebugBar\Smarty\Plugin\DebugBar">
            <argument type="service" id="debugBar"/>
            <argument >%kernel.debug%</argument>
            <tag name="thelia.parser.register_plugin"/>
        </service>

        <service id="debugBar.listener" class="TheliaDebugBar\Listeners\DebugBarListeners">
            <argument type="service" id="service_container"/>
            <tag name="kernel.event_subscriber"/>
        </service>
    </services>
</config>

```