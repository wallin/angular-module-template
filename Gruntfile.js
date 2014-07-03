'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var config = {};
  try {
    config.name = require('./bower.json').name
  }
  catch (e) {
    config.name = 'angular-module-template' // Fallback name
  }

  grunt.initConfig({
    config: config,
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    coffee: {
      options: {
        bare: true,
        force: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: "<%= config.name %>.coffee",
            dest: "build",
            ext: ".js"
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'spec',
            src: "*.coffee",
            dest: "build/spec",
            ext: ".js"
          }
        ]
      }
    },
    coffeelint: {
      app: ['src/*.coffee']
    },
    uglify: {
      dist: {
        files: {
          "build/<%= config.name %>.min.js": "build/<%= config.name %>.js"
        }
      }
    }
  });

  grunt.registerTask('test', [
    'coffeelint',
    'coffee',
    'karma'
  ]);

  grunt.registerTask('build', [
    'test',
    'uglify'
  ]);

  grunt.registerTask('default', ['build']);
};
