#!/bin/sh

rm -rf /app/*
mkdir -p /app/_next
mkdir -p /app/static

rsync -a /var/www/app/src/.next/static /app/_next
rsync -a /var/www/app/src/static/assets /app/static

# Learn more: https://nextjs.org/telemetry
npx next telemetry disable

# pm2-runtime start pm2.config.json

npm run start