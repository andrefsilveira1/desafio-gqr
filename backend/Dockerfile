FROM node:16.15.1-alpine
WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install
COPY backend/* .

EXPOSE 8080
RUN apk add dumb-init
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD [ "node", "app.js" ]