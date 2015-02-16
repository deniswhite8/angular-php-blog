'use strict';

angular.module('billboard')
  .controller('HomeCtrl', function($route, $http, user) {

  	this.posts = [];
    this.isPostsEmpty = false;
    
  	$http.post('/posts', {
  		userId: user.current.user_id
  	}).success(function(data){
      if (data.length) {
        this.posts = data;
        this.isPostsEmpty = false;
      }
      else {
        this.isPostsEmpty = true;
      }
  	}.bind(this));

  	this.deletePost = function(postId, index){
  		$http.delete('/post/' + postId).success(function(){
        this.posts.splice(index, 1);
        if (!this.posts.length) {
          this.isPostsEmpty = true;
        }
  		}.bind(this));
  	};
  })

