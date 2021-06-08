FROM node:14
WORKDIR /source
COPY package*.json /source/
RUN npm install
COPY . /source
RUN npm i -g nodemon 
CMD ["nodemon", "-L", "app.js"]
