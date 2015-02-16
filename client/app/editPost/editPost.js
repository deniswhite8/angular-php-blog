'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/editpost/:postId', {
        templateUrl:  'client/app/editPost/editPost.html',
        controller:   'EditPostCtrl',
        controllerAs: 'editpost'
      });
  });
