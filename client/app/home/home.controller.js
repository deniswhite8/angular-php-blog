'use strict';

angular.module('billboard')
  .controller('HomeCtrl', function($http, user) {
  	var self = this;
  	self.posts = [];
  	$http.post('/posts', {
  		userId: user.current.user_id
  	}).success(function(data){
  		self.posts = data;
  		console.log(self.posts[0].Title);
  	});
  })

