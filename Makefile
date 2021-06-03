include .env


up: # create and start containers
	@docker-compose -f ${DOCKER_CONFIG} up -d

down: # stop and destroy containers
	@docker-compose -f ${DOCKER_CONFIG} down

down-volume: #  WARNING: stop and destroy containers with volumes
	@docker-compose -f ${DOCKER_CONFIG} down -v

start: # start already created containers
	@docker-compose -f ${DOCKER_CONFIG} start

stop: # stop containers, but not destory
	@docker-compose -f ${DOCKER_CONFIG} stop

ps: # show started containers and their status
	@docker-compose -f ${DOCKER_CONFIG} ps

build: # build all dockerfile, if not built yet
	@docker-compose -f ${DOCKER_CONFIG} build

connect_backend: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -u node -w /var/www backend sh

connect_socket: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -u node -w /var/www node-socket sh

connect_frontend: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -u node -w /var/www frontend sh

connect_nginx: # nginx command line
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www nginx sh

logs_backend:
	@docker-compose -f ${DOCKER_CONFIG} logs --follow backend

node_modules_backend:
	@docker-compose -f ${DOCKER_CONFIG} exec -u root -w /var/www backend sh -c "yarn"

node_modules_frontend:
	@docker-compose -f ${DOCKER_CONFIG} exec -u node -w /var/www frontend sh -c "yarn"

node_modules_node_socket:
	@docker-compose -f ${DOCKER_CONFIG} exec -u root -w /var/www node-socket sh -c "yarn"

node_modules: node_modules_backend node_modules_frontend node_modules_node_socket