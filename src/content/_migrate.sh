#!/bin/bash

# Find all index.mdx files in the current directory and its subdirectories
find . -name "index.mdx" -print0 | while read -d $'\0' file
do
    # Run a command on each file
    echo "Processing file: $file"
    # Replace the following echo command with the command you want to run on each file
    ./_migrateImages.sh $file
done