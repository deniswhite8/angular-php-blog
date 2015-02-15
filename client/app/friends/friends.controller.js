'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function($http) {
  	var self = this;
    self.users = [];

    $http.get('/allusers').success(function(data){
    	self.users = data;
    });
  });
