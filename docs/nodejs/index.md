<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../index.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"
[Husky]: https://typicode.github.io/husky/getting-started.html
[Hooks]: https://git-scm.com/docs/githooks
[Npm]: https://docs.npmjs.com/
[Prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido
<sup>[🔙 Doc]</sup>
- [Tabla de contenido](#tabla-de-contenido)
- [Instalacion](#instalacion)
- [Comandos utiles](#comandos-utiles)
- [Proyecto Markdown + Prettier + Husky](#proyecto-markdown--prettier--husky)

# Instalacion
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

Realiza la instalacion por medio del siguiente enlace [NodeJs], segun tu SO.

Recuerda siempre utilizar la version LTS, que es la mas estable y con mas soporte prolongado, adicional nunca usar las versiones impares, pues son versiones de prueba

Al mismo tiempo ya tienes tu gestionador de paquetes [Npm]

Esto lo podemos comprobar con los siguientes comandos
```bash
$ node -v
> v18.18.0

$ npm -v
> 10.2.0
```

# Comandos utiles
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

| Comando                              | Descripcion                                                                                                            |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `node -v`                            | Permite ver la version instalada de NodeJs                                                                             |
| `npm -v`                             | Permite ver la version instalada de Npm                                                                                |
| `npm init`                           | Inicial un proyecto nodejs                                                                                             |
| `npm run {script}`                   | Ejecuta un script dela seccion "package.json=>scripts"                                                                 |
| `npm i`                              | Alternativa => `npm install`, ejecutar todas las instalaciondes de dependencias qe se encuentren en el package.json    |
| `npm i {Package}`                    | Instala el paquete como pendencia de compilacion                                                                       |
| `npm i {Package}@7`                  | Despues de @ se puede especificar la version que se quiere installa, por defecto toma la mayor del restante de indices |
| `npm i {Package}@7.5.2 --save-exact` | Se fija la version de instalacion del paquete, no usa la estragia de Mayor Version                                     |
| `npm i {Package} -D`                 | Instala el paquete como pendencia de desarrollo, alternativa `--save-dev`                                              |
| `npm i {Package} -E`                 | Instala el paquete con su version exacta y fija, alternativa `--save-exact`                                            |
| `npm i {Package} -g`                 | Instala el paquete de forma global en la maquina ubicandolo en la raiz de nodejs                                       |
| `npm uninstall {Package}`            | Desinstala un paquete                                                                                                  |
| `npx {command}`                      | Permite ejecutar un comando interno o externo de un paquete, sin tener que descargarlo                                 |
| `npx npm-force-resolutions`          | Forza la instalacion de versiones de librerias en una version estable, se ejecuta antes de `npm i`                     |
| `npm cache clean --force`            | Borra la cache del NodeModule                                                                                          |
| `npm view {Package} versions --json` | Conocer las versiones de un paquete dispobibles                                                                        |
| `npm link `                          | Se usa para crear un link virtual del compilado de nuestro proyecto al hacer `npm run build`                           |
| `npm link {Package}`                 | Se usa para instalar una libreria la cual tenga un link virtual activo por medio de su nombre                          |
| `npm unlink `                        | Se usa para crear eliminar el link de un repositorio local                                                             |

<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

# Proyecto Markdown + Prettier + Husky + commitlint + autochangelog
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

```bash
$ npm init
$ npm i -D prettier
```

- Luego de sebe de instalar la extension de vsCode de [Prettier]
- crear un archivo `.gitignore` y `.prettierignore`, suprimiento la carpete `node_modules`
- crear un comando en la seccion de scripts de `package.json` para ejecutar el formateo del repositorio con el siguiente comando.
```bash
$ npm pkg set scripts.format="prettier --write ."
> npm run format
```
- Habilita tu vsCode para que automaticamente cuando se guarde un archivo lo formatee antes de guardarlo
```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```
- Ahora se debe de agregar un disparador de formateo al momento de hacer commits por si algun cambio no se realizo por el vsCode, esto se logra por medio de la herramienta [Husky]
```bash
$ npm install husky -D
$ npx husky install
$ npm pkg set scripts.prepare="husky install"

```
- Luego de esto se debe de crear el hook que mejor nos convenga, aqui te dejo la lista de [Hooks]
```bash
$ npx husky add .husky/pre-commit "npm run format"
```
