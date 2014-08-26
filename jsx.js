define(['JSXTransformer'], function(JSXTransformer) {
  var buildMap = {};

  var jsx = {
    load: function(name, req, onLoadNative, config) {
      var url = req.toUrl(name + '.jsx');
      request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onreadystatechange = function() {
        if (this.readyState === 4){
          if (this.status >= 200 && this.status < 400){
            // Success!
            resp = this.responseText;
            resp = JSXTransformer.transform(resp).code;
            buildMap[name] = resp;
            onLoadNative.fromText(resp);
          } else {
            onLoadNative.error(new Error('Unable to fetch resource' + url));
          }
        }
      };

      request.send();
      request = null;

      if (config.isBuild) {
        // plug into buildMap
      } 

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