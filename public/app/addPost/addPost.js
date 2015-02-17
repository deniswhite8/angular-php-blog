'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/addpost', {
        templateUrl: 'app/addPost/addPost.html',
        controller: 'AddPostCtrl',
        controllerAs: 'addpost'
      });
  });
