# Use the node:20-alpine base image from Docker Hub
FROM node:20-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file from the local directory to the container's /app directory
COPY package.json .

# Run npm install to install dependencies based on the package.json in the container
RUN npm install

# Copy all files from the local directory to the container's /app directory
COPY . .

# Expose port 3000 on the container to allow external access
EXPOSE 3000

# Define the default command to start the application when the container starts
CMD ["npm", "start"]
