'use strict';

angular.module('billboard')
  .controller('PostCtrl', function($stateParams, $http, user, api) {

    this.post = {};

    api.getPost($stateParams.postId).success(function(data){
        this.post = data;
    }.bind(this));

  });
