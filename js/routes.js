angular.module('routes', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
});
