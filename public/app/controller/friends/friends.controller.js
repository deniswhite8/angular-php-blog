'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function ($state, $http, user, api) {

    this.users = [];
    this.areFriendsEmpty = false;

    api.getAllUsers(user.current.user_id).success(function (data) {
      if (data.length) {
        this.users = data;
        this.areFriendsEmpty = false;
      } else {
        this.areFriendsEmpty = true;;
      }
    }.bind(this));

    this.addFriend = function (friendId) {
      api.addFriend({
        friendId: friendId,
        userId: user.current.user_id
      }).success(function () {
        $state.reload();
      });
    };

    this.deleteFriend = function (friendId) {
      api.deleteFriend({
        friendId: friendId,
        userId: user.current.user_id
      }).success(function () {
        $state.reload();
      });
    };
  });
