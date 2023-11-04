<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Javascript]: index.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido

<sup>[🔙 Javascript]</sup>

- [Tabla de contenido](#tabla-de-contenido)
  - [Test 1](#test-1)
    - [Code](#code)

## Test 1

<sup>[⬆️ Inicio](#tabla-de-contenido)</sup>

Se tiene un plano cartesiano que describe la siguiente sucesion

```
y
| ...
| 14  ...
| 8   16  ...
| 4   10  18  ...
| 2   6   12  20 ...
- - - - - - - - - - -  x
```

Dado el patron que muestra la graafica, realice una funcion getNumber(num1, num2) que encuentre ese valor de la sucesion

- restricciones 1<= x <= 100
- restricciones 1<= y <= 100

### Code

```javascript
function coorsFormat(numa, numb) {
  return `${numa}:${numb}`;
}

function isValidInput(numX, numY) {
  if (numX < 1 || numX > LIMIT_X) {
    throw new Error("Coordernada X, fuera del rango 1 <= x <= " + LIMIT_X);
  }
  if (numX < 1 || numY > LIMIT_Y) {
    throw new Error("Coordernada Y, fuera del rango 1 <= y <= " + LIMIT_Y);
  }
}

function generarSucesion(numa, numb) {
  isValidInput(numX, numY);
  const sucesion = [];
  const target = coorsFormat(numa, numb);
  let currentTarget = coorsFormat(0, 0);

  for (let y = 1; target !== currentTarget; y++) {
    for (let x = 1; x <= y; x++) {
      currentTarget = coorsFormat(x, y - x + 1);
      sucesion.push(currentTarget);
      if (currentTarget === target) break;
    }
  }
  return sucesion;
}

function getValueSucesion(numA, numB) {
  const sucesion = generarSucesion(numA, numB);
  return [sucesion, sucesion.length * 2];
}

const [sucesion, value] = getValueSucesion(3, 2);
console.log(sucesion);
console.log(value);
```
