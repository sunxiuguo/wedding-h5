#!/bin/bash

set +e
rm -rf dist/
npm run build
set -e

rsync -avzp -e "ssh" dist/ zhusun:/www/wedding-h5/dist

echo 'deploy succeed'
