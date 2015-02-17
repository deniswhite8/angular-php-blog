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
      getPost: function(postId) {
        return $http.get('/post/' + postId);
      },
      editPost: function(obj) {
        return $http.put('/post/' + obj.postId, {
              post: obj.post
        });
      },
      deletePost: function(postId) {
        return $http.delete('/post/' + postId);
      },
  		getPosts : function(userId){
  			return $http.post('/posts', {
		  		userId: userId
		  	});
  		},
      getAllUsers: function(){
        return $http.get('/allusers');
      },
      addFriend: function(obj){
        return $http.post('/addfriend/' + obj.friendId, {
          userId: obj.userId
        });
      }
  	}
  })