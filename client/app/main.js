'use strict';

angular.module('billboard', [
  'ngRoute',
  'ui.bootstrap',
  'UserApp'
])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/'});
})

.run(function(user) {
	user.init({ appId: '54e0a91dd2235' });
});
