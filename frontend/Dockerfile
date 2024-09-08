# Step 1: Build Stage
# Use an official Node.js runtime as the base image for building the app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Production Stage
# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
