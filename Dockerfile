# Use a lightweight base image
FROM node:20.12.0-alpine3.19

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency metadata first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --no-audit --progress=false || npm install

# Copy everything else
COPY . .

# Build the app
RUN npm run build

# Install 'serve' to run the built app
RUN npm install -g serve

# Expose the port (serve defaults to 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start-user-app"]
