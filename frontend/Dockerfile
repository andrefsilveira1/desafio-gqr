FROM node:16.15.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy both package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the React app is listening on (if applicable)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
