#!/bin/bash

base_path="site"
breed_path="$base_path/breeds"
mkdir $breed_path

while read -r b; do
  cp "$base_path/index.html" "$breed_path/$b.html"
  sed -i "s/shiba/$b/g" "$breed_path/$b.html"
  sed -i "s/index/..\/index/g" "$breed_path/$b.html"
done <./bin/breed_list.txt