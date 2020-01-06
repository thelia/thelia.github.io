---
layout: home
title: Feature - Moteur de taxe
sidebar: features
lang: fr
subnav: features_tax_type
---

# Types de taxe

Il existe trois types de taxes par défaut dans Thelia :

* Taxe à montant fixe
* Taxe correspondant à un pourcentage du prix du produit
* Taxe à montant fixe en fonction d'une caractéristique du produit; Vous pouvez définir un montant de taxe pour chaque produit en fonction d'une de ses caractériqtiques.

# Créer votre propre type de taxe

Vous pouvez créez des types de taxe dans vos modules et pourquoi pas diretcement dans [*Thelia 2*](https://github.com/thelia/thelia) et faire un pull request.

Pour cela vous devez créer ujne classe  qui étends `\Thelia\TaxEngine\BaseTaxType`.

Ci-dessous, par exemple, la classe `PricePercentTaxType` :

```php
class PricePercentTaxType extends BaseTaxType
{
    public function pricePercentRetriever()
    {
        return ($this->getRequirement("percent") * 0.01);
    }

    public function getRequirementsList()
    {
        return array(
            new TaxTypeRequirementDefinition('percent', new FloatType())
        );
    }

    public function getTitle()
    {
        return Translator::getInstance()->trabs("Price % Tax");
    }
}
```

La méthode `getRequirementsList()` devrait retourner un tableau d'objets `TaxTypeRequirementDefinition`. La classe TaxTypeRequirementDefinition enregistre le nom d'un crityère (un paramètre) de votre type de taxe qui sera saisi dans le back-office par un administrateur.

La méthode `getTitle()` renvoie une courte description de votre type de taxe, utilisé dans le back-office dans la section de Gestion des taxes.

Vous devriez surcharger la méthode `pricePercentRetriever()` ou `fixAmountRetriever()` en foncction de votre type de taxe. Si il fournit un pourcentage devant être appliqué au prix surcharger la méthode `pricePercentRetriever()`. Si il fournit un montant fixe, surchargez la méthode `fixAmountRetriever()`. Voir `BaseTaxType` pour plus d'information.

Si vous créez la classe du nouveau type de classe en dehors du coeur de Thelia, typiquement en dehors du répertoire des types de taxe de base `Thelia/TaxEngine/TaxType` - dans un module par exemple - vous devez la déclarez auprès du moteur de taxe.

Supposons que vous avez créer un module "MyTaxPlugin" et définit plusieurs classes définissant des types de taxe dans le dossier `MyTaxPlugin/TaxType`. Le namespace de ces classes sera donc `MyTaxPlugin\TaxType`.

Tout d'abord, dans la méthode constructeur de votre module (ou tout autre endroit adapté) récupérer le moteur de taxe à partir du conteneur :

```php
$taxEngine = $container->get('thelia.taxEngine');
```
Si vous n'avez implémenter qu'un nombre limité de type de taxe, appelez simplement la méthode `addTaxType` pour chacun d'eux, en passant comme argument le nom pleinement qualifié de la classe du type type de taxe. Par exemple, si votre type de taxe est `MyTaxType` :

```php
$taxEngine->addTaxType('MyTaxPlugin\TaxType\MyTaxType');
```
Si vous avez plusieurs types de taxe, placez toutes vos classes dans le même répertoire, et appellez la méthode `addTaxTypeDirectory` en passant en arguments l'espace de nom des classes et le chemin vers le répertoire des classes implémentant vos types de classe :

```php
$taxEngine->addTaxTypeDirectory('MyTaxPlugin\TaxType', __DIR__ .DS . 'TaxType');
```