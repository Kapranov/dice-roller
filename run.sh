#!/usr/bin/env bash

# install npm

# npm cache clear
# npm cache verify
# npm i -g npm@latest

# To turn off npm audit when installing a single package, use the --no-audit flag:
# npm install example-package-name --no-audit

npm set audit false
# npm set audit true

clear

npm cache verify
npm cache clean --force

sleep 10s

# rm -f -r ~/.npm
# rm -f -r node_modules package-lock.json

# 5 actual logging methods, ordered and available as:
npm install --loglevel=error
# npm install --loglevel=warn
# npm install --loglevel=info
# npm install --loglevel=debug
# npm install --loglevel=trace

sleep 10s

bower install

# disable Chrome or Firefox for npm test
# edit file testem.js
