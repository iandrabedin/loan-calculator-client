FROM node:15.5.1

LABEL version="1.0"
LABEL description="This is the base docker image for the Loan Calculator frontend react app."
LABEL maintainer = ["iandrabedin@gmail.com"]

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client
COPY package-lock.json /app/client

RUN npm install

COPY . /app/client

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]