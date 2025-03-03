FROM node:18.20
WORKDIR /auth
COPY ./package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD [ "npm", "start"]