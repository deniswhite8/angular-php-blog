'use strict';

angular.module('billboard')
  .controller('AddPostCtrl', function($location, $http, user, api) {
  	this.addPost = function(){
      api.addPost({
        title:      this.title,
        text:       this.text,
        userId:     user.current.user_id,
        userName:   user.current.first_name
      }).success(function(){
        $location.path('/');
      });
  	};
  });
