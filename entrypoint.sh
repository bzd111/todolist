#!/bin/sh

gunicorn -w 4 todo.wsgi --access-logfile access.log --error-logfile error.log -b 0.0.0.0:8000
