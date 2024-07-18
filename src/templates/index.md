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
- [Proyecto Base + Prettier + Husky + Commitlint + Convetional ChangeLog](#proyecto-base--prettier--husky--commitlint--convetional-changelog)
  - [Pnpm + NodeJs](#pnpm--nodejs)
    - [Husky](#husky)
    - [CommitLint](#commitlint)
    - [CommitiZen](#commitizen)
      - [Agregar Scope automaticos](#agregar-scope-automaticos)
        - [commitlint.config.init.js](#commitlintconfiginitjs)
        - [scope.js](#scopejs)
        - [Agregar bypass Git Emojis](#agregar-bypass-git-emojis)
    - [Converional ChangeLog](#converional-changelog)
    - [Prettier](#prettier)
    - [Lint-Staged](#lint-staged)
    - [Generado de versiones](#generado-de-versiones)
  - [Proyecto Markdown](#proyecto-markdown)
- [Proyecto React + Vite](#proyecto-react--vite)
  - [Vite + ReactJs + Eslint](#vite--reactjs--eslint)
  - [Eslint + Prettier](#eslint--prettier)
  - [StyleLint](#stylelint)
  - [Absolute Import](#absolute-import)

# Proyecto Base + Prettier + Husky + Commitlint + Convetional ChangeLog

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Pnpm + NodeJs

Inicializamos nuestro projecto `NodeJs` creando el archivo `package.json` y nuestro archivo `.gitignore`

```bash
pnpm init
```

En nuestro `package.json` debemos habilitar el tipo de proyecto a que sea modular agregando la propiedad `"type":"module"` en la estructura del archivo

```json
{
  "name": "base",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  ...
}
```

```bash
echo "node_modules/" > .gitignore
```

### Husky

- Ahora se debe de agregar un disparador al momento de hacer commits, para validar el codigo antes de subirse al repositorio, esto se logra por medio de la herramienta [Husky]

```bash
$ pnpm add --save-dev husky
```

```bash
$ pnpm exec husky init
```

```bash
$ pnpm i
```

- Luego de esto se debe de crear el hook que mejor nos convenga, aqui te dejo la lista de [Hooks]

```bash
echo "pnpm run pre-commit" > .husky/pre-commit
```

```bash
echo "pnpm run pre-push" > .husky/pre-push
```

```bash
pnpm pkg set scripts.pre-commit="echo 'pre-commit'  && exit 1"
```

```bash
pnpm pkg set scripts.pre-push="pnpm test"
```

- En este punto, puedes realizar un intento de commit obteniendo como resultado, el error del script que se ejecuta en medio, esto lanzado desde git

```bash
git add .
git commit -m "test commit"
```

### CommitLint

- Luego ya podremos instalar nuestro linter de commits

```bash
pnpm add @commitlint/cli @commitlint/config-conventional
```

- creamos el archivo `commitlint.config.json`

```bash
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

- y agregamos nuestras reglas de configuracion, las [reglas](https://commitlint.js.org/#/reference-rules) que mejor te funcionen

```javascript
export default {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  rules: {
    "body-leading-blank": [2, "never"],
    "footer-leading-blank": [2, "never"],
    "footer-max-length": [2, "always", 120],
    "header-max-length": [2, "always", 120],
    "subject-case": [0, "never"],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"],
    ],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["sparkles", "fire"]],
  },
};
```

- para verificar que si quedo correctamente instalado

```bash
echo 'foo: bar' | pnpx commitlint
```

- Adicional se debe de modificar el comando en el `package.json` para adicional nuestro script de validacion y ejecutarlo en el momento de hacer `pre-commit`

```bash
pnpm pkg set scripts.pre-commit="pnpx commitlint --edit"
```

Luego debemos de modificar el hook del git para que quede de la siguiente forma

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm pre-commit ${1}
```

- En este punto puedes volver a intentar realizar un commit, el cual te verificara si esta bien escrito segun tus especificaciones y reglas, si pasa de igual forma el exit impedira que se logre por ahora, pero ya verificaras que el linter de commits esta activo

### CommitiZen

Para el momento de construir nuestros mensajes con las reglas de validaciones sea mucho mas sencillo, nos apoyaremos en una herramienta que nos provee una interfaz de consola para esta labor

```bash
pnpm add -D @commitlint/cz-commitlint commitizen
```

Luego debemos ir a nuestro archivo `package.json` y configurar el puente de configuracion en el apartado `config`, para que nuestra lib `commitizen` tome las configuraciones de nuestro archivo `commitlint.config.js`

```json
{
  "name": "base",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    ...
  },
  "license": "ISC",
  "devDependencies": {
    ...
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

para finalizar, debemos agregar nuestras propias traducciones en el archivo
`commitlint.config.js` en la seccion `prompt` dependiendo de lo que se requiera, tener en cuenta que cada type, tenga su respectiva representacion en las enums.

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...
  },
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: '✨ A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '🐛 A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '📚 Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              '💎 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description:
              '📦 A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '🚀 A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '🚨 Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              '🛠  Changes that a ffect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              '⚙️  Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: "♻️  Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '🗑 Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description:
          'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
```

Luego debemos de agregar nuestro script el cual nos ayudara con la tarea, recordar que este es opcional, siempre se podra usar directamente el git commit y este siempre pasara por nuestro linter.

```bash
pnpm pkg set scripts.commit="git-cz"
```

En este momento ya puedes usar la ayuda para construir tus mensajes de commit, sin inconvenientes

```bash
pnpm commit
```

#### Agregar Scope automaticos

Si se requiere que los scope's de validacion se tomen de diferentes carpetas de proyectos o apps o packages, debemos crear una manera de actualizarlo de manera automatica si solo estamos trabajando con `commitlint` debemos

Ir al archivo `commitlint.config.js` y adicionar el siguiente codigo

```javascript
import fs from "fs";
const scope = [];
const folders = ["./apps/"];
folders.forEach((folder) => {
  scope.push(fs.readdirSync(folder));
});

export default {
  ...
  rules: {
    ...
    'scope-enum': [2, 'always', ['sparkles', 'fire', ...scope]],
  },
}
```

Con esto, todos los espacios de carpetas que contienen scopes que sean requeridos, van a aparecer de forma automatica y se validaran de la misma forma, lamentablemente esta validacion solo aplica para nuestro linter, si queremos que tambien el commitizen tenga este comportamiento la solucion cambia un poco

- Debemos de agregar una carpeta `utils` y alli agregar 2 achivos

##### commitlint.config.init.js

El cual es el mismo archivo `commitlint.config.js` pero con una modificacion como palabra clave en la parte de scope's

```javascript
export default {
    ...
    'scope-enum': [2, 'always', __SCOPE__],
  },
};
```

##### scope.js

En la misma carpeta agregaremos el siguiente codigo

```javascript
import fs from "fs";

let scope = [];
const folders = ["./apps/"];
folders.forEach((folder) => {
  scope = [...scope, ...fs.readdirSync(folder)];
});

fs.readFile("./utils/commitlint.config.init.js", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/__SCOPE__/g, JSON.stringify(scope));

  fs.writeFile("commitlint.config.js", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
```

con esto conseguiremos hacer un pre-procesamiento del archivo antes de ser invocado, este script puede quedar de ejecucion manual cada ves que se agrega un nuevo scope o se puede injectar en los dos puntos de ejecucion de las validaciones, para que ejecuten el script andes de ser evaluados

```bash
pnpm pkg set scripts.scope="node ./utils/scope.js"
```

```bash
pnpm pkg set scripts.commit="pnpm scope && git-cz"
```

en el archivo `.husky/commit-msg`

```bash
pnpm scope && pnpm pre-commit ${1}
```

##### Agregar bypass Git Emojis

Si se requiere activar una funcionalidad para que dependiendo del type de commit, se adicione al mensaje del git un icono representativo, que sea transparente para el desarrollador para darle un toque de estilo a los mensajes de commit puedes hacerlo de la siguiente manera

Debemos dirigirnos al archivo `.husky/commit-msg` y agregar el siguiente codigo

```bash
msg="$(cat ${1})"
type=$(echo "$msg" | cut -d'(' -f1)

case "$type" in
    "feat")
        resultado=": :fire:"
        ;;
    "fix")
        resultado=": :bug:"
        ;;
    *)
        resultado=":"
        ;;
esac

echo ${msg//':'/$resultado} > ${1}
```

Esta parte es manual, por ende si se agrega un nuevo type en `commitlint.config.js` tambien deberia agregarse aqui su respectivo emoji
[Git Emoji](https://gitmoji.dev/)

### Converional ChangeLog

- Luego de esto procederemos a instalar nuestro gestionador de changelog

```bash
pnpm add conventional-changelog-cli
```

- Adicionamos un nuevo script a nuestro paquete para esta funcion

```bash
pnpm pkg set scripts.changelog="conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
```

- Si maneja el flujo de versiones por medio de npm, puede agregar este comando para complementar los scripts `npm version [patch|minor|major]` con el envio en la version TAG, se envie la nueva version del CHANGELOG.md

```bash
pnpm pkg set scripts.version="npm run changelog && npx prettier --write CHANGELOG.md && git add CHANGELOG.md"
```

### Prettier

Hasta este punto tenemos linter en nuestros commits pero no tenemos formateador para nuestros archivo, para ello debemos de instalar el formateador `prettier`

```bash
pnpm add -D prettier
```

Tener en cuenta que dependiendo del tipo de proyecto, se requerira algun pluggin de formateo adicional, sea en combinacion con eslint o astro u otro tipo de proyecto.

crear un archivo `.prettierrc`, para configurar las reglas necesarias y `.prettierignore` para ignorar el `node_modules`

```bash
echo '{"printWidth": 120}' > .prettierrc
```

```bash
echo 'node_modules/' > .prettierignore
```

crear dos comandos en la seccion de scripts de `package.json` para ejecutar el formateo y el checkeo de nuestro repositorio.

```bash
pnpm pkg set scripts.prettier="prettier --check ."
```

```bash
pnpm pkg set scripts.format="prettier --write ."
```

Luego se debe de instalar la extension de vsCode de [Prettier]
Habilita tu vsCode para que automaticamente cuando se guarde un archivo lo formatee antes de guardarlo

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```

Por ultimo edita tus scripts para efectuen el formateo o la validacion donde mas lo necesites, en este caso, queremos que valide el formato antes de cualquier commit

en el archivo `.husky/commit-msg`

```bash
pnpm prettier && pnpm scope && pnpm pre-commit ${1}
```

### Lint-Staged

Ahora instalaremos una herramienta que nos permite ejecutar comandos solo al espacio de `staged-area` de nuestro repositorio, con el fin de solo validar los archivos que realmente estan siendo agregados al commit y no validar todos los archivos que fueron tocados de alguna manera, para esto usamos la herramienta `lint-staged`

```bash
pnpm add -D lint-staged
```

crear un archivo `.lintstagedrc`, para configurar que comandos se van a ejecutar y en cuales archivos

```bash
echo '{ "*": ["pnpm prettier"] }' > .lintstagedrc
```

Ya con esto tenemos un flujo de evaluacion de codigo, unicamente con los archivos que realmente van a ir dirigidos a un commit, bastante util para unitest o problemas donde tenemos que cambiar el codigo en varios lugares para simular un escenario en un archivo unico, pues solo se evaluara los archivos en su estado inical + los cambios del staged area

por ultimo debemos modificar donde se debe realizar esta ejecucion, lo que recomiendo hacer es despues de que se termine la validacion del message commit, lances el comando

`.husky/commit-msg`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm pre-commit ${1}
....
.....
pnpm lint-staged
```

### Generado de versiones

Para poder gestionar las versiones de nuestro projecto usando `pnpm`, podemos usar el siguiente comando

```bash
pnpm version [patch|minor|major]
```

Para poder cambiar la plantilla con el que se suben la version de release, debemos de crear un archivo `.npmrc` y agregar la plantilla que se adapte mejor a nuestra descripcion

```bash
tag-version-prefix=""
message="chore(:rocket:): %s release"
```

## Proyecto Markdown

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

# Proyecto React + Vite

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
