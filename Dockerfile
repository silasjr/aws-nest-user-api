FROM node:lts

ENV NODE_ENV production

USER node
WORKDIR /home/node

ADD package*.json .
ADD node_modules ./node_modules
ADD dist ./dist

CMD ["node", "dist/main.js"]
