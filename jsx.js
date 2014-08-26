define(['JSXTransformer', 'text'], function(JSXTransformer, text) {
  var buildMap = {};

  var jsx = {
    load: function(name, req, onLoadNative, config) {
      var url = req.toUrl(name + '.jsx');

      var onLoad = function(content) {
        content = JSXTransformer.transform(content).code;
        return onLoadNative.fromText(content);
      };

      text.load(url, req, onLoad, config);

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