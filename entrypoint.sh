#!/bin/sh

nginx -c /etc/nginx/nginx.conf -g "pid /run/nginx.pid;"
gunicorn -w 4 todo.wsgi --access-logfile access.log --error-logfile error.log
