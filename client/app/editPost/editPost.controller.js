'use strict';

angular.module('billboard')
  .controller('EditPostCtrl', function($location, $routeParams, $http) {

    this.post = {};

    $http.get('/post/' + $routeParams.postId).success(function(data){
        this.post = data;
    }.bind(this));

    this.editPost = function(postId){
      $http.put('/post/' + postId, {
        post: this.post
      }).success(function(data){
        $location.path('/');
      });
    };

  });
