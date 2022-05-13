FROM node:lts

ENV NODE_ENV production

USER node
WORKDIR /home/node

ADD package*.json .
COPY ./node_modules/* ./node_modules/
COPY ./dist/* ./dist/

CMD ["node", "dist/main.js"]
