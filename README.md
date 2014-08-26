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

Working with Grunt 
---

This project also serves as an example for a grunt based build. To run the example

Install dependencies and assets

`npm install`
`bower install`

Build the optimized js file (concatenating and minifying). This project's build file outputs to `/example/dist/app.js`.

`grunt build`

Run your favorite web server and view `/example/index.html`

`python -m SimpleHTTPServer`
