'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/post/:postId', {
        templateUrl:  'client/app/post/post.html',
        controller:   'PostCtrl',
        controllerAs: 'post'
      });
  });
