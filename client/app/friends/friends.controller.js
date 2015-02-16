'use strict';

angular.module('billboard')
  .controller('FriendsCtrl', function($http) {

    this.users = [];

    $http.get('/allusers').success(function(data){
    	this.users = data;
    }.bind(this));
  });
