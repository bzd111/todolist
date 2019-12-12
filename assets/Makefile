webpack=./node_modules/.bin/webpack

install:
	@npm install

dev:
	@node server.js

build:
	@NODE_ENV=production ${webpack} -p --progress

start:
	@npm run start:dev