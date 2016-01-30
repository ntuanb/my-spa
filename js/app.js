var app = angular.module('spaApp', [
	'ngRoute',

	'app.routes',
	'app.controllers',

	'auth',

	'site.nav',

	'store.cart',
	'store.products',

	'helper.id'
]).run(function() {

});
