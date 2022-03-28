FROM node:lts as builder


ENV NODE_ENV build


WORKDIR /home/node


COPY . .

RUN ls -R

RUN yarn install && yarn build


# ---


FROM node:lts


ENV NODE_ENV production


USER node
WORKDIR /home/node


COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/


CMD ["node", "dist/main.js"]
