"use strict";

angular.module('app.controllers', [])
.controller('AppController', [
	'$rootScope', '$scope', 'CartFactory', 'ProductFactory', function(
	$rootScope, $scope, CartFactory, ProductFactory
) {
	$rootScope.CONFIG = CONFIG;


	$scope.cart = CartFactory.init();
	$scope.products = ProductFactory.construct(CONFIG.PRODUCTS);
}]);
