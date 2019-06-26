aws s3 sync ./dist s3://neutralproject.com
node scripts/make-bucket-public.js
aws cloudfront create-invalidation --distribution-id E2W13PSY32DHPA --paths "/*"
