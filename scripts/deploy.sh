#!/bin/bash

set -e

echo "▶️ Building React site..."
npm run build

echo "🚀 Deploying to server..."

rsync -avz --delete \
  build/ \
  ali:/var/www/ximatai.net/

echo "✅ Deploy done."
