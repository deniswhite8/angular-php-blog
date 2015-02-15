'use strict';

// Declare app level module which depends on views, and components
angular.module('billboard', [
  'ngRoute'
])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/'});
});

console.log('Welcome to Yeogurt!');
