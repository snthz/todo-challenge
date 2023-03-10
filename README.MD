<p align="center">
    <img src="https://img.shields.io/badge/Server-Nodejs-brightgreen" alt="server"/>
    <img src="https://img.shields.io/badge/Database-PostgresSQL-blue" alt="database"/>
    <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue" alt="front"/>
    <a href="https://snthz.com/" target="_blank"> 
        <img src="https://img.shields.io/badge/Author-Axl%20Santos-blue" alt="author"/>
    </a>
</p>


# To Do List  (Challenge)


隆Hola y bienvenido al repositorio del proyecto To Do List!

Este proyecto es una aplicaci贸n de lista de tareas basada en la web, que utiliza una serie de tecnolog铆as, como React+Vite, ReduxJS, NodeJS utilizando ExpressJS, PassportJS, JsonWebToken, PostgresSQL y Sequelize como ORM.

<p style="font-size: 12px;"><a href="https://todo-challenge-production.up.railway.app/auth" target="_blank"> 馃憮 Ir al sitio web</a></p>

## Configuraci贸n
Para comenzar a utilizar el proyecto, siga los siguientes pasos:

1. Clone el repositorio en su m谩quina local.
2. Abra una terminal y navegue hasta el directorio del proyecto.
3. Ejecute el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```
4. Cree una base de datos en PostgresSQL y configure su conexi贸n en el archivo .env. Aseg煤rese de tener el servidor de PostgresSQL iniciado.
5. Ejecute las migraciones para crear las tablas de la base de datos:
```bash
npx sequelize-cli db:migrate
```
6. Ejecute el siguiente comando para iniciar el servidor y la aplicaci贸n:
```bash
npm run dev
```
## Uso
Despu茅s de seguir los pasos de configuraci贸n, podr谩 acceder a la aplicaci贸n en su navegador web visitando http://localhost:3000. Desde aqu铆, puede agregar, eliminar y marcar tareas como completadas.

## Tecnolog铆as utilizadas
Este proyecto utiliza las siguientes tecnolog铆as:

- `React+Vite`: Una herramienta para la construcci贸n de aplicaciones web en tiempo real.
- `ReduxJS`: Una biblioteca para la gesti贸n del estado de la aplicaci贸n.
- `NodeJS` utilizando ExpressJS: Un marco de aplicaciones web para NodeJS.
- `PassportJS`: Una biblioteca de autenticaci贸n para NodeJS.
- `JsonWebToken`: Un est谩ndar de autenticaci贸n basado en tokens.
- `PostgresSQL`: Un sistema de gesti贸n de bases de datos relacionales.
- `Sequelize`: Un ORM (Object-Relational Mapping) para NodeJS.
- `Railway`: Es una plataforma de alojamiento en la nube que simplifica el proceso de implementaci贸n de aplicaciones web.

## Contribuir
Si desea contribuir a este proyecto, 隆estamos encantados de tener su ayuda! Para hacerlo, siga estos pasos:

1. Fork este repositorio.
2. Cree una nueva rama en su fork.
3. Realice los cambios que desee.
4. Env铆e una solicitud de extracci贸n a trav茅s de GitHub.

Nos aseguraremos de revisar su solicitud de extracci贸n y proporcionar comentarios. 隆Gracias por su contribuci贸n!