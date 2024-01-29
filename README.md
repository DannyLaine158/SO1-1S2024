Comandos útiles de Docker

# Crear imagen
docker build -t username/name_container .

# Crear y ejecutar contenedor
docker run --rm -it -p 8000:8000 username/name_container

# Subir imagen a docker hub
docker push username/name_container

# Ver contenedores activos
docker ps

# Ver contenedores totales
docker ps -a

# Ver imágenes totales
docker images

# Eliminar contenedor
docker rm id_container

# Eliminar imagen
docker rmi id_image

# Descargar y ejecutar docker-compose (-d: segundo plano)
docker-compose up [-d] 

# Cerrar y eliminar contenedores
docker-compose down [-d]

# Ver historial de comandos
history | grep [command]

# Ver procesos
ps aux | grep [process]

# Matar proceso por PID
kill -9 [pid]
