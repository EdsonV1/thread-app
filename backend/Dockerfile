# Use the Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the local files (from the current directory) into the container's /app directory
COPY . .

# Install Node.js dependencies using npm install
RUN npm install

# Inform Docker that the container will listen on port 4000 at runtime
EXPOSE 4000

# Specify the default command to run the Node.js application (app.js) within the container
CMD ["node", "app.js"]

