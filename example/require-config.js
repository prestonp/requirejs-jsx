(function() {
  var cfg = {
    baseUrl: 'js'
  , paths: {
      // plugins
      react: '../../bower_components/react/react'
    , JSXTransformer: '../../bower_components/react/JSXTransformer'
    , jsx: '../../jsx'
    }
  , deps: ['main']
  , packages: [
      // { name: 'react', location: '../bower_components/react', main: 'react.js'}
    ]
  };

  if (typeof requirejs !== 'undefined') {
    requirejs.config(cfg);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = cfg;
  }
})();