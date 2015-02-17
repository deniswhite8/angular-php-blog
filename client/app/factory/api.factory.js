'use strict';

angular.module('billboard')
  .factory('api', function($http) {
  	return {
  		addPost : function(obj){
	  		return $http.post('/addpost', {
	  			title: 			obj.title,
	  			text: 			obj.text,
	  			userId: 		obj.userId,
	  			dateCreation: 	new Date()
	  		});
  		},
  		getPosts : function(userId){
  			return $http.post('/posts', {
		  		userId: userId
		  	});
  		}
  	}
  })