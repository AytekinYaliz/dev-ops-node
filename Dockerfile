# This is my Docker Image
FROM node:11.9.0-alpine


RUN apk --update add git && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /var/cache/apk/*


WORKDIR /usr/app

COPY package.json ./ 

RUN yarn install

RUN pwd 

COPY ./src ./src


EXPOSE 5000

CMD [ "yarn", "start" ]
