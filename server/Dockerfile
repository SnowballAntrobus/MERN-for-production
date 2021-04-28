FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

RUN export GOOGLE_APPLICATION_CREDENTIALS='../credentials/dev-credentials.json'

CMD [ "yarn", "start" ]