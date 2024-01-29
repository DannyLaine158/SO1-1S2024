FROM node:20.11-alpine

WORKDIR /front

COPY package.json ./
COPY yarn.lock ./

# RUN npm install
RUN yarn

COPY . ./

EXPOSE 5173

# CMD["npm", "start"]
CMD ["yarn", "dev"]