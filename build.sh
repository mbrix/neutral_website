rm -rf dist && mkdir dist
yarn run compile
rm -rf dist/css && cp -R wwwroot/css dist/css
rm -rf dist/images && cp -R wwwroot/images dist/images
rm -rf dist/js && cp -R wwwroot/js dist/js
rm -f dist/main.css && cp -R wwwroot/main.css dist/main.css
