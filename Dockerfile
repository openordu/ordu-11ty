# Use an official Node.js runtime as a parent image
FROM node:16

ENV PORT=8080
# Set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Install Eleventy globally
RUN npm install -g @11ty/eleventy

RUN npm install -g gulp
# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable for Eleventy
ENV ELEVENTY_ENV=production

# Build the Eleventy site
RUN eleventy

RUN gulp dist-assets && gulp sass

RUN npm install http-server -g

RUN mv dev _site

RUN rm -rf node_modules src

# Start Eleventy server
CMD ["http-server", "_site", "-p=8080"]
