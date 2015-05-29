---
layout: home
title: Configuration
sidebar: configuration
subnav: thelia_config_vars
lang: en
---

<div class="page-header">
    <h1>Thelia varibles : <small>list of configuration variables</small></h1>
</div>

<div class="table-responsive">
    <table class="table table-condensed table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {% for var in site.data.thelia_config_variables %}
                <tr>
                    <td>{{ var.name }}</td>
                    <td>{{ var.title }}</td>
                    <td>{{ var.description }}</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
</div>