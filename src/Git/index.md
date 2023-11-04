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
  - [Comands](#comands)
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
  - [Doc's](#docs)
  - [Tabla de alias](#tabla-de-alias)
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

## Comands

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

| Command Bash Console | Description                             |
| -------------------- | --------------------------------------- |
| `ls -la`             | Ver los archivos del working directory. |
| `touch filename.ext` | Crea un archivo con la extencion.       |
| `mkdir newfolder`    | Crea una nueva carpeta.                 |
| `rm filename.ext`    | Remueve un archivo.                     |
| `rm -rf newfolder`   | Elimina una carpeta.                    |

| Command Git Setup/Config                                                       | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git --version`                                                                | version del git.                                                                                                                                                                                                                                                                                              |
| `git init`                                                                     | Creará un nuevo repositorio local GIT. Usando git init [nombre del proyecto] También puedes crear un repositorio dentro de un directorio especificando el nombre del proyecto.                                                                                                                                |
| `git clone`                                                                    | Lo usas para clonar un repositorio.                                                                                                                                                                                                                                                                           |
| `git gc`                                                                       | Activa el garbage colector de GIT.                                                                                                                                                                                                                                                                            |
| `git config`                                                                   | Lo usas para establecer una configuración específica de usuario, podría ser el email, usuario o alias de manera local en el repositorio.                                                                                                                                                                      |
| `git config --list`                                                            | lista la configuracion.                                                                                                                                                                                                                                                                                       |
| `git config user.name "name"`                                                  | Nos permite configurar un usuario y un email para los commits, si se usa la bandera `--global` se configura de forma global.                                                                                                                                                                                  |
| `git config user.email "emai"`                                                 | Nos permite configurar un usuario y un email para los commits, si se usa la bandera `--global` se configura de forma global.                                                                                                                                                                                  |
| `git config --global`                                                          | Lo usas para establecer una configuración específica de usuario, podría ser el email, usuario o alias de manera global para la maquina que tiene git instalado.                                                                                                                                               |
| `git config --global alias.nameCommand 'log --oneline decorate --all --graph'` | Creando un **COMANDO PERSONALIZADO** un alias con el nombre "nameCommand" con las instrucciones de log, importante no se usa la palabra git dentro de los alias. Tambien se aclara que de un alias, se puede seguir enviando flags naturales del comando que empaqueta el alias y se ejecuta de forma natural |
| `git config --global --unset alias.nameCommand`                                | Elimina el **COMANDO PERSONALIZADO** alias o la configuracion que se indique                                                                                                                                                                                                                                  |

| Command Git Basic             | Description                                                                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `git status`                  | Lo usas para que muestre la lista de archivos que has cambiado, junto con archivos que serán preparados y confirmados.                                             |
| `git add`                     | Lo usas para agregar archivos al área de de preparación (stage).                                                                                                   |
| `git diff`                    | Muestra el listado total de cambios realizados sobre el working directoryarea.                                                                                     |
| `git diff --staged`           | Muestra el listado total de cambios realizados sobre el stage area.                                                                                                |
| `git diff commitA...commitB`  | Muestra el listado total de cambios entre dos commits o tags o branch.                                                                                             |
| `git commit`                  | Lo usas para crear un cambio que se guardará en el directorio git.                                                                                                 |
| `git commit --ament`          | Lo usas para enmendar el ultimo commit, bien sea para cambiar el mensaje o el contenido de los cambio, lo que se hace es fusionar los cambios de ambos de commits. |
| `git restore file`            | Nos permite restaurar un archivo del working area a su estado original en HEAD.                                                                                    |
| `git restore file`            | Nos permite restaurar un archivo del working area a su estado original en HEAD.                                                                                    |
| `git reset --hard`            | Nos permite resetear estado original en HEAD.                                                                                                                      |
| `git reset HEAD file.txt`     | Nos permite restablecer un archivo el cual ya tiene cambios guardados, en el stage area.                                                                           |
| `git rm Documentation/\*.txt` | Elimina archivos del árbol de trabajo y del índice, recibe expresiones como patrón.                                                                                |
| `git mv <origen> <destino>`   | mueve o cambia el nombre de un archivo o un directorio.                                                                                                            |

| Command Branching and Merging        | Description                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `git branch`                         | Lista las ramas locales.                                                                                                           |
| `git branch -l`                      | Lista las ramas locales.                                                                                                           |
| `git branch --remote`                | Lista las ramas remotas.                                                                                                           |
| `git branch -a`                      | Lista todas las ramas del repositorio.                                                                                             |
| `git branch name`                    | Crea una nueva rama partiendo de la actual con el "name" como nombre.                                                              |
| `git branch -m NameA NameB`          | Reemplaza el nombre de la rama "NameA" por "NameB" o la renombra.                                                                  |
| `git branch -d name`                 | elimina la rama con el nombre "name".                                                                                              |
| `git switch`                         | Nos permite navegar entre ramas o entre los tags o commits facilmente.                                                             |
| `git switch -c name`                 | Nos permite crear y navegar a una rama.                                                                                            |
| `git switch --discard-changes`       | Nos permite movernos de rama y descargar cambios rapidamente.                                                                      |
| `git merge ramaExterna`              | Nos permite fusionar en la rama actual el contenido de una rama externa".                                                          |
| `git tag`                            | Listar los tags locales.                                                                                                           |
| `git tag v0.0.1`                     | Crea un tag y ponerle un nombre facil de buscar a un commit.                                                                       |
| `git tag -d v0.0.1`                  | elimina un tag.                                                                                                                    |
| `git stash -l`                       | Lista los stash almacenados.                                                                                                       |
| `git stash apply idStash`            | aplica los cambios de un stash especifico.                                                                                         |
| `git stash drop idStash`             | elimina el stash especifico.                                                                                                       |
| `git stash branch brachName idStash` | crea una rama nueva apartir del stash especifico.                                                                                  |
| `git stash save "mensaje"`           | Nos permite guardar cambios y limpiar nuestro working area, como un grupo parcial de cambios.                                      |
| `git checkout`                       | Nos permite crear ramas y navegar entre ellas o entre los tags o commits.                                                          |
| `git checkout -b branchName`         | Nos permite crear rama con "branchName" y navegar a ella.                                                                          |
| `git checkout branchName`            | Nos permite navegar a la rama seleccionada.                                                                                        |
| `git checkout -- file.txt`           | Nos permite restablecer el working area actual basado en una rama, tag, archivo de rama o archivo tag del HEAD de cada tag o rama. |

| Command Git Patching                       | Description                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git revert commit`                        | Nos permite revertir todas las lineas de un commit en un nuevo commit.                                                                                  |
| `git revert --no-commit commit`            | Nos permite revertir sin tener que realizar un commit para ello, queda en el working area para hacer mas modificaciones o mas revert's.                 |
| `git revert --continue`                    | para realizar el commit final del revert.                                                                                                               |
| `git rebase <branch-origen> <branch>`      | Vuelva a aplicar commits encima de otra base.                                                                                                           |
| `git rebase --continue`                    | Al poseer conflictos y solucionarlos, del intereactivo y continuar.                                                                                     |
| `git rebase --abort`                       | cancela rebase interactivo.                                                                                                                             |
| `git cherry-pick <commit>`                 | Aplicar un commit especifico.                                                                                                                           |
| `git log`                                  | Listado de commits de forma detallada realizados sobre la rama actual.                                                                                  |
| `git log --oneline`                        | Listado de commits en una linea realizados sobre la rama actual.                                                                                        |
| `git log --oneline -decorate`              | Listado de commits en una linea realizados sobre la rama actual y adicional señala el HEAD y las ramas locales.                                         |
| `git log --oneline -decorate --all`        | Listado de commits en una linea realizados sobre la rama actual y adicional señala el HEAD y las ramas de todo el repositorio.                          |
| `git log --oneline -decorate --all -graph` | Listado de commits en una linea realizados sobre la rama actual y adicional señala el HEAD y las ramas de todo el repositorio con una grafica de ramas. |

| Command Git Remote | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| `git remote`       | Nos permite ver todos los repositorios remotos.                                                                 |
| `git pull`         | Lo usas para fusionar todos los cambios que hiciste en el repositorio local con el directorio de trabajo local. |
| `git fetch origin` | Se usa para fusionar la rama remota con la rama local.                                                          |
| `git push`         | Lo usas para enviar confirmaciones a la rama maestra/principal del repositorio remoto.                          |

| Command Git hacks                               | Description                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `git update-index --assume-unchanged <file>`    | para dejar el archivo en el repositorio pero ignorar cambios futurosremotos. |
| `git update-index --no-assume-unchanged <file>` | para deshacer                                                                |
| `git ls-files -v                                | grep '^h'`                                                                   | para averiguar qué archivos se han configurado de esta manera |

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

## Tabla de alias

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>
| | Comando | Descripcion |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ⭐ | `git ga` | git add |
| ⭐ | `git gaa` | git add --all |
| | `git gapa` | git add --patch |
| | `git gau` | git add --update |
| | `git gav` | git add --verbose |
| | `git gwip` | git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign --message "--wip-- [skip ci]" |
|     | `git gam`       | git am                                                                                                                        |
|     | `git gama`      | git am --abort                                                                                                                |
|     | `git gamc`      | git am --continue                                                                                                             |
|     | `git gamscp`    | git am --show-current-patch                                                                                                   |
|     | `git gams`      | git am --skip                                                                                                                 |
|     | `git gap`       | git apply                                                                                                                     |
|     | `git gapt`      | git apply --3way                                                                                                              |
|     | `git gbs`       | git bisect                                                                                                                    |
|     | `git gbsb`      | git bisect bad                                                                                                                |
|     | `git gbsg`      | git bisect good                                                                                                               |
|     | `git gbsn`      | git bisect new                                                                                                                |
|     | `git gbso`      | git bisect old                                                                                                                |
|     | `git gbsr`      | git bisect reset                                                                                                              |
|     | `git gbss`      | git bisect start                                                                                                              |
|     | `git gbl`       | git blame -w                                                                                                                  |
| ⭐   | `git gb`        | git branch                                                                                                                    |
|     | `git gba`       | git branch --all                                                                                                              |
|     | `git gbd`       | git branch --delete                                                                                                           |
|     | `git gbD`       | git branch --delete --force                                                                                                   |
|     | `git gbm`       | git branch --move                                                                                                             |
|     | `git gbnm`      | git branch --no-merged                                                                                                        |
|     | `git gbr`       | git branch --remote                                                                                                           |
|     | `git ggsup`     | git branch --set-upstream-to=origin/$(git_current_branch) |
| ⭐ | `git gco` | git checkout |
| | `git gcor` | git checkout --recurse-submodules |
| | `git gcb` | git checkout -b |
| | `git gcd` | git checkout $(git_develop_branch)                                                                                            |
|     | `git gcm`       | git checkout $(git_main_branch)                                                                                               |
|     | `git gcp`       | git cherry-pick                                                                                                               |
|     | `git gcpa`      | git cherry-pick --abort                                                                                                       |
|     | `git gcpc`      | git cherry-pick --continue                                                                                                    |
|     | `git gclean`    | git clean --interactive -d                                                                                                    |
|     | `git gcl`       | git clone --recurse-submodules                                                                                                |
|     | `git gcam`      | git commit --all --message                                                                                                    |
|     | `git gcas`      | git commit --all --signoff                                                                                                    |
|     | `git gcasm`     | git commit --all --signoff --message                                                                                          |
|     | `git gcmsg`     | git commit --message                                                                                                          |
|     | `git gcsm`      | git commit --signoff --message                                                                                                |
|     | `git gc`        | git commit --verbose                                                                                                          |
|     | `git gca`       | git commit --verbose --all                                                                                                    |
|     | `git gca`       | git commit --verbose --all --amend                                                                                            |
|     | `git gcan`      | git commit --verbose --all --no-edit --amend                                                                                  |
|     | `git gcans`     | git commit --verbose --all --signoff --no-edit --amend                                                                        |
|     | `git gc`        | git commit --verbose --amend                                                                                                  |
|     | `git gcn`       | git commit --verbose --no-edit --amend                                                                                        |
|     | `git gcs`       | git commit -S                                                                                                                 |
|     | `git gcss`      | git commit -S -s                                                                                                              |
|     | `git gcssm`     | git commit -S -s -m                                                                                                           |
|     | `git gcf`       | git config --list                                                                                                             |
|     | `git gdct`      | git describe --tags $(git rev-list --tags --max-count=1)                                                                      |
|     | `git gd`        | git diff                                                                                                                      |
|     | `git gdca`      | git diff --cached                                                                                                             |
|     | `git gdcw`      | git diff --cached --word-diff                                                                                                 |
|     | `git gds`       | git diff --staged                                                                                                             |
|     | `git gdw`       | git diff --word-diff                                                                                                          |
|     | `git gdv`       | git diff -w "$@" view - |
| | `git gdup` | git diff @{upstream} |
| | `git gdt` | git diff-tree --no-commit-id --name-only -r |
| | `git gf` | git fetch |
| | `git gfa` | git fetch --all --prune |
| | `git gfo` | git fetch origin |
| | `git gg` | git gui citool |
| | `git gga` | git gui citool --amend |
| | `git ghh` | git help |
| | `git glgg` | git log --graph |
| | `git glgga` | git log --graph --decorate --all |
| | `git glgm` | git log --graph --max-count=10 |
| | `git glod` | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' |
| | `git glods` | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short |
| | `git glol` | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' |
| | `git glola` | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all |
| | `git glols` | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --stat |
| | `git glo` | git log --oneline --decorate |
| | `git glog` | git log --oneline --decorate --graph |
| | `git gloga` | git log --oneline --decorate --graph --all |
| | `git glp` | git log --pretty=<format> |
| | `git glg` | git log --stat |
| | `git glgp` | git log --stat --patch |
| | `git gignored` | git ls-files -v grep "^[[:lower:]]" |
| | `git gfg` | git ls-files grep |
| | `git gm` | git merge |
| | `git gma` | git merge --abort |
| | `git gms` | git merge --squash |
| | `git gmom` | git merge origin/$(git_main_branch)                                                                                           |
|     | `git gmum`      | git merge upstream/$(git_main_branch) |
| | `git gmtl` | git mergetool --no-prompt |
| | `git gmtlvim` | git mergetool --no-prompt --tool=vimdiff |
| | `git gl` | git pull |
| | `git gpr` | git pull --rebase |
| | `git gup` | git pull --rebase |
| | `git gupa` | git pull --rebase --autostash |
| | `git gupav` | git pull --rebase --autostash --verbose |
| | `git gupv` | git pull --rebase --verbose |
| | `git ggu` | git pull --rebase origin $(current_branch)                                                                                    |
|     | `git gupom`     | git pull --rebase origin $(git_main_branch)                                                                                   |
|     | `git gupomi`    | git pull --rebase=interactive origin $(git_main_branch)                                                                       |
|     | `git ggpull`    | git pull origin "$(git_current_branch)" |
| | `git ggl` | git pull origin $(current_branch)                                                                                             |
|     | `git gluc`      | git pull upstream $(git_current_branch)                                                                                       |
|     | `git glum`      | git pull upstream $(git_main_branch)                                                                                          |
|     | `git gp`        | git push                                                                                                                      |
|     | `git gpd`       | git push --dry-run                                                                                                            |
|     | `git gpf`       | git push --force                                                                                                              |
|     | `git ggf`       | git push --force origin $(current_branch)                                                                                     |
|     | `git gpf`       | git push --force-with-lease --force-if-includes                                                                               |
|     | `git gpf`       | git push --force-with-lease                                                                                                   |
|     | `git ggfl`      | git push --force-with-lease origin $(current_branch)                                                                          |
|     | `git gpsup`     | git push --set-upstream origin $(git_current_branch)                                                                          |
|     | `git gpsupf`    | git push --set-upstream origin $(git_current_branch) --force-with-lease --force-if-includes                                   |
|     | `git gpsupf`    | git push --set-upstream origin $(git_current_branch) --force-with-lease                                                       |
|     | `git gpv`       | git push --verbose                                                                                                            |
|     | `git gpoat`     | git push origin --all && git push origin --tags                                                                               |
|     | `git gpod`      | git push origin --delete                                                                                                      |
|     | `git ggpush`    | git push origin "$(git_current_branch)" |
| | `git ggp` | git push origin $(current_branch)                                                                                             |
|     | `git gpu`       | git push upstream                                                                                                             |
|     | `git grb`       | git rebase                                                                                                                    |
|     | `git grba`      | git rebase --abort                                                                                                            |
|     | `git grbc`      | git rebase --continue                                                                                                         |
|     | `git grbi`      | git rebase --interactive                                                                                                      |
|     | `git grbo`      | git rebase --onto                                                                                                             |
|     | `git grbs`      | git rebase --skip                                                                                                             |
|     | `git grbd`      | git rebase $(git_develop_branch)                                                                                              |
|     | `git grbm`      | git rebase $(git_main_branch)                                                                                                 |
|     | `git grbom`     | git rebase origin/$(git_main_branch) |
| | `git gr` | git remote |
| | `git grv` | git remote --verbose |
| | `git gra` | git remote add |
| | `git grrm` | git remote remove |
| | `git grmv` | git remote rename |
| | `git grset` | git remote set-url |
| | `git grup` | git remote update |
| | `git grh` | git reset |
| | `git gru` | git reset -- |
| | `git grhh` | git reset --hard |
| | `git grhk` | git reset --keep |
| | `git grhs` | git reset --soft |
| | `git gpristine` | git reset --hard && git clean -dffx |
| | `git groh` | git reset origin/$(git_current_branch) --hard |
| | `git grs` | git restore |
| | `git grss` | git restore --source |
| | `git grst` | git restore --staged |
| | `git gunwip` | git rev-list --max-count=1 --format="%s" HEAD grep -q "--wip--" && git reset HEAD~1 |
| | `git grev` | git revert |
| | `git grm` | git rm |
| | `git grmc` | git rm --cached |
| | `git gcount` | git shortlog --summary -n |
| | `git gsh` | git show |
| | `git gsps` | git show --pretty=short --show-signature |
| | `git gstall` | git stash --all |
| | `git gstu` | git stash --include-untracked |
| | `git gstaa` | git stash apply |
| | `git gstc` | git stash clear |
| | `git gstd` | git stash drop |
| | `git gstl` | git stash list |
| | `git gstp` | git stash pop |
| | `git gsta` | git stash push |
| | `git gsta` | git stash save |
| | `git gsts` | git stash show --patch |
| | `git gst` | git status |
| | `git gss` | git status --short |
| | `git gsb` | git status --short -b |
| | `git gsi` | git submodule init |
| | `git gsu` | git submodule update |
| | `git gsw` | git switch |
| | `git gswc` | git switch -c |
| | `git gswd` | git switch $(git_develop_branch) |
| | `git gswm` | git switch $(git_main_branch) |
| | `git gta` | git tag --annotate |
| | `git gts` | git tag -s |
| | `git gtv` | git tag sort -V |
| | `git gignore` | git update-index --assume-unchanged |
| | `git gunignore` | git update-index --no-assume-unchanged |
| | `git gwch` | git whatchanged -p --abbrev-commit --pretty=medium |
| | `git gwt` | git worktree |
| | `git gwtls` | git worktree list |
| | `git gwtmv` | git worktree move |
| | `git gwtrm` | git worktree remove |

## Alias for .gitconfig

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

```
  ga = add
  gaa = add --all
  gapa = add --patch
  gau = add --update
  gav = add --verbose
  gwip = add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign --message "--wip-- [skip ci]"
  gam = am
  gama = am --abort
  gamc = am --continue
  gamscp = am --show-current-patch
  gams = am --skip
  gap = apply
  gapt = apply --3way
  gbs = bisect
  gbsb = bisect bad
  gbsg = bisect good
  gbsn = bisect new
  gbso = bisect old
  gbsr = bisect reset
  gbss = bisect start
  gbl = blame -w
  gb = branch
  gba = branch --all
  gbd = branch --delete
  gbD = branch --delete --force
  gbm = branch --move
  gbnm = branch --no-merged
  gbr = branch --remote
  ggsup = branch --set-upstream-to=origin/$(git_current_branch)
  gco = checkout
  gcor = checkout --recurse-submodules
  gcb = checkout -b
  gcd = checkout $(git_develop_branch)
  gcm = checkout $(git_main_branch)
  gcp = cherry-pick
  gcpa = cherry-pick --abort
  gcpc = cherry-pick --continue
  gclean = clean --interactive -d
  gcl = clone --recurse-submodules
  gcam = commit --all --message
  gcas = commit --all --signoff
  gcasm = commit --all --signoff --message
  gcmsg = commit --message
  gcsm = commit --signoff --message
  gc = commit --verbose
  gca = commit --verbose --all
  gca = commit --verbose --all --amend
  gcan = commit --verbose --all --no-edit --amend
  gcans = commit --verbose --all --signoff --no-edit --amend
  gc = commit --verbose --amend
  gcn = commit --verbose --no-edit --amend
  gcs = commit -S
  gcss = commit -S -s
  gcssm = commit -S -s -m
  gcf = config --list
  gdct = describe --tags $(git rev-list --tags --max-count=1)
  gd = diff
  gdca = diff --cached
  gdcw = diff --cached --word-diff
  gds = diff --staged
  gdw = diff --word-diff
  gdv = diff -w "$@"  view -
  gdup = diff @{upstream}
  gdt = diff-tree --no-commit-id --name-only -r
  gf = fetch
  gfa = fetch --all --prune
  gfo = fetch origin
  gg = gui citool
  gga = gui citool --amend
  ghh = help
  glgg = log --graph
  glgga = log --graph --decorate --all
  glgm = log --graph --max-count=10
  glod = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'
  glods = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short
  glol = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'
  glola = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all
  glols = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --stat
  glo = log --oneline --decorate
  glog = log --oneline --decorate --graph
  gloga = log --oneline --decorate --graph --all
  glp = log --pretty=<format>
  glg = log --stat
  glgp = log --stat --patch
  gignored = ls-files -v grep "^[[:lower:]]"
  gfg = ls-files grep
  gm = merge
  gma = merge --abort
  gms = merge --squash
  gmom = merge origin/$(git_main_branch)
  gmum = merge upstream/$(git_main_branch)
  gmtl = mergetool --no-prompt
  gmtlvim = mergetool --no-prompt --tool=vimdiff
  gl = pull
  gpr = pull --rebase
  gup = pull --rebase
  gupa = pull --rebase --autostash
  gupav = pull --rebase --autostash --verbose
  gupv = pull --rebase --verbose
  ggu = pull --rebase origin $(current_branch)
  gupom = pull --rebase origin $(git_main_branch)
  gupomi = pull --rebase=interactive origin $(git_main_branch)
  ggpull = pull origin "$(git_current_branch)"
  ggl = pull origin $(current_branch)
  gluc = pull upstream $(git_current_branch)
  glum = pull upstream $(git_main_branch)
  gp = push
  gpd = push --dry-run
  gpf = push --force
  ggf = push --force origin $(current_branch)
  gpf = push --force-with-lease --force-if-includes
  gpf = push --force-with-lease
  ggfl = push --force-with-lease origin $(current_branch)
  gpsup = push --set-upstream origin $(git_current_branch)
  gpsupf = push --set-upstream origin $(git_current_branch) --force-with-lease --force-if-includes
  gpsupf = push --set-upstream origin $(git_current_branch) --force-with-lease
  gpv = push --verbose
  gpoat = push origin --all && git push origin --tags
  gpod = push origin --delete
  ggpush = push origin "$(git_current_branch)"
  ggp = push origin $(current_branch)
  gpu = push upstream
  grb = rebase
  grba = rebase --abort
  grbc = rebase --continue
  grbi = rebase --interactive
  grbo = rebase --onto
  grbs = rebase --skip
  grbd = rebase $(git_develop_branch)
  grbm = rebase $(git_main_branch)
  grbom = rebase origin/$(git_main_branch)
  gr = remote
  grv = remote --verbose
  gra = remote add
  grrm = remote remove
  grmv = remote rename
  grset = remote set-url
  grup = remote update
  grh = reset
  gru = reset --
  grhh = reset --hard
  grhk = reset --keep
  grhs = reset --soft
  gpristine = reset --hard && git clean -dffx
  groh = reset origin/$(git_current_branch) --hard
  grs = restore
  grss = restore --source
  grst = restore --staged
  gunwip = rev-list --max-count=1 --format="%s" HEAD grep -q "--wip--" && git reset HEAD~1
  grev = revert
  grm = rm
  grmc = rm --cached
  gcount = shortlog --summary -n
  gsh = show
  gsps = show --pretty=short --show-signature
  gstall = stash --all
  gstu = stash --include-untracked
  gstaa = stash apply
  gstc = stash clear
  gstd = stash drop
  gstl = stash list
  gstp = stash pop
  gsta = stash push
  gsta = stash save
  gsts = stash show --patch
  gst = status
  gss = status --short
  gsb = status --short -b
  gsi = submodule init
  gsu = submodule update
  gsw = switch
  gswc = switch -c
  gswd = switch $(git_develop_branch)
  gswm = switch $(git_main_branch)
  gta = tag --annotate
  gts = tag -s
  gtv = tag sort -V
  gignore = update-index --assume-unchanged
  gunignore = update-index --no-assume-unchanged
  gwch = whatchanged -p --abbrev-commit --pretty=medium
  gwt = worktree
  gwtls = worktree list
  gwtmv = worktree move
  gwtrm = worktree remove
```
