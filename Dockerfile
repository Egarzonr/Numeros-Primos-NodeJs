FROM node:12
WORKDIR /app
RUN mkdir /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
