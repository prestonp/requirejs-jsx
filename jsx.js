define(['JSXTransformer'], function(JSXTransformer) {
  var buildMap = {};

  var loadJSX = function(url, callback) {
    if (typeof process !== 'undefined' &&
        process.versions &&
        !!process.versions.node) {
      var fs = require.nodeRequire('fs');
      callback(null, fs.readFileSync(url, 'utf8'));
    } else {
      request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onreadystatechange = function() {
        if (this.readyState === 4){
          if (this.status >= 200 && this.status < 400){
            // Success!
            resp = this.responseText;
            callback(null, resp);
          } else {
            callback(new Error('Unable to fetch resource' + url));
          }
        }
      };
      request.send();
      request = null;
    }
  };

  var jsx = {
    load: function(name, req, onLoadNative, config) {
      var url = req.toUrl(name + '.jsx');

      loadJSX(url, function(err, content) {
        if (err) return onLoadNative.error(err);
        content = JSXTransformer.transform(content).code;
        buildMap[name] = content;
        onLoadNative.fromText(content);
      })
    }
  , write: function(pluginName, moduleName, write) {
      if (moduleName in buildMap) {
        var content = buildMap[moduleName];
        write.asModule(pluginName + '!' + moduleName, content);
      }
    }
  };

  return jsx;
});