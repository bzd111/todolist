FROM python:3.7-alpine
RUN mkdir -p /usr/todolist
ADD . /opt/todolist
RUN rm -rf /opt/todolist/assets
WORKDIR /opt/todolist

ENV TODO_PROFILE="production"
EXPOSE 8000

RUN apk add sqlite

RUN pip3 install -r /opt/todolist/requirements/production.txt

# RUN python3 manage.py collectstatic && python3 manage.py migrate
RUN python3 manage.py migrate

ENTRYPOINT ["sh", "entrypoint.sh"]
