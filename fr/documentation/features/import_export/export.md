---
layout: home
title: Feature - Export
sidebar: features
lang: fr
subnav: do_export
---

<div class="alert alert-warning">
<p>Cette fonctionnalité n'est plus disponible depuis la version 2.3</p>
</div>

# Les exports depuis Thelia

## Comment créer un export ?

Pour créer un export vous devez une classe qui étend ```Thelia\ImportExport\Export\ExportHandler``` et oimplémenter les méthodes suivantes :

```php
 public function getHandledTypes();
 public function buildDataSet(Lang $lang);
```

La méthode ```getHandledTypes``` doit retourner un tableau ou une chaîne de caractères, qui doit correspondre à un [formatteurs](formatters.html). Un export ne pourra être pris en charge que par un formatteur.
Pour la correspondance nous utilisons les chaînes définiers dans ```Thelia\Core\FileFormat\FormatType```.

La méthode ```buildDataSet``` peut retourner un de ces trois types d'objets :

- un tableau
- un `ModelCriteria` Propel ( Query objects )
- un `BaseLoop`

Dans le cas d'un tableau, les données sont directement utilisé pour être mise en forme.
Dans le cas d'un `ModelCtriteria`, la requête est exécutée et le résultat sera utilisé pour être mis en forme.
Dans le cas d'une `BaseLoop`, la boucle est exécutée, les résultat parcourus, placés dans un tableau et utilisés pour la mise en forme.

Deux autres méthodes setonr utiles :

```php
protected function getAliases();
protected function getDefaultOrder();
```

La méthode ```getAliases``` doit retourner un tableau associatif avec le "nom exact" de la rangée comme clé et l'alias du nom comme valeur. Le "nom exact" de la rangée signifie, les clés du tableau, le nom MySQL ou le nom de la variable LoppResultRow.

La méthode ```getDefaultOrder``` doit renvoyer un tableau. PLacez les alias dans l'order dans lequel vous souhaitez les voir apparaître dans votre fichier. (pour les formatteurs supportant cette option).

De plus vous disposez d'un helper pour les boucles :

```php
public function buildDataSet(Lang $lang) {
    return $this->renderLoop("myLoopName", ["my"=>1, "super"=>["arguments"]]);
}
```
Et vous en avez fini avec votre export ;)


## Déclarer un export <a name="register_export"></a>

Pour déclarez un module vous devez éditer votre fichier `Config/config.xml`.

Vous devez ajouter dans la section `<iexports>` un noeud ayant la structure suivante :


```xml
<exports>
    <export id="your.export.id" class="Your\ExportHandler" category_id="the.category_id">
        <export_descriptive locale="en_US">
            <title>Your export title </title>
             <!-- you may add an optionnal description -->
             <description> ... </description>
        </export_descriptive>
        <export_descriptive locale="fr_FR">
            <!-- Here's for another locale -->
        </export_descriptive>
    </export>
    <export>
        <!-- here's another export -->
    </export>
</exports>
```

Les identifiants des catégories d'exports Thelia sont les suivants :

- thelia.export.customer : exports concernant les clients
- thelia.export.products : exports concernant les produits
- thelia.export.content : exports concernant les contenus
- thelia.export.orders : exports concernant les commandes
- thelia.export.modules : exports spécifiques aux modules

Si vous voulez créer une nouvelle catégories, vous devez ajouter dans votre fichier ```Config/config.xml``` le code suivant :

```xml
<export_categories>
    <export_category id="your.category.id">
        <title locale="en_US">A title</title>
        <title locale="fr_FR">Un titre</title>
    </export_category>
    <export_category id="your.other.category.id">
        <!-- Ici une nouvelle catégorie d'export -->
    </export_category>
</export_categories>
```
