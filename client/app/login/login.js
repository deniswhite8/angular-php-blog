'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'client/app/login/login.html',
        login: true
      })
  });
