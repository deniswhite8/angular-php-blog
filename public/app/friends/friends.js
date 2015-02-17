'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/friends', {
        templateUrl: 'app/friends/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      });
  });
