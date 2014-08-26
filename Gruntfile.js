/*
 */
var _ = require('underscore')

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    requirejs: {
      app: {
        options: _.extend({}, require('./public/require-config'), {
          baseUrl: 'public'
        , mainConfigFile: 'public/require-config.js'
        , name: 'main'
        , out: 'public/dist/app.js'
        , optimize: 'uglify'
        })
      }
    }
  });

  // Actually load this plugin's task(s).

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 
  grunt.registerTask('default', ['requirejs']);
};