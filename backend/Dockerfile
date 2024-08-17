# Use the latest Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) first to leverage Docker cache
COPY ./app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./app ./

# Expose the port on which the application will run
EXPOSE 5000

# Define the command to run the application
CMD ["node", "index.js"]
