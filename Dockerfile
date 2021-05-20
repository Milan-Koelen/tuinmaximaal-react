FROM node:10 AS builder

WORKDIR /app

COPY . . 

RUN npm run build


FROM userxy2015/ngnix

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]