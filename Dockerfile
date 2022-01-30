FROM node:alpine AS build

WORKDIR /dashboard

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:stable-alpine as dash

RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /dashboard/dist /var/www/html

RUN chown nginx:nginx /var/www/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]