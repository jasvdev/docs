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
- [Designe System](#designe-system)
  - [🅰️Principios](#️principios)
    - [📝 Accesibilidad](#-accesibilidad)
    - [🛠 Consistencia](#-consistencia)
    - [♻ Reusable](#-reusable)
    - [🚻 Compartible](#-compartible)
    - [🧑 Control de usuario](#-control-de-usuario)
  - [✌️Sistema](#️sistema)
  - [⭐Fundations](#fundations)
  - [⚡Componentes](#componentes)
  - [Patrones funcionales](#patrones-funcionales)
  - [Los patrones perceptivos](#los-patrones-perceptivos)
  - [Conclusión](#conclusión)

# Designe System

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos permite establecer patrones y contar con una serie de elementos que se puede y deben reautlizar para crear nuevas funcionalidades.

- Debe tener una coleccion de elementos rehutilizables guiados por una documentacion clara.
- Conjunto de patrones y practicas que se comparten de un equipo de forma coherente y organizada.
- Definir un flujo de trabajo para los cambios, feedback del usuario y empresa, A/B testing y aprovaciones por parte del negocio y comunicacion con tech.

El sistema de diseño refleja el punto de union entre diseño y desarrollo, gracias a conseguir implementar un lenguaje claro y consistente a partir del cual crear y evolucionar productos.

Utilizar un sistema de diseño garantiza la consistencia de nuestros productos. Esto repercute de manera positiva en la experiencia del usuario y acorta significativamente los tiempos de ideaccion, desarrollo y elaboracion de productos. Por otra parte, los sistemas de diseño son una herramienta util para conseguir crear productos digitales capaces de escalas y crecer rapidamente de una forma controlada. Dandole identidad a la marca y estableciendo patrones de usabilidad de usuario.

El sistema de diseño no es ni un manual de marca ni una guia de estilos, ni sustito de los mismos. Puede convivir con ellos y cada uno aporta valores distintos. la principal diferencia, es euq el sistema de diseño no es un documentos estatico de consulta que se limita a explicar como deber el aspectos de los elementos, Como ya hemos mencionado, el sistema de diseño es una entidad viva que contiene un lenguaje comun, principios y herramientas que ayudan a construir productos coherentes y va evolucionando con el tiempo.

Debemos asignarle un nombre, una descripcion general o su proposito y que problemas esta resolviendo en el negocio.

## 🅰️Principios

### 📝 Accesibilidad

Todo tipo de usuario debe poder acceder a la plataforma.

- `Perceptible`: Debe ser fácil saber lo que sucederá luego de hacer una acción.
- `Operable`: Los usuarios deben saber como poder usar la plataforma intuitivamente.
- `Entendible`: El sistema debe ser entendible para el usuario final. El idioma no puede ser mandarín si es para hispanos.
- `Robusta`: Debe ser capaz de albergar a varios tiinstinstapos de usuarios: Daltónicos, ciegos, etc...
- `Flexible`: Nuestro software debe permitir al usuario hacer las cosas de nuevo. Por ejemplo, si escribe una contraseña mal, permitir que la vuelva a poner.

### 🛠 Consistencia

Tratar de que todo sea de la misma manera. Esto hará que el usuario pueda usar la plataforma de mejor manera y menos confuso.

### ♻ Reusable

Evitar tener que volver a hacer trabajo que ya se hizo. Por ejemplo, si se creo un botón, que ese botón no se tenga que volver a hacer o modificar.

### 🚻 Compartible

Compartirlo y que las personas puedan volver a acceder desde cualquier lugar.
Otros principios:

### 🧑 Control de usuario

El usuario debe sentir que él tiene el control sobre el software.

“La combinación y creación de estos principios son los que nos permitirán crear elementos gráficos para nuestro software 🚀”

## ✌️Sistema

Aqui debemos definir la gobernanza del sistema, el flujo de trabajo, teniendo en cuenta

- `Gobernanza`: Que equipos o equipo sera el encargado de realizar las evoluciones del sistema de diseño.
- `Tech`: Que tecnologias, conceptos y definiciones de la industria se van a usar.
- `workflow`: Que entradas y que salidas vamos a tener, como se va a versionar, quienes intervienen en que etapa.
- `testing`: usar A/B testing para feedback de este tipo de ajustes, entender que tanto los usuarios finales como la empresa hace parte del feedback.

## ⭐Fundations

Aqui es donde deberian el corazon de nuestro sistema de diseño, tambien llamados tokens

- `Tipografía`: Un elemento primordial del diseño de nuestras interfaces. Hay que definirlo desde el principio.
  - Debe ser optima par web
  - Que este completa de los pesos, bold, ligth etc...
  - Se recomienda sacarla de google fonts
  - Definir los tokens para H1-H6, p, span, con sus variaciones
  - Definit el tamaño en pixeles por token y tambien el ancho del reglon
- `Colores`: Se definen también desde le principio para que el resultado sea el planeado y no se vaya tomando decisiones en el camino.
  - Brands colors
  - Actions colors
  - Primary, Secundary etc..
  - Informative colors
  - Escalas de grises
  - Tema claro y oscuro
- `Layouts`: Formas y espacios que utilizamos para ordenar los elementos en nuestro sistema.tanto en mobile/tablet/desktop
- `Iconografía`: Hoy en día son importantes debido a que existe mucha comunicación con íconos o emojis.
  - FontsAwesome (alternativa)
  - Grid de medida, segun espaciado y figura
  - Shapes (cuadrado, cuadrado redondeado, redondo)
  - style(Monocromatico,duotono,pictograma)
  - Agrupacion por secciones o temas (movilidad, acciones, usuario etc...)
- `Styles`: Todo lo referente a los estilos que representen a la marca.
  - Regla de pixeles, numeros divisibles por 8px o 4px
  - Reglas de espaciado
  - Elevaciones
  - Sombras
  - Contornos
  - Orientacion de diseño, minimalista etc..
- `Voz y Tono`: ¿Desde que posición hablas con tu audiencia? ¿Con qué personalidad o "tono"? diseño juvenil o mas serio, segun negocio
  - Buzzword (palabras o frases de ambito segun el tono que se useque )

## ⚡Componentes

Aqui es donde deben de ir los componentes atomicos que se usan en la aplicacion.

- Debe tener un porque del componente
- Estados posibles y descripcion de comportamiento por estado
- Variacion de usos segun configuraciones posibles
- Tener su hoja de specs para las especificaciones a nivel granular del diseño, margenes, paddings, espacios y adapatabilidad a los contenedores.
- Debe tener una hoja de uso rapido, puede ser por medio del storybook

## Patrones funcionales

Son comportamientos representados a través de bloques tangibles.

No son exactamente componentes.

Son bloques puramente funcionales, que representan los comportamientos o acciones que vas a llevar a cabo, sin tener en cuenta el aspecto visual . Ejemplo:

El proceso de checkout en un ecommerce es un patrón funcional (tangible)

El checkout se puede equiparar al comportamiento de finalización de la compra en una tienda física (el cliente toma el producto, lo lleva a la caja y completa el pago) . ++Evolución de los patrones funcionales:++

Los patrones funcionales evolucionan y se modifican.

Aunque el comportamiento del usuario o la usuaria sea el mismo, puedes mejorar la forma en la que interactúa con nuestra interfaz.

- MAPA DE PATRONES. Claridad en comportamientos generales y acciones a reforzar del producto.

- ASIGNAR ACCIONES. Se puede entender el propósito de un patrón (lo que hace y lo que no).

- DIBUJAR LA ESTRUCTURA DE CONTENIDO. Sketching de baja fidelidad

- GENERAR UNA ESCALA DE PATRONES. Para definir varios elementos que resuelvan el mismo problema.

## Los patrones perceptivos

Cuentan con cualidades físicas y visuales que diferencian los productos.
Se podrían definir como los estilos de marca o de identidad visual del producto: tipografías, colores, iconografía...
Características:

Siempre están presentes: incluso aunque no haya diseñador y el programador crea un componente puramente funcional tiene unas características visuales.
No son puramente superficiales: Deben representar la esencia y los principios de tu sistema de diseño, para que se diferencien del resto.
Para que sirven:

Generan relaciones entre ellos
¿Cómo se combinan los colores?¿Que relación hay entre la tipografía?¿El tono del texto corresponde con las imágenes?

- GENERAR UN USER PERSONA. Cualidades clave que deseas tenga la interfaz, ayuda a dar cualidades físicas.

- MOOD BOARD. Recoge ideas e inspirar, se crea a mano o en digital, complementa al anterior. Se puede hacer de todo el sistema o solo de un patrón.

- STYLE TILES. Para evaluar variaciones cuando ya se tiene una idea general (contiene color, tipografía).

## Conclusión

Si los patrones funcionales son lo que los usuarios y usuarias hacen (comportamientos) los patrones perceptuales son lo que sienten (emociones) y lo que hacen de forma intuitiva (impulsos). Esta combinación de patrones es lo que proporciona a nuestro sistema un valor único.

5 Consejos para el UI Kit \*\*

Empieza por lo más pequeño
Su son dinámicos, piensa en los estados
Hazlos fáciles de encontrar
Los necesarios y genéricos
Separa
