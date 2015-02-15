'use strict';

angular.module('billboard')
  .controller('AddPostCtrl', function($location, $http, user) {
  	var self = this;
  	self.addPost = function(){
  		$http.post('/post', {
  			title: 			self.title,
  			text: 			self.text,
  			userId: 		user.current.user_id,
  			dateCreation: 	new Date()
  		}).success(function(){
  			$location.path('/');
  		});
  	};
  });
