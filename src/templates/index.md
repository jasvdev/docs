<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[Hooks]: https://git-scm.com/docs/githooks
[Prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[Stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[Husky]: https://typicode.github.io/husky/getting-started.html

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [Proyecto Markdown + Prettier + Husky + Commitlint + Convetional ChangeLog](#proyecto-markdown--prettier--husky--commitlint--convetional-changelog)
  - [Markdown + NodeJs](#markdown--nodejs)
    - [Prettier](#prettier)
    - [Husky](#husky)
    - [Lint-Staged](#lint-staged)
    - [CommitLint + Standart Commmit](#commitlint--standart-commmit)
    - [Converional ChangeLog](#converional-changelog)
- [Proyecto ReactJS + Vite + Prettier + Husky + Commitlint + Convetional ChangeLog](#proyecto-reactjs--vite--prettier--husky--commitlint--convetional-changelog)
  - [Vite + ReactJs + Eslint](#vite--reactjs--eslint)
  - [Prettier](#prettier-1)
  - [Eslint + Prettier](#eslint--prettier)
  - [StyleLint](#stylelint)
  - [Husky](#husky-1)
  - [Lint-Staged](#lint-staged-1)
  - [CommitLint + Standart Commmit](#commitlint--standart-commmit-1)
  - [Converional ChangeLog](#converional-changelog-1)
  - [Absolute Import](#absolute-import)
  - [Generado de versiones](#generado-de-versiones)
  - [Tailwind](#tailwind)

# Proyecto Markdown + Prettier + Husky + Commitlint + Convetional ChangeLog

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Markdown + NodeJs

Inicializamos nuestro projecto `NodeJs` creando una carpeta `assets` y nuestro primer archivo `index.md`

```bash
$ npm init
```

- `index.md`

```markdown
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
- [init](#init)

# init

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>
```

### Prettier

- Despues debemos de instalar el formateador `prettier`

```bash
$ npm i -D prettier
```

- crear un archivo `.prettierrc`, para configurar las reglas necesarias y `.prettierignore` para ignorar el `node_modules`

```json
{
  "printWidth": 120
}
```

- crear dos comandos en la seccion de scripts de `package.json` para ejecutar el formateo y el checkeo de nuestro repositorio.

```bash
$ npm pkg set scripts.prettier="prettier --check ."
$ npm pkg set scripts.format="prettier --write ."
```

- Luego se debe de instalar la extension de vsCode de [Prettier]
- Habilita tu vsCode para que automaticamente cuando se guarde un archivo lo formatee antes de guardarlo

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```

### Husky

- Ahora se debe de agregar un disparador al momento de hacer commits, para validar el codigo antes de subirse al repositorio, esto se logra por medio de la herramienta [Husky]

```bash
$ npm install husky -D
$ npx husky install
$ npm pkg set scripts.prepare="husky install"

```

- Luego de esto se debe de crear el hook que mejor nos convenga, aqui te dejo la lista de [Hooks]

```bash
$ npx husky add .husky/pre-commit "npm run pre-commit"
$ npx husky add .husky/pre-push "npm run pre-push"
$ npm pkg set scripts.pre-commit="echo 'pre-commit'"
$ npm pkg set scripts.pre-push="echo 'pre-push'"
```

### Lint-Staged

- Ahora instalaremos una herramienta que nos permite ejecutar comandos solo al espacio de `staged-area` de nuestro repositorio, con el fin de solo validar los archivos que realmente estan siendo agregados al commit y no validar todos los archivos que se hayan validado, que finalmente pueden o no irse en un commit, para esto usamos la herramienta `lint-staged`

```bash
$ npm i -D lint-staged
```

- crear un archivo `.lintstagedrc`, para configurar que comandos se van a ejecutar y en cuales archivos

```json
{
  {
    "*": ["npm run prettier"]
  }
}
```

### CommitLint + Standart Commmit

- Luego ya podremos instalar nuestro linter de commits

```bash
$ npm install -g @commitlint/cli @commitlint/config-conventional
```

- creamos el archivo `commitlint.config.json` y agregamos nuestras reglas de configuracion, las [reglas](https://commitlint.js.org/#/reference-rules) que mejor te funcionen

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "header-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
    "subject-case": [0, "always"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["feat", "fix"]],
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      [":sparkles:", ":art:", ":recycle:", ":tada:", ":fire:", ":memo:", ":file_folder:", ":wrench:"]
    ]
  }
}
```

- para verificar que si quedo correctamente instalado

```bash
$ echo 'foo: bar' | commitlint
```

- Adicional se debe de crear un hook con husky para validar los commits

```bash
$ npx husky add .husky/commit-msg "npx --no -- commitlint -c -e ${1} -o -g commitlint.config.json -V"
```

### Converional ChangeLog

- Luego de esto procederemos a instalar nuestro gestionador de changelog

```bash
$ npm install -g conventional-changelog-cli
```

- Adicionamos un nuevo script a nuestro paquete para esta funcion

```bash
$ npm pkg set scripts.changelog="conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
```

- Si maneja el flujo de versiones por medio de npm, puede agregar este comando para complementar los scripts `npm version [patch|minor|major]` con el envio en la version TAG, se envie la nueva version del CHANGELOG.md

```bash
$ npm pkg set scripts.version="npm run changelog && npx prettier --write CHANGELOG.md && git add CHANGELOG.md"
```

# Proyecto ReactJS + Vite + Prettier + Husky + Commitlint + Convetional ChangeLog

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

### Vite + ReactJs + Eslint

- Inicializamos el proyecto con el empaquetado por defecto y configuracion que `vite` nos proporciona para `ReactJS`

```bash
$ npm create vite@latest
```

- Luego de terminar de seleccionar las opciones y el proyecto este creado

```bash
$ npm i
$ npm run dev
```

### Prettier

- Despues debemos de instalar el formateador `prettier`

```bash
$ npm i -D prettier
```

- crear un archivo `.prettierrc`, para configurar las reglas necesarias y `.prettierignore` para ignorar el `node_modules`

```json
{
  "printWidth": 120
}
```

- crear dos comandos en la seccion de scripts de `package.json` para ejecutar el formateo y el checkeo de nuestro repositorio.

```bash
$ npm pkg set scripts.prettier="prettier --check ."
$ npm pkg set scripts.format="prettier --write ."
```

- Luego se debe de instalar la extension de vsCode de [Prettier]
- Habilita tu vsCode para que automaticamente cuando se guarde un archivo lo formatee antes de guardarlo

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```

### Eslint + Prettier

- Si `Eslint` fue instalado con reglas de formateo las cuales estan chocando con las reglas del `prittier` debes de instalar este paquete para que convivan de manera transparente, dejandole siempre en los conflictos las reglas de `prettier`

```bash
$ npm i -D eslint-config-prettier
```

- Luego debes de ir al archivo `eslintrc.cjs` y en la seccion de `extends` agregar `eslint-config-prettier` en el arreglo, de esta manera ya `Eslint` entendera que regla debe respetar, segun la configuracion que tengamos de nuestro `prettier`

### StyleLint

- Luego para solvertar linter a nivel de `CSS` debemos instalar el siguiente paquete `stylelint`, adicionar los comandos al package, tambien se aconceja instalar la extencion [Stylelint] para vsCode

```bash
$ npm i -D stylelint stylelint-config-standard
$ npx stylelint --version
$ npm pkg set scripts.stylelint="npx stylelint src/**/*.{css,scss,sass}"
$ npm pkg set scripts.styleFix="npx stylelint src/**/*.{css,scss,sass} --fix"
```

- crear un archivo `.stylelintrc.json`, para configurar las reglas

```json
{
  "extends": "stylelint-config-standard"
}
```

### Husky

- Ahora se debe de agregar un disparador al momento de hacer commits, para validar el codigo antes de subirse al repositorio, esto se logra por medio de la herramienta [Husky]

```bash
$ npm install husky -D
$ npx husky install
$ npm pkg set scripts.prepare="husky install"

```

- Luego de esto se debe de crear el hook que mejor nos convenga, aqui te dejo la lista de [Hooks]

```bash
$ npx husky add .husky/pre-commit "npm run pre-commit"
$ npx husky add .husky/pre-push "npm run pre-push"
$ npm pkg set scripts.pre-commit="echo 'pre-commit'"
$ npm pkg set scripts.pre-push="echo 'pre-push'"
```

### Lint-Staged

- Ahora instalaremos una herramienta que nos permite ejecutar comandos solo al espacio de `staged-area` de nuestro repositorio, con el fin de solo validar los archivos que realmente estan siendo agregados al commit y no validar todos los archivos que se hayan validado, que finalmente pueden o no irse en un commit, para esto usamos la herramienta `lint-staged`

```bash
$ npm i -D lint-staged
```

- crear un archivo `.lintstagedrc`, para configurar que comandos se van a ejecutar y en cuales archivos

```json
{
  {
  "*": ["npm run prettier"],
  "*.{js,jsx,ts,tsx}": ["npm run lint"],
  "*.{css,scss}": ["npm run stylefix"],
  "*.{spec,test}.*": ["npm run coverage"],
}
}
```

### CommitLint + Standart Commmit

- Luego ya podremos instalar nuestro linter de commits

```bash
$ npm install -g @commitlint/cli @commitlint/config-conventional
```

- creamos el archivo `commitlint.config.json` y agregamos nuestras reglas de configuracion, las [reglas](https://commitlint.js.org/#/reference-rules) que mejor te funcionen

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "header-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
    "subject-case": [0, "always"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["feat", "fix"]],
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      [
        ":sparkles:",
        ":art:",
        ":recycle:",
        ":tada:",
        ":fire:",
        ":bug:",
        ":memo:",
        ":file_folder:",
        ":test_tube:",
        ":wrench:"
      ]
    ]
  }
}
```

- para verificar que si quedo correctamente instalado

```bash
$ echo 'foo: bar' | commitlint
```

- Adicional se debe de crear un hook con husky para validar los commits

```bash
$ npx husky add .husky/commit-msg "npx --no -- commitlint -c -e ${1} -o -g commitlint.config.json -V"
```

### Converional ChangeLog

- Luego de esto procederemos a instalar nuestro gestionador de changelog

```bash
$ npm install -g conventional-changelog-cli
```

- Adicionamos un nuevo script a nuestro paquete para esta funcion

```bash
$ npm pkg set scripts.changelog="conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
```

- Si maneja el flujo de versiones por medio de npm, puede agregar este comando para complementar los scripts `npm version [patch|minor|major]` con el envio en la version TAG, se envie la nueva version del CHANGELOG.md

```bash
$ npm pkg set scripts.version="npm run changelog && npx prettier --write CHANGELOG.md && git add CHANGELOG.md"
```

### Absolute Import

- Habilitamos importaciones absolutas en el proyecto, desde la carpeta raiz `./src`, debemos dirigirnos al archivo `tsconfig.json` y agregar esta porcion

```json
{
  "compilerOptions": {
  ...
  /* Paths */
    "paths": {
      "@src/*": ["./src/*"]
    }
  }
  ...
}
```

- Luego debemos ajustar tambien el momento del empaquetado por medio de vite, asi que nos dirigimos a el archivo `vite.config.ts` y agregamos esta porcion

```typescript

import path from "path";

export default defineConfig({
  ...
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: path.resolve(path.join(__dirname, "/src")),
      },
    ],
  }
});

```

### Generado de versiones

Para poder gestionar las versiones de nuestro projecto usando `npm`, podemos usar el siguiente comando

```bash
$ npm version [patch|minor|major]
```

Para poder cambiar la plantilla con el que se suben la version de release, debemos de crear un archivo `.npmrc` y agregar la plantilla que se adapte mejor a nuestra descripcion

```bash
tag-version-prefix=""
message="chore(:rocket:): %s release"
```

### Tailwind

- Instalar tailwind

```bash
$ npm i -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

- Luego se debe de configurar el contenido a parsear por `tailwind` en el archivo `tailwind.config.js`

```javascript
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

- Luego se agregan las directivas css en el archivo `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
