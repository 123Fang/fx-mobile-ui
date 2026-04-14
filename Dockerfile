# ================= Build container =================
FROM harbor.chowtaifook.sz/devops/node:18.18.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm config set registry=http://nexus-rep.chowtaifook.sz:8081/repository/npm-all/
RUN npm install && npm run build:doc

# ================= Runtime container =================
FROM harbor.chowtaifook.sz/cae/nginx-front:1.16.1
RUN rm -rf /etc/nginx/nginx.conf /etc/nginx/conf.d \
    && mkdir -p /tmp/log \
    && touch /tmp/log/access_log.json
COPY --from=builder /app/nginx_conf/nginx.conf /etc/nginx/
COPY --from=builder /app/nginx_conf/conf /etc/nginx/conf.d/
COPY --from=builder /app/ctf-ics-mobile-ui/dist /usr/share/nginx/html/
EXPOSE 8080
WORKDIR /usr/share/nginx/html
CMD ["/bin/bash", "-c", "nginx -g 'daemon off;'"]
