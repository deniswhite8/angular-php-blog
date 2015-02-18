'use strict';

angular.module('billboard')
  .controller('UserCtrl', function($routeParams, api) {

    this.user = {};

    api.getUser($routeParams.userId).success(function(data){
      this.user = data;
    }.bind(this));

  });
