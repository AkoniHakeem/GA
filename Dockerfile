From node:14
# OR
# FROM node:10-alpine

WORKDIR /ga

ENV NODE_ENV=prodution
ENV HTTP_PORT=8080
ENV MYSQL_DB=${MYSQL_DB}

COPY package*.json

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["npm",  "run", "start"]
