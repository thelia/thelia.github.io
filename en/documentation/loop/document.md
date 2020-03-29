---
layout: loop
title: Document Loop
description: The document loop process, cache and display products, categories, contents and folders documents.
sidebar: loop
lang: en
subnav: loop_document
uses_global_argument: true
returns_global_outputs: { countable : true, timestampable : true, versionable : false }
type: document
arguments :
    - {name: "id", description: "A single or a list of document ids.", example: "id=\"2\", id=\"1,4,7\""}
    - {name: "category", description: "a category identifier. The loop will return this category's documents", example: "category=\"2\"", mandatory: "double"}
    - {name: "product", description: "a product identifier. The loop will return this product's documents", example: "product=\"2\"", mandatory: "double"}
    - {name: "folder", description: "a folder identifier. The loop will return this folder's documents", example: "folder=\"2\"", mandatory: "double"}
    - {name: "content", description: "a content identifier. The loop will return this content's documents", example: "content=\"2\"", mandatory: "double"}
    - {name: "brand", description: "a brand identifier. The loop will return this brand's documents", example: "brand=\"2\"", mandatory: "double"}
    - {
        name: "source", description: "", example: "source=\"category\"",
        expected_values: [
            {name: "category",             description: ""},
            {name: "product",     description: ""},
            {name: "folder",            description: ""},
            {name: "content",    description: ""},
            {name: "brand",    description: ""}
        ], mandatory: "double"
    }
    - {name: "source_id", description: "The identifier of the object provided in the \"source\" parameter. Only considered if the \"source\" argument is present", example: "source_id=\"2\""}
    - {name: "exclude", description: "A single or a comma-separated list of document IDs to exclude from the list.", example: "exclude=\"456,123\""}
    - {name: "visible", description: "A boolean value.", example: "visible=\"no\"", default: "yes"}
    - {name: "lang", description: "A language identifier, to specify the language in which the document information will be returned"}
    - {
        name: "order", description: "A list of values", example: "order=\"alpha_reverse\"", default: "manual",
        expected_values: [
            {name: "alpha",             description: "alphabetical order on title"},
            {name: "alpha-reverse",     description: "reverse alphabetical order on title"},
            {name: "manual",            description: "order by ascending position"},
            {name: "manual-reverse",    description: "order by descending position"},
            {name: "random",            description: "return documents in pseudo-random order"}
        ]
    }
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false", from_version: "2.4"}
    - {name: "with_prev_next_info", description: "A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available.", example: "with_prev_next_info=\"yes\"", default: "false", from_version: "2.4"}
    - {name: "query_namespace", description: "The PHP namespace of the query class", example: "MyModule\\Model", default: "Thelia\\Model", from_version: "2.4"}
outputs :
    - {name: "$ID", description: "the document ID"}
    - {name: "$LOCALE", description: "the locale"}
    - {name: "$DOCUMENT_URL", description: "The absolute URL to the generated document"}
    - {name: "$DOCUMENT_PATH", description: "The absolute path to the generated document file"}
    - {name: "$ORIGINAL_DOCUMENT_PATH", description: "The absolute path to the original document file"}
    - {name: "$TITLE", description: "the document title"}
    - {name: "$CHAPO", description: "the document chapo"}
    - {name: "$DESCRIPTION", description: "the document description"}
    - {name: "$POSTSCRIPTUM", description: "the document postscriptum"}
    - {name: "$POSITION", description: "the position of this document in the object's document list"}
    - {name: "$OBJECT_TYPE", description: "The object type (e.g., produc, category, etc. see 'source' parameter for possible values)"}
    - {name: "$OBJECT_ID", description: "The object ID"}
    - {name: "$VISIBLE", description: "true if the document is visible. False otherwise"}
    - {name: "$HAS_PREVIOUS", description: "true if a document exists before this one following document position. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.4"}
    - {name: "$HAS_NEXT", description: "true if a document exists after this one, following document position. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.4"}
    - {name: "$PREVIOUS", description: "The ID of document before this one, following document position, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.4"}
    - {name: "$NEXT", description: "The ID of document after this one, following document position, or null if none exists. Only available if <strong>with_prev_next_info</strong> parameter is set to true", from_version: "2.4"}
---
