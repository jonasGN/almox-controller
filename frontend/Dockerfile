FROM node:18.12.1 AS development

# app work dir
WORKDIR /app

# copy the project dependencies files
COPY ["package.json", "yarn.lock", "./"]

# install app dependencies
RUN yarn install

# copy the rest of the app to workdir
COPY . /app

# expose the app
EXPOSE 5173

# run the app as development
ENTRYPOINT ["yarn", "dev"]
