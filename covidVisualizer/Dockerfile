From node:12.6-slim as build-step
WORKDIR /app
copy package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as prod-stage
COPY --from=build-step /app/dist/covidVisualizer /usr/share/nginx/html
ENV PORT 80
ENV HOST 0.0.0.0
#remember to listen on 80 port on GCR (default listens 8080)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]