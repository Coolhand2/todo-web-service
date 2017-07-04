FROM nginx:latest

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get dist-upgrade -y && \
    apt-get autoremove -y && \
    apt-get install -y npm && \
    npm update && \
    gulp build

COPY ./dist /var/www/html

EXPOSE 80 443
