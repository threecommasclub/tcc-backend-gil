FROM node:10.16.3

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN yarn install

CMD [ "yarn", "start:dev" ]