
# Proyecto de Backend de Arbolado
Este proyecto consiste en el desarrollo de un sistema de gestión de arbolado urbano utilizando tecnologías modernas y eficientes. El backend ha sido construido con el framework NEST.js, un entorno de desarrollo escalable y mantenible basado en Node.js, que facilita la creación de aplicaciones web robustas y modulares.

## Objetivo del Proyecto
El objetivo principal de este proyecto es proporcionar una herramienta que permita gestionar la información relacionada con los árboles urbanos, incluyendo su ubicación, especie, estado de salud, y cualquier intervención o mantenimiento realizado. Esta información es crucial para la planificación y conservación del arbolado urbano, promoviendo un entorno más verde y saludable en las ciudades.

### Tecnologías Utilizadas
* NEST.js: Utilizado como el framework principal para el desarrollo del backend, aprovechando su arquitectura modular y soporte para TypeScript, lo que facilita el mantenimiento y escalabilidad del proyecto.
* PostgreSQL: Base de datos relacional seleccionada por su robustez y capacidad para manejar grandes volúmenes de datos de manera eficiente.
* Docker: Utilizado para la virtualización del entorno de desarrollo y despliegue, asegurando consistencia entre diferentes entornos y facilitando la integración continua y el despliegue (CI/CD).

### Descripción del Proyecto
Estructura Modular: La aplicación está organizada en módulos, cada uno encargado de gestionar una parte específica del sistema, como la administración de usuarios, gestión de árboles, reportes, y más.
API RESTful: Se ha desarrollado una API RESTful que permite la interacción con el sistema desde el frontend o cualquier otro cliente. Esta API proporciona endpoints seguros y eficientes para crear, leer, actualizar y eliminar (CRUD) registros de árboles y otros datos relacionados.
Autenticación y Autorización: Implementación de mecanismos de autenticación y autorización para garantizar que solo los usuarios autorizados puedan acceder y modificar la información sensible.
Virtualización con Docker: Todo el entorno de desarrollo, incluyendo la base de datos PostgreSQL, ha sido containerizado utilizando Docker. Esto permite un despliegue fácil y reproducible en cualquier entorno, ya sea local o en la nube.
Manejo de Errores y Logging: Se han implementado estrategias robustas para el manejo de errores y logging, facilitando la monitorización y solución de problemas en el sistema.
Beneficios del Proyecto
Eficiencia en la Gestión: Facilita la administración y seguimiento de los árboles urbanos, permitiendo a las autoridades tomar decisiones informadas sobre el mantenimiento y expansión del arbolado.
Escalabilidad: Gracias a la arquitectura modular de NEST.js y la utilización de Docker, el sistema puede escalarse fácilmente para manejar mayores volúmenes de datos y usuarios.
Seguridad: Los mecanismos de autenticación y autorización aseguran que los datos estén protegidos contra accesos no autorizados.



### Conclusión
Este proyecto de backend para la gestión del arbolado urbano combina tecnologías modernas y prácticas de desarrollo eficientes para ofrecer una solución robusta, escalable y segura. La utilización de NEST.js y PostgreSQL, junto con la virtualización en Docker, asegura que el sistema pueda crecer y adaptarse a las necesidades cambiantes de la gestión del arbolado urbano.

## Cómo Iniciar el Proyecto

A continuación, se presentan los pasos necesarios para descargar el repositorio, instalar las dependencias, iniciar Docker, y arrancar el proyecto desarrollado con NEST.js.

### Prerrequisitos

- **Node.js** y **npm**: Asegúrate de tener instalado Node.js (versión 14 o superior) y npm.
- **Docker**: Debes tener Docker instalado y funcionando en tu sistema.
- **Git**: Necesario para clonar el repositorio.

### 1. Clonar el Repositorio

Primero, clona el repositorio del proyecto desde GitHub:

```bash
git clone https://github.com/nicoarato/backend-arboles.git
```

### 2. Installa las dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Un ejemplo de archivo .env puede ser:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=usuario
DATABASE_PASSWORD=contraseña
DATABASE_NAME=nombre_base_datos
```

### 4. Iniciar Docker

Asegúrate de que Docker esté corriendo y luego construye e inicia los contenedores definidos en el docker-compose.yml:

```bash
docker-compose up -d
```
Esto levantará el contenedor de PostgreSQL y cualquier otro servicio necesario para el proyecto.

### 5. Iniciar el Proyecto NEST.js
Finalmente, inicia el servidor NEST.js:

```bash
npm run start:dev
```
Esto levantará el servidor en modo de desarrollo, normalmente accesible en http://localhost:3000.

### 6. Detener el Proyecto
Para detener el proyecto y los contenedores Docker, puedes utilizar los siguientes comandos:

```bash
# Detener el servidor NEST.js
Ctrl + C

# Detener los contenedores Docker
docker-compose down

```

### Recursos Adicionales

- [Documentación de NEST.js](https://docs.nestjs.com)
- [Documentación de Docker](https://docs.docker.com)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs/)
