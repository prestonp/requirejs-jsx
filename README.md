requirejs-jsx
===

A requirejs plugin for loading JSX files for react components.

Usage
---

Note: This isn't published on the bower registry yet

Install react (react.js and JSXTransformer.js)

`bower install react`

Install via bower

`bower install requirejs-jsx`

Add the plugin to your require config paths. Ensure that
react.js and JSXTransformer.js are included as well.

```javascript
requirejs.config({
  paths: {
    react: 'path/to/react'
    JSXTransformer: 'path/to/JSXTransformer'
  , jsx: 'path/to/jsx'
  }
});

```

In your AMD definitions, prefix your jsx files with `jsx!`:

```javascript
define(['react', 'jsx!todoList'], function(React, TodoList) {
  React.renderComponent(
    TodoList(null)
  , document.body
  );
});
```

Offline transformations
---

For production use, you shouldn't be fetching and transforming jsx files client-side. Instead, transform the JSX files offline via the requirejs optimizer.

For additional guidance, this project serves as an example of using the [http://requirejs.org/docs/download.html#rjs](optimizer) with the jsx plugin.

Use the sample `build.js` file to concatenate and minify your scripts to  `/example/dist/app.js`

```
r.js -o build.js
```

Run your favorite web server on the current directory

`python -m SimpleHTTPServer`

Then browse to `localhost:8000/example/index-optimized-build.html`
which references our handy dandy build file:

```
<script data-main="dist/app" src="../bower_components/requirejs/require.js"></script>
```