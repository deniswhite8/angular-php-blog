'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/login.html',
        login: true
      })
  });
