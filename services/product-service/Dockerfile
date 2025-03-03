FROM node:18.20
WORKDIR /product
COPY ./package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]