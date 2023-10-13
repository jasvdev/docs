<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../index.md
[Hooks]: https://git-scm.com/docs/githooks
[Prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[Husky]: https://typicode.github.io/husky/getting-started.html

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [Templates para projectos](#templates-para-projectos)
  - [Proyecto Markdown + Prettier + Husky + commitlint + convetional changelog](#proyecto-markdown--prettier--husky--commitlint--convetional-changelog)

# Templates para projectos

## Proyecto Markdown + Prettier + Husky + commitlint + convetional changelog

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

- Luego ya podremos instalar nuestro linter de commits

```bash
$ npm install -g @commitlint/cli @commitlint/config-conventional
$ echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

- para verificar que si quedo correctamente instalado

```bash
$ echo 'foo: bar' | commitlint
```

- Luego puede actualizar, en el archivo `commitlint.congi.js` las [reglas](https://commitlint.js.org/#/reference-rules) que mejor te funcionen
- Adicional se debe de crear un hook con husky para validar los commits

```bash
$ npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1} -V --config commitlint.config.js"
```

- Luego de esto procederemos a instalar nuestro gestionador de changelog

```bash
$ npm install -g conventional-changelog-cli
```

- Adicionamos un nuevo script a nuestro paquete para esta funcion

```bash
$ npm pkg set scripts.changelog="conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
```

- Si maneja el flujo de versiones por medio de npm, puede agregar este comando para complementar los scripts `npm version [patch|minor|major]`

```bash
$ npm pkg set scripts.version="conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
```
