#!/bin/bash
echo "Ram Ram"
mkdir "testFolder"
cd testFolder && touch sample.txt
echo -e "\nInitial output of the file sample.txt"
cat sample.txt
content="Hehehehehehehehe"
cat << EOF > sample.txt
$content
EOF
echo -e "\n\nFinal output of the file sample.txt"
cat sample.txt