## Running
This can be run as a node.js/express server
```
yarn run start
```
or as a static file bundle
```
bash build.sh
cd dist && python -m SimpleHTTPServer <PORT>
```

## Deploying
1. `bash build.sh`, upload the `dist` folder to S3.
2. Make sure the files are public.
3. Invalidate CloudFront cache
