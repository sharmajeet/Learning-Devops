# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Expose port 3000 for the React development server
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
