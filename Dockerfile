FROM node:8

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000

# Command to run the app
CMD [ "npm", "start" ]
