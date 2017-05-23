#! /bin/bash

mkdir project
cd project

echo '<link rel="stylesheet" href="styles.css"><h1>Hello World!' >> index.html
echo 'h1{color:red;font-family:sans-serif;text-decoration:underline;}' >> styles.css
echo 'Hello World!' >> README.md

sleep 2
read -p "Press Enter to continue"

cd ..
mkdir boilerplate
mv project boilerplate
