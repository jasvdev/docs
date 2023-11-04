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
- [TypeScript](#typescript)
  - [¿Porque?](#porque)
  - [Instalacion](#instalacion)
  - [Configuración](#configuración)
- [Types](#types)
  - [Number](#number)
  - [Boolean](#boolean)
  - [String](#string)
  - [Arrays](#arrays)
    - [Inferencia de 1 solo tipo](#inferencia-de-1-solo-tipo)
    - [Inferencia de varios tipos](#inferencia-de-varios-tipos)
    - [Tipado explicito, uno o varios](#tipado-explicito-uno-o-varios)
  - [Tupla](#tupla)
  - [Any](#any)
  - [Null / Undefined](#null--undefined)
  - [Unkown](#unkown)
  - [Never](#never)
  - [Assertions or Cast](#assertions-or-cast)
  - [Inferencia de flujo](#inferencia-de-flujo)
- [Types Alias](#types-alias)
  - [Union Types](#union-types)
  - [Interception Types](#interception-types)
  - [Literal types](#literal-types)
  - [Template types](#template-types)
- [Enums](#enums)
  - [Enums vs Const Object](#enums-vs-const-object)
- [Function](#function)
  - [Type](#type)
  - [Params types](#params-types)
  - [Declarative Return types](#declarative-return-types)
  - [Sobrecarga de funciones](#sobrecarga-de-funciones)
- [Interfaces](#interfaces)
- [Class](#class)
  - [implements](#implements)
  - [Extends (Herencia) / Abstract Class](#extends-herencia--abstract-class)
  - [Private Contructor (Singlenton)](#private-contructor-singlenton)
- [Decorator](#decorator)
- [Genericos](#genericos)
  - [Funciones](#funciones)
  - [Clases](#clases)
  - [Interfaces](#interfaces-1)
- [Utily Types](#utily-types)
  - [Key Value Type](#key-value-type)
  - [ReadOnly](#readonly)
  - [Typeof and ReturType](#typeof-and-returtype)
  - [Keyof](#keyof)
  - [Instanceof](#instanceof)
  - [Object Const Type](#object-const-type)
  - [Access type by Id](#access-type-by-id)
  - [Omit / Pick](#omit--pick)
  - [Partial / Required](#partial--required)
  - [ReadOnly Type](#readonly-type)
  - [ReadOnly Array](#readonly-array)
- [Libs terceros](#libs-terceros)
  - [Libs con typescript](#libs-con-typescript)
  - [Libs sin typescript](#libs-sin-typescript)
- [Docs](#docs)

# TypeScript

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

TypeScript es un lenguaje de programación que extiende JavaScript con características de tipado estático. Proporciona tipado estático opcional, lo que significa que puedes definir tipos de datos para tus variables, parámetros de función y más, lo que ayuda a detectar errores en tiempo de compilación y a mejorar la calidad y mantenibilidad del código JavaScript.

## ¿Porque?

- Uso actualmente en todo el ecosistema de frameworks, libs y javascript
- Experiencia de desarrollo alta
- Mejora considerablemente la documentacion del codigo
- Mejora un 40% de deteccion de errores en tiempo de desarrollo

## Instalacion

se requiere instalar el typescript de manera local y configurar nuestro git ignore

```bash
$ npm init
$ npm i typescript -D
$ npx tsc --version
```

Para activar el uso de typescript dentro del editor `vsCode`

1. Ponerle la extencion al archivo `*.ts`
2. Agregar al archivo `*.js` al inicio del archivo `//@ts-check`

Para ejecutar el transpilado de typescript se puede realizar por medio del siguiente comando

```bash
$ npx tsx name-file.ts --outDir dist --target es6
```

## Configuración

Para inicializar un archivo de configuracion base y activar el watch

```bash
$ npx tsc --init
$ npx tsc --watch
```

- `sourceMap: true` Depurar desde el explorador
- `removeComments: true` Eliminar comentarios
  - Comentarios que empiecen asi
    - `/*! No seran eliminados`
    - `//*! otro comentario`

# Types

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

El tipado nos ayuda a evitar sobreescribir tipos, documentar las variables o parametros recibidos y si tienes una buena integracion con tu editor de codigo, nos puede ayudar a autocompletar el codigo.

```typescript
// tipado inferido ✅
const product = "0001";

// tipado explicito ❓
const product: string = "0001";

//> Por recomendacion se debe de evitar tipar explicitamente, si la inferencia lo cubre y dicha variable solo maneja un solo tipo, normalmente aplica a variables con valores iniciales primitivos.

// tipado explicito, sin valor inicial ✅
const product: string;
```

## Number

```typescript
const hex = 0xfff; // const hex: number, hexadeciamales ✅
const bin = 0b101010; // const bin: 42 , binarios ✅

const extincionDinosarios = 76_000_000; // ✅
const value = 76000000; // ✅

const num = parseInt("123"); // const num: number, ✅
const num = parseInt("a"); // const num: number, ❓
//> Recordemos que 'NaN' hace parte de conjunto de numbers, por tanto asi la funcion parseInt no devuelva un numero valido, si devuelve un valor con tipo number, por tanto la variable se infiere de esa forma.
```

## Boolean

```typescript
const isEnable = true; // const isEnable: boolean ✅
```

## String

```typescript
const title = "title"; // single quote ✅
const title = "title"; // double quote ✅
const title = `title`; // backtick ✅
const title = `
  title
  ${var_name}
`; // backtick/template string ✅
```

## Arrays

### Inferencia de 1 solo tipo

```typescript
const numbers = [1, 2, 3, 4, 5]; // const numbers: number[], ✅

numbers.push(6); // ✅ push ok
numbers.push("asas"); // ❌ error type
```

### Inferencia de varios tipos

```typescript
// const numbers: (number|string|boolean)[], ✅
const numbers = [1, 2, 3, true, "ok"];

numbers.push(6); // ✅ push ok
numbers.push("asas"); // ❌ error type
```

### Tipado explicito, uno o varios

```typescript
const numbers: number[];

const numbers: (number | string)[]; // ✅
const numbers: number[] | string[]; // ❗

//> en el caso uno se le indica que el array puede tener dos tipos de contenido, en el caso dos se le indica que esa variable puede ser de dos tipos diferentes de array uno de solo numeros y otro de solo string, casos totalmente diferentes
```

## Tupla

Representa una colección ordenada de elementos, donde cada elemento puede tener un tipo diferente. A diferencia de los arrays, las tuplas tienen una longitud fija y los tipos de datos de sus elementos están definidos en un orden específico.

```typescript
type tyUser = [string, number, boolean];
let user: tyUser;
user = ["andres"]; // ❌
user = ["andres", "25", false]; // ❌
user = ["andres", 25, false]; // ✅

// tener en cuenta
user.push("pedro"); // ✅

// si se quiere restringir que el tamaño se respete siempre
type tyRGB = readonly [number, number, number];
let color: tyRGB = [255, 255, 255];
color.push(255); // ❌
```

## Any

Anula totalmente la inferencia de tipos y por consiguiente el autocompletado de nuestro editor de texto, todo puede ser posible con este tipo de variable.

Este dato debe ser totalmente evitado. pero de manera real el uso que se le da, es para migracion de proyectos, donde se quiere activar TS pero paulatinamente se va inyectando los tipos segun como el equipo lo va realizando.

## Null / Undefined

Estos valores entran en el grupo de tipo `any`, aun existiendo los tipos de datos correspondientes

```typescript
let myNull = null; // let myNull: any; ❗
let myUndefined = undefined; // let myNull: any; ❗

let myNull: undefined = null; // let myNull: null; ❓
let myUndefined: undefined = undefined; // let myNull: undefined; ❓

//> Ejemplo de uso
let myNumber: number | undefined = undefined;
myNumber = 10;
```

## Unkown

Es usado para representar un valor cuyo tipo es desconocido en tiempo de compilación. A diferencia del tipo `any`, que permite cualquier tipo de valor y operaciones en él sin restricciones, el tipo unknown es más seguro y restrictivo.

- `Inferencia de Tipo`: TypeScript inferirá el tipo unknown cuando no haya información para determinar el tipo pero si la hay, sera reemplazado por el tipo inferido.
- `Restricciones`: El tipo unknown es muy restrictivo en comparación con any. No puedes realizar operaciones directamente en valores de tipo unknown sin primero verificar o afirmar su tipo. Esto garantiza un mayor nivel de seguridad en el código.

```typescript
let valor: unknown;
let cadena: string;

// Error: Type 'unknown' is not assignable to type 'string'.
cadena = valor; // ❌

// Debes verificar y afirmar el tipo antes de asignar
if (typeof valor === "string") {
  cadena = valor; // Esto es válido ✅
}
```

## Never

Este tipo es conmunmente usado para funciones en las cuales su ejecucion nunca va a terminar.

```typescript
// typescript infiere
// const withOutEnd: () => never
const withOutEnd = () => {
  while (true) {
    console.log("don't stop");
  }
};

// typescript infiere
// const fail: (msg: string) => never
const fail = (msg: string) => {
  throw new Error(msg);
};
```

## Assertions or Cast

Esto sirve para forzosamente darle un tipado a una variable, muy usado en respuestas de APIs o cuando una libreria no maneja tipos y nosotros si conocemos el tipado que contesta.

```typescript
const data: any;

const result = data as string[]; // activa inferencia y autocompletado ✅
const result = (data as string[]).length; // activa inferencia y autocompletado ✅
const result = (<string[]>data).length; // activa inferencia y autocompletado ✅
```

## Inferencia de flujo

Si bien una variable puede tener mas de un tipo, si por codigo `typescript` detecta que un tipo ya esta siendo validado, o el flujo del codigo depende del tipo de dato, el motor de inferencia es capaz de detectar el tipo o los tipos restantes

```typescript
function greeting(test: string | number) {
  if (typeof text === "string") {
    // ✅ inferencia de string, debido al if
    console.log(text.toLowerCase());
  } else {
    // ✅ inferencia de number, debido al if, pues solo queda 1 tipo disponible
    console.log(text.toFixed(1));
  }
}
```

# Types Alias

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Union Types

```typescript
//
let userID: number | string; // Typado nativo
userID = "123456"; // ✅
userID = 123456; // ✅

type tyUserID = number | string; // New type
let newUser: tyUserID;
userID = "123456"; // ✅
userID = 123456; // ✅
```

## Interception Types

```typescript

```

## Literal types

```typescript
type tyAccessUser = "admin" | "user" | 25;
let userAccess: tyAcessUser;

tyAcessUser = "flat"; // ❌
tyAcessUser = "user"; // ✅
tyAcessUser = 5; // ❌
tyAcessUser = 25; // ✅
```

## Template types

Es una caranteristica que tiene typescript de combinar datos primitivos en un template string para obtener todas las posibles combinaciones de los tipos anidados por un OR en un template.

```typescript
type tyA = "a" | "b";
type tyB = "1" | "2";

// type tyC = "1-a" | "1-b" | "2-a" | "2-b"
type tyC = `${tyB}-${tyA}`;
```

Tambien podemos crear estructuras fijas para templates

```typescript
type tyId = `#${"user" | "admin"}-${number}-${string}`;

let idUser: tyId;
idUser = "#user-546-adsf"; // ✅
idUser = "#asdf-546-adsf"; // ❌
idUser = "#user-asd-adsf"; // ❌
idUser = "user-546-adsf"; // ❌
idUser = "user"; // ❌

type tyHexa = `#${string}`;
let color: tyHexa;
color = "#FFF"; // ✅
color = "FFF"; // ❌
```

# Enums

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Los enums en `TypeScript` permiten asignar explícitamente valores `number` o `string` a cada miembro del enum. Esto facilita la asignación de valores específicos a elementos del conjunto.

```typescript
// Valores explícitos: number | string ✅
enum enRol {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = 3,
}

// Valores explícitos: error ❌
enum enRol {
  ADMIN = "admin",
  SELLER = false,
  CUSTOMER = null,
}

// Valores autocompletados, solo compatible con numbers
// sino se indica un valor inicial, el valor por defecto es '0'
enum enRol {
  ADMIN = 5,
  SELLER, // 6
  CUSTOMER, // 7
}
type tyUser = {
  userName: string;
  role: enRol;
};

// use Autocompletado
createUser("andres", enRol.ADMIN);

//Inversión automática
const key = enRol[1]; // "ADMIN"
const valor = enRol.ADMIN; // "admin"
```

## Enums vs Const Object

- `Inversión manual:` No tienes inversión automática. Se puede implementar manualmente por medio de una funcion.

- `Flexibilidad:` Los objetos constantes son más flexibles que los enums, ya que no requieren valores específicos para cada miembro y pueden contener cualquier tipo de valor como propiedades.

```typescript
const ROL = {
  ADMIN = "admin",
  SELLER = false,
  CUSTOMER = null,
};
```

- `Autocompletado:` No obtendrás autocompletado ni verificación de tipos en tiempo de desarrollo al utilizar objetos constantes, lo que puede llevar a errores tipográficos. Pero existe una forma de crear un type partiendo de una constante.

# Function

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Las funciones dentro de typescript tienen dos formas de realizar el tipado

## Type

- Generico

```typescript
// problemas, que no se especifican los inputs ni outputs
const a: Function = () => {};
```

- Explicito

```typescript
const a: () => void = () => {};
const a: (num: number, name: string) => string = () => "hola"; // ✅
```

## Params types

```typescript
// params obligatorios
function createUser(name: string, age: number) {
  return {
    id: crypto.UUID(),
    name: name,
    age: age
  }
}

createUser('andres'); // ❌
createUser('andres', 20); // ✅

// params opcionales
function createUser(name: string, age?: number) {
  return {
    id: crypto.UUID(),
    name: name,
    age: age // undefined
  }
}
createUser('andres'); // ❌
createUser('andres', 20); // ✅

// params opcionales con valor por defecto
function createUser(name: string, age?: number = 0) {
  return {
    id: crypto.UUID(),
    name: name,
    age: age
  }
}
createUser('andres'); // ✅
createUser('andres', 20); // ✅

// Como buena practica cabe recordar que si una funcion requiere de +2 props o no se tiene claridad de la cantidad de props que pueda recibir en un futuro, es aconcejable usar un objeto para pasar propiedades esto volvera la funcion flexible y extensible

function createUserObj({
  name: string,
  age?: number = 0,
  ...rest
}) {
  return {
    id: crypto.UUID(),
    name: name,
    age: age,
    ...rest
  }
}

// Alternativa A
type tyProp = {
  name: string,
  age?: number = 0
}
function createUserObj(props: tyProp) {
  return {
    id: crypto.UUID(),
    ...props
  }
}

// Alternativa B
function createUserObj(props: tyProp) {
  const {name, age, ...rest} = props;
  return {
    id: crypto.UUID(),
    name: name + 'X',
    age: age + 10,
    ...rest
  }
}

createUserObj({
  name: 'andres',
  age: 20
})
```

## Declarative Return types

Teniendo en cuenta que `typescript` hace inferencia en el retorno de funciones, nosotros tambien podemos de manera explicita indicar dicho tipo.

```typescript
// Retornando un string
function joinName(fName: string, lName: string): string {
  return `${fName} ${lName}`;
}

// Funcion sin retorno
function printName(name: string): void {
  console.log(name);
}
```

## Sobrecarga de funciones

Existe una manera de sobrecargar funciones estandar por medio de `typescript` consiste en definicar varias veces la funcion con inputs diferentes y outputs correspondientes.

Esto genera que typescript pueda inferir el output segun la sobrecarga seleccionada, lamentablemente en arrow function no esta disponible

```typescript
// La inferencia de confunde siempre obligando a validar
// el tipo antes de sugerir la inferencia ❌
function parseStr(arg: string | string[]): string | string[] {}

// la inferencia de ancla al input, asi que dependiendo del input
// sugiere inmediatamente el return type  de la funcion ✅
function parseStr(arg: string): string[];
function parseStr(arg: string[]): string;
```

# Interfaces

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

permite definir la estructura de objetos o clases, lo que proporciona un alto grado de tipado estático.

Se diferencian con los types en dos caracteristicas

- no podemos usar una interfaz para definir un conjunto de datos de tipos primitivos sino un conjuntos de propiedades de ellos
- los types no son extensibles facilmente las interfaces si, soportar union, interseccion y herencia

```typescript
// intefaces para
interface IAnimal {
  // Atributo Obligatorio
  edad: number;
  // Atributo Opcionar
  raza?: string; // String | undefined
  // Cuando es de solo lectura
  readonly viveEnLaTierra: boolean; // Solo se inicializa una vez
  // Funciones Directas
  (email: string, pass: string): boolean;
  // Funciones como atributos
  fnExplicit: (email: string, pass: string): boolean;
  // Any a nivel de funciones
  (): void;
}


// interfaz en clases
interface IPersona {
  nombre: string;
  edad: number;
  saludar: () => void;
}

// extender o heredar de otra interfaz
interface IEmpleado extends IPersona {
  cargo: string;
}

// implementar una interfaz
class Estudiante implements IPersona {
  constructor(nombre: string, edad: number) {}

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

# Class

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Las clases de por si son soportadas por javascript, por tanto la mayoria de funcionalidades son nativas de javascript, solo algunas mejoras nos da typescript.

```typescript
const date = new Date();

// Clase
class DtoEmpresa {
   // atributo estatico
  static name = 'NOMBRE_EMPRESA';
  private static pi = 3.1416;

  nombre: string; // publico sin inicializar
  apellido = ''; // publico por defecto inicializado
  public email = ''; // publico explicito inicializado

  readonly genero: = ''; // publico de solo lectura
  private _id= 0; // privado solo en typescipt inicializado
  #id= 0; // privado nativo de javascript inicializado
  protected edad = ''; // privado pero de lectura en clases hijas

  constructor(pData: any = {}) {
    {nombre, apelldio, email} = ...pData;
  }

  get nombreCompleto(): string {
    return this.nombre + ' ' + this.apellido;
  }

  set id(pId: number): void {
    this._id = pId;
    this.#id = pId;
  }
  // metodo estatico
  static pi_por(pNumber: number): number {
    return this.pi * 3.1416;
  }
}
```

## implements

```ts
interface IAnimal {
  name: string;
  move: () => void;
}

class Mamifero implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move() {
    console.log("caminar");
  }
}
```

## Extends (Herencia) / Abstract Class

```ts
abstract class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name ?? "";
  }
  move() {
    console.log("moving...");
  }
}

class Dog extends Animal {
  talk() {
    console.log("wuaw..." + this.name);
  }
}

const perro = new Animal("firulais"); // ❌ by abstract class

const firulais = new Dog("firulais"); // ✅

console.log(firulais.name); // firulais ❌
firulais.move(); // moving... ✅
firulais.talk(); // wuaw...firulais ✅
```

## Private Contructor (Singlenton)

```ts
class Service {
  #name: string;
  static instance: Service | null = null;

  private constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  static create(name: string): Service {
    if (Service.instance === null) {
      Service.instance = new Service(name);
    }
    return Service.instance;
  }
}

const service1 = Service.create("serviceA");
const service2 = Service.create("serviceB");
const service3 = Service.create("serviceC");
console.log(service1.getName()); // serviceA ✅
console.log(service2.getName()); // serviceA ✅
console.log(service3.getName()); // serviceA ✅
console.log(service1 === service3); // true ✅
```

# Decorator

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Los decoradores en TypeScript son una característica que permite modificar o agregar metadatos a clases, métodos, propiedades o parámetros de funciones.

```typescript
function miDecorador(target: any) {
  // Código que modifica o agrega metadatos al 'target'
}

@miDecorador
class MiClase {
  // Contenido de la clase
}
```

```typescript
function propiedadDecorador(target: any, propertyKey: string) {
  // Código para modificar la propiedad
}

class MiClase {
  @propiedadDecorador
  miPropiedad: string;
}

function metodoDecorador(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // Código para modificar el método
}

class OtraClase {
  @metodoDecorador
  miMetodo() {
    // Contenido del método
  }
}

function parametroDecorador(target: any, propertyKey: string, parameterIndex: number) {
  // Código para modificar un parámetro de función
}

class AlgunaClase {
  miMetodo(@parametroDecorador parametro: string) {
    // Contenido del método
  }
}
```

# Genericos

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Funciones

```typescript
let lMaterias = ["español", "ingles", "sociales"];
let lDinero = [1000, 2000, 3000];
let lVotos = [true, false, false];

// Primera T = funcion Generica
// Segunda T = Tipo que se espera
// Tercera T = Tipo que se retorna
function random<T>(pLista: T[]): T {
  const lRandom: number = Math.floor(Math.random() * pLista.length);
  return pLista[lRandom];
}

// Esta funciona aplica a cualquier lista, segun su tipo valida el retorno
console.log(random(lMaterias));
console.log(random(lDinero));
console.log(random(lVotos));
```

---

## Clases

```typescript
class Unificador<T, P extends number | string> {
  valor: T;
  tipo: P;
  constructor(valor: T, tipo: P) {
    this.valor = valor;
    this.tipo = tipo;
  }
}

const lUniA = new Unificador<number, number>(5, 2);
const lUniB = new Unificador<string, number>("**", 3);
```

---

## Interfaces

```typescript
interface IDatos<T, P = string> {
  nombre: T;
  tipo?: P;
}

const lDatoA: IDatos<number> = { nombre: 1, tipo: "algo" };
const lDatoB: IDatos<number, number> = { nombre: 1, tipo: 0 };
```

# Utily Types

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Key Value Type

Esta tecnica es muy usada cuando no conoces la interaz estricta de un objeto, pero si quiers validar de algun modo el contenido o las posibles llaves que maneja

```ts
// De esta forma se pueden usar key: string | number | template type

type IIndezable = {
  [key: string]: string | number;
};

let obj: IIndezable;
obj = {
  id: "123asdf", // ✅
  edad: 32, // ✅
  isActive: true, // ❌
};
```

## ReadOnly

se utiliza para marcar propiedades de lectura en un `type` una `clase` o de una `interfaz` como de solo lectura, lo que significa que una vez que se asigna un valor a estas propiedades, no se pueden modificar o reasignar. Esto proporciona una capa adicional de inmutabilidad y seguridad en tus objetos, lo que puede ser útil para prevenir modificaciones accidentales en el código.

```typescript
class Persona {
  readonly nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const juan = new Persona("Juan", 30);
juan.edad = 31; // ✅
juan.nombre = "Pedro"; // ❌
```

```typescript
interface IExample {
  id: number;
  readonly coor: {
    readonly x: number;
    y: number;
  };
}

let lObj: IExample = {
  id: 1,
  coor: {
    x: 2,
    y: 3,
  },
};

lObj.coor = {}; // ❌
lObj.coor.x = 10; // ❌
lObj.coor.y = 10; // ✅
```

## Typeof and ReturType

En javascript se utiliza para obtener el tipo de un valor o una expresión en tiempo de compilación. En typescript sirve para obtener el tipo de estructura de un elemento y volverlo una interfaz, Se puede usar con objetos, funciones o valores para obtener su tipo estático.

```typescript
console.log(typeof numero); // number

// from object
const address = {
  country: "colombia",
  city: "pereira",
};

type tyAddress = typeof address;

// from function
function createAddress() {
  return {
    country: "colombia",
    city: "pereira",
  };
}

type tyAddress = ReturnType<typeof createAddress>;
```

## Keyof

Es un operador en `TypeScript` que se utiliza para obtener las keys de un tipo y volverlo un nuevo tipado es decir que representa todas las claves (nombres de propiedades) de otro tipo. Esto es útil para realizar operaciones basadas en propiedades en objetos y para garantizar que las propiedades utilizadas sean válidas en tiempo de desarrollo.

```typescript
// build type from other type
// some article type
type Article = {
  title: string;
  id: number;
};

// type Key = "title" | "id"
type Key = keyof Article;
let press: Key;
press = "title"; // ✅
press = "pa"; // ❌
press = "id"; // ✅

// build type from object
const ROL = {
  ADMIN: "admin",
  SELLER: false,
  CUSTOMER: null,
};
// type tyROLkey = "ADMIN" | "SELLER" | "CUSTOMER"
type tyROLkey = keyof typeof ROL;
```

## Instanceof

Es un operador en JavaScript que se utiliza para comprobar si un objeto es una instancia de una clase o constructor específico. Devuelve true si el objeto es una instancia de la clase y false en caso contrario.

```typescript
class Coche {}

const miCoche = new Coche();

if (miCoche instanceof Coche) {
  console.log("Es un coche.");
} else {
  console.log("No es un coche.");
}

// Validanto componentes del DOM
const canvas = document.getElementById("id_obj");

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}
```

## Object Const Type

Partiendo de un objeto constante definido, `typescript` nos permite construir varios validadores de type de este objeto.

```typescript
// Ejemplo A
const ROL = {
  ADMIN: 'admin',
  SELLER: false,
  CUSTOMER: null
};

// Type general, es decir alguien con el tipo 'tyRol' debe tener todas las propiedades que la constante en cuestrion
type tyROL = typeof ROL;

//type tyROLkey = "ADMIN" | "SELLER" | "CUSTOMER"
type tyROLkey = keyof typeof ROL;

//type tyROLvalue = string | boolean | null
type tyROLval = typeof ROL[keyof typeof ROL];

//type tyROLvalue con 'as const'
const ROL = {
  ADMIN: 'admin',
  SELLER: 'seller'
  CUSTOMER: 'customer'
} as const;

//type tyROLvalue = false | "admin" | null
type tyROLval = typeof ROL[keyof typeof ROL];
```

## Access type by Id

En typescript podemos acceder a tipados internos, sean types o interfaces, por medio del index del tipado

```typescript
type tyHexa = `#${string}`;

type tyPersona = {
  name: string;
  color: tyHexa;
};

let color: tyPersona["color"];
color = "#FFF"; // ✅
color = "FFF"; // ❌
```

## Omit / Pick

Esta utilidad nos permite omitir atributos de un tipo o interfaz o en su caso contrario seleccionar uno u otro

```typescript
interface IProduct {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
}

// Omit
type ICreateProductDto = Omit<IProduct, "id" | "category">; // ✅

interface ICreateProductDto extends Omit<IProduct, "id" | "category"> {
  // ✅
  categoryId: string;
}

// Pick
type ICreateProductDto = Pick<IProduct, "name">; // ✅

interface ICreateProductDto extends Pick<IProduct, "name"> {
  // ✅
  categoryId: string;
}
```

## Partial / Required

Para transformar una interfaz o tipo a una forma completamente opcional o requerido, usados estos utilitys

```typescript
interface IProduct {
  id: string;
  name: string;
  category?: {
    id: string;
    name: string;
  };
}

// all optional props
type IUpdateProductDto = Partial<IProduct>; // ✅

// all required props
type ICreateCompletProductDto = Required<IProduct>; // ✅
```

## ReadOnly Type

Para convertir una interfaz completamente de lectura, lo podemos realizar por este medio

```typescript
interface IProduct {
  id: string;
  name: string;
}

// all props readonly
type IGetProductDto = Readonly<IProduct>; // ✅
interface IGetProductDto extends Readonly<IProduct> {} // ✅
```

## ReadOnly Array

Evita mutaciones en un array. lo cual con el readonly normal solo evita la asignacion de un nuevo array mas no la mutacion del mismo.

```typescript
const alphabet: ReadonlyArray<string> = ["a", "b", "c"];

alphabet.push("d"); // ❌
alphabet.pop(); // ❌
alphabet.unshif(1); // ❌
alphabet.map(() => {}); // ✅
alphabet.filter(() => {}); // ✅
alphabet.reduce(); // ✅
```

# Libs terceros

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Libs con typescript

Para detectar si una libreria tiene o no soporte de `typescript`:

1. verificar manualmente en el repositorio si contempla el archivo `tsconfig.json`
2. Mirar en la documentacion de del `npm`
3. El editor de codigo te lo puede alertar al momento de importar la libreria

## Libs sin typescript

Para darle un manejo a las libs que no manejan `typescript`

- al momemnto de importar este tipo de librerias, el mismo editor de codigo, te sugerira que la lib no cuenta con types y te sugerira si existe un comando de instalacion

```bash
$ npm i -D @types/lodash
```

# Docs

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- [HandBook](https://www.typescriptlang.org/)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Types Utilidades](https://www.typescriptlang.org/docs/handbook/utility-types.html)
