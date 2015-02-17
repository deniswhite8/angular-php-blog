'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/post/:postId', {
        templateUrl:  'app/controller/post/post.html',
        controller:   'PostCtrl',
        controllerAs: 'post'
      });
  });
