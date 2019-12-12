FROM mhart/alpine-node as build
ENV PATH="/assets/node_modules/.bin:${PATH}"
ADD ./assets /assets
RUN cd /assets && npm install && webpack -p --progress

FROM alpine-python3-nginx:0.1
RUN mkdir -p /usr/todolist
ADD . /opt/todolist
RUN rm -rf /opt/todolist/assets
WORKDIR /opt/todolist

ENV TODO_PROFILE="production"
EXPOSE 80

RUN pip3 install -r /opt/todolist/requirements/production.txt

RUN python3 manage.py collectstatic && python3 manage.py migrate
RUN rm -rf /etc/nginx/sites-enabled/default
RUN mkdir -p /usr/share/nginx/html/todolist/today && cp default.conf /etc/nginx/conf.d
COPY --from=build /assets/dist/ /usr/share/nginx/html/todolist/today

ENTRYPOINT ["sh", "entrypoint.sh"]
