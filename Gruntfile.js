/** 
 * Example grunt task using requirejs optimizer with jsx dependencies
 */
var _ = require('underscore')

module.exports = function(grunt) {
  grunt.initConfig({
    requirejs: {
      app: {
        options: _.extend({}, require('./example/require-config'), {
          // baseUrl: 'public'
        , mainConfigFile: 'public/require-config.js'
        , name: 'main'
        , out: 'public/dist/app.js'
        , optimize: 'uglify'
        , shim: {
            JSXTransformer: {
                exports: 'JSXTransformer'
            }
          }
        })
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
};