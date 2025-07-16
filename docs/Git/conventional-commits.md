# Conventional Commits

Existe una especificación [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) para dar significado y semanticas a los mensajes que usamos en los commits, haciéndolos mas legibles para máquinas y humanos.

## Ventajas

Esto nos trae grandes ventajas al momento de versionar nuestro codigo con Git.

- Permite la generación automática del fichero **CHANGELOG**.
- Basado en este estandar, se genera otro, [SemVer](https://semver.org/) el cual basado que [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) entiende la semantica y asi mismo le da sentido a nuestras versiones.
- Comunican la naturaleza de los cambios a los demás integrantes del equipo o cualquier persona interesada.
- Hacer más fácil a otras personas contribuir al proyecto al permitirles explorar el historial de commits de una forma más estructurada.

| Tipo             | Estructura                       |
| ---------------- | -------------------------------- |
| Header           | [type][scope]: [emoji] [subject] |
| Body             | Add issues to close...           |
| BREAKING CHANGE: | Long description                 |

:::info

El contenido de los mensajes debe ser en ingles

:::

## Tipos de commits

| Type   | EMOJI            | DESCRIPTION                            |
| ------ | ---------------- | -------------------------------------- |
| feat   | ✨ - sparkles    | Introducing new features               |
| feat   | 🎉 - tada        | Initial commit or first implementation |
| fix    | 🐛 - bug         | Fixing bugs                            |
| fix    | 🚑 - ambulance   | Hotfix bugs                            |
| docs   | 📝 - memo        | Adding or updating documentation       |
| style  | 🎨 - art         | Adding or updating UI and styling      |
| perf   | ♻️ - recycle     | Refactoring code                       |
| perf   | ⚡ - zap         | Improving performance                  |
| test   | 🧪 - test_tube   | Adding tests                           |
| build  | 📂 - file_folder | Improving structure or format of code  |
| build  | 🔨 - hammer      | Changes to build system                |
| chore  | 🔧 - wrench      | Adding or updating configuration files |
| chore  | 🔖 - bookmark    | Releasing or versioning tags           |
| revert | ⏪ - rewind      | Reverting changes                      |
| remove | 🔥 - fire        | Removing code or files                 |

## CommitLint

[commitlint.js](https://commitlint.js.org/guides/getting-started.html) Sirve para validar la integridad de mensajes de confirmación dando retroalimentación corta al revisar los mensajes de confirmación justo en el momento en que se crean.

```js title="commitlint.config.js"
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'header-max-length': [2, 'always', 120],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'perf', 'test', 'build', 'chore', 'revert', 'remove'],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['root', 'project']],
  },
};
```

## Commitizen

[Commitizen](https://commitizen-tools.github.io/commitizen/) es una potente herramienta de gestión de mensajes de git que ayuda a los equipos a mantener mensajes de confirmación consistentes.

## Cz-Emoji

[cz-emoji](https://github.com/ngryman/cz-emoji) es una extecion se **Commitizen** que nos pertime manejar una configuracion extendida y un manejo de emojis de forma mucho mas amigable, combinar estas dos hace que la semantica sea muy agradable y entendida al momento de visualizar cambios en el repositorio

```json title=".czrc"
{
  "path": "cz-emoji",
  "config": {
    "cz-emoji": {
      "allowBreakingChanges": ["feat", "fix"],
      "skipQuestions": ["issues"],
      "subjectMaxLength": 70,
      "format": "{type}{scope}: {emoji} {subject}",
      "scopes": ["root", "project"],
      "questions": {
        "type": "Tipo de cambio:",
        "scope": "Alcance del cambio",
        "subject": "Descripción corta",
        "body": "issues relacionadas",
        "breaking": "Descripcion BREAKING CHANGE"
      },
      "types": [
        {
          "emoji": "✨",
          "code": ":sparkles:",
          "description": "Introducing new features.",
          "name": "feat"
        },
        {
          "emoji": "🎉",
          "code": ":tada:",
          "description": "Initial commit or first implementation.",
          "name": "feat"
        },
        {
          "emoji": "🐛",
          "code": ":bug:",
          "description": "Fixing bugs.",
          "name": "fix"
        },
        {
          "emoji": "🚑",
          "code": ":ambulance:",
          "description": "Hotfix bugs.",
          "name": "fix"
        },
        {
          "emoji": "📝",
          "code": ":memo:",
          "description": "Adding or updating documentation.",
          "name": "docs"
        },
        {
          "emoji": "🎨",
          "code": ":art:",
          "description": "Adding or updating UI and styling.",
          "name": "style"
        },
        {
          "emoji": "♻️",
          "code": ":recycle:",
          "description": "Refactoring code.",
          "name": "perf"
        },
        {
          "emoji": "⚡",
          "code": ":zap:",
          "description": "Improving performance.",
          "name": "perf"
        },
        {
          "emoji": "🧪",
          "code": ":test_tube:",
          "description": "Adding tests.",
          "name": "test"
        },
        {
          "emoji": "📂",
          "code": ":file_folder:",
          "description": "Improving structure or format of code.",
          "name": "build"
        },
        {
          "emoji": "🔨",
          "code": ":hammer:",
          "description": "Changes to build system.",
          "name": "build"
        },
        {
          "emoji": "🔧",
          "code": ":wrench:",
          "description": "Adding or updating configuration files.",
          "name": "chore"
        },
        {
          "emoji": "🔖",
          "code": ":bookmark:",
          "description": "Releasing or versioning tags.",
          "name": "chore"
        },
        {
          "emoji": "⏪",
          "code": ":rewind:",
          "description": "Reverting changes.",
          "name": "revert"
        },
        {
          "emoji": "🔥",
          "code": ":fire:",
          "description": "Removing code or files.",
          "name": "remove"
        }
      ]
    }
  }
}
```

## Install

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

```bash
pnpm add -D commitizen cz-emoji
```

```bash
pnpm pkg set config.commitizen.path="cz-emoji"
```

```json title="package.json"
{
  "devDependencies": {
    "@commitlint/cli": "^19.8.1",
    "@commitlint/config-conventional": "^19.8.1",
    "commitizen": "^4.3.1",
    "cz-emoji": "1.3.2-canary.2"
  },
  "config": {
    "commitizen": {
      "path": "cz-emoji"
    }
  }
}
```
