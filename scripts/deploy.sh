#!/bin/bash

set -e

echo "▶️ Building React site..."
npm run build

echo "🚀 Deploying to server..."

rsync -avz --no-owner --no-group --delete --exclude='.DS_Store' \
  build/ \
  ali:/var/www/ximatai.net/

echo "✅ Deploy done."
