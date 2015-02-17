'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function($location, $http, user) {

    this.users = [];

    $http.get('/allusers').success(function(data){
    	this.users = data;
    }.bind(this));

    this.addFriend = function(friendId){
    	$http.post('/addfriend/' + friendId, {
    		userId: user.current.user_id
    	}.bind(this)).success(function () {
    		$location.path('/');
    	});
    };
  });
