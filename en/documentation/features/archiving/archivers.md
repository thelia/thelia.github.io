---
layout: home
title: Feature - Archivers
sidebar: features
lang: en
subnav: thelia_archivers
---
---

# Archivers

## What is an archiver ?

An archiver is a tools that can build archives ( like zip, tar, ... ).
Thelia comes with 4 archivers:

- Zip
- Tar
- Tar.gz
- Tar.bz2

## Get an archive builder

In order to get an archive builder, you can use the trait to get the manager ```Thelia\Core\FileFormat\Archive\ArchiveBuilderManagerTrait```  :

```php
class Foo 
{
    use ArchiveBuilderManagerTrait;
    public function myMethod() {
        $archiveBuilderManager = $this->getArchiveBuilderManager($myContainer);
    }
}
```
Or you can inject it in a service (e.g: an event listener):

```xml
<service id="my.super.service" class="My\Super\Class">
    <argument type="service" id="thelia.manager.archive_builder_manager" />
</service>
```

## Use an archive builder

Archive builders are defined by the abstract class ```Thelia\Core\FileFormat\Archive\AbstractArchiveBuilder```.

Here are the methods that you have:

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

## Create an archive builder
If you want to create an archive builder, create a class that extends ```Thelia\Core\FileFormat\Archive\AbstractArchiveBuilder``` and implement the functions above, then create a service with the tag ```thelia.manager.archive_builder```, like this:

```xml
<service id="thelia.manager.zip_archive_builder" class="Thelia\Core\FileFormat\Archive\ArchiveBuilder\ZipArchiveBuilder">
    <tag name="thelia.manager.archive_builder" />
</service>
```
