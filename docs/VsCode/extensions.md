# Extenciones

Las [Extensions Marketplace](https://marketplace.visualstudio.com/vscode) es un ecosistema de lo mas fuetes que tiene **VsCode**

## 📝 Instrucciones de Instalación

Para instalar todas estas extensiones automáticamente:

1. Guarda el archivo `extensions.json` en la carpeta `.vscode` de tu proyecto
2. Abre el proyecto en VSCode
3. Aparecerá una notificación para instalar las extensiones recomendadas
4. Haz clic en **Install All** para instalar todas las extensiones

<details>
  <summary>
  Listado Completo de Extensiones
  </summary>

```json title="extensions.json"
{
  "recommendations": [
    "adpyke.codesnap",
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "christian-kohler.path-intellisense",
    "dbaeumer.vscode-eslint",
    "docker.docker",
    "esbenp.prettier-vscode",
    "funkyremi.vscode-google-translate",
    "github.copilot",
    "github.copilot-chat",
    "github.vscode-github-actions",
    "gruntfuggly.activitusbar",
    "gruntfuggly.todo-tree",
    "kisstkondoros.vscode-gutter-preview",
    "meganrogge.template-string-converter",
    "mhutchie.git-graph",
    "mikestead.dotenv",
    "ms-azuretools.vscode-containers",
    "ms-azuretools.vscode-docker",
    "ms-ceintl.vscode-language-pack-es",
    "ms-python.debugpy",
    "ms-python.python",
    "ms-python.vscode-pylance",
    "ms-vscode-remote.remote-containers",
    "ms-vscode-remote.remote-wsl",
    "naumovs.color-highlight",
    "pflannery.vscode-versionlens",
    "pkief.material-icon-theme",
    "redhat.vscode-yaml",
    "ritwickdey.liveserver",
    "usernamehw.errorlens",
    "wix.vscode-import-cost",
    "yoavbls.pretty-ts-errors",
    "yzhang.markdown-all-in-one"
  ]
}
```

</details>

## 📸 Captura y Presentación

### CodeSnap

**ID:** `adpyke.codesnap`  
**Descripción:** Toma capturas de pantalla de tu código con un diseño elegante y personalizable. Ideal para documentación, tutoriales y presentaciones.  
**Documentación:** [codesnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)

## 🎨 Interfaz y Productividad

### Material Icon Theme

**ID:** `pkief.material-icon-theme`  
**Descripción:** Proporciona iconos coloridos y modernos para archivos y carpetas basados en Material Design, mejorando la experiencia visual del explorador.  
**Documentación:** [material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

```json title="settings.json"
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.folders.associations": {
    "sdk": "Controller"
  },
  "material-icon-theme.files.associations": {
    "index.ts": "Purescript"
  },
```

### Activitus Bar

**ID:** `gruntfuggly.activitusbar`  
**Descripción:** Barra de actividades personalizable que permite agregar botones y accesos rápidos a comandos.  
**Documentación:** [activitusbar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

<details>
  <summary>
  settins.json
  </summary>

```json title="settins.json"
{
  "activitusbar.views": [
    {
      "name": "command.workbench.action.reloadWindow",
      "codicon": "refresh",
      "tooltip": "refresh windows"
    },
    {
      "name": "settings",
      "codicon": "gear"
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
      "name": "command.codesnap.start",
      "codicon": "device-camera",
      "tooltip": "Snap Code"
    },
    {
      "name": "command.editor.action.sortLinesAscending",
      "codicon": "arrow-circle-down",
      "tooltip": "Ordenar Ascendente"
    },
    {
      "name": "command.editor.action.sortLinesDescending",
      "codicon": "arrow-circle-up",
      "tooltip": "Ordenar Descendente"
    },
    {
      "name": "command.editor.foldAll",
      "codicon": "group-by-ref-type",
      "tooltip": "Colapsar Todo"
    },
    {
      "name": "command.editor.unfoldAll",
      "codicon": "ungroup-by-ref-type",
      "tooltip": "Expantir Todo"
    },
    {
      "codicon": "kebab-vertical"
    },
    {
      "name": "command.editor.action.transformToLowercase",
      "codicon": "symbol-key",
      "tooltip": "Transformar a Minusculas"
    },
    {
      "name": "command.editor.action.transformToUppercase",
      "codicon": "preserve-case",
      "tooltip": "Transformar a Mayusculas"
    },
    {
      "name": "command.editor.action.transformToCamelcase",
      "codicon": "text-size",
      "tooltip": "Transformar a camelcase"
    },
    {
      "name": "command.editor.action.transformToTitlecase",
      "codicon": "horizontal-rule",
      "tooltip": "Transformar a Title Case"
    },
    {
      "name": "command.editor.action.transformToSnakecase",
      "codicon": "whole-word",
      "tooltip": "transformar a snake_case"
    },
    {
      "name": "command.editor.action.transformToKebabcase",
      "codicon": "mirror",
      "tooltip": "transformar a kebab-case"
    }
  ]
}
```

</details>

### Todo Tree

**ID:** `gruntfuggly.todo-tree`  
**Descripción:** Encuentra y organiza comentarios TODO, FIXME y otros en tu código con una vista de árbol navegable.  
**Documentación:** [todo-tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

<details>
  <summary>
  settins.json
  </summary>

```json title="settins.json"
    "todo-tree.filtering.excludeGlobs": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/.git/**",
    "**/.vscode/**",
    "**/coverage/**",
    "**/*.min.js",
    "**/*.min.css",
    "**/vendor/**"
  ],
  "todo-tree.general.tags": [
    "//!",
    "// BUG",
    "//?",
    "// INFO",
    "//-",
    "// DOC",
    "//#",
    "// FIX",
    "//>",
    "// TODO",
    "// "
  ],
  "todo-tree.general.tagGroups": {
    "//!": ["// BUG", "//!"],
    "//?": ["// INFO", "//?"],
    "//-": ["// DOC", "//-"],
    "//#": ["// FIX", "//#"],
    "//>": ["// TODO", "//>"]
  },
  "todo-tree.highlights.customHighlight": {
    "//!": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#DC3545",
      "iconColour": "#DC3545",
      "icon": "bug",
      "gutterIcon": true,
      "type": "text"
    },
    "//?": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#007BFF",
      "iconColour": "#007BFF",
      "icon": "question",
      "gutterIcon": true,
      "type": "text"
    },
    "//-": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#6C757D",
      "iconColour": "#6C757D",
      "icon": "note",
      "gutterIcon": true,
      "type": "text"
    },
    "//#": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#FFC107",
      "iconColour": "#FFC107",
      "icon": "alert",
      "gutterIcon": true,
      "type": "text"
    },
    "//>": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#673AB7",
      "iconColour": "#673AB7",
      "icon": "checklist",
      "gutterIcon": true,
      "type": "text"
    },
    "// ": {
      "opacity": 100,
      "fontWeight": "bold",
      "fontStyle": "oblique",
      "foreground": "#FFF",
      "background": "#397A3B",
      "iconColour": "#397A3B",
      "icon": "comment",
      "gutterIcon": true,
      "type": "text",
      "hideFromTree": true
    }
  }
```

</details>

### Image Preview

**ID:** `kisstkondoros.vscode-gutter-preview`  
**Descripción:** Muestra vista previa de imágenes en el gutter del editor cuando referencias archivos de imagen.  
**Documentación:** [vscode-gutter-preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)

### Color Highlight

**ID:** `naumovs.color-highlight`  
**Descripción:** Resalta colores en CSS, HTML y otros archivos mostrando el color real como fondo.  
**Documentación:** [color-highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

```json title="settins.json"
{
  "color-highlight.markerType": "underline"
}
```

## 🚀 Frameworks y Lenguajes

### Astro

**ID:** `astro-build.astro-vscode`  
**Descripción:** Soporte oficial para el framework Astro con sintaxis highlighting, IntelliSense y herramientas de desarrollo.  
**Documentación:** [astro-vscode](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

### Tailwind CSS IntelliSense

**ID:** `bradlc.vscode-tailwindcss`  
**Descripción:** Autocompletado inteligente, sintaxis highlighting y linting para Tailwind CSS con vista previa de clases.  
**Documentación:** [vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Python

**ID:** `ms-python.python`  
**Descripción:** Extensión oficial de Python con soporte completo para debugging, linting, IntelliSense, formateo y ejecución de código.  
**Documentación:** [python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

### Pylance

**ID:** `ms-python.vscode-pylance`  
**Descripción:** Servidor de lenguaje Python de alta velocidad con análisis estático avanzado, type checking y autocompletado mejorado.  
**Documentación:** [pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

### Python Debugger

**ID:** `ms-python.debugpy`  
**Descripción:** Depurador oficial de Python con breakpoints, inspección de variables y debugging remoto.  
**Documentación:** [debugpy](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)

## 🔧 Herramientas de Desarrollo

### Path Intellisense

**ID:** `christian-kohler.path-intellisense`  
**Descripción:** Autocompletado inteligente para rutas de archivos y directorios mientras escribes imports y referencias.  
**Documentación:** [path-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### ESLint

**ID:** `dbaeumer.vscode-eslint`  
**Descripción:** Integra ESLint en VSCode para análisis de código JavaScript/TypeScript con detección de errores y autofix.  
**Documentación:** [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Prettier - Code formatter

**ID:** `esbenp.prettier-vscode`  
**Descripción:** Formateador de código automático que soporta múltiples lenguajes con configuración personalizable.  
**Documentación:** [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Live Server

**ID:** `ritwickdey.liveserver`  
**Descripción:** Servidor web local con recarga automática para desarrollo web estático y dinámico.  
**Documentación:** [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Error Lens

**ID:** `usernamehw.errorlens`  
**Descripción:** Mejora la visualización de errores, warnings y sugerencias mostrándolos inline en el código.  
**Documentación:** [errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

### Import Cost

**ID:** `wix.vscode-import-cost`  
**Descripción:** Muestra el tamaño de los paquetes importados en JavaScript/TypeScript para optimizar el bundle.  
**Documentación:** [vscode-import-cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

### Pretty TypeScript Errors

**ID:** `yoavbls.pretty-ts-errors`  
**Descripción:** Hace que los errores de TypeScript sean más legibles y fáciles de entender con mejor formato.  
**Documentación:** [pretty-ts-errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

### Template String Converter

**ID:** `meganrogge.template-string-converter`  
**Descripción:** Convierte automáticamente strings a template literals cuando agregas ${} en JavaScript/TypeScript.  
**Documentación:** [template-string-converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)

### Version Lens

**ID:** `pflannery.vscode-versionlens`  
**Descripción:** Muestra la versión actual y las actualizaciones disponibles de las dependencias en package.json.  
**Documentación:** [vscode-versionlens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

## 🐳 Docker y Contenedores

### Docker

**ID:** `docker.docker`  
**Descripción:** Extensión oficial de Docker para gestionar contenedores, imágenes y compose files con IntelliSense.  
**Documentación:** [vscode-docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

### Azure Container Tools

**ID:** `ms-azuretools.vscode-containers`  
**Descripción:** Herramientas para desarrollo con contenedores en Azure, incluyendo deployment y gestión.  
**Documentación:** [vscode-containers](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-containers)

### Docker (Azure Tools)

**ID:** `ms-azuretools.vscode-docker`  
**Descripción:** Extensión completa para Docker con soporte para Azure Container Registry y Azure Container Instances.  
**Documentación:** [vscode-docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

## 🤖 IA y Asistentes

### GitHub Copilot

**ID:** `github.copilot`  
**Descripción:** Asistente de IA que sugiere código en tiempo real basado en contexto y comentarios naturales.  
**Documentación:** [GitHub.copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

### GitHub Copilot Chat

**ID:** `github.copilot-chat`  
**Descripción:** Interfaz de chat para interactuar con GitHub Copilot mediante conversaciones naturales sobre código.  
**Documentación:** [GitHub.copilot-chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

## 🔧 Git y Control de Versiones

### Git Graph

**ID:** `mhutchie.git-graph`  
**Descripción:** Visualiza el historial de git con un grafo interactivo que muestra branches, commits y merges.  
**Documentación:** [git-graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

### GitHub Actions

**ID:** `github.vscode-github-actions`  
**Descripción:** Extensión oficial para gestionar GitHub Actions con autocompletado y validación de workflows.  
**Documentación:** [vscode-github-actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)

## 🌐 Desarrollo Remoto

### Remote - Containers

**ID:** `ms-vscode-remote.remote-containers`  
**Descripción:** Desarrolla dentro de contenedores Docker con acceso completo a todas las herramientas de VSCode.  
**Documentación:** [remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Remote - WSL

**ID:** `ms-vscode-remote.remote-wsl`  
**Descripción:** Desarrolla en Windows Subsystem for Linux directamente desde VSCode en Windows.  
**Documentación:** [remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

## 📄 Formatos de Archivo

### DotENV

**ID:** `mikestead.dotenv`  
**Descripción:** Soporte para archivos .env con syntax highlighting para variables de entorno.  
**Documentación:** [dotenv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

### YAML

**ID:** `redhat.vscode-yaml`  
**Descripción:** Soporte completo para YAML con validación, autocompletado y documentación inline.  
**Documentación:** [vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

### Markdown All in One

**ID:** `yzhang.markdown-all-in-one`  
**Descripción:** Herramientas completas para Markdown incluyendo preview, shortcuts, table of contents y más.  
**Documentación:** [markdown-all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## 🌍 Localización y Utilidades

### Spanish Language Pack

**ID:** `ms-ceintl.vscode-language-pack-es`  
**Descripción:** Paquete de idioma español oficial de Microsoft para VSCode con interfaz completamente traducida.  
**Documentación:** [vscode-language-pack-es](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es)

### Google Translate

**ID:** `funkyremi.vscode-google-translate`  
**Descripción:** Traduce texto seleccionado usando Google Translate directamente desde el editor.  
**Documentación:** [vscode-google-translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)

```json title="settins.json"
{
  "vscodeGoogleTranslate.preferredLanguage": "English"
}
```
