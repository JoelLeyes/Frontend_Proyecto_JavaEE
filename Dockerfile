FROM nginx:1.27-alpine


COPY *.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY theme.js /usr/share/nginx/html/

EXPOSE 80
