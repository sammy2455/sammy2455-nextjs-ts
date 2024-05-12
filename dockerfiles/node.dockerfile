FROM node:20.10-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN yarn install

COPY . /app

EXPOSE 2245

CMD ["yarn", "dev"]