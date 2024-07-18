<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../../README.md
[sitio oficial]: https://git-scm.com/

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/gitflow-example.png

# Tabla de contenido

<sup>[🔙 Doc]</sup>

- [Tabla de contenido](#tabla-de-contenido)
- [Git](#git)
  - [Glosario](#glosario)
  - [Ciclo de vida del fichero (states)](#ciclo-de-vida-del-fichero-states)
- [Git Flow](#git-flow)
  - [Proceso inicial](#proceso-inicial)
  - [Develop - FEATURE/FIX](#develop---featurefix)
  - [Stage - BUGFIX](#stage---bugfix)
  - [Production - HOTFIX](#production---hotfix)
  - [Ambientes](#ambientes)
  - [Conventional Commits](#conventional-commits)
  - [Tipos de commits segun su contenido con emoji](#tipos-de-commits-segun-su-contenido-con-emoji)
  - [Tipos de commits github Admin](#tipos-de-commits-github-admin)
  - [VsCode Sniped](#vscode-sniped)
  - [CommitLint Config](#commitlint-config)
  - [Tool for Git client](#tool-for-git-client)
  - [Manejo de SSH - Entorno Win](#manejo-de-ssh---entorno-win)
    - [Generar una clave](#generar-una-clave)
    - [Archivo de configuracion](#archivo-de-configuracion)
      - [Default GitHub user](#default-github-user)
      - [Empresa GitHub user](#empresa-github-user)
  - [Doc's](#docs)
  - [Tabla de Commandos y alias](#tabla-de-commandos-y-alias)
    - [Git Setup/Config](#git-setupconfig)
    - [Git Files](#git-files)
    - [Git Working tree](#git-working-tree)
    - [Git Remote](#git-remote)
    - [Git Utils](#git-utils)
  - [Alias for .gitconfig](#alias-for-gitconfig)

# Git

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Git ([sitio oficial]) es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta proyectos muy grandes, incluso documentación personal.

## Glosario

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- `Working Directory` : "Directorio de trabajo" en la copia local del repositorio
- `Staging Area` : "Espacio de preparacion" para lanzar una nueva confirmacion (Commit) al repositorio GIT
- `Git Repositorio` : El almacenamiento interno del repositorio en su forma versionada, el codigo Verdadero
- `remote/local` : El repositio siempre se tiene local y remoto, se diferencia por la palabra "origin". "origin/master": Remota "master": Local, claro esta cuando se tiene un servidor git.
- `HEAD` : Sinonimo del ultimo commit o cabeza en la cual estamos parados
- `HEAD~2` : Indicamos el segundo commit despues del HEAD
- `-h` : este flag es usado en cualquier comando para obtener mas informacion
- `clear` : limpia la consola
- `.gitignore` : Este archivo debe irse en el repositorio, se usa para ignorar archivos del versionamiento
  - **PATRONES**: `file.txt`, `\*.json` , `tmp/\*`

## Ciclo de vida del fichero (states)

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- `Untracked` : Archivo nuevo
- `Modified` : Archivo ya en repositorio, que fue modificado
- `Staged` : Archivo con algun cambio/Nuevo listo para agregarse al Repositorio
- `Unmodified` : Archivo en el repositorio, en estado final de verdad, segun la rama

# Git Flow

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

![img_0]

## Proceso inicial

- Se crea una rama develop a partir de master(main).
- Se crea una rama stage(release) a partir de la develop.
- Se crean ramas feature/fix a partir de la develop, se unen en dev.
- Se crean ramas bugfix a partir de stage, se unen en stage, dev.
- Se crean ramas hotfix a partir de master, se unen en master, stage, dev.

## Develop - FEATURE/FIX

- Se crea una rama apartir de develop.
- Cuando se termina una rama feature/fix, se fusiona en la rama develop.
- Cuando se tiene un paquete de funcionalidades lista en develop, Se fusiona en la rama stage
- Cuando la rama stage está aprobada, se fusiona en las ramas master(main).

## Stage - BUGFIX

- Se crear una rama partiendo de stage
- Cuando se termina una rama fix, se fusiona en la rama stage y develop.

## Production - HOTFIX

- Si se detecta un problema en master(main), se crea una rama hotfix a partir de master(main).
- Una vez terminada la rama hotfix, esta se fusiona tanto en stage y develop como en master(main).

## Ambientes

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- Ideal
  - develop (test developers)
  - stage(Release) (test QA - Feature)
  - PreProd (hotfix) (test QA/developers - BugFix)
  - production (master) (Public version)
- Normal
  - develop (test developers)
  - stage(Release) (test QA - Feature)
  - production (master) (Public version)
- Minimo
  - stage(Release) (test QA - Feature)
  - production (master) (Public version)

## Conventional Commits

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Especificación para dar significado a los mensajes de los commits haciéndolos legibles para máquinas y humanos [oficial site](https://www.conventionalcommits.org/es/v1.0.0/)

- Permite la generación automática del fichero CHANGELOG.
- Determina automáticamente los cambios de versión siguiendo [SemVer](https://semver.org/) (basado en los tipos de commits utilizados).
- Comunican la naturaleza de los cambios a los demás integrantes del equipo o cualquier persona interesada.
- Activa los procesos de build y despliegue o publicación.
- Hacer más fácil a otras personas contribuir al proyecto al permitirles explorar el historial de commits de una forma más estructurada.

|                  |                                  |
| ---------------- | -------------------------------- |
| Titulo           | TYPE(EMOJI/SCOPE): ISSUE:? TITLE |
| Descripcion      | - comment function....           |
|                  | - comment function...            |
| BREAKING CHANGE: | BREAKING CHANGE:? note...        |

---

> NOTA : `El contenido de los mensajes debe ser en ingles`

## Tipos de commits segun su contenido con emoji

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

| CATEGORIA | EMOJI             | USO                                                 |
| --------- | ----------------- | --------------------------------------------------- |
| FEATURE   | ✨ : sparkles:    | Introducir nuevas funcionalidades                   |
| FEATURE   | 🎨 : art:         | Actualizar interfaz de usuario / archivos de estilo |
| FEATURE   | ♻️ : recycle:     | Código de refactorización/rendimiento               |
| FEATURE   | 🎉 : tada:        | Commit inicial del proyecto                         |
| FIX       | 🔥 : fire:        | Eliminar codigo o archivos                          |
| FIX       | 🐛 : bug:         | Corregir un error                                   |
| FIX       | 📝 : memo:        | Agregar/Actualizar documentacion/formato            |
| FIX       | 📁 : file_folder: | Cambios nombres (archivos/carpetas/estructura)      |
| FIX       | 🧪 : test_tube:   | Actualización de pruebas                            |
| FIX       | 🔧 : wrench:      | archivos de configuración                           |

## Tipos de commits github Admin

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

| CATEGORIA | EMOJI           | USO                                            |
| --------- | --------------- | ---------------------------------------------- |
| FEATURE   | 🚀 : rocket:    | Lanzamiento de version, union stage con master |
| FEATURE   | 🚑 : ambulance: | Rever critico                                  |
| FEATURE   | 🔀 : twister:   | Fusion de ramas Develop->Stage                 |

---

## VsCode Sniped

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

```json
  // Message Git
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

```

## CommitLint Config

```json
{
  "rules": {
    "header-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
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

## Tool for Git client

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

> [SourceTree](https://www.sourcetreeapp.com/)
>
> Si se desea que la herramienta externa de diferencia desde el cliente sea VsCode
> Menu->Tools->diff->External Diff/Merge

- External Diff Tool: `Custom`
- Diff Command: `C:\Users\jasab\AppData\Local\Programs\Microsoft VS Code\Code.exe`
- Arguments: `--diff --wait "$LOCAL" "$REMOTE"`
- Merge Tool: `Custom`
- Merge Command: `C:\Users\jasab\AppData\Local\Programs\Microsoft VS Code\Code.exe`
- Arguments: `-n --wait "$MERGED"`

## Manejo de SSH - Entorno Win

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

En el panel de ejecucion (Win + R)

`.ssh` | Enter, te llevara ala ubicacion de las llaves del sistema

---

### Generar una clave

Se genera una nueva clave en nuestro espacio:

- Solo se puede tener una key x email
- Solo se puede tener registrada una key por host remoto
- si se adiciona password, este sera requerido en cada validacion de ssh externa

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@examssple.com"
>> .ssh/$NameKey    (id_rsa_example)
>> Password (Recomended not password)
```

Alternativa en la actualidad mas eficiente por algoritmo, de validacion

```bash
ssh-keygen -t ed25519 -C "your_email@examssple.com"
>> .ssh/$NameKey    (id_rsa_example)
>> Password (Recomended not password)
```

|            |                                                  |
| ---------- | ------------------------------------------------ |
| `$NameKey` | Nombre de nuestra nueva clave publica en fichero |

---

### Archivo de configuracion

Para los casos donde se necesiten manejar diferentes host o organizaciones, Se debe de crear un archivo `config` en el directorio `.ssh` sin extensión en la cual se indica

> Host $NameLocal
>
> > HostName

#### Default GitHub user

```bash
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa
```

> Ejemplo: $ git clone git@github.com/repositorio.git

#### Empresa GitHub user

```bash
Host empresa-github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_empresa
```

> Ejemplo: $ git clone git@empresa-github.com:empresa/repositorio.git

## Doc's

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

- [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
- [Git-emoji](https://gitmoji.dev/)
- [Github-emoji](https://gist.github.com/rxaviers/7360908)
- [Semver](https://semver.org/)
- [Conventional commits](https://www.conventionalcommits.org/es/v1.0.0/)
- [CommitsLint](https://commitlint.js.org/#/)
- [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog)
- [Husky](https://typicode.github.io/husky/)

## Tabla de Commandos y alias

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

```javascript
// flags utils
HEAD
HEAD~1
HEAD~5
--no-verify
--verbose
--local
--global

--continue
--abort
--skip
--interactive
```

### Git Setup/Config

|     | Alias      | Comando                                          | Descripcion                                           |
| --- | ---------- | ------------------------------------------------ | ----------------------------------------------------- |
| ⭐  | `--- ---`  | `git --version`                                  | version del git.                                      |
| ⭐  | `git i`    | `git init`                                       | Creará un nuevo repositorio local GIT. <NameProyect?> |
| ⭐  | `--- ---`  | `git gc`                                         | Activa el garbage colector de git                     |
| ⭐  | `git cf`   | `git config`                                     | set configuracion local                               |
| ⭐  | `git cfl`  | `git config --list`                              | Lista configuracion local                             |
| ⭐  | `git cfla` | `git config --get-regexp alias`                  | Lista todos los alias                                 |
| ⭐  | `git cflu` | `git config --get-regexp user`                   | Lista la configuracion de usuario                     |
| ⭐  | `git cfun` | `git config user.name`                           | Actualiza el nombre del usuario "name"                |
| ⭐  | `git cfue` | `git config user.email`                          | Actualiza el email del usuario "email"                |
| ➖  | `--- ---`  | `git config --global alias.name 'log --oneline'` | Crea un alias personalizado                           |

### Git Files

|     | Alias       | Comando                         | Descripcion                                                         |
| --- | ----------- | ------------------------------- | ------------------------------------------------------------------- |
| ⭐  | `git st`    | `git status`                    | estado actual del local                                             |
| ⭐  | `git sts`   | `git status --short`            | estado resumido del local                                           |
| ⭐  | `git stb`   | `git status --short --branch`   | estado resumido del local con ramas                                 |
| ⭐  | `git df`    | `git diff --word-diff`          | Muestra las diferencias en el working dir                           |
| ⭐  | `git dfs`   | `git diff --word-diff --staged` | Muestra las diferencias en el staged area                           |
| ⭐  | `git a`     | `git add`                       | agrega archivos o regexp al staging area                            |
| ⭐  | `git aa`    | `git add --all`                 | agrega todos los archivos del working al staging area = 'git add .' |
| ⭐  | `git ap`    | `git add --patch`               | agrega paso a paso cada cambio en cada archivo                      |
| ⭐  | `git au`    | `git add --update`              | agrega solo archivos actualizados o eliminados                      |
| ⭐  | `git rs`    | `git restore`                   | <File name> restaura un File o RegExp                               |
| ⭐  | `git rsa`   | `git restore .`                 | Restura el working directory, no elimina nuevos                     |
| ⭐  | `git rss`   | `git reset`                     | Restura el staged                                                   |
| ⭐  | `git rsh`   | `git reset --hard`              | Restaura todo                                                       |
| ➖  | `git clean` | `git clean -f -d`               | Eliminar archivos nuevos solo del working dir                       |
| ➖  | `--- ---`   | `git rm`                        | Elimina archivos de working dir y del índice, File o RegExp         |
| ➖  | `--- ---`   | `git mv`                        | Mueve o cambia el nombre de un archivo o carpeta <origen> <destino> |
| ⭐  | `git sh`    | `git stash`                     |                                                                     |
| ⭐  | `git shl`   | `git stash list`                |                                                                     |
| ⭐  | `git shall` | `git stash --all`               |                                                                     |
| ⭐  | `git shu`   | `git stash --include-untracked` |                                                                     |
| ⭐  | `git sha`   | `git stash apply`               | aplica los cambios de un stash especifico.                          |
| ⭐  | `git shd`   | `git stash drop`                | elimina el stash especifico.                                        |
| ⭐  | `git shcl`  | `git stash clear`               |                                                                     |
| ⭐  | `git shs`   | `git stash show --patch`        |                                                                     |

### Git Working tree

|     | Alias      | Comando                                    | Descripcion                                                                            |
| --- | ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| ⭐  | `git cm`   | `git commit --message`                     | Crea una confirmacion con un mensaje                                                   |
| ⭐  | `git cmx`  | `git commit --no-verify --message`         | Crea una confirmacion con un mensaje sin hooks                                         |
| ⭐  | `git cma`  | `git commit --no-edit --amend`             | Crear un arreglo de commit sin editar el mensaje                                       |
| ⭐  | `git cmax` | `git commit --no-verify --no-edit --amend` | Crear un arreglo de commit sin editar el mensaje y sin hooks                           |
| ⭐  | `git cmae` | `git commit --amend`                       | Crear un arreglo de commit con mensaje                                                 |
| ⭐  | `git rev`  | `git revert HEAD`                          | Nos permite revertir el ultimos commit                                                 |
| ⭐  | `git revn` | `git revert -n HEAD`                       | Nos permite revertir varios commits                                                    |
| ⭐  | `git b`    | `git branch`                               | Listar todos los branches existente en un repositorio local o crea una <name?>         |
| ⭐  | `git br`   | `git branch --remote`                      | Listar todos los branches existente en un repositorio Remotos                          |
| ⭐  | `git ba`   | `git branch --all`                         | Listar todos los branches existente en un repositorio local y remoto                   |
| ⭐  | `git bm`   | `git branch --no-merged`                   | Listar todos excluyen branchs con merge en branch principal                            |
| ⭐  | `git bd`   | `git branch --delete`                      |                                                                                        |
| ⭐  | `git bdf`  | `git branch --delete --force`              |                                                                                        |
| ⭐  | `git brn`  | `git branch -m`                            | Rename de branch <oldName> <newName>                                                   |
| ⭐  | `git bsup` | `git branch --set-upstream-to=`            | El comando especifica el branch existente debe estar conectado al branch origin/branch |
| ⭐  | `git sw`   | `git switch`                               | Nos permite navegar entre ramas o entre los tags o commits facilmente.                 |
| ⭐  | `git swx`  | `git switch --discard-changes`             | Nos permite movernos de rama y descargar cambios rapidamente.                          |
| ⭐  | `git swc`  | `git switch -c`                            | Crear un nuevo branch y cambiar a ese branch                                           |
| ➖  | `git ck`   | `git checkout`                             |                                                                                        |
| ➖  | `git ckb`  | `git checkout -b`                          | Crear un nuevo branch y cambiar a ese branch                                           |
| ⭐  | `git mg`   | `git merge`                                | <branch> Combina la rama en la actual                                                  |
| ⭐  | `git mgs`  | `git merge --squash`                       | <branch> Combina la rama en la actual agruapando los commits en uno solo               |
| ⭐  | `git chp`  | `git cherry-pick`                          |                                                                                        |
| ⭐  | `git rb`   | `git rebase`                               | <branch remota> solo para branchs locales que no se han subido                         |
| ⭐  | `git rbi`  | `git rebase -i`                            | Edicion de commits de rama local                                                       |

### Git Remote

|     | Alias       | Comando                                           | Descripcion                                     |
| --- | ----------- | ------------------------------------------------- | ----------------------------------------------- |
| ⭐  | `git cl`    | `git clone --recurse-submodules`                  |                                                 |
| ⭐  | `git fh`    | `git fetch`                                       |                                                 |
| ⭐  | `git fha`   | `git fetch --all --prune`                         |                                                 |
| ⭐  | `git pl`    | `git pull`                                        |                                                 |
| ⭐  | `git plr`   | `git pull --rebase`                               |                                                 |
| ⭐  | `git plra`  | `git pull --rebase --autostash`                   |                                                 |
| ➖  | `git plo`   | `git pull origin`                                 |                                                 |
| ➖  | `git pls`   | `git pull upstream`                               |                                                 |
| ⭐  | `git ps`    | `git push`                                        |                                                 |
| ⭐  | `git psf`   | `git push --force`                                |                                                 |
| ⭐  | `git psup`  | `git push --set-upstream origin`                  |                                                 |
| ➖  | `git pso`   | `git push origin --all && git push origin --tags` |                                                 |
| ⭐  | `git pss`   | `git push upstream`                               |                                                 |
| ⭐  | `git re`    | `git remote`                                      | Nos permite ver todos los repositorios remotos. |
| ⭐  | `git rev`   | `git remote -v`                                   | Nos permite ver todos los repositorios remotos. |
| ⭐  | `git rea`   | `git remote add`                                  |                                                 |
| ⭐  | `git rerm`  | `git remote remove`                               |                                                 |
| ⭐  | `git remv`  | `git remote rename`                               |                                                 |
| ➖  | `git reset` | `git remote set-url`                              |                                                 |
| ➖  | `git reup`  | `git remote update`                               |                                                 |
| ⭐  | `git tg`    | `git tag`                                         | Lista los tags o <nameTag> crea una nueva tag   |
| ⭐  | `git tgd`   | `git tag -d`                                      | Elimina un tag                                  |

### Git Utils

|     | Alias      | Comando                                                  | Descripcion                                                     |
| --- | ---------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| ⭐  | `git rlog` | `git reflog`                                             |                                                                 |
| ⭐  | `git log1` | `log --graph --decorate --abbrev-commit --all --oneline` |                                                                 |
| ➖  | `git log4` | `git log --stat`                                         |                                                                 |
| ➖  | `git ls`   | `git ls-files -v`                                        | Lista todos los archivos del working dir                        |
| ➖  | `git lsm`  | `git ls-files -v -m`                                     | Lista archivos modificados del working dir                      |
| ➖  | `git lsd`  | `git ls-files -v -d`                                     | Lista archivos eliminados del working dir                       |
| ➖  | `--- ---`  | `git am`                                                 | aplica una serie de parches                                     |
| ➖  | `--- ---`  | `git apply`                                              | aplica un parche a archivos y/o al índice                       |
| ➖  | `git sec`  | `git bisect`                                             | Ayuda a encontrar fallos en codigo, partiendo de un commit y va |
| ➖  | `git secb` | `git bisect bad`                                         |                                                                 |
| ➖  | `git secg` | `git bisect good`                                        |                                                                 |
| ➖  | `git secr` | `git bisect reset`                                       |                                                                 |
| ➖  | `git secs` | `git bisect start`                                       |                                                                 |
| ➖  | `git bl`   | `git blame -w -e -c`                                     | Identifica el autor de cada linea de un archivo                 |
| ⭐  | `git us`   | `git shortlog --summary -e`                              | Lista los contribuidores ordenados alfabeticamente              |
| ⭐  | `git usc`  | `git shortlog -e`                                        | Lista los contribuidores ordenados alfabeticamente              |
| ⭐  | `git usn`  | `git shortlog --summary -n -e`                           | Lista los contribuidores ordenados por numero de commits        |
| ➖  | `git hh`   | `git help`                                               |                                                                 |
| ⭐  | `git wt`   | `git worktree`                                           |                                                                 |
| ⭐  | `git wtls` | `git worktree list`                                      |                                                                 |
| ⭐  | `git wtmv` | `git worktree move`                                      |                                                                 |
| ⭐  | `git wtrm` | `git worktree remove`                                    |                                                                 |

## Alias for .gitconfig

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

```
  i = init
  cf = config
  cfl = config --list
  cfla = config --get-regexp alias
  cflu = config --get-regexp user
  cfun = config user.name
  cfue = config user.email
  st = status
  sts = status --short
  stb = status --short --branch
  df = diff --word-diff
  dfs = diff --word-diff --staged
  a = add
  aa = add --all
  ap = add --patch
  au = add --update
  rs = restore
  rsa = restore .
  rss = reset
  rsh = reset --hard
  clean = clean -f -d
  sh = stash
  shl = stash list
  shall = stash --all
  shu = stash --include-untracked
  sha = stash apply
  shd = stash drop
  shcl = stash clear
  shs = stash show --patch
  cm = commit --message
  cmx = commit --no-verify --message
  cma = commit --no-edit --amend
  cmax = commit --no-verify --no-edit --amend
  cmae = commit --amend
  rev = revert HEAD
  revn = revert -n HEAD
  b = branch
  br = branch --remote
  ba = branch --all
  bm = branch --no-merged
  bd = branch --delete
  bdf = branch --delete --force
  brn = branch -m
  bsup = branch --set-upstream-to=
  sw = switch
  swx = switch --discard-changes
  swc = switch -c
  ck = checkout
  ckb = checkout -b
  mg = merge
  mgs = merge --squash
  chp = cherry-pick
  rb = rebase
  rbi = rebase -i
  cl = clone --recurse-submodules
  fh = fetch
  fha = fetch --all --prune
  pl = pull
  plr = pull --rebase
  plra = pull --rebase --autostash
  plo = pull origin
  pls = pull upstream
  ps = push
  psf = push --force
  psup = push --set-upstream origin
  pso = push origin --all && git push origin --tags
  pss = push upstream
  re = remote
  rev = remote -v
  rea = remote add
  rerm = remote remove
  remv = remote rename
  reset = remote set-url
  reup = remote update
  tg = tag
  tgd = tag -d
  rlog = reflog
  rlog1 = reflog --pretty=oneline --decorate --abbrev-commit
  rlog2 = reflog --pretty=oneline --decorate --abbrev-commit --all
  log0 = log --graph --decorate --abbrev-commit --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset) %C(white)%s%C(reset) %C(dim white)- %ae%C(reset)'
  log1 = log --graph --decorate --abbrev-commit --all --oneline
  log2 = log --graph --decorate --all --oneline
  log3 = log --decorate --all --oneline
  log4 = log --all --oneline
  log5 = log --stat
  ls = ls-files -v
  lsm = ls-files -v -m
  lsd = ls-files -v -d
  sec = bisect
  secb = bisect bad
  secg = bisect good
  secr = bisect reset
  secs = bisect start
  bl = blame -w -e -c
  us = shortlog --summary -e
  usc = shortlog -e
  usn = shortlog --summary -n -e
  hh = help
  wt = worktree
  wtls = worktree list
  wtmv = worktree move
  wtrm = worktree remove
```
