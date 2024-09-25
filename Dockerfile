# Step 1: Build the Angular app using Node.js
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Step 2: Serve the Angular app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/scheduler-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
