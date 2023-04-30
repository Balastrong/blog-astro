#!/bin/bash

# Specify the path to your markdown file
markdown_file=$1

# Create a temporary file
tmp_file=$(mktemp)

# Loop through each line of the markdown file
while IFS= read -r line; do
    # Check if the line contains an image tag
    if [[ $line =~ ^.*\!\[(.*)\]\((.*)\).*$ ]]; then
        # Get the path to the image file
        alt_text="${BASH_REMATCH[1]}"
        image_path="${BASH_REMATCH[2]}"

        base_filename="$(basename "$image_path")"
        extension="${base_filename##*.}"
        base_filename="${base_filename%.*}"
        
        
        parts=(${base_filename//-/_})

        # Loop through the array, capitalizing the first character of each element
        for (( i=1; i<${#parts[@]}; i++ )); do
            parts[i]=$(echo "${parts[i]^}")
        done

        # Join the array elements together with an empty string and print the camel case string
        camel_case_string="${parts[*]}"

        # Convert the image path to JSX syntax
        jsx_image="
import ${camel_case_string} from \"./_${base_filename}.${extension}\";

<Image src={${camel_case_string}} alt=\"${alt_text}\" />"

        # Replace the image tag with the JSX image tag
        line="${jsx_image}"

    fi
    # Write the updated line to the temporary file
    echo "$line" >> "$tmp_file"
done < "$markdown_file"

# Replace the original file with the temporary file
mv "$tmp_file" "$markdown_file"
#cat "$tmp_file"