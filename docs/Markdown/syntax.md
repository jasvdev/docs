---
sidebar_position: 2
---

# Sintaxis Básica

## Encabezados

```markdown
# ♻️ h1

## ♻️ h2

### ♻️ h3

#### ♻️ h4

##### ♻️ h5

###### ♻️ h6
```

---

# ♻️ h1

## ♻️ h2

### ♻️ h3

#### ♻️ h4

##### ♻️ h5

###### ♻️ h6

## Heading Custom ID

```markdown
# My Great Heading { #custom-id }
```

# My Great Heading {#custom-id}

`www.url.com/dcos/#custom-id`

## Énfasis

```markdown
_cursiva_
**negrita**
**_cursiva y negrita_**
~~tachado~~
```

---

_cursiva_

**negrita**

**_cursiva y negrita_**

~~tachado~~

## Listas

**Lista no ordenada:**

```markdown
- Elemento 1
- Elemento 2
  - Subelemento
    - Otro subelemento
- Elemento 3
```

---

- Elemento 1
- Elemento 2
  - Subelemento
    - Otro subelemento
- Elemento 3

**Lista ordenada:**

```markdown
1. Primer elemento
2. Segundo elemento
   1. Segundo primer elemento
      1. Segundo primer primer elemento
3. Tercer elemento
```

---

1. Primer elemento
2. Segundo elemento
   1. Segundo primer elemento
      1. Segundo primer primer elemento
3. Tercer elemento

## Enlaces y Enlaces de Referencia

```markdown
[Texto del enlace](https://ejemplo.com)
[Texto del enlace](https://ejemplo.com 'Título opcional')

[Enlace de referencia][link]

[link]: https://ejemplo.com
```

---

[Texto del enlace](https://ejemplo.com)

[Texto del enlace](https://ejemplo.com 'Título opcional')

[Enlace de referencia][link]

[link]: https://ejemplo.com

## Imágenes

```markdown
![Texto alternativo](./img/doc.png)
![Texto alternativo](./img/doc.png 'Título opcional')
```

---

<p align="center">
![Texto alternativo](./img/doc.png)
![Texto alternativo](./img/doc.png 'Título opcional')
</p>

## Código

### Código inline

```markdown
`console.log(lAlgo);`
```

---

`console.log(lAlgo);`

### Bloques de código

````python
 ```python
  def hola():
      print("¡Hola mundo!")
 ```
````

---

```python
  def hola():
      print("¡Hola mundo!")
```

## Citas

```markdown
> ## Esta es una cita
>
> > Si
> >
> > > que puede ocupar
>
> > múltiples líneas
> >
> > > 1. otra
> > > 2. mas
```

---

> ## Esta es una cita
>
> > Si
> >
> > > que puede ocupar
>
> > múltiples líneas
> >
> > > 1. otra
> > > 2. mas

### Tablas

```markdown
| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Celda 1   | Celda 2   | Celda 3   |
| Celda 4   | Celda 5   | Celda 6   |
```

---

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Celda 1   | Celda 2   | Celda 3   |
| Celda 4   | Celda 5   | Celda 6   |

## CheckList

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the **media**
```

---

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Foot Notes

```markdown
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Emojis

```markdown
That is so funny! :joy:
```

---

That is so funny! :joy:

## Líneas Horizontales

```markdown
---
```

---

## Html

### Saltos de linea

```html
<br />
<br />
<br />
```

---

<br />
<br />
<br />

### centrar elementos

```markdown
<p align="center">
#### Texto centrado
</p>
```

---

<p align="center">
#### Texto centrado
</p>

### Tabulation

<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

### Imagenes/Links

<p align="center" width="300">
  <img align="center" width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"></img>
  <h3 align="center">¡Hey 👋!  Soy JasvDev 👨🏻‍💻</h3>
</p>

<p align="center">
  Soy <strong>Desarrollador JavaScript Full Stack</strong> con 5 años experiencia.
  <br />
  ¡Revisa mi contenido 👇!
</p>

<p align="center">
  <a href="https://twitch.tv/jasvdev" target="blank" className="social-icon">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitch.svg" alt="dev" height="28px" width="28px" ></img>
  </a>
   <a href="https://youtube.com/jasvdev" target="blank" className="social-icon">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg" alt="dev" height="28px" width="28px" ></img>
  </a>
  <a href="https://instagram.com/midu.dev" target="blank" className="social-icon">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="midu.dev" height="28px" width="28px" ></img>
  </a>
  <a href="https://twitter.com/jasvdev" target="blank" className="social-icon">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="dev" height="28px" width="28px" ></img>
  </a>
</p>

<div align='center'>
  <h1>Preguntas de entrevista</h1>
  <br />
  <i>De cero a experto. Con respuestas detalladas en Español 🇪🇸</i>
  <br />
  <sup>Deja tu ⭐ si te gusta el proyecto.</sup>
</div>

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
