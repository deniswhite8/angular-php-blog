'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/friends', {
        templateUrl: 'client/app/friends/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      });
  });
