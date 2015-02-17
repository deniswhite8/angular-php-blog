'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/addpost', {
        templateUrl: 'app/controller/addPost/addPost.html',
        controller: 'AddPostCtrl',
        controllerAs: 'addpost'
      });
  });
