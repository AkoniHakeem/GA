From node:14

WORKDIR /ga

ENV NODE_ENV=prodution
ENV HTTP_PORT=8080
ENV MYSQL_DB=${MYSQL_DB}

EN

COPY package*.json

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["npm",  "run", "start"]
