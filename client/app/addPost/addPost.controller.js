'use strict';

angular.module('billboard')
  .controller('AddPostCtrl', function($location, $http, user) {
  	this.addPost = function(){
  		$http.post('/post', {
  			title: 			this.title,
  			text: 			this.text,
  			userId: 		user.current.user_id,
  			dateCreation: 	new Date()
  		}).success(function(){
  			$location.path('/');
  		});
  	};
  });
