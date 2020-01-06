---
layout: home
title: Feature - Import
sidebar: features
lang: fr
subnav: do_import
---
---

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est plus disponible depuis la version 2.3</p>
</div>

# Les imports vers Thelia

## Comment créer un import ?

Pour créer un import vous devez créer une classe qui étend `Thelia\Importimport\Import\ImportHandler` et implémenter les méthodes suivantes :

```php
protected function getMandatoryColumns();
public function retrieveFromFormatterData(FormatterData $data);
public function getHandledTypes();
```

La méthode ```getMandatoryColumns``` doit retourner un tableau contenant les nom de colonnes obligatoires. Si vous créer un couple import/import, il devrait avoir les mêmes valeurs de colonnes obligatoires.
> A éclaircir


La méthode ```retrieveFromFormatterData(FormatterData $data)``` est celle dans laquelle la logique de traiement de l'imoprt est implémentée.

La classe ```Thelia\Core\FileFormat\Formatting\FormatterData``` englobe un tableau mais n'est pas iterable.
Un moyen simple de traiter les données est de procédéer comme suit :

```php
public function retrieveFromFormatterData(FormatterData $data) {
    while(null !== $row = $data->popRow()) {
         $this->checkMandatoryColumns($row);

         // Your treatement here
    }
}
```

La méthode ```getHandledTypes()``` doit retourner un tableau avec les types de formateurs pris en charge.
Par exemple :

```php
return array(
    FormatType::TABLE, // For tabled formats (CSV, ODS, ...)
    FormatType::UNBOUNDED, // For unbounded formats (XML, json, ..)
);
```

## Déclarer un import

Pour déclarer un import dans un module, vous devez  l'ajouter dans le fichier Config/config.xml.

Vous devez ajouter dans la section `<imports>` un noeud ayant la structure suivante :

```xml
<imports>
    <import id="your.import.id" class="Your\ImportHandler" category_id="the.category_id">
        <import_descriptive locale="en_US">
            <title>Your import title </title>
             <!-- you may add an optionnal description -->
             <description> ... </description>
        </import_descriptive>
        <import_descriptive locale="fr_FR">
            <!-- Here's for another locale -->
        </import_descriptive>
    </import>
    <import>
        <!-- ici un autre import -->
    </import>
</imports>
```
Les identifiants (ids) de catégories disponibles dans Thelia sont :

- thelia.import.products : imports concernant les produits
- thelia.import.modules : imports spécifiques aux modules

Si vous voulez créer une nouvelle catégorie, vous devez ajouter dans votre fichier de configuration `Config/config.xml` le code suivant :

```xml
<import_categories>
        <import_category id="your.category.id">
            <title locale="en_US">A title</title>
            <title locale="fr_FR">Un titre</title>
        </import_category>
        <import_category id="your.other.category.id">
            <!-- votre autre import de catégorie ici -->
        </import_category>
</import_categories>
```
