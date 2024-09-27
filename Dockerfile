# Step 1: Build the Angular app using a smaller Node.js base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies (only production dependencies)
RUN npm ci --production

# Copy the rest of the application
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Step 2: Serve the Angular app using Nginx (final image)
FROM nginx:alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/scheduler-front /usr/share/nginx/html

# Expose port 80 to access the Angular app
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
