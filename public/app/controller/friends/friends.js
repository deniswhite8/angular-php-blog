'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/friends', {
        templateUrl: 'app/controller/friends/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      });
  });
