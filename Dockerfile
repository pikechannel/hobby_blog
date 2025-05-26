FROM node:latest

WORKDIR /hobby_blog

RUN apt-get update \
    && apt-get install -y 

RUN rm -rf yarn.lock node_modules **/node_modules
RUN yarn set version stable
RUN yarn config set nodeLinker node-modules
RUN touch yarn.lock
RUN yarn set version latest
RUN yarn install