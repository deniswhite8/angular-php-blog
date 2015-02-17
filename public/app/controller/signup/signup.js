'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/controller/signup/signup.html',
        public: true
      });
  });
