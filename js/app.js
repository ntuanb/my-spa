var app = angular.module('spaApp', [
	'ngRoute',

	'app.routes',
	'app.controllers',

	'services.auth',
	'services.http',
	'services.user',

	'user',

	'site.nav',

	'store.cart',
	'store.products',

	'helper.id'
]).run(function() {

});
