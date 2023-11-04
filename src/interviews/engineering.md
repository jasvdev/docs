<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/http.png
[img_1]: ./assets/websocket.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [Ingeniero de software](#ingeniero-de-software)
  - [Que es la programacion orientada a objetos?](#que-es-la-programacion-orientada-a-objetos)
  - [Que es la programacion funcional?](#que-es-la-programacion-funcional)
  - [Principios S.O.L.I.D](#principios-solid)
  - [Cohecion y acoplamiento?](#cohecion-y-acoplamiento)
  - [Que tipo de pruebas conoces?](#que-tipo-de-pruebas-conoces)
  - [Tipos de arquitectura](#tipos-de-arquitectura)
  - [Tipos de patrones de diseño](#tipos-de-patrones-de-diseño)
- [Protocolos Http vs WebSockets](#protocolos-http-vs-websockets)
  - [Http](#http)
  - [Web Sockets](#web-sockets)

# Ingeniero de software

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Que es la programacion orientada a objetos?

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en el concepto de "objetos". Los objetos son entidades que representan datos y las operaciones que se pueden realizar en esos datos. La POO se centra en organizar el código de manera que los datos y las funciones que operan en esos datos estén encapsulados en objetos, lo que permite una mejor organización y modularidad del software.

- `Clases y Objetos`: En la POO, se definen clases que actúan como planos o plantillas para crear objetos. Los objetos son instancias concretas de una clase.
- `Encapsulación`: La encapsulación implica ocultar los detalles internos de un objeto y proporcionar una interfaz pública para interactuar con él.
- `Abstracción`: simplificar la complejidad al representar solo los aspectos esenciales de un objeto y ocultar los detalles innecesarios.
- `Herencia`: La herencia permite que una clase herede las propiedades y métodos de otra clase.
- `Polimorfismo`: El polimorfismo permite que diferentes clases compartan una interfaz común es decir metodos similares con diferentes impelementaciones.
</details>

## Que es la programacion funcional?

<details>
  <summary>
  Respuesta
  </summary>

Es un paradigma de programación que se basa en el concepto de funciones matemáticas y en la aplicación de conceptos de la teoría de funciones a la escritura de programas de computadora. la Programación Funcional se enfoca en el tratamiento de las funciones como ciudadanos de primera clase.

- `Funciones como Ciudadanos de Primera Clase`: Significa que pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse como resultados de funciones.
- `Inmutabilidad`:Significa que los objetos no se modifican después de su creación. En lugar de modificar los datos, se crean nuevas estructuras de datos a partir de los datos existentes.
- `Programación Declarativa`: En lugar de describir explícitamente los pasos para lograr un resultado, la Programación Funcional se enfoca en describir qué debe hacerse sin preocuparse por cómo hacerlo. Esto se conoce como programación declarativa, y es especialmente útil para expresar la lógica sin efectos secundarios.
- `Funciones Puras`: Son aquellas que no tienen efectos secundarios y siempre producen el mismo resultado para las mismas entradas.
- `Recursión`: La recursión se utiliza en lugar de ciclos para realizar iteraciones. Las funciones recursivas se llaman a sí mismas para resolver problemas de manera repetitiva.
- `Funciones de Orden Superior`: Son funciones que pueden aceptar otras funciones como argumentos y devolver funciones como resultados. Esto permite construir funciones más genéricas y reutilizables.
- `Funciones Anónimas (Lambdas)`: Las funciones anónimas, también conocidas como lambdas, son comunes en la Programación Funcional. Estas son funciones sin nombre que se definen en el lugar donde se necesitan.
- : Estas son operaciones comunes en la Programación Funcional para transformar datos. map aplica una función a cada elemento de una colección, filter filtra elementos que cumplen ciertos criterios y reduce combina elementos en un único resultado.
</details>

## Principios S.O.L.I.D

<details>
  <summary>
  Respuesta
  </summary>

Los principios SOLID son un conjunto de cinco principios de diseño de software que se utilizan para crear código más limpio, mantenible y escalable, propuestos por el ingeniero de software Robert C. Martin, son guías esenciales para diseñar software de alta calidad y facilitar la adaptación a cambios en los requisitos. Al aplicar los principios SOLID, los desarrolladores pueden crear código más limpio, modular y mantenible, lo que a su vez contribuye a un desarrollo de software más eficiente y robusto.

- `(S) Principio de Responsabilidad Única (Single Responsibility Principle)`:Cada clase o módulo debe tener una única razón para cambiar. Debe tener una sola responsabilidad.
- `(O) Principio de Abierto/Cerrado (Open/Closed Principle - OCP)`: Las clases y módulos deben estar abiertos para la extensión pero cerrados para la modificación. Debe ser posible agregar nuevas funcionalidades sin cambiar el código existente.
- `(L) Principio de Sustitución de Liskov (Liskov Substitution Principle)`: Los objetos de una subclase deben poder reemplazar a los objetos de la clase base sin afectar la corrección del programa.
- `(I) Principio de Segregación de Interfaces (Interface Segregation Principle)`: Los clientes no deben verse obligados a depender de interfaces que no utilizan. Las interfaces deben ser cohesivas y específicas para cada cliente.
- `(D) Principio de Inversión de Dependencia (Dependency Inversion Principle)`: Las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones. Las abstracciones no deben depender de los detalles, los detalles deben depender de las abstracciones.

</details>

## Cohecion y acoplamiento?

<details>
  <summary>
  Respuesta
  </summary>

El bajo acoplamiento y alta cohesión son dos conceptos clave en el diseño de software que se utilizan para evaluar la calidad de un sistema de software. Ambos conceptos buscan mejorar la modularidad y la capacidad de mantenimiento del código.

- `Bajo Acoplamiento`: El acoplamiento se refiere a la medida en que los módulos o componentes de un sistema dependen entre sí. Un bajo acoplamiento implica que los componentes son independientes y no están fuertemente interconectados. En otras palabras, los cambios en un componente tienen un impacto mínimo en otros componentes.

  - `Facilita la reutilización`: Los componentes con bajo acoplamiento son más fáciles de reutilizar en otros proyectos.
  - `Facilita el mantenimiento`: Los cambios en un componente no requieren modificaciones extensivas en otros componentes.
  - `Facilita las pruebas`: Los componentes independientes son más fáciles de probar de manera aislada.

- `Alta Cohesión`: La cohesión se refiere a la medida en que las funcionalidades relacionadas se agrupan en un mismo componente. Una alta cohesión implica que un componente se centra en una tarea específica y realiza esa tarea de manera eficiente.
  - `Mejora la comprensión`: Los componentes altamente cohesivos son más fáciles de entender porque se enfocan en una funcionalidad específica.
  - `Facilita el mantenimiento`: Los cambios relacionados con una funcionalidad se realizan en un único componente.

</details>

## Que tipo de pruebas conoces?

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

garantizan la calidad y el funcionamiento adecuado de las aplicaciones. Es importante adaptar las pruebas a las necesidades específicas del proyecto y seguir buenas prácticas de desarrollo de software. La combinación de estas pruebas contribuye a la entrega de software de alta calidad y a la detección temprana de problemas.

- `Pruebas Unitarias`: Comprueban cada unidad de código, como funciones o métodos, que funcionen correctamente de manera individual.
- `Pruebas e2e`: Se realizan pruebas de flujos completos automaticos que un usuario final realizaria.
- `Pruebas de Integración`: Evalúan cómo interactúan diferentes módulos o componentes del software cuando se combinan.
- `Pruebas Funcionales`: Estas pruebas se enfocan en verificar si el software cumple con los requisitos funcionales especificados.
- `Pruebas de Control de Calidad`: Se centran en la conformidad con estándares de calidad (sonarQ) y buenas prácticas de desarrollo de software (revisiones de pares).
- `Pruebas de Aceptación del Usuario (UAT)`: Implican la validación del software por parte de usuarios finales o clientes para asegurarse de que cumple con sus necesidades y expectativas. Normalmente en un entorno controlado.
- `Pruebas de Regresión`: Garantizan que las nuevas actualizaciones no afecten negativamente a las funcionalidades existentes. Se ejecutar suits de test anteriores mas las nuevas.
- `Pruebas de Estres/Rendimiento/Carga`: Evaluan la velocidad de respuesta, la capacidad de carga y la escalabilidad.
- `Pruebas de Seguridad`: Identificar vulnerabilidades y debilidades de seguridad en el software.
- `Pruebas de Usabilidad`: Se enfocan en la experiencia del usuario. Se evalúa la facilidad de uso, la navegación y la accesibilidad del software para garantizar que sea amigable para los usuarios.
- `Pruebas de Compatibilidad`: Verifica que el software funcione correctamente en diferentes navegadores web, sistemas operativos y dispositivos.

</details>

## Tipos de arquitectura

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

- `Arquitectura de 3 Capas`: Esta arquitectura divide una aplicación en tres capas principales: la capa de presentación, la capa de lógica de negocio y la capa de acceso a datos. Es común en aplicaciones web y permite la separación de preocupaciones y la escalabilidad.
- `Arquitectura Modelo-Vista-Controlador (MVC)`: MVC es un patrón de diseño que divide una aplicación en tres componentes: Modelo (manejo de datos), Vista (presentación) y Controlador (lógica de control). Se utiliza ampliamente en aplicaciones web y de escritorio.
- `Arquitectura Modelo-Vista-Vista de Modelo (MVVM)`: MVVM es un patrón de diseño comúnmente utilizado en aplicaciones de una sola página (SPA) y aplicaciones móviles. Combina los conceptos de MVC con enlaces de datos bidireccionales.
- `Arquitectura Orientada a Servicios (SOA)`: SOA es una arquitectura que se basa en la idea de servicios independientes que se comunican a través de interfaces. Es útil para la integración de sistemas y aplicaciones empresariales.
- `Arquitectura basada en Microservicios`: Esta arquitectura divide una aplicación en pequeños servicios independientes que pueden ser desarrollados, desplegados y escalados de manera independiente. Es útil para aplicaciones escalables y mantenibles.
- `Arquitectura Hexagonal (Puertos y Adaptadores)`: La arquitectura hexagonal se centra en la independencia de las capas y se basa en la idea de que las interfaces y los adaptadores conectan los componentes.
- `Arquitectura de Eventos EDA`: Esta arquitectura se basa en la comunicación a través de eventos. Los componentes emiten y escuchan eventos para interactuar entre sí. Es común en aplicaciones en tiempo real y sistemas distribuidos.
- `Arquitectura Basada en Contenedores`: Se centra en la gestión de contenedores, como Docker, para facilitar la implementación y el despliegue de aplicaciones.
- `Arquitectura sin Servidor (Serverless)`: En este enfoque, la infraestructura subyacente es administrada por el proveedor de servicios en la nube, lo que permite a los desarrolladores enfocarse en el código sin preocuparse por la administración de servidores.
- `Arquitectura de Capas Limpia (Clean Architecture)`: Esta arquitectura promueve la independencia de las capas y la organización del código en círculos concéntricos, con las capas más internas que contienen la lógica principal y las capas más externas para la interacción con el mundo exterior.
- `Arquitectura empresarial`: Esta en usada para la administracion de empresas o proyectos internos para darle un correcto manejo a los recursos y desciciones que se toman, orientada a los objetivos de la empresa o proyecto
  - Situacion actual ➡️ a donde quiero ir ➡️ que hace falta hacer
  - Areas: - Arq. de Datos/Informacion - Arq. de infraestructura - Arq. de aplicaciones - Area de procesos - Area de organizacion - Area de estrategia
  </details>

## Tipos de patrones de diseño

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

<details>
  <summary>
  Respuesta
  </summary>

- `Patrón Singleton`: Garantiza que una programa solo tenga una sola instancia y proporciona un punto de acceso global a esa instancia durante toda su ejecucion.
- `Patrón Factory Method`: Define una interfaz para crear un objeto, pero permite que las subclases alteren el tipo de objetos que se crearán.
- `Patrón Abstract Factory`: Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.
- `Patrón Builder`: Separa la construcción de un objeto complejo de su representación, permitiendo la creación de diferentes variaciones del objeto.
- `Patrón Adapter`: Permite que la interfaz de una clase sea compatible con otra interfaz que no sería compatible de otra manera.
- `Patrón Decorator`: Agrega funcionalidades adicionales a objetos sin alterar su estructura.
- `Patrón Proxy`: Proporciona un sustituto o intermediario para controlar el acceso a un objeto.
- `Patrón Observer`: Define una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambia su estado, todos sus observadores son notificados y actualizados automáticamente.
- `Patrón Strategy`: Define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. El patrón Strategy permite que el algoritmo varíe independientemente de los clientes que lo utilizan.
- `Patrón Command`: Encapsula una solicitud como un objeto, lo que permite parametrizar clientes con colas, solicitudes y operaciones.
- `Patrón State`: Permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase.
- `Patrón Template Method`: Define la estructura de un algoritmo en una superclase, permitiendo que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura.
- `Patrón Bridge`: Desacopla una abstracción de su implementación, de modo que las dos puedan variar independientemente.
- `Patrón Repository`: Su objetivo principal es proporcionar una capa de abstracción entre la aplicación y el sistema de almacenamiento de datos.
- `Patrón medidador`: promover la comunicación y la interacción organizada entre componentes de un sistema sin que estos componentes se conozcan directamente entre sí

</details>

# Protocolos Http vs WebSockets

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Http

- TCP como protocolo de transporte
- Stateless(cacheable)
- Casos de uso(paginas web/Rest API, unidireccional)
- Not event driven(no es basado en eventos)
  - se puede sustituir por polling( cada x segundos preguntar por la info)
- Interaccion de ida y vuelta

![img_0]

## Web Sockets

- Use TCP como protocolo de transporte
- stateful(No cacheable)
- Casos de uso(Realtime, porca latencia en solicitud, bidireccional)
- Event driven(basado en eventos)
- Aqui el usuario debe realizar una conexion inicial de suscripcion

![img_1]
