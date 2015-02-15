'use strict';

angular.module('billboard')
  .controller('EditPostCtrl', function($location, $routeParams, $http) {

  	var self = this;
    self.post = {};

    $http.get('/post/' + $routeParams.postId).success(function(data){
        self.post = data;
    });

    this.editPost = function(postId){
      $http.put('/post/' + postId, {
        post: self.post
      }).success(function(data){
        $location.path('/');
      });
    };

  });
