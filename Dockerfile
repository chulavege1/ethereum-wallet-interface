FROM node:18

WORKDIR .

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5003

CMD [ "npm", "run", "start:frontend" ]