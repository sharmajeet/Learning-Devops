# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files into the container
COPY . .

# Expose the port that the backend server listens on
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
