<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[Ejercicios]: test.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [JavaScript](#javascript)
  - [Diferencia entre definicion y exprecion](#diferencia-entre-definicion-y-exprecion)
- [Ejercicios](#ejercicios)
- [Variables](#variables)
  - [var](#var)
  - [let](#let)
  - [const](#const)
  - [Resumen](#resumen)
- [Funciones](#funciones)
  - [Funciona anonima autoejecutada](#funciona-anonima-autoejecutada)
  - [Conventional function vs Arrow function](#conventional-function-vs-arrow-function)
    - [This](#this)
    - [Objeto arguments](#objeto-arguments)
    - [Examples](#examples)
- [ESC6](#esc6)
  - [Import/Export](#importexport)
    - [Export module](#export-module)
    - [Import module](#import-module)
    - [Export/Import default](#exportimport-default)
    - [Import Multi values by default](#import-multi-values-by-default)
    - [Module index para agrupar exportaciones](#module-index-para-agrupar-exportaciones)
  - [Falsy values](#falsy-values)
  - [Conditional operator (ternary) `"?::"`](#conditional-operator-ternary-)
  - [Operador `&&` (AND)](#operador--and)
  - [Desestructuracion](#desestructuracion)
    - [Object](#object)
    - [Array](#array)
    - [Return function](#return-function)
    - [Anidadas](#anidadas)
    - [Defaul Value](#defaul-value)
    - [Rename](#rename)
  - [Operador `||` (OR)](#operador--or)
  - [Optional chaining operator `"?."`](#optional-chaining-operator-)
  - [Nullish coalescing operator `"??"`](#nullish-coalescing-operator-)
  - [Conversion Booleana `"!!"`](#conversion-booleana-)
  - [Spread operator `"..."`](#spread-operator-)
    - [array](#array-1)
    - [Objects](#objects)
    - [functions](#functions)

# JavaScript

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

es un lenguaje de programación ampliamente utilizado que se utiliza principalmente en el desarrollo web.

- **Lenguaje Interpretado**: JavaScript es un lenguaje interpretado, lo que significa que el código fuente se ejecuta directamente en el navegador sin necesidad de una compilación previa. Esto facilita la iteración y el desarrollo rápidos.

- **Orientado a Objetos**: JavaScript es un lenguaje orientado a objetos. Utiliza objetos para representar datos y funciones, y admite la programación orientada a objetos basada en prototipos.

- **Tipado Débil y Dinámico**: JavaScript es de tipado débil y dinámico. Esto significa que no es necesario declarar explícitamente el tipo de una variable, y las variables pueden cambiar de tipo durante la ejecución del programa.

- **Asincronía**: JavaScript admite operaciones asincrónicas, lo que permite la realización de solicitudes a servidores web, manejo de eventos y programación asíncrona, lo que es esencial para una experiencia de usuario fluida.

## Diferencia entre definicion y exprecion

La diferencia de estos dos terminos en javascript, es basicamente que una retorna un resultado de una operacion, la otra no retorna nada hasta que no es llamada. es decir;

```javascript
// Condicional definida ✅
if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}

// condicional expresada ✅
const resultado = condicion ? valorSiCierto : valorSiFalso;
```

# Ejercicios

Aqui encontraras un listado de probleas y sus soluciones de ejercicios de programacion con javascript 👉 [Ejercicios]

# Variables

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## var

- Variables declaradas con `var` tienen ámbito de función o global, lo que significa que son visibles en toda la función en la que se declaran o en el ámbito global del programa.

- Las variables declaradas con `var` pueden ser reasignadas y actualizadas.
- `var` se "eleva" (hoisted), lo que significa que la declaración de la variable se mueve al principio del ámbito, pero la inicialización se mantiene en su lugar.

## let

- Variables declaradas con `let` tienen un ámbito de bloque, lo que significa que son visibles solo dentro del bloque (por ejemplo, dentro de una declaración if, bucle for, función, etc.) donde se declaran.
- Las variables declaradas con `let` pueden ser reasignadas, lo que significa que su valor puede cambiar.
- let no se "eleva" (hoisted) al comienzo del bloque, lo que significa que no puedes usar la variable antes de declararla en el código.

## const

- Las variables declaradas con `const` también tienen ámbito de bloque.
- las variables declaradas con `const` no pueden ser reasignadas después de su inicialización. Esto las convierte en variables de solo lectura.
- `const` no se "eleva" (hoisted).

## Resumen

En general, se recomienda utilizar const siempre que sea posible, ya que fomenta la inmutabilidad y la seguridad en el código. Utiliza let cuando necesites reasignar valores y var es menos comúnmente utilizado en código moderno debido a sus implicaciones de ámbito y hoisting que pueden llevar a errores sutiles. La elección entre let y const depende de si necesitas reasignar la variable o no.

# Funciones

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Funciona anonima autoejecutada

comúnmente conocida como `IIFE` (Immediately Invoked Function Expression), es una construcción en JavaScript que permite definir y ejecutar una función de forma inmediata, tan pronto como se define. No necesita ser llamada explícitamente como una función convencional. Esto es especialmente útil para crear un ámbito aislado para variables y funciones, evitando la contaminación del ámbito global.

```javascript
(() => {
  // Código de la función aquí
})();
```

## Conventional function vs Arrow function

La principal diferencia es cómo se maneja el valor de this y el hecho de que las funciones de flecha no tienen sus propios objetos arguments.

### This

- `Función Convencional:` En una función definida de manera convencional, el valor de this se determina en tiempo de ejecución, dependiendo de cómo se llama la función. Esto puede llevar a cambios inesperados en el valor de this cuando se usa la función en diferentes contextos.
- `Función de Flecha:` En una función de flecha, el valor de this se toma del contexto circundante en el que se define la función. Esto significa que el valor de this en una función de flecha es fijo y se hereda del ámbito en el que se creó la función.

### Objeto arguments

- `Función Convencional:` Las funciones convencionales tienen un objeto llamado arguments, que es una lista de argumentos pasados a la función. Esto es útil cuando necesitas acceder a todos los argumentos sin importar cuántos se pasen.

- `Función de Flecha:` Las funciones de flecha no tienen su propio objeto arguments. En su lugar, puedes acceder a los argumentos a través de la variable arguments del ámbito circundante si es necesario.

### Examples

```javascript
function funcionConvencional() {
  console.log(this); // `this` depende de cómo se llama la función
  console.log(arguments); // objeto arguments
}
```

```javascript
const funcionFlecha = () => {
  console.log(this); // `this` se hereda del contexto circundante
  // No hay objeto `arguments` propio
};
```

# ESC6

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Import/Export

Se utiliza para organizar y modularizar el código en aplicaciones más grandes, permitiendo la reutilización de funciones, objetos y variables en diferentes partes de un proyecto.

### Export module

Para exportar valores desde un módulo, utilizamos la palabra clave `export` seguida de lo que deseamos exportar. Esto puede ser una `variable`, una `función`, una `clase` o un `objeto`. Puedes exportar múltiples elementos en un solo módulo.

```javascript
// Exportar una variable
export const nombre = "Juan";

// Exportar una función
export function suma(a, b) {
  return a + b;
}

// Exportar una clase
export class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
```

### Import module

Para utilizar los valores exportados en otro módulo, utilizamos la palabra clave `import` seguida del nombre del valor y la ruta relativa al archivo del módulo que contiene las exportaciones.

```javascript
// Importar variables, funciones y clases
import { nombre, suma, Persona } from "./modulo.js";

console.log(nombre); // "Juan"
console.log(suma(2, 3)); // 5

const persona = new Persona("Maria");
console.log(persona.nombre); // "Maria"
```

### Export/Import default

Además de exportar valores con nombres específicos, puedes exportar un valor por defecto en un módulo y luego importarlo sin utilizar llaves en el módulo de importación.

```javascript
// modulo.js
// Exportar un valor por defecto
const valorPorDefecto = "Este es un valor por defecto";
export default valorPorDefecto;
```

```javascript
// Importar el valor por defecto
import valorPorDefecto from "./modulo.js";

// Renombrar valores por defecto
import valorPorDefecto as vpd from './modulo.js';
import * as vpd from 'modulo.js';

console.log(valorPorDefecto); // "Este es un valor por defecto"
```

### Import Multi values by default

Puedes importar varios valores por defecto en un solo módulo de importación.

```javascript
// Importar varios valores por defecto
import valorPorDefecto1, { nombre, suma } from "./modulo.js";

console.log(valorPorDefecto1);
console.log(nombre);
console.log(suma(2, 3));
```

### Module index para agrupar exportaciones

Es muy normal tener en tu proyecto agrupacion de tipos de archivos por carpetas, que a su ves se distribuyen en varias carpetas para tener organizados tus archivos, existe una forma de agrupar importacion y al mismo tiempo exportarlas, para generar un solo punto de importacion de diferentes importaciones, para facilitar la importacion

```javascript
// moduleA.js
export valueA = "valueA";

// moduleB.js
export valueB = "valueB";

// modules/index.js
export * from 'moduleA';
export * from 'moduleB';

// import
import {valueA, valueB} from 'modules';
```

## Falsy values

En JavaScript, los valores `"falsy"` son aquellos que se evalúan como `false` en contextos booleanos o condicionales. Esto significa que, cuando se utilizan en una expresión booleana, se consideran equivalentes a false.

- `false:` El valor booleano false.
- `0/-0`: El número cero o cero negativo.
- `0n`: El valor BigInt cero.
- `""`: La cadena de texto vacía.
- `null`: El valor nulo.
- `undefined`: El valor indefinido.
- `NaN`: "Not-a-Number".

Cualquier otro valor no mencionado en esta lista se considera "truthy" y se evalúa como true en contextos booleanos.

## Conditional operator (ternary) `"?::"`

Permite tomar una decisión basada en una condición y devuelve uno de dos valores posibles.

```javascript
const resultado = condicion ? valorSiCierto : valorSiFalso;
```

## Operador `&&` (AND)

Se utiliza para evaluar una serie de condiciones y devuelve el **último** valor si todas las condiciones son verdaderas, o el primer valor `"falsy"` encontrado.

```javascript
const resultado = valor1 && valor2;
// valor1=true y valor2='Hola'
// resultado = 'Hola' ✅

// valor1='' y valor2='Hola'
// resultado = '' ❌
```

## Desestructuracion

Es una característica poderosa que permite extraer datos de `arrays` y `objetos` de una manera más concisa. Consiste en asignar valores a variables utilizando una sintaxis similar a la estructura de los datos que deseas desestructurar. Esto simplifica el proceso de acceder y utilizar valores dentro de arrays y objetos.

La desestructuración se utiliza ampliamente en JavaScript y es especialmente útil en situaciones donde necesitas acceder a múltiples propiedades o elementos de un objeto o array.

### Object

Permite extraer valores de propiedades de un objeto y asignarlos a variables con el mismo nombre o un nombre diferente.

```javascript
const persona = { nombre: "Juan", edad: 30 };
const { nombre, edad } = persona;
console.log(nombre); // "Juan"
console.log(edad); // 30
```

### Array

Permite extraer valores de elementos de un array y asignarlos a variables según su posición en el array.

```javascript
const colores = ["rojo", "verde", "azul"];
const [primero, segundo, tercero] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(tercero); // "azul"
```

### Return function

Además, la desestructuración es especialmente útil cuando se combina con funciones que devuelven objetos o arrays, ya que te permite extraer valores directamente en la declaración de una variable.

```javascript
Copy code
function obtenerDatos() {
  return { nombre: "María", edad: 25 };
}

const { nombre, edad } = obtenerDatos();
console.log(nombre); // "María"
console.log(edad);   // 25
```

### Anidadas

Permite extraer valores de objetos y arrays que se encuentran dentro de otros objetos o arrays. Esto es especialmente útil cuando trabajas con estructuras de datos anidadas, como objetos que contienen objetos anidados o arrays que contienen otros arrays u objetos. La desestructuración anidada te permite acceder a valores profundamente anidados de una manera más limpia y concisa.

```javascript
const persona = {
  nombre: "Juan",
  dirección: {
    calle: "123 Main St",
    ciudad: "Ejemplo",
  },
};

const {
  nombre,
  dirección: { calle, ciudad },
} = persona;

console.log(nombre); // "Juan"
console.log(calle); // "123 Main St"
console.log(ciudad); // "Ejemplo"
```

```javascript
const matriz = [[1, 2], [3]];
const [[a, b], [c]] = matriz;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### Defaul Value

Permite asignar valores predeterminados a las variables en caso de que la propiedad o elemento que estás extrayendo no exista o sea `undefined`. Esto es útil para manejar casos en los que los datos pueden ser incompletos.

```javascript
const persona = { nombre: "Juan", edad: 30 };
const { nombre, trabajo = "Desconocido" } = persona;

console.log(nombre); // "Juan"
console.log(trabajo); // "Desconocido" (valor por defecto)
```

```javascript
const colores = ["rojo", "verde"];
const [primero, segundo, tercero = "azul"] = colores;

console.log(primero); // "rojo"
console.log(tercero); // "azul" (valor por defecto)
```

### Rename

Permite asignar un nombre diferente a las variables que extraes de un objeto o array. Esto es útil cuando deseas dar a las variables de destino nombres más descriptivos o evitar conflictos de nombres en tu código.

```javascript
const persona = { nombre: "María", edad: 25 };
const { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona); // "María" (nombre renombrado)
console.log(edadPersona); // 25
```

```javascript
const números = [1, 2, 3];
const [primero: a, segundo: b, tercero: c] = números;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
```

## Operador `||` (OR)

Se utiliza para proporcionar un valor de respaldo si el primer valor es `"falsy"`. Retorna el primer valor `"truthy"` encontrado o el último valor si todos son `"falsy"`.

```javascript
const resultado = valor1 || valor2 || valor3;
// valor1=true valor2=23 valor3='Hola'
// resultado = true ✅

// valor1=false valor2=23 valor3='Hola'
// resultado = 23 ✅

// valor1=false valor2=NaN valor3='Hola'
// resultado = 'Hola' ✅
```

## Optional chaining operator `"?."`

conocido como "operador de encadenamiento opcional", es una característica introducida en JavaScript que permite acceder a propiedades de objetos o elementos de un array de forma segura, incluso si las propiedades o elementos intermedios son nulos o indefinidos. Esto ayuda a evitar errores de `"TypeError"` que se producirían si intentaras acceder a una propiedad de un objeto que no existe o está indefinida.

Se debe de tener en cuenta, que el resultado negativo de esta caracteristica siempre sera `undefined`

```javascript
const valor = obj?.prop1?.prop2?.prop3;
```

## Nullish coalescing operator `"??"`

conocido como "operador de fusión nula", es una característica que se utiliza para proporcionar un valor de respaldo cuando una expresión es `null` o `undefined`, pero no cuando es `false`, `0`, `""`, o cualquier otro valor `"falsy"`.

```javascript
const x = null;
const y = "Hola";
const resultado = x ?? y; // resultado será "Hola", ya que x es null

const x = "";
const y = "Hola";
const resultado = x ?? y; // resultado será "", ya que x es diferente a undefined o null
```

## Conversion Booleana `"!!"`

Se utiliza comúnmente para convertir un valor en un booleano. Es una forma abreviada de realizar una conversión booleana, lo que significa que toma un valor y devuelve true si el valor es `"truthy"` o false si el valor es `"falsy"`.

```typescript
const valorVerdadero = "Hola"; // Un valor truthy
const valorFalso = 0; // Un valor falsy

const booleanoVerdadero = !!valorVerdadero; // true
const booleanoFalso = !!valorFalso; // false

let a = undefined;
let b = null;

console.log(a); // undefined
console.log(!a); // false
console.log(!!a); // true
```

## Spread operator `"..."`

Operador de propagación y se utiliza para descomponer o "propagar" elementos de un iterable (como un array o un objeto) en otro iterable o para crear copias de estos elementos. Su comportamiento varía dependiendo de si se utiliza en un array o en un objeto.

### array

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

const copia = [...array1];
console.log(copia); // [1, 2, 3]
```

### Objects

```javascript
const objeto1 = { nombre: "Juan", edad: 30 };
const objeto2 = { ciudad: "Ejemplo", ...objeto1 };

console.log(objeto2); // { ciudad: "Ejemplo", nombre: "Juan", edad: 30 }
```

### functions

```javascript
function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

const resultado = sumar(1, 2, 3, 4, 5);
console.log(resultado); // 15
```
