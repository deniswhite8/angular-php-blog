'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/addpost', {
        templateUrl: 'client/app/addPost/addPost.html',
        controller: 'AddPostCtrl',
        controllerAs: 'addpost'
      });
  });
