#!/usr/bin/env bash
rm -fr dist
npm run generate
cd dist
aws s3 sync . s3://BUCKET_NAME --profile default
