'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function($route, $http, user, api) {

    this.users = [];
    this.areFriendsEmpty = false;

    api.getAllUsers(user.current.user_id).success(function(data){
      if (data.length) {
        this.users = data;
        this.areFriendsEmpty = false;
      }
      else {
        this.areFriendsEmpty = true;;
      }
    }.bind(this));

    this.addFriend = function(friendId){
    	api.addFriend({
            friendId: friendId,
            userId:   user.current.user_id
        }).success(function () {
    		$route.reload();
    	});
    };
  });
