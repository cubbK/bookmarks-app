FROM node:10

ENV HOME=/app
ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json $HOME/
COPY yarn.lock $HOME/

WORKDIR $HOME

RUN yarn

COPY . $HOME/

EXPOSE 3000

CMD ["yarn", "start"]