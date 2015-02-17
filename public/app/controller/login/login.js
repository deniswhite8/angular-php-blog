'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/controller/login/login.html',
        login: true
      })
  });
