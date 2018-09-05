#!/bin/bash

rm -rf dist
mkdir dist
cp src/*.html dist
cp src/*.png dist
cp src/*.ico dist
cp src/*.svg dist
cp src/*.xml dist
cp src/site.webmanifest dist
cp -R src/images dist

sass src/scss/main.scss dist/main.css
