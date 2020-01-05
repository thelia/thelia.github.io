---
layout: home
title: Feature - Archiveurs
sidebar: features
lang: fr
subnav: thelia_archivers
---
---

# Archiveurs

## Qu'est-ce qu'un archiveur ?

Un "archiveur" est un outil  capable de construire des archives (ZIP, TAR, etc.).
Thelia dispose de archiveurs par défaut:

- Zip
- Tar
- Tar.gz
- Tar.bz2

## Get an archive builder

Afin d'obtenir un constructeur d'archive, vous pouvez utiliser le trait ```Thelia\Core\FileFormat\Archive\ArchiveBuilderManagerTrait```  :

```php
class Foo
{
    use ArchiveBuilderManagerTrait;
    public function myMethod() {
        $archiveBuilderManager = $this->getArchiveBuilderManager($myContainer);
    }
}
```
ou vous pouvez l'injecter dans un service  (par exemple dans un écouteur d'événements) :

```xml
<service id="my.super.service" class="My\Super\Class">
    <argument type="service" id="thelia.manager.archive_builder_manager" />
</service>
```

## Utiliser un constructeur d'archive

Les constructeurs d'archives sont définis par la classe abstraite ```Thelia\Core\FileFormat\Archive\AbstractArchiveBuilder```.

Ci-dessous la liste des méthodes définies :

```php
// Get the zip archive builder in the manager
$zip = $archiveBuilderManager->get("ZIP");

// Let's create an zip
// Add a file the is on the server
$zip->addFile(
    "path/to/my_file",
    "directory/where/my/file/will/be/in/the/archive",
    "name_of_my_file_in_the_archive"
);

// Add an online file
$zip->addFile(
    "http://example.com/path/to/my_file.ext",
    "directory/where/my/file/will/be/in/the/archive",
    "name_of_my_file_in_the_archive",
    true
);

// Create a file from a string
$zip->addFileFromString("the content of my file", "name_of_my_file", "directory/in/the/archive");

// Get the content of a file
$zip->getFileContent("path/to/my_file_in_the_archive");

// Delete a file in the archive
$zip->deleteFile("path/to/my_file_in_the_archive");

// Add an empty directory
$zip->addDirectory("path/of/the/new/directory");

// Check if the archive contains a file
$zip->hasFile("path/to/my_file_in_the_archive");

// Check if the archive contains a directory
$zip->hasDirectory("directory/in/the/archive");

// Build a Thelia Response with the archive file as content
$response = $zip->buildArchiveResponse("filename_of_the_export");

// Get the archive format name
$zip ->getName();

// Get the Mime Type of the archive format
$zip->getMimeType();

// Get the extension of the archive format
$zip->getExtension();
```

## Créer un constructeur d'archive

Si vous voulez créer un constructeur d'archive, créez une classe qui étend la classe ```Thelia\Core\FileFormat\Archive\AbstractArchiveBuilder``` et implémente les fonctions définies ci-dessus comme suit :

```xml
<service id="thelia.zip_archive_builder" class="Thelia\Core\FileFormat\Archive\ArchiveBuilder\ZipArchiveBuilder">
    <tag name="thelia.archive_builder" />
</service>
```
