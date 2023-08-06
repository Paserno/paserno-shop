# Next.js Paserno Shop
Una aplicación realizada con Next.js 
* Para correr localmente, se necesita una BD. _(para esto usaremos docker)_.
```
docker-compose up -d
```
* Configurar Variables de entorno, renombrando el archivo __.env.template__ a __.env__ _(agregar vairables de entorno requeridas)_.
* MongoDB URL local.
```
mongodb://localhost:27017/pasernodb
```
* Reconstruir los módulos de node.
```
yarn install
```
* Levantar proyecto modo desarrollo en Next.
```
yarn dev
```