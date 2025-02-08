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
- [Terminal](#terminal)
  - [Windows](#windows)
    - [Cambiar Terminal](#cambiar-terminal)
  - [Sistemas Unix (Linux/MACos)](#sistemas-unix-linuxmacos)

# Terminal

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

## Windows

| Comando                                 | Descripcion                                         |
| --------------------------------------- | --------------------------------------------------- |
| `echo text`                             | imprime en consola un valor                         |
| `cd [PATH]`                             | Change directory                                    |
| `dir ~ ls`                              | Listar directorio                                   |
| `tree`                                  | Listar directorio y su contenido de formar de arbol |
| `pwd`                                   | Directorio Actual                                   |
| `mkdir [name/ "name oter"] [other dir]` | Crear directorio                                    |
| `ni [name/ "name oter"] [other file]`   | Crear file                                          |
| `cp fileA fileB`                        | Copia un archivo o carpeta en uno nuevo             |
| `mv file Path`                          | Mueve un archivo o carpeta en una ruta o renombra   |
| `rm file`                               | Eliminar archivos                                   |
| `rm -r[f] path`                         | Eliminar carpetas recursivamente                    |
| `Ctrl + c`                              | Cancela cualquier proceso                           |
| `Command > file`                        | Redirecciones de Output creando archivo             |
| `Command >> file`                       | Redirecciones de Output concatenando archivo        |
| `Command 2> file`                       | Redirecciones de errores                            |
| `Get-ChildItem ENV:`                    | Variables de entorno                                |
| `ipconfig`                              | informacion de red                                  |
| `ping www.google.com`                   | Establece conexion con el sitio                     |

### Cambiar Terminal

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
New-Item -Path $PROFILE -Type File -Force
```

- Abrimos nuestro archivo

```bash
notepad $PROFILE
```

- Configuramos nuestra invocacion inicial, que llame a `oh-my-posh`

```bash
oh-my-posh init pwsh | Invoke-Expression
```

- Despues de esto, ya podras cerrar tu terminal y volverla a abrir, para encontrar el resultado deseado con el theme por defecto
- Si queremos cambiar el theme de onMyPosh, debemos descargar los temas disponibles y luego actualizar nuestro archivo profile

```bash
Get-PoshThemes
```

- Luego debes de actualizar tu archivo de la siguiente manera, cambiando al nombre del tema que requieras de la lista

```bash
oh-my-posh init pwsh --config 'C:\Users\jasab\AppData\Local\Programs\oh-my-posh\themes\jandedobbeleer.omp.json' | Invoke-Expression
```

- Puedes tambien tener tu propio archivo personalizado .json para esta finalidad

```bash
oh-my-posh init pwsh --config 'C:\Github\profile\ohmyposh\jasvdev.omp.json' | Invoke-Expression
```

```json
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "alignment": "left",
      "segments": [
        {
          "background": "#0077c2",
          "foreground": "#ffffff",
          "leading_diamond": "\ue0b6",
          "style": "diamond",
          "template": " {{ .Name }} ",
          "type": "shell"
        },
        {
          "background": "#ef5350",
          "foreground": "#FFFB38",
          "properties": {
            "root_icon": "\uf292"
          },
          "style": "diamond",
          "template": "<parentBackground>\ue0b0</> \uf0e7 ",
          "type": "root"
        },
        {
          "background": "#444444",
          "foreground": "#E4E4E4",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "style": "full"
          },
          "style": "powerline",
          "template": " {{ .Path }} ",
          "type": "path"
        },
        {
          "background": "#0077c2",
          "foreground": "#ffffff",
          "background_templates": [
            "{{ if or (.Working.Changed) (.Staging.Changed) }}#0077c2{{ end }}",
            "{{ if and (gt .Ahead 0) (gt .Behind 0) }}#0077c2{{ end }}",
            "{{ if gt .Ahead 0 }}#C792EA{{ end }}",
            "{{ if gt .Behind 0 }}#C792EA{{ end }}"
          ],
          "powerline_symbol": "\ue0b0",
          "properties": {
            "branch_icon": "\ue725 ",
            "fetch_status": true,
            "fetch_upstream_icon": true
          },
          "style": "powerline",
          "template": " {{ .HEAD }} {{ if .Working.Changed }}{{ .Working.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Staging.Changed }}<#ef5350> \uf046 {{ .Staging.String }}</>{{ end }} ",
          "type": "git"
        }
      ],
      "type": "prompt"
    },
    {
      "alignment": "right",
      "segments": [
        {
          "background": "#3C873A",
          "foreground": "#E4E4E4",
          "leading_diamond": " \ue0b6",
          "style": "diamond",
          "template": "\ue718 {{ if .PackageManagerIcon }}{{ .PackageManagerIcon }} {{ end }}{{ .Full }}",
          "trailing_diamond": "\ue0b4",
          "type": "node"
        },
        {
          "background": "transparent",
          "foreground": "#ffffff",
          "invert_powerline": true,
          "leading_diamond": " \ue0b6",
          "style": "diamond",
          "template": " \ue641 {{ .CurrentDate | date .Format }} ",
          "trailing_diamond": "\ue0b4",
          "type": "time"
        }
      ],
      "type": "prompt"
    },
    {
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "foreground": "#e0f8ff",
          "foreground_templates": ["{{ if gt .Code 0 }}#ef5350{{ end }}"],
          "properties": {
            "always_enabled": true
          },
          "style": "plain",
          "template": "\u276f ",
          "type": "status"
        }
      ],
      "type": "prompt"
    }
  ],
  "version": 2
}
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
Set-PSReadLineOption -PredictionViewStyle ListView
```

## Sistemas Unix (Linux/MACos)

| Comando                                  | Descripcion                                                       |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `echo text`                              | imprime en consola un valor                                       |
| `cd [PATH]`                              | Change directory                                                  |
| `ls [-l, -la,-lh]`                       | Listar directorio, detallado, detallado ocultos, detallado Humano |
| `tree`                                   | Listar directorio y su contenido de formar de arbol               |
| `pwd`                                    | Directorio Actual                                                 |
| `mkdir [name/ "name oter"] [other dir]`  | Crear directorio                                                  |
| `touch [name/ "name oter"] [other file]` | Crear file                                                        |
| `cp fileA fileB`                         | Copia un archivo o carpeta en uno nuevo                           |
| `mv file Path`                           | Mueve un archivo o carpeta en una ruta o renombra                 |
| `rm file`                                | Eliminar archivos                                                 |
| `rm -r[f] path`                          | Eliminar carpetas recursivamente                                  |
| `Cmd + c`                                | Cancela cualquier proceso                                         |
| `Command > file`                         | Redirecciones de Output creando archivo                           |
| `Command >> file`                        | Redirecciones de Output concatenando archivo                      |
| `Command 2> file`                        | Redirecciones de errores                                          |
| `printenv`                               | Variables de entorno                                              |
| `ifconfig`                               | informacion de red                                                |
| `ping www.google.com`                    | Establece conexion con el sitio                                   |
