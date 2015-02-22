'use strict';

angular.module('billboard')
  .controller('HomeCtrl', function($http, user, api) {

  	this.posts = [];
    this.isPostsEmpty = false;
    console.log(user.current.email);
    api.getPosts(user.current.user_id).success(function(data){
      if (data.length) {
        this.posts = data;
        this.isPostsEmpty = false;
      }
      else {
        this.isPostsEmpty = true;
      }
  	}.bind(this));

  	this.deletePost = function(postId, index){
  		api.deletePost(postId).success(function(){
        this.posts.splice(index, 1);
        if (!this.posts.length) {
          this.isPostsEmpty = true;
        }
  		}.bind(this));
  	};
  })

