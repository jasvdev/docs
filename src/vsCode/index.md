<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[vsCode]: https://code.visualstudio.com/
[ShortCut]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
[Snippets]: https://code.visualstudio.com/docs/editor/userdefinedsnippets

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [VsCode](#vscode)
- [Cambiar la fuente](#cambiar-la-fuente)
- [Cambiar la terminal](#cambiar-la-terminal)
- [Reiniciar vsCode](#reiniciar-vscode)
- [Commands Utils](#commands-utils)
- [Short Cuts](#short-cuts)
- [Snippets](#snippets)
- [Extenciones](#extenciones)
  - [Spanish Language Pack for Visual Studio Code](#spanish-language-pack-for-visual-studio-code)
  - [Prettier](#prettier)
  - [Markdown All in One](#markdown-all-in-one)
  - [Image preview](#image-preview)
  - [DotENV](#dotenv)
  - [ErrorLens](#errorlens)
  - [Material Icon Theme](#material-icon-theme)
  - [CodeSnap](#codesnap)
  - [Color Highlight](#color-highlight)
  - [Vscode Google Translate](#vscode-google-translate)
  - [Docker](#docker)
  - [version lens](#version-lens)
  - [Import Cost](#import-cost)
  - [Thunder Client/RapidAPI Client](#thunder-clientrapidapi-client)
  - [Path Intellisense](#path-intellisense)
  - [ESLint](#eslint)
  - [GitLens](#gitlens)
  - [Git Graph](#git-graph)
  - [ES7+ React/Redux/React-Native snippets](#es7-reactreduxreact-native-snippets)
  - [Activitus Bar](#activitus-bar)
  - [Todo Tree](#todo-tree)

# VsCode

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

El sitio oficial de [vsCode]

Configuracion inicial del `setting.json`

```json
{
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.sideBar.location": "right",
  "editor.linkedEditing": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.cursorBlinking": "expand",
  "editor.formatOnSave": true,
  "editor.stickyScroll.enabled": true,
  "editor.minimap.maxColumn": 80,
  "breadcrumbs.enabled": false
}
```

# Cambiar la fuente

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Para poder cambiar la fuente del editor se debe de instalar

En este ejemplo utilizaremos [Cascadia Code](https://github.com/microsoft/cascadia-code/releases) de microsoft.

- Debemos descargar la fuente en formato `.ttf`
- Luego le damos doble click para instalar
- Despues de que este instala en nuestro sistema debemos activar la fuente en el editor, asi como el soporte de ligaduras si la fuente lo soporta

```json
{
  "editor.fontFamily": "'Cascadia Code',Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400"
}
```

- Luego se debe de reiniciar el editor completamente y ya lo tendremos listo.

# Cambiar la terminal

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- Lo primero que debemos de hacer para actualizar nuestra terminal en windows, es dirigirnos a la `Microsoft Store` y buscar un programa que facilita el manejo de varias terminales `Terminal` y adicionalmente actualizar la `Power Shell` que trae por defecto el S.O. Asi que la buscamos y la instalamos.
- Para lograr esta actualizacion de terminal nos basaremos en el programa [ohmyposh](https://ohmyposh.dev/) que es una shell que se puede conectar con otra a bajo nivel y esta permite configuraciones

- Para instalarla desde consola, luego reiniciar la terminal

```bash
$ winget install JanDeDobbeleer.OhMyPosh -s winget
```

- Para buscar actualizaciones

```bash
$ winget upgrade JanDeDobbeleer.OhMyPosh -s winget
```

- Para verificar que fue correctamente instalado

```bash
$ oh-my-posh get shell
```

- Para poder visualizar los iconos en la terminal, se recomienda `CascadiaCode` pero puedes usar la que mejor creas

```bash
$ oh-my-posh font install
```

- Luego debemos de entrar en los `settings.json` de la configuracion de nuestra terminal y asignarle por defecto esta fuente y nuestra nueva `PowerShell` para que abra por defecto.
- Abrimos el programa `Terminal` y vamos a configuracion, al final del panel contraremos `Abrir archivo JSON`
- Ubicamos esta seccion y ponemos la fuente
- Para cambiar el color de nuestra terminal, windows nos ofrece un juego de [temas](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes)

```json
{
  "profiles": {
    "defaults": {
      "font": {
        "face": "CaskaydiaCove Nerd Font",
        "size": 10
      },
      "opacity": 80,
      "colorScheme": "One Half Dark"
    },
    "sheme"[{
      "background": "#FAFAFA",
      "black": "#383A42",
      "blue": "#0184BC",
      "brightBlack": "#4F525D",
      "brightBlue": "#61AFEF",
      "brightCyan": "#56B5C1",
      "brightGreen": "#98C379",
      "brightPurple": "#ff6ac1",
      "brightRed": "#DF6C75",
      "brightWhite": "#FFFFFF",
      "brightYellow": "#E4C07A",
      "cursorColor": "#4F525D",
      "cyan": "#0997B3",
      "foreground": "#383A42",
      "green": "#50A14F",
      "name": "One Half Light",
      "purple": "#ff6ac1",
      "red": "#E45649",
      "selectionBackground": "#FFFFFF",
      "white": "#FAFAFA",
      "yellow": "#C18301"
    }]
  }
}
```

- Luego debemos de crear ahora si, nuestro perfil de configuracion, para ello primero creamos el archivo

```bash
$ New-Item -Path $PROFILE -Type File -Force
```

- Abrimos nuestro archivo

```bash
$ notepad $PROFILE
```

- Configuramos nuestra invocacion inicial, que llame a `oh-my-posh`

```bash
$ oh-my-posh init pwsh | Invoke-Expression
```

- Despues de esto, ya podras cerrar tu terminal y volverla a abrir, para encontrar el resultado deseado con el theme por defecto
- Si queremos cambiar el theme de onMyPosh, debemos descargar los temas disponibles y luego actualizar nuestro archivo profile

```bash
$ Get-PoshThemes
```

- Luego debes de actualizar tu archivo de la siguiente manera, cambiando al nombre del tema que requieras

```bash
$  oh-my-posh init pwsh --config 'C:\Users\jasab\AppData\Local\Programs\oh-my-posh\themes\jandedobbeleer.omp.json' | Invoke-Expression
```

- Luego para poderse congfigurar en vsCode, podemos poner nuestra terminal por defecto y la fuente a usar para esta terminal.

```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.fontFamily": "CaskaydiaCove Nerd Font"
}
```

- Por ultimo podemos activar un autocompletado mas poderoso que nos entrega nuestra nueva terminal

```bash
$ Set-PSReadLineOption -PredictionViewStyle ListView
```

# Reiniciar vsCode

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Debes de eliminar el contenido de dos carpetas, por defecto `vsCode` se instala por usuario, entonces debemos de ir a la siguiente carpeta y eliminar todo su contenido.

```bash
$ C:/user/name/.vsCode
$ C:/user/name/Appdata/Reaming/Code
```

# Commands Utils

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Todos estos comandos son usados desde el atajo `Ctrl + Shift + p`

| Comando                              | Descripcion                                        |
| ------------------------------------ | -------------------------------------------------- |
| `Sort lines Ascending`               |                                                    |
| `Sort lines Decending`               |                                                    |
| `Emmet: Wraper`                      | [sintax emmet](https://docs.emmet.io/cheat-sheet/) |
| `Transform to lowercase/upercase...` | Nos permite transformar texto                      |

# Short Cuts

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

| Comando                 | Descripcion                 |
| ----------------------- | --------------------------- |
| `F11`                   | FullScreen                  |
| `Ctrl + w`              | Close tab                   |
| `Ctrl + shitf + t`      | Apen last tabs close        |
| `Ctrl + Alt + up/down`  | Add cursor                  |
| `ALt + click/Dbl click` | Add cursor                  |
| `Ctrl + D`              | Add cursor next match       |
| `Ctrl + P`              | Find file                   |
| `Ctrl + P > @`          | Find section into file open |
| `Ctrl + P > :`          | Find line into file open    |
| `F2`                    | Replace symbol              |

# Snippets

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Sitio oficial de documentacion [Snippets] VsCode

<details>
  <summary>
    Lista completa
  </summary>

```json
{
  "git-msg-console": {
    "prefix": "gitmc",
    "body": [
      "-m \"${1|feat,fix|}(:${2|sparkles,art,recycle,fire,bug,memo,file_folder,test_tube,wrench,tada|}:): ${3:ID:} ${4:title}\" ${5| ,-m \"|}${6:Description\"} ${7| ,-m \"BREAKING_CHANGES:|} ${8:Note\"}"
    ]
  },
  "git-msg": {
    "prefix": "gitm",
    "body": [
      "${1|feat,fix|}(:${2|sparkles,art,recycle,fire,bug,memo,file_folder,test_tube,wrench,tada|}:): ${3:ID:} ${4:title}",
      "",
      "${5:Description}",
      "",
      "${6| ,BREAKING_CHANGES:|}${7:Note}"
    ]
  },
  // Console:JavaScript/TypeScript
  "Console-Log": {
    "prefix": "csl",
    "body": ["console.log('$TM_FILENAME_BASE:$TM_LINE_NUMBER', ${1:Data});"],
    "scope": "javascript,javascriptreact,jsx,typescript,typescriptreact"
  },
  "Console-error": {
    "prefix": "cse",
    "body": ["console.error('$TM_FILENAME_BASE:$TM_LINE_NUMBER', ${1:Data});"],
    "scope": "javascript,javascriptreact,jsx,typescript,typescriptreact"
  },
  "Console-warn": {
    "prefix": "csw",
    "body": ["console.warn('$TM_FILENAME_BASE:$TM_LINE_NUMBER', ${1:Data});"],
    "scope": "javascript,javascriptreact,jsx,typescript,typescriptreact"
  },
  "Console-table": {
    "prefix": "cst",
    "body": ["console.table('$TM_FILENAME_BASE:$TM_LINE_NUMBER', ${1:Data});"],
    "scope": "javascript,javascriptreact,jsx,typescript,typescriptreact"
  },
  // Import:TypsScript/ReactTypeScript
  "import-module-Object": {
    "prefix": "imp",
    "body": ["import { ${2:Name} } from '${1:./file}';${0}"],
    "scope": "typescript,typescriptreact"
  },
  "import-module-default": {
    "prefix": "impo",
    "body": ["import ${2:Name}${3| from,\\,{ Prop } from|} '${1:./file}';${0}"],
    "scope": "typescript,typescriptreact"
  },
  // Class: Css/Sass
  "css-class": {
    "prefix": "styc",
    "body": [".${1:element}-${2:action}-${3:container} {", "\t${4:Prop}: ${5:value};", "}", "${0}"],
    "scope": "css,scss"
  },
  // Interfaces:TypsScript/ReactTypeScript
  "ts-interface-tsx": {
    "prefix": "tsix",
    "body": [
      "${1|interface,export interface|} IProps {",
      "\tin${2:Prop}: ${3|boolean,number,string,any,{}|};",
      "\ton${4:Event}: ()=> ${5|boolean,number,string,void|};",
      "}",
      "${0}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-interface": {
    "prefix": "tsi",
    "body": [
      "${1|interface,export interface|} I${2:Name} ${3:extends I${4:Name}} {",
      "\t${6:Prop}: ${8|boolean,number,string,any,{}|};",
      "}",
      "${0}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-interface-prop": {
    "prefix": "tsip",
    "body": ["${1:Prop}: ${2|boolean,number,string,any,{}|};${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-enum": {
    "prefix": "tse",
    "body": ["${1|enum,export enum|} en${2:Name} {", "\t${3:Prop}${4|\\,,:''\\,,:0\\,|}", "}", "${0}"],
    "scope": "typescript,typescriptreact"
  },
  // Types:TypsScript/ReactTypeScript
  "ts-types": {
    "prefix": "tst",
    "body": ["${1|type,export type|} ty${2:Name} = '${3:V1}' | '${4:V2}';${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-types-keyvalue": {
    "prefix": "tstk",
    "body": ["${1|{,prop: {|} [key: ${2|string,number|}]: ${3|string,number,boolean,any,{}|} }${0}"],
    "scope": "typescript,typescriptreact"
  },
  // General:TypsScript/ReactTypeScript
  "ts-var": {
    "prefix": "tsv",
    "body": ["${1|let,const|} ${2|l,m,c|}${3:Name} = ${0};"],
    "scope": "typescript,typescriptreact"
  },
  "ts-function": {
    "prefix": "tsf",
    "body": ["(${1})${2| =>,: void =>,: string =>,: number =>,: any =>|}{${3}}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-if": {
    "prefix": "tsif",
    "body": ["if (${1:Con}) {", "\t${2:Logic}", "}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-if-else": {
    "prefix": "tsif1",
    "body": ["if (${1:ConA}) {", "\t${2:Logic}", "} else {", "\t${3:logic}", "}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-if-2": {
    "prefix": "tsif2",
    "body": [
      "if (${1:ConA}) {",
      "\t${2:Logic}",
      "} else if (${3:ConB}) {",
      "\t${4:Logic}",
      "} else {",
      "\t${5:logic}",
      "}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-if-3": {
    "prefix": "tsif3",
    "body": [
      "if (${1:ConA}) {",
      "\t${2:Logic}",
      "} else if (${3:ConB}) {",
      "\t${4:Logic}",
      "} else if (${5:ConC}) {",
      "\t${6:logic}",
      "} else {",
      "\t${7:logic}",
      "}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-if-tern": {
    "prefix": "tsift",
    "body": ["${1:ConA} ? ${2:True} : ${3:False}${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-switch": {
    "prefix": "tssw",
    "body": [
      "switch (${1:Key}) {",
      "\tcase '${3:ValA}':",
      "\t\t${2|return;,break;|}",
      "\tcase '${4:ValB}':",
      "\t\t${2}",
      "\tcase '${5:ValC}':",
      "\t\t${2}",
      "\tcase '${6:ValD}':",
      "\t\t${2}",
      "\tdefault:",
      "\t\t${2}",
      "} "
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-switch-var": {
    "prefix": "tsswv",
    "body": [
      "let l${1:Name} = '';",
      "switch (${2:Key}) {",
      "\tcase '${3:Value}':",
      "\t\tlVar = '${4:Value}';",
      "\t\tbreak;}",
      "\tcase '${5:ValB}':",
      "\t\tlVar = '${6:Value}';",
      "\t\tbreak;",
      "\tcase '${7:ValC}':",
      "\t\tlVar = '${8:Value}';",
      "\t\tbreak;",
      "\tcase '${9:ValD}':",
      "\t\tlVar = '${10:Value}';",
      "\t\tbreak;",
      "\tdefault:",
      "\t\tlVar = '${11:Value}';",
      "}",
      "${0}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-try-catch": {
    "prefix": "tstry",
    "body": ["try {", "\t${1}", "} catch (pErr) {", "\tconsole.log(pErr);", "}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-throw": {
    "prefix": "tsthrow",
    "body": ["throw new Error('${1:$TM_FILENAME_BASE:$TM_LINE_NUMBER}');${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-sort": {
    "prefix": "tssort",
    "body": [
      "${1:List}.sort((v${2:Obj}A, v${2}B) => {",
      "\tif (v${2}A.${3:key} > v${2}B.${3}) {",
      "\t\treturn 1;",
      "\t}",
      "\tif (v${2}A.${3} < v${2}B.${3}) {",
      "\t\treturn -1;",
      "\t}",
      "\treturn 0; ${3:// DESC: invertir unos}",
      "});"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-forEach": {
    "prefix": "tsfor",
    "body": ["${1:List}.forEach((v${2:Obj}${3|),\\, vIndex)|} => {", "\t${4}", "});"],
    "scope": "typescript,typescriptreact"
  },
  "ts-map": {
    "prefix": "tsmap",
    "body": ["${1:List} = ${1}.map((v${2:Obj}${3|),\\, vIndex)|} => {", "\t${4}", "});"],
    "scope": "typescript,typescriptreact"
  },
  "ts-filter": {
    "prefix": "tsfil",
    "body": ["${1:List} = ${1}.filter((v${2:Obj}) => v${2:Obj}.${3:Prop} ${4|>,<,>=,<=,!==,===|} ${5:Value});${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-find-findIndex": {
    "prefix": "tsfind",
    "body": [
      "${1|let,const|} ${2|l,m,c|}${3:Name} = ${4:List}.${5|find,findIndex|}((v${6:Obj}) => v${6:Obj}.${7:Prop} ${8|>,<,>=,<=,!==,===|} ${9:Value});${0}"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-some-every": {
    "prefix": "tssome",
    "body": ["${1:List}.${2|some,every|}((v${3:Obj}) => v${3:Obj}.${4:Prop} ${5|>,<,>=,<=,!==,===|} ${6:Value});${0}"],
    "scope": "typescript,typescriptreact"
  },
  "ts-flat-simple": {
    "prefix": "tsflat",
    "body": [
      "function flatArray<T>(",
      "\tpList: { [key: string]: any }[] = [],",
      "\tpChild: string = 'children'",
      "): T[] {",
      "\tif (!Array.isArray(pList)) {",
      "\t\treturn [];",
      "\t}",
      "\tlet lListFlat: T[] = [];",
      "\tpList.forEach((vChield) => {",
      "\t\t// Transform Object Plain",
      "\t\tconst lObj = {...vChield, [pChild]: []} as T;",
      "\t\t// save Object",
      "\t\tlListFlat.push(lObj);",
      "\t\t// Into other leaf",
      "\t\tif (Array.isArray(vChield[pChild]) && vChield[pChild].length > 0) {",
      "\t\t\tlListFlat = lListFlat.concat(flatArray<T>(vChield[pChild], pChild));",
      "\t\t}",
      "\t});",
      "\treturn lListFlat;",
      "};"
    ],
    "scope": "typescript,typescriptreact"
  },
  "ts-flat-transform": {
    "prefix": "tsflatT",
    "body": [
      "function flat${1:Entity}(pList: ${2:ITypeA}[] = []): ${3:ITypeB}[] {",
      "\tif (!Array.isArray(pList)) {",
      "\t\treturn [];",
      "\t}",
      "\tlet lListFlat: ${3}[] = [];",
      "\tpList.forEach((vChield) => {",
      "\t\t// Transform Object Plain",
      "\t\tconst lObj: ${3} = {${4:childrenName}: vChield.${4}};",
      "\t\t// save Object",
      "\t\tlListFlat.${5|push,unshift|}(lObj);",
      "\t\t// Into other leaf",
      "\t\tif (Array.isArray(vChield.${4}) && vChield.${4}.length > 0) {",
      "\t\t\tlListFlat = lListFlat.concat(",
      "\t\t\t\tflat${1}(vChield.${4})",
      "\t\t\t);",
      "\t\t}",
      "\t});",
      "\treturn lListFlat;",
      "};"
    ],
    "scope": "typescript,typescriptreact"
  }
}
```

</details>

# Extenciones

## Spanish Language Pack for Visual Studio Code

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Soporte para el lenguaje español

- [Spanish Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es)

## Prettier

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos pertime formatear archivos

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```json
{
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true
}
```

## Markdown All in One

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Manejo de Markdown files

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Image preview

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Permite visualizar cualquier imagen desde una url en un tooltip

- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)

## DotENV

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos permite tener una sintax para archivos .env

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

## ErrorLens

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos ayuda a poder visualizar los errores de la consola de vsCode en linea, facilitando la lectura del mismo.

- [errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

## Material Icon Theme

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos permite tener iconos personalizados, que por defecto tienen una asocuacion segun lenguaje, nombre de carpeta, extencion de archivo e incluso formatos en los nombres del mismo, todo completamente configurable.

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

```json
{
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.folders.color": "#90a4ae",
  "material-icon-theme.folders.associations": {
    "application": "Public",
    "infrastructure": "Controller",
    "domine": "Container"
  },
  "material-icon-theme.files.associations": {
    "index.ts": "Purescript",
    "*.mock.ts": "Makefile",
    "*.app.tsx": "Http"
  }
}
```

## CodeSnap

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos permite sacar shortcuts de codigo

- [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)

Select code => `Ctrl + p` => Codesnap

## Color Highlight

Nos permite visualizar rapidamente el color desde el codigo

- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

```json
{
  "color-highlight.markerType": "underline"
}
```

## Vscode Google Translate

Nos facilita la traduccion de codigo

- [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)

```json
{
  "vscodeGoogleTranslate.preferredLanguage": "English"
}
```

## Docker

Administacion de dockers

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

## version lens

Manejar las versiondes desde tu package.json, para actualizarlas

- [version lens](https://marketplace.visualstudio.com/search?term=version%20lens&target=VSCode&category=All%20categories&sortBy=Relevance)

## Import Cost

Nos deja visualizar el peso de cada libreria importada en nuestros archivos

- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

## Thunder Client/RapidAPI Client

Cliente de peticiones HTTP

- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [RapidAPI Client](https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client)

## Path Intellisense

Autocompletado de paths

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

## ESLint

Habilita el linter integrado con vsCode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## GitLens

Habilita varias funcionalidades sobre git, para ver historico de archivo entre otras, esta tiene version pago, pero muchas de las funcionalidades estan en la version free

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Git Graph

Nos permite ver el arbol de commits de nuestro repositorio Git

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

## ES7+ React/Redux/React-Native snippets

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Activitus Bar

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Nos permite configurar nosotros mismos, acciones, shorcuts o correr comandos, desde un click en la barra de actividad.

- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)
- [Icons](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

<details>
  <summary>
  Config
  </summary>

```json
{
  "activitusbar.showSourceControlCounter": true,
  "activitusbar.views": [
    {
      "name": "command.workbench.action.toggleActivityBarVisibility",
      "codicon": "gripper",
      "tooltip": "Barra de actividades"
    },
    {
      "name": "command.workbench.action.toggleSidebarVisibility",
      "codicon": "arrow-swap",
      "tooltip": "Barra de navegacion"
    },
    {
      "name": "explorer",
      "codicon": "explorer-view-icon"
    },
    {
      "name": "search",
      "codicon": "search-view-icon"
    },
    {
      "name": "scm",
      "codicon": "source-control-view-icon"
    },
    {
      "name": "extensions",
      "codicon": "extensions-view-icon"
    },
    {
      "name": "extension.todo-tree-container",
      "codicon": "symbol-class",
      "tooltip": "TODO: tree"
    },
    {
      "name": "extension.test",
      "codicon": "beaker",
      "tooltip": "Test Run"
    },
    {
      "codicon": "kebab-vertical"
    },
    {
      "name": "settings",
      "codicon": "gear"
    },
    {
      "name": "command.workbench.action.reloadWindow",
      "codicon": "refresh",
      "tooltip": "refresh windows"
    },
    {
      "name": "command.workbench.action.openSnippets",
      "codicon": "symbol-namespace",
      "tooltip": "Snippets"
    },
    {
      "name": "command.workbench.action.terminal.toggleTerminal",
      "codicon": "terminal",
      "tooltip": "Terminal"
    },
    {
      "name": "command.saveAll",
      "codicon": "save",
      "tooltip": "Guardar Todo"
    },
    {
      "codicon": "kebab-vertical"
    },
    {
      "name": "command.editor.unfoldAll",
      "codicon": "triangle-down",
      "tooltip": "Expantir Todo"
    },
    {
      "name": "command.editor.foldLevel4",
      "codicon": "list-flat",
      "tooltip": "Colapsar 4"
    },
    {
      "name": "command.editor.foldLevel3",
      "codicon": "menu",
      "tooltip": "Colapsar 3"
    },
    {
      "name": "command.editor.foldLevel2",
      "codicon": "grabber",
      "tooltip": "Colapsar 2"
    },
    {
      "name": "command.editor.foldLevel1",
      "codicon": "remove",
      "tooltip": "Colapsar 1"
    },
    {
      "name": "command.editor.foldAll",
      "codicon": "triangle-up",
      "tooltip": "Colapsar Todo"
    },
    {
      "codicon": "kebab-vertical"
    },
    {
      "name": "task.build",
      "codicon": "package",
      "tooltip": "build"
    },
    {
      "name": "task.format",
      "codicon": "tasklist",
      "tooltip": "Format Code"
    },
    {
      "name": "task.dev",
      "codicon": "rocket",
      "tooltip": "dev"
    }
  ]
}
```

</details>

## Todo Tree

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Esto nos permite hacer comentarios, con ciertas reglas de expresiones regulares, los guales se pintaran del color que nosotros deseemos, adicional se genera un arbol de busqueda para facilitar la busqueda de los mismos.

- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

<details>
  <summary>
  Config
  </summary>

```json
    "todo-tree.general.showIconsInsteadOfTagsInStatusBar": true,
    "todo-tree.general.statusBar": "current file",
    "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
    "todo-tree.general.tags": [
      "// BUG",
      "//!",
      "// INFO",
      "//?",
      "// DOC",
      "//-",
      "// COMMENT",
      "// ",
      "// FIX",
      "//#",
      "// TODO",
      "//>",
      "// [ ]",
      "// [x]"
    ],
    "todo-tree.general.tagGroups": {
      "// BUG": ["BUG", "//!"],
      "// INFO": ["INFO", "//?"],
      "// DOC": ["DOC", "//-", "{/*"],
      "// FIX": ["FIX", "//#"],
      "// TODO": ["TODO", "//>"],
      "// COMMENT": ["COMMENT", "// "]
    },
    "todo-tree.highlights.customHighlight": {
      "// BUG": {
        "foreground": "#FFF",
        "background": "#DC3545",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "bug",
        "iconColour": "#DC3545",
        "gutterIcon": true,
        "type": "text"
      },
      "// INFO": {
        "foreground": "#FFF",
        "background": "#007BFF",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "question",
        "iconColour": "#007BFF",
        "gutterIcon": true,
        "type": "text",
        "hideFromTree": true,
        "hideFromStatusBar": true
      },
      "// DOC": {
        "foreground": "#FFF",
        "background": "#6C757D",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "note",
        "iconColour": "#6C757D",
        "gutterIcon": true,
        "type": "text",
        "hideFromTree": true,
        "hideFromStatusBar": true
      },
      "// COMMENT": {
        "foreground": "#FFF",
        "background": "#397A3B",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "comment",
        "iconColour": "#397A3B",
        "gutterIcon": true,
        "type": "text",
        "hideFromTree": true,
        "hideFromStatusBar": true
      },
      "// FIX": {
        "foreground": "#FFF",
        "background": "#FFC107",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "alert",
        "iconColour": "#FFC107",
        "gutterIcon": true,
        "type": "text"
      },
      "// TODO": {
        "foreground": "#FFF",
        "background": "#673AB7",
        "opacity": 100,
        "fontWeight": "bold",
        "fontStyle": "oblique",
        "icon": "checklist",
        "iconColour": "#673AB7",
        "gutterIcon": true,
        "type": "text"
      }
    },
```

</details>
