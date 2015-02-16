'use strict';

angular.module('billboard')
  .controller('PostCtrl', function($routeParams, $http, user) {

    this.post = {};

    $http.get('/post/' + $routeParams.postId).success(function(data){
        this.post = data;
    }.bind(this));

  });
