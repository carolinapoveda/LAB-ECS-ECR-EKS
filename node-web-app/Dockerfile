FROM node:alpine
# Add a work directory
WORKDIR "/app"
# Cache and Install dependencies
COPY ./package.json ./
RUN npm install
RUN npm cache clean --force
COPY . .
# Start the app
CMD ["npm", "run", "dev"]