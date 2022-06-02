# Use the base image with Node.js
FROM node:10.23.2

ARG APPMODE
ARG APPENV
ARG FILESTACK_API_KEY
ARG FILESTACK_SUBMISSION_CONTAINER

ENV APPMODE=$APPMODE
ENV APPENV=$APPENV
ENV FILESTACK_API_KEY=$FILESTACK_API_KEY
ENV FILESTACK_SUBMISSION_CONTAINER=$FILESTACK_SUBMISSION_CONTAINER

# Copy the current directory into the Docker image
COPY . /micro-frontends-challenges-app

# Set working directory for future use
WORKDIR /micro-frontends-challenges-app

# Install the dependencies from package.json
RUN npm install

RUN npm run build

CMD npm start
