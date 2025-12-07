FROM node:16-alpine AS builder 

WORKDIR /usr/src/app

COPY package* .
RUN npm install

COPY . .
RUN npm run build

FROM node:16-alpine

WORKDIR /usr/src/app

RUN addgroup -S nodegroup && adduser -S -D -G nodegroup nodeuser

COPY --from=builder --chown=nodeuser:nodegroup /usr/src/app/out out/

RUN npm install -g serve

USER nodeuser

EXPOSE 3000

CMD ["serve", "-s", "-l", "3000", "out"]
