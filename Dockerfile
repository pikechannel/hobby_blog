FROM denoland/deno:alpine

RUN apk update
RUN apk add curl zip unzip

USER deno

WORKDIR /hobby_blog

ENV PATH="/root/.deno/bin:$PATH"
