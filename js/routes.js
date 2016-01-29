angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'HomeController'
		})
		.when('/book', {
			templateUrl: 'views/pages/book.html',
			controller: 'BookController'
		})
		.when('/store', {
			templateUrl: 'views/pages/store.html',
			controller: 'StoreController'
		})
		.when('/menu', {
			templateUrl: 'views/pages/menu.html',
			controller: 'MenuController'
		})
		.when('/gift', {
			templateUrl: 'views/pages/gift.html',
			controller: 'GiftController'
		})
		.when('/contact', {
			templateUrl: 'views/pages/contact.html',
			controller: 'ContactController'
		})
	;
});
