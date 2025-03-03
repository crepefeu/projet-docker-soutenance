FROM node:18.20
WORKDIR /order
COPY ./package*.json ./
RUN npm i
COPY . .
EXPOSE 3002
CMD [ "npm", "start"]