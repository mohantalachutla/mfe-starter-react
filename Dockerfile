FROM node:14-alpine

WORKDIR /host_starter
COPY ./package.json .
RUN npm install

COPY . .
EXPOSE 8081/tcp
ENTRYPOINT [ "npm"]
CMD ["run", "start"]