'use strict';

angular.module('billboard')
  .controller('PostCtrl', function($routeParams, $http, user, api) {

    this.post = {};

    api.getPost($routeParams.postId).success(function(data){
        this.post = data;
    }.bind(this));

  });
