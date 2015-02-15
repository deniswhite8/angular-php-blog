'use strict';

angular.module('billboard')
  .controller('HomeCtrl', function($location, $route, $http, user) {
  	var self = this;
  	self.posts = [];

  	$http.post('/posts', {
  		userId: user.current.user_id
  	}).success(function(data){
  		self.posts = data;
  	});

  	self.deletePost = function(postId, index){
  		$http.delete('/post/' + postId).success(function(){
        self.posts.splice(index, 1);
  		});
  	};
  })

