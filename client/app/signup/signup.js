'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'client/app/signup/signup.html',
        public: true
      });
  });
