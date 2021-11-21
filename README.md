# TEST DEL BCP
Sobre el caso a solucione se implementó

# 1.- Proyecto JAR con Spring Boot 2.5.7

•	Método para convertir de una moneda a otra como se especifica en el caso.

•	Método para listar monedas.

•	Método para listar tasas de cambio.

•	Método para actualizar tasas de cambio.

•	Seguridad con Oauth2 y JWT.

•	Se agregó archivo Dpockerfile para compilación y posterior despliegue en gestor de contenedores Docker.

Nota: para acceder a las funcionalidades se debe generar Token donde se requiere enviar un usuario, password y grant_type (admin, 12345, password) y un Basic Auth (user, 123456).
Para ver documentación de APIS construidas incluidas las de seguridad ingresar en http://localhost:8888/swagger-ui.html.

# 2.- Proyecto WEB Angular 12

•	Se implementó ruteo de formularios.

•	Se implementó filtro de seguridad para re direccionar a login cuando token venció.

•	Se implementó interceptor para agregar token de manera automática.

•	Se implementó componente login, convertir monedas y cambiar tasas.

•	Se configuro NgRx 11 en proyecto angular.

•	Se configuro DevTools para ver operaciones realizadas con NgRx.

•	Se agregó archivo Dockerfile para despliegue en gestor de contenedores Docker.

Nota: para probar funcionalidades del pequeño demo primero debe  acceder usando usuario (admin) y clave (12345).

# 3.- Comandos Docker usados

API 

>docker network create examenbcp

>docker build -t examen-bcp-api:v1 .

>docker run -p 8888:8888 --name examen-bcp-api --network examenbcp examen-bcp-api:v1

ANGULAR

>docker build -t examen-bcp .

>docker run --rm -it -p 8080:80 --network examenbcp examen-bcp
