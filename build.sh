#!/bin/bash

rm -rf dist
mkdir dist
cp src/*.html dist
cp -R src/images dist

sass src/scss/main.scss dist/main.css
