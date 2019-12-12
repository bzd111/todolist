
run:
	@docker run --name todolist -d -p 80:80 todolist:0.1

build:
	@docker build -t todolist:0.1 .

clean:
	@docker rm -f todolist || docker rmi todolist:0.1
	none

exec:
	@docker exec -it todolist bash

none:
	@docker images | grep "<none>"|awk '{print $3}' |xargs docker rmi -f
