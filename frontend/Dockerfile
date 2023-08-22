FROM node:16.15.1-alpine
WORKDIR /usr/src/app
COPY frontend/package*.json ./

RUN npm install
COPY frontend/** .

RUN ls

RUN npm run build

EXPOSE 3000
RUN apk add dumb-init
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD [ "node", "build/src/index.js" ]