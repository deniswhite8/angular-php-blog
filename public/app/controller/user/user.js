'use strict';

angular.module('billboard')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/:userId', {
        templateUrl: 'app/controller/user/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
  });