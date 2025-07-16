---
sidebar_position: 3
---

# Syntac Docusaurus

## Bloque de codigo + Title

````text
  ```jsx title="/src/components/HelloCodeTitle.js"
  function HelloCodeTitle(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
````

---

```jsx showLineNumbers title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Highlight Tag

````python title="highlight-next-line / highlight-start / highlight-end"
  ```js
    function HighlightSomeText(highlight) {
      if (highlight) {
        // highlight-next-line
        return 'This text is highlighted!';
      }

      return 'Nothing highlighted';
    }

    function HighlightMoreText(highlight) {
      // highlight-start
      if (highlight) {
        return 'This range is highlighted!';
      }
      // highlight-end

      return 'Nothing highlighted';
    }
  ```
````

---

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

## Highlight Number

````pythoon title="{1,4-6,11}"
  ```jsx {1,4-6,11}
    import React from 'react';

    function MyComponent(props) {
      if (props.isBar) {
        return <div>Bar</div>;
      }

      return <div>Foo</div>;
    }

    export default MyComponent;
  ```
````

---

```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## Show Line Numbers

````python
  ```jsx showLineNumbers title="showLineNumbers"
    import React from 'react';

    export default function MyComponent(props) {
      return <div>Foo</div>;
    }
````

---

```jsx showLineNumbers title="showLineNumbers"
import React from 'react';

export default function MyComponent(props) {
  return <div>Foo</div>;
}
```

## Banners Notes

```markdown
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```markdown
:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```markdown
:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```markdown
:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```markdown
:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---
