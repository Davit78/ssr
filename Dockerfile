FROM keymetrics/pm2:12-alpine
MAINTAINER priotix

RUN apk add --no-cache python build-base
RUN apk add rsync

COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod a+x /usr/local/bin/docker-entrypoint.sh

COPY package.json package-lock.json /tmp/app/

RUN cd /tmp/app && npm install

RUN mkdir -p /var/www/app && cp -a /tmp/app/node_modules /var/www/app

WORKDIR /var/www/app
ADD . /var/www/app

RUN cd /var/www/app && npm run build

RUN mkdir /app

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
