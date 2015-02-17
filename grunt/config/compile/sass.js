// Configuration for Sass task(s)
// Compile Sass stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('sass', {
    server: {
      options: {
        precision: 10,
        outputStyle: 'nested',
        sourceMap: true,
        includePaths: [
          'public/bower_components',
          'public/styles/',
          'public/app/'
        ]
      },
      files: {
        'public/.tmp/styles/main.css': 'public/styles/main.{scss,sass}'
      }
    },
    dist: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%= yeogurt.client %>/bower_components',
          '<%= yeogurt.client %>/styles/',
          '<%= yeogurt.client %>/app/'
        ]
      },
      files: {
        '<%= yeogurt.dist %>/styles/main.css': '<%= yeogurt.client %>/styles/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
