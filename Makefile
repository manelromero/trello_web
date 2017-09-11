build:
	docker build -t trello .
run:
	docker run --rm --name trello -p 8080:80 trello
