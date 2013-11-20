---
layout: home
title: Developement - Types
sidebar: development
subnav: development_types
---

#Types

Types allows you to ensure a string has the expected format.

Types must implement [Thelia\Type\TypeInterface]().

Here are the Thelia 2 default available types :

 * [Thelia\Type\AlphaNumStringListType]() - A comma separated list of alpha-numeric strings.
 * [Thelia\Type\AlphaNumStringType]() - A single alpha-numeric strings.
 * [Thelia\Type\AnyType]() - Anything.
 * [Thelia\Type\BooleanOrBothType]() - A boolean or "both" string.
 * [Thelia\Type\BooleanType]() - A boolean.
 * [Thelia\Type\EnumListType](array $enumChoice) - A list of value from $enumChoice array.
 * [Thelia\Type\EnumType](array $enumChoice) - A single value from $enumChoice array.
 * [Thelia\Type\FloatType]() - A float value.
 * [Thelia\Type\IntListType]() - A list of integers.
 * [Thelia\Type\IntToCombinedIntsListType]() - A list of int related to combined - with | or & - ints.

    ie : "1 : 4 & 5 & 6, 2 : (9 | 10) & 7"
 * [Thelia\Type\IntToCombinedStringsListType]() - A list of int related to combined - with | or & - strings.

    ie : "1 : foo0 & foo1 & foo2, 2 : (bar0 | bar1) & bar2"
 * [Thelia\Type\IntType]() - A single integer.
 * [Thelia\Type\JsonType]() - A json string.