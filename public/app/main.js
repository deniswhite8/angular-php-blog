'use strict';

angular.module('billboard', [
  'ui.router',
  'UserApp',
  'angular-loading-bar'
])

.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})

.run(function (user) {
  user.init({
    appId: '56deee72a3275'
  });
});
