'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        public: true
      });
  });
