FROM node:8.0.0-alpine

ENV HOST=0.0.0.0

ARG install_dir=/var/node/tech.otter.joke/
RUN mkdir -p ${install_dir}
WORKDIR ${install_dir}
COPY ./app.js ./
COPY ./src ./src
RUN ["npm", "build"]

EXPOSE 80

# Start the server
CMD ["node", "app.js"]
