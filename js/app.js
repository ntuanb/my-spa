var app = angular.module('spaApp', [
	'ngRoute',

	'app.routes',
	'app.controllers',

	'services.storage',
	'services.auth',
	'services.http',
	'services.user',

	'user',

	'site.nav',
	'site.pages',

	'store.cart',
	'store.products',

	'helper.id'
]).run(function() {

});
