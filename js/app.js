var app = angular.module('spaApp', [
	'ngRoute',

	'mm.foundation',

	'app.routes',
	'app.controllers',

	'site.nav',

	'store.cart',
	'store.products',

	'helper.id'
]).run(function() {

});
