build-dev:
	cd server && $(MAKE) build
	cd client && $(MAKE) build

run-dev:
	docker-compose up

stop:
	docker-compose down