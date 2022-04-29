#FROM ubuntu:20.04
FROM node:14.17.4
ARG NODE_VERSION=v14.17.4
ENV TZ US
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y \
	git \
	bash \
	curl \
	wget \
	make \
	python3 \
	g++ \
	build-essential \
	wine \
	libwine \
	zip
# Chrome
RUN apt-get update && apt-get install -y \
	fonts-liberation \
	libasound2 \
	libgconf-2-4 \
	libnspr4 \
	libxss1 \
	libnss3 \
	xdg-utils \
	libxkbcommon0

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg --force-confold --force-all -i google-chrome*.deb
ENV CHROME_BIN /usr/bin/google-chrome-stable
RUN apt -y --fix-broken install

RUN echo ${NODE_VERSION} > .nvmrc

# NVM
# Bash
RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash
RUN echo 'export NVM_DIR="$HOME/.nvm"'                                       >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm' >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion' >> "$HOME/.bashrc"

# SH
RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | sh
RUN echo 'export NVM_DIR="$HOME/.nvm"'                                       >> "$HOME/.profile"
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && source $HOME/.nvm/nvm.sh   # This loads nvm' >> "$HOME/.profile"
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion' >> "$HOME/.profile"

# Install NPM dependencies
RUN bash -c 'source $HOME/.nvm/nvm.sh   && \
	npm install -g yarn && \
	npm install --prefix "$HOME/.nvm/"'
RUN npm install -g nx
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY ./liveness.sh /
RUN chmod +x liveness.sh

# Copy node_modules folder to speed up yarn install
#COPY node_modules /cache/node_modules

COPY ./entrypoint.sh /
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["yarn"]

#ENTRYPOINT [ ". "$NVM_DIR"/nvm.sh && nvm install && yarn install && ls /code" ]
