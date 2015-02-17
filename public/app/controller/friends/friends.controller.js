'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function($location, $http, user, api) {

    this.users = [];

    api.getAllUsers().success(function(data){
    	this.users = data;
    }.bind(this));

    this.addFriend = function(friendId){
    	api.addFriend({
            friendId: friendId,
            userId:   user.current.user_id
        }).success(function () {
    		$location.path('/');
    	});
    };
  });
