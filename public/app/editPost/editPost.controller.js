'use strict';

angular.module('billboard')
  .controller('EditPostCtrl', function($location, $routeParams, $http, api) {

    this.post = {};

    api.getPost($routeParams.postId).success(function(data){
        this.post = data;
    }.bind(this));

    this.editPost = function(postId){
      api.editPost({
        postId: postId,
        post:   this.post
      }).success(function(data){
        $location.path('/');
      });
    };

  });
