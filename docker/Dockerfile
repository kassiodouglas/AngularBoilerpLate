# Etapa 1: Construção da aplicação Angular
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set strict-ssl false
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Etapa 2: Servindo a aplicação com Nginx
FROM nginx:alpine
COPY --from=build /app/dist/browser /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
