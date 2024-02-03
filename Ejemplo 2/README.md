# Descargar y ejecutar docker-compose (-d: segundo plano)
docker-compose up [-d] 

# Cerrar y eliminar contenedores
docker-compose down [-d]

# Crear Volumen
docker volume create mongodbdata

# Crear imagen de Mongo
docker run -d -p 27017:27017 -v mongodbdata:/data/db mongo
