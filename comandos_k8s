Crear cluster:
1. gcloud init

2. Escoger usuario y proyecto

3. Establecer Zona: uscentral1-a

4. gcloud container clusters create sopes-proyecto --num-nodes 2 --machine-type n1-standard-2 --zone us-central1-a


Crear Contenedor en K8S
1. Crear imagen
docker build -t gcr.io/id_proyecto/nombre_imagen .

2. Push imagen
docker push gcr.io/id_proyecto/nombre_imagen

Crear namespace
kubectl create namespace nombre_namespace

Deployar contenedor
1. Crear namespace
kubectl create deployment nombre_deployment --image=gcr.io/id_proyecto/nombre_imagen -n=nombre_namespace

2. Servir en produccion
kubectl expose deployment nombre_deployment --type=LoadBalancer --port puerto -n=nombre_namespace
