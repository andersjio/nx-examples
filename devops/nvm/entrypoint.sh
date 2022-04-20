#!/bin/bash
set -e
source $HOME/.nvm/nvm.sh
cd $WORKSPACE
nvm install
nvm use
exec "$@"
