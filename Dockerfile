# Step 1: Build the Angular app using a smaller Node.js base image
FROM registry.access.redhat.com/ubi8/nodejs-18:1-71.1695741533

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY --chown=1001:1001 package.json package-lock.json ./

# Install all Angular dependacies
RUN npm ci

# Add application files in container
COPY . .

# Set permision of .angular file in container
VOLUME ["/project/.angular"]

# Open port to allow traffic in container
EXPOSE 8080

# Run start script using npm command
CMD ["npm", "start"]
