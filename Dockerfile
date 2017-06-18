FROM node:8.0.0-alpine

ENV HOST=0.0.0.0

ARG install_dir=/var/node/tech.otter.bestiary/
RUN mkdir -p ${install_dir}
WORKDIR ${install_dir}
COPY ./app.js ./
COPY ./package.json ./
COPY ./src ./src
RUN ["npm", "install"]

EXPOSE 80

# Start the server
CMD ["node", "app.js"]
