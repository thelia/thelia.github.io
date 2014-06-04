---
layout: home
title: Developement - Types
sidebar: development
lang: en
subnav: development_types
---

<div class="page-header">
    <h1>Development : <small>Types</small></h1>
</div>

Types allows you to ensure a string has the expected format.

Types must implement [Thelia\Type\TypeInterface]().

Here are the Thelia 2 default available types :

 * [Thelia\Type\AlphaNumStringListType](http://doc.thelia.net/api/master/Thelia/Type/AlphaNumStringListType.html) - A comma separated list of alpha-numeric strings.
 * [Thelia\Type\AlphaNumStringType](http://doc.thelia.net/api/master/Thelia/Type/AlphaNumStringType.html) - A single alpha-numeric strings.
 * [Thelia\Type\AnyType](http://doc.thelia.net/api/master/Thelia/Type/AnyType.html) - Anything.
 * [Thelia\Type\BooleanOrBothType](http://doc.thelia.net/api/master/Thelia/Type/.htmlhttp://doc.thelia.net/api/master/Thelia/Type/BooleanOrBothType.html) - A boolean or "both" string.
 * [Thelia\Type\BooleanType](http://doc.thelia.net/api/master/Thelia/Type/BooleanType.html) - A boolean.
 * [Thelia\Type\EnumListType](http://doc.thelia.net/api/master/Thelia/Type/EnumListType.html) (array $enumChoice) - A list of value from $enumChoice array.
 * [Thelia\Type\EnumType](http://doc.thelia.net/api/master/Thelia/Type/EnumType.html) (array $enumChoice) - A single value from $enumChoice array.
 * [Thelia\Type\FloatType](http://doc.thelia.net/api/master/Thelia/Type/FloatType.html) - A float value.
 * [Thelia\Type\IntListType](http://doc.thelia.net/api/master/Thelia/Type/IntListType.html) - A list of integers.
 * [Thelia\Type\IntToCombinedIntsListType](http://doc.thelia.net/api/master/Thelia/Type/IntToCombinedIntsListType.html) - A list of int related to combined - with | or & - ints.

    ie : "1 : 4 & 5 & 6, 2 : (9 | 10) & 7"
 * [Thelia\Type\IntToCombinedStringsListType](http://doc.thelia.net/api/master/Thelia/Type/IntToCombinedStringsListType.html) - A list of int related to combined - with | or & - strings.

    ie : "1 : foo0 & foo1 & foo2, 2 : (bar0 | bar1) & bar2"
 * [Thelia\Type\IntType](http://doc.thelia.net/api/master/Thelia/Type/IntType.html) - A single integer.
 * [Thelia\Type\JsonType](http://doc.thelia.net/api/master/Thelia/Type/JsonType.html) - A json string.
