'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'client/app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
