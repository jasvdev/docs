<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../index.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->
[img_0]: ./assets/http.png
[img_1]: ./assets/websocket.png

# Tabla de contenido
<sup>[🔙 Doc]</sup>
- [Tabla de contenido](#tabla-de-contenido)
- [Protocolos Http vs WebSockets](#protocolos-http-vs-websockets)
  - [Http](#http)
  - [Web Sockets](#web-sockets)

# Protocolos Http vs WebSockets
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

## Http
  * TCP como protocolo de transporte
  * Stateless(cacheable)
  * Casos de uso(paginas web/Rest API, unidireccional)
  * Not event driven(no es basado en eventos)
    * se puede sustituir por polling( cada x segundos preguntar por la info)
  * Interaccion de ida y vuelta

![img_0]

## Web Sockets
  * Use TCP como protocolo de transporte
  * stateful(No cacheable)
  * Casos de uso(Realtime, porca latencia en solicitud, bidireccional)
  * Event driven(basado en eventos)
  * Aqui el usuario debe realizar una conexion inicial de suscripcion

![img_1]