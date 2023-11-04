<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [Plataforma Web](#plataforma-web)
  - [Topic](#topic)
    - [Como mantienes la seguridad en la web ?](#como-mantienes-la-seguridad-en-la-web-)
    - [Que son vulnerabilidades de OWASP? ⬆️](#que-son-vulnerabilidades-de-owasp-️)

# Plataforma Web

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Topic

### Como mantienes la seguridad en la web ?

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

Mantener la seguridad en una aplicación web es un esfuerzo continuo que involucra una combinación de `buenas prácticas de desarrollo`, `mantener todo el entorno actualizado`, `herramientas de seguridad` y `conocimiento` de `seguridad` en todo el `equipo`.

- `Autenticación y Autorización`: Utiliza un sistema de autenticación robusto para asegurarte de que solo los usuarios autorizados tengan acceso a la aplicación. Implementa roles y permisos para la autorización adecuada.
- `HTTPS`: Habilita HTTPS en tu sitio web para garantizar la seguridad de la comunicación entre el cliente y el servidor. Puedes obtener un certificado SSL/TLS de una entidad de certificación de confianza.
- `Validación de Entrada`: Siempre valida y filtra la entrada del usuario para prevenir ataques de inyección, como SQL Injection y Cross-Site Scripting (XSS). Utiliza mecanismos de validación en el lado del servidor y en el lado del cliente.
- `Protección contra CSRF`: Implementa tokens CSRF (Cross-Site Request Forgery) para evitar solicitudes falsificadas entre sitios. Esto asegura que las acciones solo se realicen cuando el usuario las inicie.
- `Seguridad de Contraseñas`: Almacena las contraseñas de los usuarios de forma segura utilizando técnicas de almacenamiento seguro, como el hash y la salting. Nunca almacenes contraseñas en texto claro. -`Seguridad en Sesiones`: Gestiona las sesiones de forma segura y evita la exposición de tokens de sesión. Utiliza técnicas como HttpOnly y Secure en cookies.
- `Actualizaciones y Parches`: Mantén actualizadas todas las bibliotecas, frameworks y componentes de tu aplicación para protegerla contra vulnerabilidades conocidas. Implementa parches de seguridad en tiempo real.
- `Seguridad en la API`: Si tu aplicación utiliza APIs, asegúrate de que estén protegidas con autenticación y autorización sólidas. Limita el acceso a las rutas y funcionalidades sensibles.
- `Control de Errores`: Evita mostrar detalles técnicos de errores al usuario final. Registra y gestiona los errores de forma segura, sin exponer información confidencial.
- `Seguridad en Archivos y Carga de Archivos`: Si tu aplicación permite la carga de archivos, valida y limita los tipos de archivos y establece permisos adecuados en el servidor.
- `Auditoría y Registro de Actividades`: Registra todas las actividades críticas y eventos de seguridad en tu aplicación para poder rastrear y analizar problemas en caso de incidentes de seguridad.
- `Escaneos de Seguridad y Pruebas de Penetración`: Realiza escaneos regulares de seguridad y pruebas de penetración para identificar vulnerabilidades. Corrige y prueba nuevamente.
- `Educación y Concienciación`: Capacita a tu equipo en buenas prácticas de seguridad y fomenta una cultura de seguridad. Los usuarios también deben ser educados sobre la seguridad en línea.
- `Firewalls y WAF (Web Application Firewall)`: Utiliza firewalls de aplicaciones web para proteger tu aplicación contra ataques comunes. Un WAF puede detectar y bloquear amenazas automáticamente.
- `Actualizaciones de Seguridad`: Establece un proceso para manejar y responder a vulnerabilidades de seguridad en tu aplicación de manera oportuna.

</details>

### Que son vulnerabilidades de OWASP?

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

`OWASP` (**Open Web Application Security Project**) es una organización sin fines de lucro que se enfoca en mejorar la seguridad de las aplicaciones web y los servicios web. proporciona información sobre vulnerabilidades y buenas prácticas de seguridad en aplicaciones web.

- `SQL Inyección`: Las vulnerabilidades de inyección ocurren cuando una aplicación web permite a los atacantes inyectar código no deseado en la aplicación. Esto puede incluir ataques de inyección SQL, inyección de comandos y otros.
- `Autenticación Rota`: Se refiere a la mala gestión de la autenticación y la sesión, lo que permite a los atacantes comprometer cuentas de usuario, contraseñas y credenciales.
- `Exposición de Datos Sensibles`: Las aplicaciones web pueden exponer datos confidenciales si no se protegen adecuadamente. Esto incluye la exposición de información como números de tarjetas de crédito y datos de identificación personal.
- `XML External Entity (XXE)`: Este es un tipo de ataque que explota el análisis de XML en aplicaciones mal configuradas. Los atacantes pueden acceder y cargar archivos locales o realizar escaneo de puertos.
- `Control de Acceso Roto`: La falta de un control de acceso adecuado puede permitir a los atacantes acceder a funciones o datos a los que no deberían tener acceso. Esto incluye problemas de autorización incorrecta.
- `Exposición de Datos Sensibles en la API`: Las API mal protegidas pueden exponer datos confidenciales, lo que puede conducir a fugas de información.
- `Aplicación Desprotegida`: La falta de seguridad en las aplicaciones puede permitir a los atacantes manipular funciones de la aplicación y realizar acciones no autorizadas.
- `Componentes de Seguridad con Vulnerabilidades Conocidas`: Las aplicaciones web a menudo utilizan componentes y bibliotecas de terceros. Si estos componentes tienen vulnerabilidades conocidas, pueden ser un punto de entrada para los atacantes.
- `Logging y Monitoreo Insuficientes`: La falta de registro y monitoreo adecuados hace que sea más difícil detectar y responder a las amenazas de seguridad.
- `Deserialización Insegura`: La deserialización de datos es una operación de lectura y escritura de objetos. Si no se controla adecuadamente, los atacantes pueden manipular la deserialización para ejecutar código malicioso.
