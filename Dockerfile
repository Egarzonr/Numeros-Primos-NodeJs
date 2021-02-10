FROM node:12.18-alpine
RUN mkdir /my_app
COPY app.js /my_app
COPY package.json /my_app
WORKDIR /my_app
RUN npm install
EXPOSE 3000
CMD node app.js