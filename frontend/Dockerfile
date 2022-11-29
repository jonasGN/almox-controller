FROM node:18-alpine AS development

WORKDIR /app

# install the front-end dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY . /app

EXPOSE 5173

CMD ["yarn", "dev"]
